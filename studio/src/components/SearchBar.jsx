import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilters, applyFilters } from "../redux/photographersSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(setFilters({ search: query }));
      dispatch(applyFilters());
    }, 1000); 

    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, location, or tags"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
