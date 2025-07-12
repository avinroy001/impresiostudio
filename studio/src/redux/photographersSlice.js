import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotographers = createAsyncThunk(
  "photographers/fetchPhotographers",
  async () => {
    // const res = await axios.get("http://localhost:3001/photographers");
    // const res = await axios.get("/api/photographers");
    // return res.data;
    const res = await axios.get("/db.json"); 
return res.data.photographers;
  }
);

const photographerSlice = createSlice({
  name: "photographers",
  initialState: {
    all: [],
    filtered: [],
    loading: false,
    error: null,
    filters: {
      price: 20000,
      rating: 0,
      styles: [],
      city: "",
      search: "",
      sort: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        price: 20000,
        rating: 0,
        styles: [],
        city: "",
        search: "",
        sort: "",
      };
    },
    applyFilters: (state) => {
      const { price, rating, styles, city, search, sort } = state.filters;

      let filtered = [...state.all];

      if (search)
        filtered = filtered.filter(
          (p) =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.location.toLowerCase().includes(search.toLowerCase()) ||
            p.tags.some((t) =>
              t.toLowerCase().includes(search.toLowerCase())
            )
        );

      if (price) filtered = filtered.filter((p) => p.price <= price);
      if (rating) filtered = filtered.filter((p) => p.rating >= rating);
      if (city) filtered = filtered.filter((p) => p.location === city);
      if (styles.length)
        filtered = filtered.filter((p) =>
          styles.every((s) => p.styles.includes(s))
        );

      if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
      if (sort === "ratingHigh") filtered.sort((a, b) => b.rating - a.rating);
      if (sort === "recent") filtered.sort((a, b) => b.id - a.id);

      state.filtered = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotographers.fulfilled, (state, action) => {
        state.loading = false;
        state.all = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchPhotographers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, clearFilters, applyFilters } =
  photographerSlice.actions;

export default photographerSlice.reducer;
