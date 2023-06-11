import { createSlice } from '@reduxjs/toolkit';

const inputSearchSlice = createSlice({
  name: 'inputSearch',
  initialState: {
    searchInput: '',
    datalistOptions: [],
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setDatalistOptions: (state, action) => {
      state.datalistOptions = action.payload;
    },
  },
});

export const { setSearchInput, setDatalistOptions } = inputSearchSlice.actions;

export default inputSearchSlice.reducer;
