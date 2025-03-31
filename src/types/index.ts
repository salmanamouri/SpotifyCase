export type User = {
    id: string;
    display_name: string;
    email: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>
};

export type SpotifyPlaylist = {
    id: string;
    name: string;
    description: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
    tracks: {
        total: number;
        items: SpotifyTrackItem[];
    }
};

export type SpotifyTrack = {
    id: string,
    name: string;
    artists: Array<{
        id: string;
        name: string;
    }>;
    album: {
        id: string;
        name: string;
        images: Array<{
            url: string;
            height: number;
            width: number;
        }>;
    };
    duration_ms: number;
};

export type SpotifyTrackItem = {
    added_at: string;
    track: SpotifyTrack;
};
