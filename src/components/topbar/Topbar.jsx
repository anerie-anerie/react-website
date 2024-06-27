import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="/logo.png" alt="Genius Logo" className="logoImage" />
                    </a>
                </div>

                <div className="right">
                    this is right
                </div>
            </div>
        </div>
    )

}