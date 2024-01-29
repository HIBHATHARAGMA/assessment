import React from 'react';
import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ background: '#f0f0f0', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'brightness(90%)', backdropFilter: 'blur(3px)', background: 'linear-gradient(45deg, #f0f0f0, #ffcccc)' }}>
            <Card sx={{ backgroundColor: '#f0f0f0', padding: '30px', borderRadius: '10px', width: '40vw' }}>
                <Typography variant='h3' align='center' style={{ marginBottom: '20px', color: '#333' }}>Add Blog</Typography>
                <Stack spacing={3}>
                    <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                    <Input variant='outlined' type="text" id="blogName" name="blogName" />

                    <InputLabel htmlFor="authorName">Author Name:</InputLabel>
                    <Input variant='outlined' type="text" id="authorName" name="authorName" />

                    <InputLabel htmlFor="description">Description:</InputLabel>
                    <TextareaAutosize variant='outlined' id="description" name="description" minRows={5} />

                    <Button variant='contained' onClick={() => { navigate('/home') }} sx={{ marginTop: '20px' }}>Submit Blog</Button>
                </Stack>
            </Card>
        </Box>
    )
}

export default BlogForm;
