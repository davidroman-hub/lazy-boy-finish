import { createSlice } from "@reduxjs/toolkit";

export interface MainState {
  user: string | null;
  modalAbout: boolean;
}

const initialState: MainState = {
  user: null,
  modalAbout: false,
};

export const MainSlice = createSlice({
  name: "MainReducer",
  initialState,
  reducers: {
    setOpenAbout(state, action) {
      return {
        ...state,
        modalAbout: action.payload,
      };
    },
  },
});

export const { setOpenAbout } = MainSlice.actions;

export const MainReducer = MainSlice.reducer;
