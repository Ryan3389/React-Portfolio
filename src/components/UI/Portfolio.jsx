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
                        <p>This app leverages the Open Weather API to deliver real-time weather updates and a 5-day forecast for any city and country. Key features include search by city, comprehensive weather data, added search history to check weather updates quickly.</p>
                        <a target='_blank' href="https://ryan3389.github.io/Weather-Forecast-App/">Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={hungryExplorer} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Hungry Explorer</h2>
                        <p>Hungry Explorer is designed to find the best dining options in any city. Simply create an account, search by city, or rating. Users can use the integrated google maps to find restaurants near you.</p>
                        <a target='_blank' href="https://natalieclinton.github.io/Project1-Group3/">Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={noteTracker} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Note Tracker</h2>
                        <p>Note Tracker is an intuitive app designed to help you manage your notes efficiently. Write down any note, which will then be saved and displayed. Click it again to edit, or delete.</p>
                        <a target='_blank' href='https://note-tracker-777s.onrender.com/'>Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={payrollTracker} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Employee Payroll Tracker</h2>
                        <p>This app is designed to help manage an employee payroll. Simply add the employee name, and salary to see the table updated. Be sure to checkout the console in dev tools to view additional data such as average salary.</p>
                        <a target='_blank' href='https://ryan3389.github.io/Employee-Payroll-Tracker/'>Check it out</a>
                    </div>
                </article>
                <article className="project-container">
                    <img src={originalPortfolio} alt="hungry explorer" className='project-img' />
                    <div className="project">
                        <h2>Original Portfolio</h2>
                        <p>Checkout my original portfolio. Although there is only one project displayed, this portfolio showcases my progress throughout the past 6 months upon completing the University of Toronto Coding Bootcamp</p>
                        <a target='_blank' href='https://ryan3389.github.io/Ryan-Cuthbert-Portfolio/#home'>Check it out</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PortfolioSection