import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
  currentView: number;
}

const initialState: ViewState = {
  currentView: 0,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    nextView(state) {
      state.currentView += 1;
    },
    prevView(state) {
      state.currentView -= 1;
    },
    setView(state, action: PayloadAction<number>) {
      state.currentView = action.payload;
    },
  },
});

export const { nextView, prevView, setView } = viewSlice.actions;
export default viewSlice.reducer;
