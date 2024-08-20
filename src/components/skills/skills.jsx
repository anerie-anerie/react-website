import "./skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/*
trying to add animations :( so that the text of the languages show up when scrolled smoothly
 */
export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="skills" id="skills">
            <motion.div
                className="text-rect"
                initial={{ opacity: 0, y: 75 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                Coding Languages
            </motion.div>

            <motion.div
                className="animated-content"
                initial={{ opacity: 0, y: 75 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {/* Replace {children} with your content */}
                {/* Example content */}
                <p>JavaScript, Python, Java, C++</p>
            </motion.div>
        </div>
    );
}
