import { combineReducers } from '@reduxjs/toolkit';
import menuReducer from 'store/menu/menuSlice';
import postsReducer from 'store/posts/postsSlice';

/** createReducer */
const rootReducer = combineReducers({
  menu: menuReducer,
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
