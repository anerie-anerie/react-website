import "./topbar.scss"
import logo from "./logo.png"

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
                    
                </div>
            </div>
        </div>
    )

}