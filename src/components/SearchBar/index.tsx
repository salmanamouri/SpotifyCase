import { useState } from "react";
import { useGetSearchTrackResultQuery } from "../../api/apiSlice";
import { TrackList } from "../TrackList";
//import useDebounce from "../../hooks/useDebounce";
import "../SearchBar/SearchBar.css";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [triggerSearch, setTriggerSearch] = useState("");

  const { data: tracks, isLoading } = useGetSearchTrackResultQuery(triggerSearch, {
    skip: triggerSearch.length < 3
  });

  const handleSearch = () => {
    setTriggerSearch(searchTerm); 
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search tracks..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      {isLoading && <div>Loading...</div>}
      {/* {tracks && <TrackList tracks={tracks.map(item => item.track)} />} */}
      {tracks && <TrackList tracks={tracks.filter(t => t?.track).map(item => item.track)} />}
    </div>
  );
};