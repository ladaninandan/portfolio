import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaNodeJs, FaHtml5, FaBootstrap, FaJava, FaPhp } from 'react-icons/fa';
import { RiReactjsFill, RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiRedux } from "react-icons/si";
const skillsData = [
    {
        icon: <RiReactjsFill size={80} color='skyblue' />,
        title: 'Frontend ',
        description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.',
    },
    {
        icon: <FaNodeJs size={80} color="lightgreen" />,
        title: 'Backend',
        description: 'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting',
    },
    {
        icon: <FaJava size={80} color="red" />,
        title: 'Backend',
        description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.',
    },
    {
        icon: <RiJavascriptFill size={80} color="yellow" />,
        title: 'Frontend',
        description: 'JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It is used to make web pages interactive and is one of the most popular programming languages in the world.',
    },
    {
        icon: <FaHtml5 size={80} color="pink" />,
        title: 'Frontend',
        description: 'What is HTML? Your One Stop Solution to Build a Web Page ...HTML, or Hypertext Markup Language, is a markup language that defines the structure and content of a web page. Its made up of a series of elements that tell the browser how to display content.HTML is one of the most basic building blocks of every website.',
    },
    {
        icon: <FaBootstrap size={80} color="purple" />,
        title: 'design',
        description: 'Bootstrap is a free, open-source front-end development framework that helps developers and designers build responsive websites and web apps. Its a collection of reusable code written in HTML, CSS, and JavaScript, along with website element templates and syntax for template designs.Bootstrap is popular with web designers because it saves time by reducing the need to manually write code',
    }, {
        icon: <SiMongodb size={80} color="darkgreen" />,
        title: 'Database',
        description: 'MongoDB is a free, open-source, non-relational database management system (DBMS) that uses flexible documents to store and process data. Its built for high availability, horizontal scaling, and geographic distribution, and is useful for working with large sets of distributed data.MongoDB is also known as a NoSQL database, which stands for "Not only SQL" and is an alternative to traditional relational databases',
    }, {
        icon: <SiMysql size={80} color="orange" />,
        title: 'Database',
        description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius is daughter My, and "SQL", the acronym for Structured Query Language',
    },
    {
        icon: <FaPhp size={80} color="" />,
        title: 'Backend',
        description: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group',
    },
    {
        icon: <SiRedux size={80} color="blue" />,
        title: 'Data passing manage data Flow ',
        description: 'Redux centralizes application state to make it consistent and manageable. It uses events called "actions" to update the state, with rules that ensure the updates are predictable. Redux can be used with any view library, including React, and can be used on both client and server',
    },
];

const Skils = () => {
    return (
        <Container fluid className="bg-dark text-light py-5">
            <Container>
                < Row className="text-center mb-4" >
                    <Col>
                        <h2 className="display-4">My Skills</h2>
                        {/* <p className="lead">I do all kinds of neat stuff</p> */}
                    </Col>
                </Row >
                <Row>
                    {skillsData.map((skill, index) => (
                        <Col md={4} key={index} className="mb-4 ">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="bg-dark text-light h-100 border-white">
                                    <Card.Body className="text-center">
                                        <div className="mb-3">{skill.icon}</div>
                                        <Card.Title>{skill.title}</Card.Title>
                                        <Card.Text>{skill.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container >
        </Container >
    );
};

export default Skils;
