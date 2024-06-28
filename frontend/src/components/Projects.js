import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Projects.css';
import img from './logofood.png'

const projects = [
    {
        title: 'ApnaFood',
        description: 'online tiffin ordering system.The Project is about E-Commerce Website used for ordering Tiffin By this project we can able to connect small Tiffin service with their local area customers, Students and customers with their local area Tiffin service.By this project we can able to connect small Tiffin service with their local area customers, Students and customers with their local area Tiffin service',
        image: img,
        language: "Html5,Css3,Boostrap 5,Javascript,PHP,Mysql",
        link: "http://apnafood.42web.io/homepage.php"
    },
    {
        title: 'News webApp ',
        description: 'People can use news apps to keep up with local, national, and international news as well as entertainment, science, and politics. With only a swipe of the finger, these apps provide in-depth analysis, customized feeds, selected material, and real-time news updates. only fetch News api and no backend only frontend React used',
        image: 'https://img.freepik.com/free-vector/hand-holding-smartphones-with-online-newspaper-newsletter-weblog_74855-20591.jpg?w=996&t=st=1719155886~exp=1719156486~hmac=8014aab21b118f9f7afa8e42fb1c17c1511e971416b8e998ac4be5b5d628bec8',
        language: "Html5,Css3,Boostrap 5,React js",
    },
    {
        title: 'Shoping Web app',
        description: 'E-Cart is not just an e-commerce website it is a revolution in digital retail, offering an unparalleled shopping experience tailored to your needs.With E- Cart, you all enjoy a vast selection of products spanning various categories, from electronics and fashion to home essentials and beyond. Our user-friendly interface ensures effortless navigation, allowing you to browse, compare, and purchase with ease. We prioritize customer satisfaction above all else, offering secure payment options, reliable delivery, and responsive customer support.',
        image: 'https://img.freepik.com/premium-vector/online-shopping-internet-shop-use-smartphone-app_102902-5953.jpg?w=900',
        language: "Html5,Css3,Boostrap 5,React js,NodeJs,ExpressJs,Mongodb",
    },
];

const Projects = () => {
    return (
        <Container fluid className="projects-section bg-dark text-light py-5">
            <Container>
                <Row className="text-center mb-4">
                    <Col>
                        <h2 className="display-4">Projects</h2>
                        {/* <p className="lead">Some of my recent works</p> */}
                    </Col>
                </Row>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="project-card bg-black text-light h-100 border">
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                        <b>{project.language}</b>
                                        <Card.Text >Click LiveProject:- <a href={project.link}>Live Project</a> </Card.Text>

                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Projects;
