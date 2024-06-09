import React from 'react';

const About = () => {
    return (
        <section className="py-20 text-center bg-gray-100">
            <h2 className="text-6xl font-bold mb-4 text-indigo-600">About Me</h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-800 leading-relaxed">
                Hi, I'm Md Shahinur Khan, a passionate MERN full-stack developer. I graduated in 2023 from Mirpur Govt Bangla College. Currently, I'm focusing on advancing my career in programming, sales, and leadership.

                As a dedicated MERN Stack Developer, my journey in technology has been a blend of passion, continuous learning, and embracing new challenges. With a robust background in MongoDB, Express.js, React, and Node.js, I have crafted dynamic and scalable web applications that drive innovation and user engagement.

                From the early days of diving into code to solving intricate problems, my enthusiasm for development has only grown stronger. Each project I've worked on has honed my skills, from building responsive front-end interfaces with React to developing efficient back-end systems with Node.js and Express. My experience with MongoDB has enabled me to create robust databases that ensure data integrity and performance.

                Beyond the technical realm, I have discovered the power of effective communication and leadership. Whether collaborating with cross-functional teams or presenting complex solutions to clients, I thrive on bridging the gap between technical intricacies and business needs. My time in sales and leadership roles has equipped me with a unique perspective, allowing me to understand client requirements deeply and lead projects to successful completion.

                In every line of code I write and every project I undertake, my goal is to deliver exceptional results that exceed expectations. I am passionate about staying updated with the latest industry trends and continuously enhancing my skill set to provide cutting-edge solutions.

                Now, as I continue to grow in my career, I am excited about the opportunities to innovate, collaborate, and lead in the ever-evolving world of web development. Let's connect and explore how we can create impactful digital experiences together.
            </p>

            <div className="mt-8">
                <h3 className="text-4xl font-semibold text-indigo-600">My Strengths & Skills</h3>
                <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mt-4">
                    <strong>Technical Skills:</strong> HTML, CSS with Tailwind CSS, JavaScript, React, Firebase, MongoDB, Express.js<br />
                    <strong>Soft Skills:</strong> Sales & Marketing, Communication, Client Satisfaction, Project Presentation
                </p>
            </div>        
        </section>
    );
};

export default About;
