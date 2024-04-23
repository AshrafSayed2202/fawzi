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
    function openMenu() {
        document.querySelectorAll('.menu-half').forEach((e) => {
            e.classList.add('active')
        })
    }
    function closeMenu() {
        document.querySelectorAll('.menu-half').forEach((e) => {
            e.classList.remove('active')
        })
    }
    return (
        <div className="container" ref={containerRef}>
            <div className="logo" onMouseEnter={(e) => { changeCursorSize('70px') }} onMouseLeave={(e) => { changeCursorSize('0px') }} ><a href="#Home">fuiux</a></div>
            <ul ref={navRef} className="navbar">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Testimonial">Testimonial</a></li>
                <li><a href="#Services">Pricing</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className="btn-container" onMouseEnter={(e) => { changeCursorSize('70px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}>
                <div className="email-container">
                    <FontAwesomeIcon icon="fa-solid fa-at" />
                    <span className="email"><a href="mailto:fawzisayed1209@gmail.com">Fawzisayed1209@gmail.com</a></span>
                </div>
                <motion.span
                    className="magnet-btn"
                    onMouseMove={mouseMove}
                    onMouseLeave={mouseLeave}
                    animate={{ x, y }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    ref={buttonRef}
                    onClick={() => { openMenu() }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-grip-lines" className="icon" />
                </motion.span>
            </div>
            <div className="left-menu menu-half">
                <span className="close-menu close-left" onClick={() => { closeMenu() }}>
                    <div><p>CLOSE</p></div>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </span>
                <div className="menu-logo" onClick={() => { setTimeout(() => { closeMenu() }, 300); }} onMouseEnter={(e) => { changeCursorSize('70px') }} onMouseLeave={(e) => { changeCursorSize('0px') }} ><a href="#Home">fuiux</a></div>
                <ul onClick={() => { setTimeout(() => { closeMenu() }, 300); }}>
                    <li>
                        <a href="#Home">
                            <span><span>01</span>Home</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#About">
                            <span><span>02</span>About</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Skills">
                            <span><span>03</span>Skills</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Portfolio">
                            <span><span>04</span>Portfolio</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Testimonial">
                            <span><span>05</span>Testimonial</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Services">
                            <span><span>06</span>Pricing</span>
                            <span>+</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Contact">
                            <span><span>07</span>Contact</span>
                            <span>+</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right-menu menu-half">
                <span className="close-menu close-right" onClick={() => { closeMenu() }}>
                    <div><p>CLOSE</p></div>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </span>
                <div className="right-menu-text">
                    <div className="menu-contacts">
                        <div><a href="https://wa.me/201143637341" target="_blanc">+20 114 363 7341</a></div>
                        <div><a href="mailto:fawzisayed1209@gmail.com">fawzisayed1209@gmail.com</a></div>
                        <p>If in doubt. reach out.</p>
                    </div>
                    <div>
                        <ul>
                            <li><a href="https://www.instagram.com/fawziuiux" target="_blanc">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/fawzi-uiux" target="_blanc">Linkedin</a></li>
                            <li><a href="https://www.behance.net/fawziuiux" target="_blanc">Behance</a></li>
                            <li><a href="https://dribbble.com/fawziuiux" target="_blanc">Dribbble</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
