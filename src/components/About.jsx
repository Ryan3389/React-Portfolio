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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, assumenda.</p>
                </div>
                <div className="tech-div">
                    <h3>Server Side</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, assumenda.</p>
                </div>
                <div className="tech-div">
                    <h3>Backend / database</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, assumenda.</p>
                </div>
            </article>
        </section>
    )
}

export default About