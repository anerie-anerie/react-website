import "./intro.scss";
import { ReactTyped as Typed } from 'react-typed';

export default function Intro() {
    return (
        <div className="fullIntro">
            {/* Background Rectangle */}
            <div className="background-rectangle">
                {/* Rectangle for Intro Texts */}
                <div className="text-rectangle">
                    {/* Introduction Text */}
                    <div className="intro" id="intro">
                        hi! I'm anerie lets see how this works
                    </div>
                    
                    {/* Animated Typing Text */}
                    <div className="animated-typing">
                        <Typed
                            strings={[
                                "I'm an artist",
                                "I'm a student",
                                "I'm a coder",
                                "I'm a creative",
                                "I'm a team player"
                            ]}
                            typeSpeed={150}  // Speed for typing
                            backSpeed={100}  // Speed for deleting the words
                            loop             // Looping the animation
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
