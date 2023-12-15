import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  isDark: 'ligth',
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.isDark=action.payload

    },
  },
});

export const { setTheme} = themeSlice.actions;

export default themeSlice.reducer;
