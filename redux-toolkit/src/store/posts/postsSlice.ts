import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from 'store/store'
import { fetchPosts } from 'api/reddit'

interface Post {
  address: string;
}

interface PostsState {
  isFetching: boolean;
  items: Post[];
  receivedAt: number | undefined;
}

const initialState: PostsState = {
  isFetching: false,
  items: [],
  receivedAt: undefined,
}

/** 创建一个slice，包含 createReducer、createAction的所有功能 */
const repoDetails = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    requestPosts(state) {
      state.isFetching = true;
    },
    receivePosts(state, action: PayloadAction<Post[]>) {
      state.isFetching = false;
      state.items = action.payload;
      state.receivedAt = Date.now();
    }
  }
})

export default repoDetails.reducer

export const {
  requestPosts,
  receivePosts
} = repoDetails.actions

export const fetchPostList = (subreddit: string): AppThunk => async dispatch => {
  dispatch(requestPosts());
  const data = await fetchPosts(subreddit);
  dispatch(receivePosts(data));
}