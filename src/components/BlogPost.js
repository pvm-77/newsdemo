import React from 'react'
import { Link } from 'react-router-dom'
export const convertToSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, ''); // Remove all non-word characters except hyphens
};
const BlogPost = ({ blogPost }) => {
  const slug = convertToSlug(blogPost.title)
  return (
    <div>
      <div>
        <h2>{blogPost.title}</h2>
        <img src={blogPost.urlToImage} alt='some' width={300} height={300} />
      </div>
      <div>
        <p>Author:{blogPost.author}</p>
        <p>Updated At: {(new Date(blogPost.publishedAt).toUTCString())}</p>
      </div>
      <div>
        <p>{blogPost.description}</p>
        <Link to={`/blog/${slug}`}  >read more........</Link>
      </div>

    </div>
  )
}

export default BlogPost