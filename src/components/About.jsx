/*Write about me page, this should include:
One liner to grab attention
Short bio:
Front end technologies: Short desc
Backend technologies: Short desc
server side technologies: Short desc

include a series of images showcasing what technologies I know (if I have time)
*/

function About() {
    return (
        <section className="about-me-container" id="about-me">
            <article className="about-intro">
                <h2>Full Stack Developer</h2>
                <p>Specializing in web development</p>
            </article>

            <article className="tech-container">
                <div className="tech-div">
                    <h3>Frontend</h3>
                    <p>I  specialize in creating responsive and dynamic user interfaces  by using HTML and  CSS. I leverage React to build modular and efficient applications, ensuring a seamless user experience. </p>
                </div>
                <div className="tech-div">
                    <h3>Server Side</h3>
                    <p>I am proficient in creating robust and efficient back-end systems. My expertise includes Node.js for building scalable applications and Express.js for routing and handling server-side logic. I design and implement RESTful APIs, ensuring seamless communication between the front end and back end.</p>
                </div>
                <div className="tech-div">
                    <h3>Backend / database</h3>
                    <p>
                        I have extensive experience in backend development working with PostgreSQL and MongoDB.  I utilize Sequelize for efficient relational database management with PostgreSQL and Mongoose for streamlined interaction with MongoDB. I design robust database schemas, perform data migrations, and ensure optimal performance and security in data handling.
                    </p>
                </div>
            </article>
        </section>
    )
}

export default About