// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Alert, Typography, Box, TextField, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import axios from "axios";

const Contact = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [massage, setmassage] = useState('');
    const [valid, setIsValid] = useState(" ");





    const handleEmail = (e) => {
        const newValue = e.target.value;
        if (newValue.length === 0 || (newValue !== ' ')) {
            setemail(newValue);
            const emailPattern = /^[A-Z 0-9._%+-]+@[A-Z 0-9.-]+\.[A-Z]{2,}$/i;
            setIsValid(emailPattern.test(newValue));
        }

    }


    const [error, seterror] = useState(false)

    const handalesubmit = async (e) => {
        e.preventDefault()
        console.log(name, email, massage)
        await axios.post(' http://localhost:5001/Contact', {
            name,
            email,
            massage,
        }).then(res => {
            if (res.data === "done") {
                seterror(true)
                setTimeout(() => {
                    seterror(false);
                }, 2000);
            }
        })
            .catch(err => console.log(err))

        setTimeout(() => {
            setname("")
            setemail("");
            setmassage("")
        }, 100);

    }



    return (
        <Container maxWidth="xxl"
            sx={{
                backgroundImage: 'url()',
                backgroundColor: "white",
                backgroundSize: 'cover',
                color: "black"
            }} >
            {
                error ? <Box position={'fixed'} width={'95%'}><Alert icon={<CheckIcon fontSize="inherit" />} severity="success">

                    submit your form
                </Alert></Box> : ""
            }
            {
                !valid ? <Box position={'fixed'} width={'95%'}><Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Please enter a valid email address.
                    example44@gmail.com
                </Alert></Box> : ""
            }


            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                color="black"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        Contact Me
                    </Typography>
                    <Box component="form" mt={3} color="white" Validate
                        autoComplete="on" onSubmit={handalesubmit}   >
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            type='text'
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            type='email'
                            margin="normal"
                            value={email}
                            onChange={handleEmail}
                            id="outlined-error"
                        // label="Required"
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            type='text'
                            rows={4}
                            margin="normal"
                            value={massage}
                            required
                            onChange={(e) => setmassage(e.target.value)}
                        />
                        <Button variant="contained" color="primary" size="large" type="submit" >
                            Send
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </Container >
    );
};

export default Contact;
