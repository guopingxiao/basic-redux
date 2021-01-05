import React from "react";

interface Props {
  posts:{
    address: string;
  }[]
}

const PostList = ({ posts }:Props) => (
  <ul>
    {posts.map((post:{address: string}, i:number) => (
      <li key={i}>{post.address}</li>
    ))}
  </ul>
);

export default PostList;
