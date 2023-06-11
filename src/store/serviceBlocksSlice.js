import { createSlice } from '@reduxjs/toolkit';


const serviceBlocksSlice = createSlice({
    name: 'serviceBlocks',
    initialState: {
      checkboxes: {
        ch_add3_1: false,
        ch_add3_1_2: false,

        ch_add3_2: false,
        ch_add3_2_2: false,

        ch_add3_3: false,
        ch_add3_3_2: false,

        ch_add3_4: false,
        ch_add3_4_2: false,

      },
    },
    reducers: {
        toggleCheckbox: (state, action) => {
            const checkboxName = action.payload;
            // const relatedCheckboxName = `${checkboxName}_2`; // Создайте имя для связанного чекбокса
            state.checkboxes[checkboxName] = !state.checkboxes[checkboxName];
            console.log(`${checkboxName} : ${state.checkboxes[checkboxName]}`);
            // state.checkboxes[relatedCheckboxName] = state.checkboxes[checkboxName]; // Установите состояние связанного чекбокса
          },
    },
  });
export const { toggleCheckbox } = serviceBlocksSlice.actions;

export default serviceBlocksSlice.reducer;



