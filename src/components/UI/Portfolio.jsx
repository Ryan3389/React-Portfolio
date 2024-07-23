import weatherApp from '../../images/weatherApp.png'
import hungryExplorer from '../../images/hungryExplorer.png'
function PortfolioSection() {
    return (
        <section className="projects-section">
            <div className="container">
                <article className="project-container">
                    <img src={weatherApp} alt="weather app" className='project-img' />
                    <div className="project">
                        <h2>Weather Dashboard</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                    </div>
                </article>
                <article className="project-container">
                    <img src={hungryExplorer} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Hungry Explorer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PortfolioSection