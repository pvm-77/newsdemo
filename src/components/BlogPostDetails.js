import React from 'react'
import { useMatch } from 'react-router-dom';
import { convertToSlug } from './BlogPost';
import { Link } from 'react-router-dom';
const BlogPostDetails = ({ blogPosts }) => {
  const match = useMatch('/blog/:slug');
  const slug = match.params.slug

  const blogPost = match ? blogPosts.find(blog => convertToSlug(blog.title) === slug) : null
  console.log('the slug from url', blogPost)

  if (!blogPost) {
    return <>no blogs</>

  }
  return (
    <div className='flex-col p-4'>
      <Link

        className='p-4 m-4  bg-violet-900 font-semibold text-white hover:bg-violet-400'
        to='/'>back</Link>

      <div className='p-4 m-4 shadow-lg flex justify-center flex-col w-3/4 mx-auto' >
        <div>
          <h2 className='font-bold text-lg '>{blogPost.title}</h2>
          <img src={blogPost.urlToImage} alt='some' />
        </div>
        <div className='flex justify-start gap-4 mt-2 mb-2 text-grey'>
          <p>Author:{blogPost.author}</p>
          <p>Updated At: {(new Date(blogPost.publishedAt).toUTCString())}</p>
        </div>
        <div>
          <p>{blogPost.description}</p>
        </div>
        <div>
          <p>{blogPost.content}</p>
          <Link className='text-blue-800' to={blogPost.url} target='_blank' >original source</Link>
        </div>

      </div>
    </div>
  )
}

export default BlogPostDetails