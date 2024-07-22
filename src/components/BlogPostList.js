import React from 'react'
import BlogPost from './BlogPost'
const BlogPostList = ({ blogPosts, handleNextPage, handlePrevPage }) => {

  return (
    <div>{

      blogPosts.map((blogPost, index) => (<BlogPost blogPost={blogPost} key={index} />))
    }
      <div>
        <button onClick={handlePrevPage}>previous</button>
        <button onClick={handleNextPage}>next</button>
      </div>

    </div>
  )
}

export default BlogPostList