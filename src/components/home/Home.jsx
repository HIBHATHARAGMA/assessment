import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Button, Card, CardContent } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({ userId: '', id: '', title: '' });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const whenClicked = (userId, id, title) => {
    setSelectedBlog({ userId, id, title });
  };

  return (
    <div style={{ background: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" style={{ color: '#333', marginBottom: '20px' }}>Welcome to Blog Dashboard</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justiifyContent: 'space-between', alignItems: 'center', width: '60%', marginBottom: '20px' }}>
          <Link style={{ borderRadius:'5px', padding:'5px 10px', textDecoration:'none', background: '#2196f3', color: '#fff', marginRight: '15vw', fontSize:'15px' }} href="/home">Home</Link>
          <Link style={{ borderRadius:'5px', padding:'5px 10px', textDecoration:'none', background: '#f44336', color: '#fff', marginLeft: '35vw', fontSize:'15px' }} href="/blogform">Add Blog</Link>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', marginTop: '20px' }}>
          <Box sx={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '100%', marginBottom: '20px', overflowY: 'auto', maxHeight: '50vh' }}>
            <Typography variant="h5" style={{ color: '#333', marginBottom: '20px' }}>Recent Blogs</Typography>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {blogs.map(blog => (
                <li key={blog.id} style={{ marginBottom: '10px' }}>
                  <Button onClick={() => whenClicked(blog.userId, blog.id, blog.title)} style={{ color: '#2196f3', textTransform: 'none' }}>{blog.id}. {blog.title}</Button>
                </li>
              ))}
            </ul>
          </Box>
          <Box sx={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '100%', overflowY: 'auto', maxHeight: '50vh' }}>
            <Typography variant="h5" style={{ color: '#333', marginBottom: '20px' }}>Selected Blog</Typography>
            <Card sx={{ backgroundColor: '#f44336', color: '#fff', padding: '20px', borderRadius: '10px' }}>
              <CardContent>
                <Typography variant='body1'>UserId: {selectedBlog.userId}</Typography>
                <Typography variant='body1'>Id: {selectedBlog.id}</Typography>
                <Typography variant='body1'>Title: {selectedBlog.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
