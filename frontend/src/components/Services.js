import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Development',
        description: `Our web development service offers comprehensive solutions tailored to your needs. 
                  From concept to execution, we specialize in crafting responsive, user-friendly websites 
                  that drive engagement and deliver results. Whether you're launching a new project or 
                  revamping an existing site, our team ensures seamless functionality, robust security, 
                  and optimal performance across all devices.`,
        icon: 'https://img.freepik.com/premium-vector/web-wireframe-flat-premium-illustration_203633-2043.jpg?size=626&ext=jpg&ga=GA1.1.625521948.1696527457&semt=ais_user'
    },
    {
        title: 'Api ',
        description: `API as a Service (APIaaS) is a cloud-based platform that helps create, host, and manage Application Programming Interfaces (APIs). API services allow applications to interact with server-side systems to update or retrieve data. APIaaS provides tools and frameworks to simplify the design and creation of APIs, including user-friendly tools to define endpoints and access controls. Once designed, APIs are hosted in the cloud, which can provide scalability and security benefits.`,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpraeugkI9AHg4BDl-KOsar-qN8SGPL61ogwytgZyg3z9ezG4&s'
    },
    {
        title: 'Backend development',
        description: `Backend development refers to the functionality of the website that users do not see, such as database management, security, and email configuration.`,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw_2cNT1EMdE5IZudq2wji72uEPhih5KV4g&s'
    }
];

const ServiceCard = ({ title, description, icon, borderColor }) => (
    <div className="service-card" style={{ borderColor }}>
        <div className="icon">
            <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Services = () => {
    return (
        <div className="App ">
            <h2>Services</h2>
            <div className="service-cards">
                {services.map((service, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.59, delay: index * 0.2 }}
                    >
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            borderColor={"white"}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Services;
