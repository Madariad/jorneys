import { configureStore } from '@reduxjs/toolkit';


import inputSearchSlice from './inputSearchSlice';
import serviceBlocksSlice from "./serviceBlocksSlice";
import serviceContentSlice from "./serviceContentSlice";



const store = configureStore({
  reducer: {
    inputSearch: inputSearchSlice,
    serviceBlocks: serviceBlocksSlice,
    serviceContent: serviceContentSlice

  },
});
export default store
