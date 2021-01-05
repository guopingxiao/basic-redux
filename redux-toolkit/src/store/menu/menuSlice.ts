import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type RepoDetailsState = string;
const initialState: RepoDetailsState = 'reactjs';

const picker = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<string>) {
      return action.payload;
    }
  }
})

export const { setMenu } = picker.actions;
export default picker.reducer;
