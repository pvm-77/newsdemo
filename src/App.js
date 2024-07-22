import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { useState, useEffect } from 'react';
import { getNews } from './services/news';
function App() {

  const [blogPosts, setBlogPosts] = useState([]);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {

    const config = {
      
      params: {
        apiKey: process.env.REACT_APP_NEWS_URL,
        pageSize,
        page: currentPage

      }
    }

    getNews(config).then(response => {
      setBlogPosts(response.articles)

    }).catch(error => {
      console.log(error)
    })



    // 
    return () => {

    };

  }, [currentPage]);
  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1)
  }
  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1)
  }




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BlogPostList blogPosts={blogPosts} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />} />
          <Route path='/blog/:slug' element={<BlogPostDetails blogPosts={blogPosts} />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
