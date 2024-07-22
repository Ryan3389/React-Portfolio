import React from 'react';


function DownloadResume() {
    return (
        <section className='resume-section'>
            <article className="resume-container">
                <h1>Download my resume</h1>
                <a href="/RyanCuthbert_resume.pdf" download="RyanCuthbert_resume.pdf">
                    <button>Ryan Cuthbert</button>
                </a>
            </article>

            <section className="skills-container">
                <article className="skill">
                    <h3>Front End</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </article>
                <article className="skill">
                    <h3>Backend</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Mongoose</li>
                        <li>Sequelize</li>
                    </ul>
                </article>
                <article className="skill">
                    <h3>Server</h3>
                    <ul>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>GraphQL</li>
                    </ul>
                </article>
            </section>
        </section>
    )
}

export default DownloadResume;
