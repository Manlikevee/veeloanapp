import React from 'react';
import { graphql } from 'gatsby';
import postsData from '../data/posts.json'; // Import your JSON data

function PostDetail({ data }) {
  const post = data.post;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}



export default PostDetail;
