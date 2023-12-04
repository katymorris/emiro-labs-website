// pages/[id].js
import * as React from 'react';
import fs from 'fs';
import path from 'path';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import mdToJsx from './mdtojsx';
import MainFeaturedPost from './MainFeaturedPost';
import { Link } from '@mui/material';

// Define your React component
function Main({ content }) {
  console.log(content)
  return (
    <>
        <MainFeaturedPost />
        <div id="blog-details" className="p-4 w-full max-sm:p-8 mt-184">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700">Back to Main</Link>
          <Typography variant="h6" gutterBottom>
          <div dangerouslySetInnerHTML={{ __html: mdToJsx(content) }} />
          </Typography>
          <Divider />
        </div>
    </>

  );
}

// getServerSideProps function
export async function getServerSideProps(context) {
  const { id } = context.params;
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, 'pages/blog/posts', `${id}.md`);
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf8');
    // Optionally, convert the markdown content to HTML here
  } catch (error) {
    console.error('Error reading file:', error);
    // Handle the error appropriately
    // For example, return a custom error page or a 404 page
  }

  return { props: { content } };
}

export default Main;
