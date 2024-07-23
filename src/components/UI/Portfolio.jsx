import weatherApp from '../../images/weatherApp.png'
import hungryExplorer from '../../images/hungryExplorer.png'
import noteTracker from '../../images/noteTracker.png'
import payrollTracker from '../../images/payrollTracker.png'
import originalPortfolio from '../../images/originalPortfolio.png'
function PortfolioSection() {
    return (
        <section className="projects-section">
            <div className="container">
                <article className="project-container">
                    <img src={weatherApp} alt="weather app" className='project-img' />
                    <div className="project">
                        <h2>Weather Dashboard</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                        <a href="https://ryan3389.github.io/Weather-Forecast-App/">Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={hungryExplorer} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Hungry Explorer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                        <a href="https://natalieclinton.github.io/Project1-Group3/">Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={noteTracker} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Note Tracker</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                        <a href='https://note-tracker-777s.onrender.com/'>Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={payrollTracker} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Employee Payroll Tracker</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                        <a href='https://ryan3389.github.io/Employee-Payroll-Tracker/'>Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={originalPortfolio} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Original Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident autem quaerat quod eius, odit ad eum sunt exercitationem, quo temporibus aut quos corrupti rerum beatae repellendus molestias iusto laudantium.</p>
                        <a href='https://ryan3389.github.io/Ryan-Cuthbert-Portfolio/#home'>Check it out</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PortfolioSection