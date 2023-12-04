import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import mdToJsx from './mdtojsx';


function Main(props) {
  const { posts, title } = props;
  //<Link href={`/blog/${post.id}`} key={index}>
  return (
    <Grid
      item
      xs={12}
      md={8}
    >
{posts && posts.map((post, index) => {
  if (typeof post.post === 'string') {
    const approxLimit = 300; // Initial approximate character limit
    const endOfSlice = post.post.slice(0, approxLimit).lastIndexOf(' ');

    // If there's a space character in the sliced part, truncate at that space, otherwise use the approximate limit
    const truncateAt = endOfSlice > 0 ? endOfSlice : approxLimit;

    const content = post.post.length > truncateAt ? post.post.slice(0, truncateAt) + '...' : post.post;
    if (typeof content !== 'string') return; 
    return (
      <div className='blog-item' key={index}>
      <Link href={`/blog/${post.id}`} key={index}>
          <div dangerouslySetInnerHTML={{ __html: mdToJsx(content) }} />
      </Link>
      </div>
    );
  }
})}
    </Grid>
  );
}

export default Main;