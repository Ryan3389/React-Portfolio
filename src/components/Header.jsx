// function Header() {
//     return (
//         <header>
//             <nav className="navbar navbar-default bg-color">
//                 <div>
//                     <p>Ryan Cuthbert</p>
//                 </div>
//                 <div className="links-container">
//                     <a>About Me</a>
//                     <a>Portfolio</a>
//                     <a>Resume</a>
//                     <a>Contact</a>
//                 </div>
//             </nav>
//         </header>
//     );
// }

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <p>Ryan Cuthbert</p>
                </div>
                <div className="links-container">
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Resume</a>
                    <a href="#">Contact</a>
                </div>
            </nav>

            <section className="intro">
                <div className="intro-container">
                    <div className="intro-text">
                        <p className="intro-name">Ryan Cuthbert</p>
                        <p className="intro-job-title">Full Stack Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste, minima nam odit dignissimos maiores aliquam quis nesciunt dolorum ab animi dolore, ipsum perferendis fuga nihil, ducimus dicta. Ea, sint.</p>
                        <a href="#" className="about-link">About Me</a>
                        <a href="#" className="github-link">GitHub</a>
                    </div>
                </div>
                <div className="intro-img">
                    <p>Img of me</p>
                </div>
            </section>



        </header>
    )
}


export default Header;

