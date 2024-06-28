import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Container
            maxWidth="xxl"
            sx={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?t=st=1719132419~exp=1719136019~hmac=b9cfa9c423ba971b042dd5a483328f0a6344f62eb20b2ad74a8e354c93d94246&w=1060)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                paddingTop: { xs: 4, sm: 8 },
                paddingBottom: { xs: 4, sm: 8 },
                textAlign: 'start', // Align text to the start (left)
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="start" // Align items to the start (left)
                justifyContent="center"
                minHeight="100vh"
                paddingX={{ xs: 2, sm: 4 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' } }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="h4"
                        component="p"
                        gutterBottom
                        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
                    >
                        Passionate developer with a love for creating innovative solutions
                    </Typography>
                    <Grid container spacing={2} justifyContent="start">
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                component="p"
                                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
                            >
                                I am a passionate developer in various technologies...
                            </Typography>
                        </Grid>

                    </Grid>
                    <br />
                    <Grid container justifyContent="start">
                        <Grid item xs={12} sm={10} md={8}>
                            <Typography
                                variant="body1"
                                component="p"
                                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                            >
                                I am an enthusiastic and motivated student currently pursuing a degree in Information Technology at Charusat University. With a keen interest in web development, I specialize in the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. My academic background, combined with hands-on project experience, has equipped me with the skills necessary to build dynamic and efficient web applications.
                            </Typography>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Container>
    );
};

export default About;
