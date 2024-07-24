/*
edge cases

1.no blogPost Provided  null or undefined
2.missing or invalid image url
3. missing or emplty blog post details
4.invalid date formats
5. missing orignal resource

*/
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import BlogPostDetails from "./BlogPostDetails";
import { BrowserRouter } from "react-router-dom";
describe('BlogPostDetail Component', () => {
    test('should renders blogpost details correctly when blogPost is provided', () => {
        const blogPost = {
            title: 'Test Title',
            urlToImage: 'http://example.com/image.jpg',
            author: 'Test Author',
            publishedAt: '2024-07-24T00:00:00Z',
            description: 'Test description',
            content: 'Test content',
            url: 'http://example.com/original-source'
        };

        render(
            <BrowserRouter>
                <BlogPostDetails blogPost={blogPost} />

            </BrowserRouter>
        );
        
        expect(screen.getByText('Test Title')).toBeDefined();


    })
    
})