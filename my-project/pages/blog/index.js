import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Main from './Main.js';
import Sidebar from './Sidebar.js';
// import Footer from '@/components/Footer.tsx';
import post1 from './posts/65d67441-5284-4ee1-8d5e-993b274ab1c8.md';
import post4 from './posts/131c35e0-8a9a-4cb5-b90d-54d4c476b335.md';
const featuredpost = 'e51e3122-790c-47c4-a215-77579962f8c5';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Heated Water Pressure Washing: Efficiency and Benefits',
  description:
    "Benefits and applications of using professional heated water pressure washing, highlighting its effectiveness in challenging cleaning scenarios such as dumpster pad cleanings.",
  image: '/images/water.webp',
  imageText: 'water droplets',
  linkText: 'Continue reading…',
  link: featuredpost
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [{post: post4, id: "131c35e0-8a9a-4cb5-b90d-54d4c476b335"}, {post: post1, id: "65d67441-5284-4ee1-8d5e-993b274ab1c8"}];

const sidebar = {
  title: 'About me',
  description:
    'Hi there! I\'m a startup-focused software engineer who enjoys building for the unknown future.',
  social: [
    // { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/avalanchepowerclean/' },
    // { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/avalanchepowerclean/' },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <>
     <MainFeaturedPost post={mainFeaturedPost} />
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header title="Blog" sections={sections} />
        <div id="blog-details" className="w-full max-sm:p-4 mt-184">
        <main>
          <div>
          <Grid container spacing={4}>
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
    </>
  
  );
}
