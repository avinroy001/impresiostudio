import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotographers, applyFilters } from "../redux/photographersSlice";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import PhotographerCard from "../components/PhotographerCard";

const CategoryListingPage = () => {
  const dispatch = useDispatch();
  const { filtered, loading } = useSelector((state) => state.photographers);

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(applyFilters());
  }, [dispatch]);

  return (
    <div className="listing-page">
      <SearchBar />
      <div className="listing-content">
        <FilterSidebar />
        <div className="photographer-grid">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filtered.map((photographer) => (
              <PhotographerCard key={photographer.id} data={photographer} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default CategoryListingPage;