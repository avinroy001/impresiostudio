import React from "react";
import { useDispatch } from "react-redux";
import { setFilters, applyFilters } from "../redux/photographersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilters({ search: e.target.value }));
    dispatch(applyFilters());
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by name, location or tag" onChange={handleChange} />
    </div>
  );
};
export default SearchBar;
