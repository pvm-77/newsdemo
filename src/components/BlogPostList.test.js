// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import BlogPostList from './BlogPostList';

// describe('BlogPostList', () => {
//   const mockPosts = [
//     { title: 'Post 1', description: 'Description 1', author: 'Author 1', publishedAt: '2024-07-22', urlToImage: 'image1.jpg' },
//     { title: 'Post 2', description: 'Description 2', author: 'Author 2', publishedAt: '2024-07-21', urlToImage: 'image2.jpg' },
//   ];

//   const mockHandleNextPage = jest.fn();
//   const mockHandlePrevPage = jest.fn();

//   test('renders blog posts', () => {
//     render(
//       <BlogPostList
//         currentPage={1}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     expect(screen.getByText('Post 1')).toBeInTheDocument();
//     expect(screen.getByText('Post 2')).toBeInTheDocument();
//   });

//   test('disables the prev button on the first page', () => {
//     render(
//       <BlogPostList
//         currentPage={1}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     expect(screen.getByText('prev')).toBeDisabled();
//   });

//   test('enables the next button if there are more pages', () => {
//     render(
//       <BlogPostList
//         currentPage={1}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     expect(screen.getByText('next')).not.toBeDisabled();
//   });

//   test('disables the next button on the last page', () => {
//     render(
//       <BlogPostList
//         currentPage={2}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     expect(screen.getByText('next')).toBeDisabled();
//   });

//   test('calls handleNextPage when next button is clicked', () => {
//     render(
//       <BlogPostList
//         currentPage={1}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     fireEvent.click(screen.getByText('next'));
//     expect(mockHandleNextPage).toHaveBeenCalled();
//   });

//   test('calls handlePrevPage when prev button is clicked', () => {
//     render(
//       <BlogPostList
//         currentPage={2}
//         totalArticles={20}
//         blogPosts={mockPosts}
//         handleNextPage={mockHandleNextPage}
//         handlePrevPage={mockHandlePrevPage}
//       />
//     );

//     fireEvent.click(screen.getByText('prev'));
//     expect(mockHandlePrevPage).toHaveBeenCalled();
//   });
// });
