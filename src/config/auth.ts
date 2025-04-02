export const authConfig = {
  redirectUri: 'http://localhost:3000/callback',
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  scope: 'user-read-private user-read-email playlist-read-private playlist-read-collaborative',
};