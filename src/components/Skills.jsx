import React from 'react';

const Skills = () => {
    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold mb-8 text-center text-indigo-600">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Comfortable:</h2>
                        <ul className="list-disc list-inside">
                            <li>JavaScript</li>
                            <li>React vite</li>
                            <li>Node.js</li>                          
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Taildwind.css</li>
                            <li>Bootstrap</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Familiar:</h2>
                        <ul className="list-disc list-inside">
                            <li>TypeScript</li>
                            <li>Redux</li>
                            <li>Material-UI</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Tools:</h2>
                        <ul className="list-disc list-inside">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                            <li>JEST</li>
                            <li>Chrome Dev Tools</li>
                            <li>Heroku</li>
                            <li>Netlify</li>
                            <li>Firebase</li>
                            <li>Jira</li>
                            <li>webpack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
