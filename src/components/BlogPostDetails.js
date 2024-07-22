import React from 'react'
import { useMatch } from 'react-router-dom';
import { convertToSlug } from './BlogPost';
import { Link } from 'react-router-dom';
const BlogPostDetails = ({ blogPosts }) => {
  const match = useMatch('/blog/:slug');
  const slug = match.params.slug
  console.log('the slug from url', slug)

  const blogPost = match ? blogPosts.find(blog => convertToSlug(blog.title) === slug) : null
  if (!blogPost) {
    return <>no blogs</>

  }
  return (
    <div>
      <Link to='/'>back</Link>
      <p>{blogPost.title}</p>
    </div>
  )
}

export default BlogPostDetails