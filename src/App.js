import './App.css';
import { Routes, Route, useMatch } from 'react-router-dom';
import BlogPostDetails from './components/BlogPostDetails';
import { useState, useEffect } from 'react';
import { getNews } from './services/news';
import Shimmer from './components/Shimmer';
import BlogPostList from './components/BlogPostList';
import { convertToSlug } from './components/BlogPost';
function App() {

  const [blogPosts, setBlogPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 30;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const config = {
      params: {
        apiKey: process.env.REACT_APP_NEWS_URL,
        pageSize,
        page: currentPage

      }
    }

    getNews(config).then(response => {
      setTimeout(() => {
        setBlogPosts(response.articles)

        setTotalPages(Math.ceil(response.totalResults / pageSize));
        setLoading(false)


      }, 10000);
    }).catch(error => {
      console.log(error)
    })



    // 
    return () => {

    };

  }, [currentPage]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const match = useMatch('/blog/:slug');
  const slug = match?.params?.slug;
  const blogPost = slug ? blogPosts.find(blog => convertToSlug(blog.title) === slug) : null;


  return (
    <div>
      <Routes>
        <Route path='/' element={loading ? <Shimmer /> :
          <BlogPostList currentPage={currentPage} totalPages={totalPages}
            blogPosts={blogPosts} onPageChange={handlePageChange}
          />
        } />



        <Route path='/blog/:slug' element={<BlogPostDetails blogPost={blogPost} />} />
      </Routes>


    </div>
  );
}

export default App;
