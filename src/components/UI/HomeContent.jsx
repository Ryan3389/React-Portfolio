// import About from "./About"
import RyanCuthbert from '../../images/RyanCuthbert.png'

function HomeContent() {
    return (
        <>
            <section className="home-main-container">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-text">
                            <p className="intro-name">Ryan Cuthbert</p>
                            <p className="intro-job-title">Full Stack Developer</p>
                            {/* <p>I am a full stack developer with extensive knowledge in front end development/design, server and backend development using the latest technologies.</p> */}
                            <p>I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with MongoDB, and PostgreSQL.</p>
                        </div>
                        <div className="home-btn-container">
                            <a href="/RyanCuthbert_resume.pdf" download="RyanCuthbert_resume.pdf">Resume</a>
                            <a target='_blank' href="https://github.com/Ryan3389" className="github-link">GitHub</a>
                        </div>

                    </div>
                    <div className="intro-img">
                        <img src={RyanCuthbert} alt="image of Ryan Cuthbert" className='profile-img' />
                    </div>
                </div>
            </section>

            {/* <About /> */}
        </>
    )
}

export default HomeContent