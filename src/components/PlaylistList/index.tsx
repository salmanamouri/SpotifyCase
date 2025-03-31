import { useGetPlaylistsQuery } from "../../api/apiSlice";
import { SpotifyPlaylist } from "../../types";
import { useDispatch } from "react-redux";

export const PlaylistList = () => {
  const { data, isLoading, error } = useGetPlaylistsQuery();


  if (isLoading) return <div>Loading playlists...</div>;
  if (error) return <div>Error loading playlists</div>;

  const playlists = data?.items || [];

  return (
    <div className="playlist-container">
      {playlists.length > 0 ? (
        playlists.map((playlist: SpotifyPlaylist) => (
          <div key={playlist.id} className="playlist-card">
            <img src={playlist.images[0]?.url || "/placeholder.jpg"} alt={playlist.name} />
            <h3>{playlist.name}</h3>
            <p>{playlist.tracks.total} tracks</p>
          </div>
        ))        
      ) : (
        <p>No playlists found</p>
      )}
    </div>
  );
};