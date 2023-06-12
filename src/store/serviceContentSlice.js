import { createSlice } from '@reduxjs/toolkit';

const serviceContentSlice = createSlice({
    name: 'serviceContentSlice',
    initialState: {
        state: false
    },
    reducers: {
        OnSubmit: (state, action)  => {
            state.state = !state.state
            console.log(state.state);
        }
    }
}) 

export const {OnSubmit} = serviceContentSlice.actions

export default serviceContentSlice.reducer
