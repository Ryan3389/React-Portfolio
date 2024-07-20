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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste, minima nam odit dignissimos maiores aliquam quis nesciunt dolorum ab animi dolore, ipsum perferendis fuga nihil, ducimus dicta. Ea, sint.</p>
                            {/*TODO: update href to id of about me container */}
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