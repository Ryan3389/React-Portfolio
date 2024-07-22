import About from "./About"

function HomeContent() {
    return (
        <>
            <section className="home-main-container">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-text">
                            <p className="intro-name">Ryan Cuthbert</p>
                            <p className="intro-job-title">Full Stack Developer</p>
                            <p>I am a full stack developer with extensive knowledge in front end development/design, server and backend development using the latest technologies.</p>
                            {/* <a href="#about-me" className="about-link">About Me</a>
                            <a href="#" className="github-link">GitHub</a> */}
                        </div>
                        <div className="home-btn-container">
                            <a href="#about-me" className="about-link">About Me</a>
                            <a href="#" className="github-link">GitHub</a>
                        </div>

                    </div>
                    <div className="intro-img">
                        <p>Img of me</p>
                    </div>
                </div>
            </section>

            <About />
        </>
    )
}

export default HomeContent