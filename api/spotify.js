// Vercel Serverless Function for Spotify API
const https = require('https');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

async function getAccessToken() {
    const postData = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN
    }).toString();

    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'accounts.spotify.com',
            path: '/api/token',
            method: 'POST',
            headers: {
                'Authorization': `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const parsed = JSON.parse(data);
                resolve(parsed.access_token);
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

async function getCurrentlyPlaying(accessToken) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.spotify.com',
            path: '/v1/me/player/currently-playing',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };

        const req = https.request(options, (res) => {
            if (res.statusCode === 204) {
                resolve(null); // Nothing playing
                return;
            }

            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });

        req.on('error', reject);
        req.end();
    });
}

async function getRecentlyPlayed(accessToken) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.spotify.com',
            path: '/v1/me/player/recently-played?limit=1',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });

        req.on('error', reject);
        req.end();
    });
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        const accessToken = await getAccessToken();
        let trackData = await getCurrentlyPlaying(accessToken);

        if (!trackData || !trackData.item) {
            // Nothing currently playing, get recently played
            const recentData = await getRecentlyPlayed(accessToken);
            if (recentData.items && recentData.items.length > 0) {
                trackData = {
                    item: recentData.items[0].track,
                    is_playing: false
                };
            }
        }

        if (!trackData || !trackData.item) {
            res.status(200).json({
                isPlaying: false,
                title: 'Nothing playing',
                artist: '',
                albumArt: null,
                songUrl: null
            });
            return;
        }

        const track = trackData.item;
        res.status(200).json({
            isPlaying: trackData.is_playing || false,
            title: track.name,
            artist: track.artists.map(artist => artist.name).join(', '),
            album: track.album.name,
            albumArt: track.album.images[0]?.url || null,
            songUrl: track.external_urls.spotify
        });

    } catch (error) {
        console.error('Spotify API Error:', error);
        res.status(500).json({ error: 'Failed to fetch Spotify data' });
    }
};
