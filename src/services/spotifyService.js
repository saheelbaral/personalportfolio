// Spotify service to fetch live data from serverless function
const SPOTIFY_API_URL = process.env.REACT_APP_SPOTIFY_API_URL || 'http://localhost:3000/api/spotify';

export async function getNowPlaying() {
    try {
        const response = await fetch(SPOTIFY_API_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch Spotify data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
        // Return fallback data
        return {
            isPlaying: false,
            title: 'Song for Zula',
            artist: 'Phosphorescent',
            albumArt: 'https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856',
            songUrl: 'https://open.spotify.com/track/3mCsF3GF5VXfSQOSp1WMQd'
        };
    }
}
