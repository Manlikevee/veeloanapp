import React from 'react';
import DataFetcher from './DataFetcher';
import style from '../components/Landingpage/layout.css'
function Blog({ isLoading, blogPosts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {isLoading ? (

      <div className="bix">
      <div className="boxss">
        <div className="skeleton-box" />
      </div>
      <div className="boxss">
        <div className="skeleton-box" />
      </div>
      <div className="box">
        <div className="skeleton-box" />
      </div>
    </div>
    


      ) : (
        <ul>
          {blogPosts.map(blog => (
            <li key={blog.id}>
              <h2>{blog.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: blog.shortdescription }} />
              <p>Published: {blog.published_at}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function BlogWithFetching() {
  return (
    <DataFetcher>
      <Blog />
    </DataFetcher>
  );
}
