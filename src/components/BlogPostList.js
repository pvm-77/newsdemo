import React from 'react'
import BlogPost from './BlogPost'
import Pagination from './Pagination'
const BlogPostList = ({ currentPage,totalPages,blogPosts,  onPageChange }) => {


  return (
    <div className='p-4 flex flex-col'>{
      blogPosts.map((blogPost, index) => (<BlogPost blogPost={blogPost} key={index} />))}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    
    </div>
  )
}

export default BlogPostList