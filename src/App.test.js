import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';


// import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { getNews } from './services/news';


jest.mock('./services/news', () => ({
  getNews: jest.fn(),
}));


describe('App component', () => {


  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state', async () => {
    // Mock getNews to simulate loading state
    getNews.mockResolvedValueOnce({ articles: [], totalResults: 0 });

    render(

      <App />

    );

    // Expect the Shimmer component to be rendered during loading
    expect(screen.getByTestId('shimmer')).toBeInTheDocument();
  });

  test('renders blog posts after loading', async () => {
    // Mock getNews to return dummy blog posts
    getNews.mockResolvedValueOnce({
      articles: [{ title: 'Test Title', author: 'Test Author', publishedAt: '2023-07-24', description: 'Test description' }],
      totalResults: 10
    });
    render(<App />);
    // Wait for the blog posts to be loaded and rendered
    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });
  });


  test('pagination buttons work correctly', async () => {
    // Mock getNews to return dummy blog posts
    getNews.mockResolvedValueOnce({
      articles: [{ title: 'Test Title', author: 'Test Author', publishedAt: '2023-07-24', description: 'Test description' }],
      totalResults: 20
    });


    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('next'));

    expect(getNews).toHaveBeenCalledWith(expect.objectContaining({
      params: expect.objectContaining({ page: 2 })
    }))
  })



test('navigates to blog post details page', async () => {
  // Mock getNews to return dummy blog posts
  getNews.mockResolvedValueOnce({
    articles: [{ title: 'Test Title', author: 'Test Author', publishedAt: '2023-07-24', description: 'Test description' }],
    totalResults: 10
  });

  const { container } = render(<App />);


  await waitFor(() => {
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('Test Title'));


  expect(container.innerHTML).toMatch(/BlogPostDetails/i);
});


});
