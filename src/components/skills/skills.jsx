import "./skills.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    // Use the useViewportScroll hook to track scroll position
    const { scrollYProgress } = useViewportScroll();

    // Scale the element based on the scroll progress
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="skills" id="skills">
            <motion.div
                className="scale-box"
                style={{ scale }} // Apply the scale transformation
            >
                {/* This inner div will scale vertically with the scroll */}
                <motion.div
                    className="scroll-progress"
                    style={{ scaleY: scrollYProgress }} // Scale vertically with scroll
                >
                    <div className="text-rect">
                        Coding Languages
                    </div>
                </motion.div>
            </motion.div>


        </div>
    );
}
