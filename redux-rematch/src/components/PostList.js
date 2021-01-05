import React from "react";

const PostList = ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <li key={i}>{post.address}</li>
    ))}
  </ul>
);


export default PostList;
