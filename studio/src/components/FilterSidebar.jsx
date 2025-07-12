import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, applyFilters, clearFilters } from "../redux/photographersSlice";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.photographers.filters);

  const handleChange = (field, value) => {
    dispatch(setFilters({ [field]: value }));
    dispatch(applyFilters());
  };

  return (
    <div className="filter-sidebar">
      <h4>Filters</h4>

      <label>Price (Max ₹{filters.price})</label>
      <input type="range" min="1000" max="20000" value={filters.price} onChange={(e) => handleChange("price", Number(e.target.value))} />

      <label>Rating</label>
      <select value={filters.rating} onChange={(e) => handleChange("rating", Number(e.target.value))}>
        <option value={0}>All</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
      </select>

      <label>City</label>
      <select value={filters.city} onChange={(e) => handleChange("city", e.target.value)}>
        <option value="">All</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <label>Sort By</label>
      <select value={filters.sort} onChange={(e) => handleChange("sort", e.target.value)}>
        <option value="">Default</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="ratingHigh">Rating: High to Low</option>
        <option value="recent">Recently Added</option>
      </select>

      <button onClick={() => { dispatch(clearFilters()); dispatch(applyFilters()); }}>Clear Filters</button>
    </div>
  );
};
export default FilterSidebar;