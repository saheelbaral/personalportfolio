// Spotify service to fetch live data from serverless function
const SPOTIFY_API_URL = import.meta.env.VITE_SPOTIFY_API_URL || 'https://personalportfolio-zeta-ten.vercel.app/api/spotify';

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
            albumArt: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79',
            songUrl: 'https://open.spotify.com/track/3mCsF3GF5VXfSQOSp1WMQd'
        };
    }
}
