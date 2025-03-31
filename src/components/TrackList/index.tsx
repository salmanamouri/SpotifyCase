import { SpotifyTrack } from "../../types";
import "../TrackList/TrackList.css";

type TrackListProp = {
    tracks: SpotifyTrack[];
}

export const TrackList = ({ tracks } : TrackListProp) => {
    return (
        <>
            <div className="track-list">
                //creating a div for each track
                {tracks.map((track) => (
                    //for each track we will display:
                    <div key={track.id} className="track-item">
                        //image of album cover
                        <img src={track.album.images[0]?.url} alt={track.album.name} />
                        <div>
                            //track name
                            <h4>{track.name}</h4>
                            //list of artist names joined by commas
                            <p> {track.artists.map(artist => artist.name).join(', ')} </p>
                        </div>
                        //track duration in mins and s
                        <span>{Math.floor(track.duration_ms / 60000)} : {(track.duration_ms % 60000 / 1000).toFixed(0).padStart(2, '0')} </span>
                    </div>
                ))}
            </div>
        </>
    )
}