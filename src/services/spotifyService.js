// Spotify service to fetch live data from serverless function
const SPOTIFY_API_URL = import.meta.env.VITE_SPOTIFY_API_URL || 'https://personalportfolio-zeta-ten.vercel.app/api/spotify';

// Fallback data
const FALLBACK_DATA = {
    isPlaying: false,
    title: 'Song for Zula',
    artist: 'Phosphorescent',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79',
    songUrl: 'https://open.spotify.com/track/3mCsF3GF5VXfSQOSp1WMQd'
};

export async function getNowPlaying() {
    // If no API URL is configured, return fallback immediately
    if (!SPOTIFY_API_URL || SPOTIFY_API_URL === '') {
        console.log('Spotify API URL not configured, using fallback data');
        return FALLBACK_DATA;
    }

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
        return FALLBACK_DATA;
    }
}
