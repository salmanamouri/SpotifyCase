import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authConfig } from "../../config/auth";

const SPOTIFY_SCOPE = [
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
];

const REDIRECT_URI = authConfig.redirectUri;

export interface AuthState {
  accessToken?: string;
}

export interface AccessTokenPayload {
  accessToken: string;
}

const initialState: AuthState = {
  accessToken: undefined,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login() {
      const params = new URLSearchParams({
        client_id: authConfig.clientId as string,
        redirect_uri: REDIRECT_URI,
        scope: SPOTIFY_SCOPE.join(" "),
        response_type: 'token'
      });

      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    },
    setAccessToken(state, action: PayloadAction<AccessTokenPayload>) {
      state.accessToken = action.payload.accessToken;
      window.history.pushState({ REDIRECT_URI }, "", REDIRECT_URI);
    },
  },
});

export const { login, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
