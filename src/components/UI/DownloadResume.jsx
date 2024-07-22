import React from 'react';


function DownloadResume() {
    return (
        <section className='resume-section'>
            <article className="resume-container">
                <h1>Download my Resume</h1>
                <a href="/RyanCuthbert_resume.pdf" download="RyanCuthbert_resume.pdf">
                    <button className='download-btn'>Ryan Cuthbert</button>
                </a>
            </article>
            <section className="skills-intro">
                <p>I am currently enrolled in the Coding Bootcamp run by the University of Toronto. I have created a wide variety of different projects, ranging in difficuly, developing my knowledge in the latest technologies</p>
            </section>
            <section className="skills-container">
                <article className="skill">
                    <h3>Front End</h3>
                    <p>Upon completing this program, I have created a series of projects that showcase my extensive knowledge in the following areas</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </article>
                <article className="skill">
                    <h3>Server</h3>
                    <p>Beyond the front end, I have created a variety of projects showcasing my ability to create robust and efficient backend systems and RESTful APIs using the following technologies:</p>
                    <ul>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>GraphQL</li>
                    </ul>
                </article>
                <article className="skill">
                    <h3>Backend</h3>
                    <p>I have a strong foundation in both SQL and NoSQL databases with designing, implementing and organizing schemas and much more using the folloiwing:</p>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQ;</li>
                        <li>Mongoose</li>
                        <li>Sequelize</li>
                    </ul>
                </article>
            </section>
        </section>
    )
}

export default DownloadResume;
