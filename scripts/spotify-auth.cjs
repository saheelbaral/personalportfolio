const readline = require('readline');
const https = require('https');
const http = require('http');
const url = require('url');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '';
const REDIRECT_URI = 'http://127.0.0.1:3000/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('Error: Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables');
    process.exit(1);
}

// Step 1: Generate authorization URL
const authUrl = `https://accounts.spotify.com/authorize?` +
    `client_id=${CLIENT_ID}&` +
    `response_type=code&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `scope=${encodeURIComponent(SCOPES)}`;

console.log('\n🎵 Spotify Authorization Setup\n');
console.log('1. Open this URL in your browser:\n');
console.log(authUrl);
console.log('\n2. Authorize the app');
console.log('3. You will be redirected to localhost:3000/callback');
console.log('4. The script will automatically capture the code\n');

// Step 2: Start local server to capture callback
const server = http.createServer(async (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const code = queryObject.code;

    if (code) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>✅ Authorization successful!</h1><p>You can close this window and return to the terminal.</p>');

        // Exchange code for tokens
        const tokenData = await getTokens(code);

        if (tokenData.refresh_token) {
            console.log('\n✅ Success! Add this to your .env.local file:\n');
            console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
            console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
            console.log(`SPOTIFY_REFRESH_TOKEN=${tokenData.refresh_token}`);
            console.log('\n');
        }

        server.close();
        process.exit(0);
    }
});

server.listen(3000, () => {
    console.log('Waiting for authorization...\n');
});

// Helper function to exchange code for tokens
function getTokens(code) {
    return new Promise((resolve, reject) => {
        const postData = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }).toString();

        const options = {
            hostname: 'accounts.spotify.com',
            path: '/api/token',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

// Handle Ctrl+C
process.on('SIGINT', () => {
    console.log('\n\nAuthorization cancelled');
    server.close();
    process.exit(0);
});
