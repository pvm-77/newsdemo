import React from 'react'
import { Link } from 'react-router-dom'
export const convertToSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, '');
};


const BlogPost = ({ blogPost }) => {
  const slug = convertToSlug(blogPost.title)

  
  return (
    <div className='p-4 m-4 shadow-lg flex justify-center flex-col w-3/4 mx-auto' >
      <div>
        <h2 className='font-bold text-lg '>{blogPost.title}</h2>
        {/* <img src={blogPost.urlToImage} alt='some'  /> */}
      </div>
      <div className='flex justify-start gap-4 mt-2 mb-2 text-grey'>
        <p>Author:{blogPost.author}</p>
        <p>Updated At: {(new Date(blogPost.publishedAt).toUTCString())}</p>
      </div>
      <div>
        <p>{blogPost.description}</p>
        <Link className='text-blue-800' to={`/blog/${slug}`}  >read more........</Link>
      </div>

    </div>
  )
}

export default BlogPost