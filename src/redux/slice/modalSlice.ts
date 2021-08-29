import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  isOpen?: boolean;
}

const initialState = {
  isOpen: false,
} as IinitialState;

const modalSlice = createSlice({
  name: "modal@",
  initialState,
  reducers: {
    doOpenModal: (state) => {
      state.isOpen = true;
    },
    doCloseModal: (state) => {
      state.isOpen = false;
    },
  },
});

const { reducer, actions } = modalSlice;

export const { doCloseModal, doOpenModal } = actions;

export default reducer;
