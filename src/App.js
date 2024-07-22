import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostDetails from './components/BlogPostDetails';
import { useState, useEffect} from 'react';
import { getNews } from './services/news';
import Shimmer from './components/Shimmer';
import BlogPostList from './components/BlogPostList'
function App() {

  const [blogPosts, setBlogPosts] = useState([]);
  const [totalArticles,setTotalArticles]=useState(0)
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const config = {
      headers: {
        'Upgrade': 'HTTPS/1.1', // Add upgrade header if required by the server
      },
      params: {
        apiKey: process.env.REACT_APP_NEWS_URL,
        pageSize,
        page: currentPage

      }
    }

    getNews(config).then(response => {
     
        setBlogPosts(response.articles)
        setTotalArticles(response.totalResults/pageSize)
        setLoading(false)


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
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={loading ? <Shimmer /> : <BlogPostList currentPage={currentPage} totalArticles={totalArticles} blogPosts={blogPosts} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
          } />
          <Route path='/blog/:slug' element={<BlogPostDetails  blogPosts={blogPosts} />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
