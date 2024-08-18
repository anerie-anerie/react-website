import "./intro.scss";
import { ReactTyped as Typed } from 'react-typed';

export default function Intro() {
    return (
        <div className="fullIntro">
            <div className="background-rectangle"></div>
            <div className="text-rectangle">
                <div className="intro">
                    hi! I'm anerie, let's see how this works
                </div>
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

    );
}
