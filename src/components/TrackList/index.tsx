import { SpotifyTrack } from "../../types";
import "../TrackList/TrackList.css";

type TrackListProp = {
    tracks: SpotifyTrack[];
}

export const TrackList = ({ tracks } : TrackListProp) => {
    return (
        <>
            <div className="track-list">
                {tracks.map((track) => (
                    <div key={track.id} className="track-item">
                        <img src={track.album.images[0]?.url} alt={track.album.name} />
                        <div>
                            <h4>{track.name}</h4>
                            <p> {track.artists.map(artist => artist.name).join(', ')} </p>
                        </div>
                        <span>{Math.floor(track.duration_ms / 60000)} : {(track.duration_ms % 60000 / 1000).toFixed(0).padStart(2, '0')} </span>
                    </div>
                ))}
            </div>
        </>
    )
}