// src/App.js

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Body = styled(Box)({
    backgroundImage: "url(https://img.freepik.com/premium-photo/copy-space-office-black-table-with-laptop-notebook-pencil-coffee-cup-with-plat_35674-1635.jpg?w=1060)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
});

const BackgroundContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    color: "white"
});

const PhotoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
});

const StyledAvatar = styled(Avatar)({
    width: '150px',
    height: '150px',
    margin: '20px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    '@media (min-width:600px)': {
        width: '200px',
        height: '200px',
    },
});

const SocialLinks = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',

    '& a': {
        color: 'white',
        margin: '0 10px',
        fontSize: '24px',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#0073b1', // Default hover color for LinkedIn
        },
    },
    '& a:nth-of-type(1):hover': { color: '#0073b1' }, // LinkedIn
    '& a:nth-of-type(2):hover': { color: '#333' }, // GitHub
    '& a:nth-of-type(3):hover': { color: '#1DA1F2' }, // Twitter
    '& a:nth-of-type(4):hover': { color: '#0088cc' }, // Telegram
    '& a:nth-of-type(5):hover': { color: '#E1306C' }, // Instagram
});

const Home = () => {
    return (
        <Body>
            <Container>
                <BackgroundContainer>
                    <PhotoContainer>
                        <StyledAvatar src="https://media.licdn.com/dms/image/D5603AQFzFNJ86YxTZA/profile-displayphoto-shrink_800_800/0/1676872325998?e=1724889600&v=beta&t=hlE_q6jsz5t2mTe-sUgUJEkALjq0NRZ8V3GMAv9Pp-8" alt="My Photo" />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Typography variant="h4" component="h1" gutterBottom>
                                Hi There,
                                <br />I'm Nandan Ladani
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <Typography variant="h6" component="h2">
                                I am into Web Development.
                            </Typography>
                        </motion.div>
                        <Link to="/about">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                style={{ marginTop: '20px', zIndex: 1 }}

                            >
                                About Me
                            </Button>
                        </Link>
                        <SocialLinks>
                            <a href="https://www.linkedin.com/in/nandan-ladani-266548213/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ladaninandan" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://telegram.me/your-telegram" target="_blank" rel="noopener noreferrer">
                                <FaTelegram />
                            </a>
                            <a href="https://instagram.com/nandan___ladani__007/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </SocialLinks>
                    </PhotoContainer>
                </BackgroundContainer>
            </Container>
        </Body>
    );
};

export default Home;
