import '@testing-library/jest-dom';
import { render,screen } from '@testing-library/react';

import BlogPost from './BlogPost';
test('BlogPost renders content', () => { 
    const blogData={
        title:'Aut porro delectus nihil.',
        author:'John Doe',
        publishedAt:'2021-05-20T08:45:35.572Z',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    }
  render(<BlogPost blogPost={blogData} />)
  const element = screen.getByText('Aut porro delectus nihil.')
  expect(element).toBeDefined()

 })