import { useState } from "react";
import { useGetSearchTrackResultQuery } from "../../api/apiSlice";
import { TrackList } from "../TrackList";
import useDebounce from "../../hooks/useDebounce";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: tracks, isLoading } = useGetSearchTrackResultQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length < 3
  });

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search tracks..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {isLoading && <div>Loading...</div>}
      {tracks && <TrackList tracks={tracks.map(item => item.track)} />}
    </div>
  );
};