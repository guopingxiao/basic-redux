import { fetchPosts } from '../../api/reddit'

const initialState = {
  isFetching: false,
  items: [],
  receivedAt: undefined,
}

export const posts = {
  state: initialState,
  reducers: {
    requestPosts(state) {
      return {
        ...state,
        isFetching: true
      }
      // state.isFetching = true;
    },
    receivePosts(state, payload) {
      return {
        isFetching:false,
        items: payload,
        receivedAt: Date.now()
      }
    }
  },
  effects () {
    return {
      async fetchPostList(content) {
        this.requestPosts();
        const data = await fetchPosts(content);
        this.receivePosts(data);
      }
    }
  }
}
