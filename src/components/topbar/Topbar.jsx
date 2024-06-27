import "./topbar.scss"
import logo from "./logo.png"
import linkedin from "./linkedin.png"
import github from "./github.png"

/*left: logo to go back to start, then skills, projects on the left, linkedin, github, gmail*/
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src={logo} alt="Anerie Patel" className="logoImage" />
                    </a>
                </div>

                <div className="right">
                    <a href="#skills" className="norm">
                        Skills
                    </a>

                    <a href="#portfolio" className="norm">
                        Projects
                    </a>

                    <a href="https://www.linkedin.com/in/anerie-patel-962a75275/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="logoFor" />
                    </a>

                    <a href="https://github.com/anerie-anerie" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="logoFor" />
                    </a>



                </div>
            </div>
        </div>
    )

}