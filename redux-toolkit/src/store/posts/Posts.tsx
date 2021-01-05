import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostList from '../../components/PostList';
import { fetchPostList } from './postsSlice'
import { RootState } from '../rootReducer'

export const Posts = () => {
  const dispatch = useDispatch()

  const menu = useSelector((state: RootState) => state.menu)
  const posts = useSelector((state: RootState) => state.posts.items)
  const isFetching = useSelector((state: RootState) => state.posts.isFetching)
  const lastUpdated = useSelector((state: RootState) => state.posts.receivedAt)

  useEffect(()=>{
    dispatch(fetchPostList(menu));
  }, []);


  return (
    <div style={{ paddingLeft: 20 }}>
        <p>
          {lastUpdated && (
            <span>
              Last updated {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
          {!isFetching && (
            <button onClick={()=>{dispatch(fetchPostList(menu))}}>Refresh</button>
          )}
        </p>
        {posts.length === 0 ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1, marginLeft: -20 }}>
            <PostList posts={posts} />
          </div>
        )}
      </div>
  )
}

