import React from 'react'
import BlogPost from './BlogPost'
const BlogPostList = ({currentPage,totalArticles, blogPosts, handleNextPage, handlePrevPage }) => {

  return (
    <div className='p-4 flex flex-col'>{

      blogPosts.map((blogPost, index) => (<BlogPost blogPost={blogPost} key={index} />))
    }
      <div className=' pt-4 m-4 flex justify-between w-3/4 mx-auto align-center'>
        <button 
        className={`p-2 font-semibold text-white hover:bg-violet-400 ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-violet-900'}`}
         disabled={currentPage===1} onClick={handlePrevPage}>prev</button>
        <p>page {currentPage} of {totalArticles}</p>
        <button className='p-2 bg-violet-900 font-semibold text-white hover:bg-violet-400' disabled={currentPage>=(totalArticles/10)} onClick={handleNextPage}>next</button>
      </div>
    </div>
  )
}

export default BlogPostList