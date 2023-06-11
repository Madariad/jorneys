import { configureStore } from '@reduxjs/toolkit';


import inputSearchSlice from './inputSearchSlice';
import serviceBlocksSlice from "./serviceBlocksSlice";



const store = configureStore({
  reducer: {
    inputSearch: inputSearchSlice,
    serviceBlocks: serviceBlocksSlice
  },
});
export default store
