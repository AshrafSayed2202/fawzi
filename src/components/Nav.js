'use client'
import React from "react";
import "./NavStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'
import { useCursor } from './CursorProvider'

function Nav() {
    const buttonRef = React.useRef(null)
    const navRef = React.useRef(null)
    const containerRef = React.useRef(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const { setCursorSize } = useCursor()
    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y })
    }
    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    React.useEffect(() => {
        const x = navRef.current.childNodes
        x.forEach(e => {
            e.addEventListener('mouseenter', () => {
                changeCursorSize('70px');
            })
            e.addEventListener('mouseleave', () => {
                changeCursorSize('0px');
            })
        });
    })
    window.onscroll = (e) => {
        if (window.scrollY > 100) {
            containerRef.current.className = 'container scrolled'
        } else {
            containerRef.current.className = 'container'
        }
    }
    const { x, y } = position
    return (
        <div className="container" ref={containerRef}>
            <div className="logo" onMouseEnter={(e) => { changeCursorSize('70px') }} onMouseLeave={(e) => { changeCursorSize('0px') }} >FS</div>
            <ul ref={navRef} className="navbar">
                <li>Cases</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Testimonial</li>
                <li>Contact</li>
            </ul>
            <div className="btn-container" onMouseEnter={(e) => { changeCursorSize('70px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}>
                <div className="email-container">
                    <FontAwesomeIcon icon="fa-solid fa-at" />
                    <span className="email">Fawzisayed1209@gmail.com</span>
                </div>
                <motion.span
                    className="magnet-btn"
                    onMouseMove={mouseMove}
                    onMouseLeave={mouseLeave}
                    animate={{ x, y }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    ref={buttonRef}
                >
                    <FontAwesomeIcon icon="fa-solid fa-grip-lines" className="icon" />
                </motion.span>
            </div>
        </div>
    );
}

export default Nav;
