
import "./Home.css"
import home from "../../../assest/image/home.jpg"

function Home () {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hi, I'm <span className="home-content-name">Adithep</span></h1>
                <h2>And I'm a <span className="home-content-job">Web Developer</span></h2>
                <p>I'm a passionate web developer with a proven track record of creating stunning and functional websites. With a keen eye for design, attention to detail, and expertise in the latest web technologies,
                     I can bring your web projects to life.</p>
                <button className="home-content-button">Contact Me</button>
            </div>
            <div className="home-image">
                <img src={home} alt="home" />
            </div>
        </div>
    )
}

export default Home;