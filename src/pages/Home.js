
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useScroll, useTransform } from 'framer-motion';
import './HomeStyle.css'
import Nav from '../components/Nav'
import Cursor from '../components/Cursor'
import CursorProvider, { useCursor } from '../components/CursorProvider'
import AboutTitle from '../components/AboutTitle'
import figure from '../assets/figure.png'
import wave1 from '../assets/wave1.svg'
function HeroSection() {
    const NameSection = React.useRef()
    const FigureRef = React.useRef()
    const { scrollYProgress } = useScroll({
        target: FigureRef,
        offset: ['0 0', '1 1']
    })
    const zIndexProgres = useTransform(scrollYProgress, [0, 1], [-1, 4])
    React.useEffect(() => {
        NameSection.current.childNodes[0].animate({
            top: '0px',
            opacity: 1
        }, { duration: 1000, delay: 1000, fill: "forwards" })
        NameSection.current.childNodes[1].animate({
            bottom: '0px',
            opacity: 1
        }, { duration: 1000, delay: 1000, fill: "forwards" })
    }, [])
    const { setCursorSize } = useCursor()
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    const GenerateName = (props) => {
        let letters = props.name.split('')
        let spans = []
        letters.forEach(e => {
            spans.push(<span className='name-letter' key={e}>{e}</span>)
        });
        let singleData = {
            translateProgres: []
        }
        switch (props.name) {
            case 'Fáwzi':
                singleData['translateProgres'] = ['-250px 0px', '0px 0px']
                break;
            case 'Sayéd':
                singleData['translateProgres'] = ['250px 0px', '0px 0px']
                break;
            default:
                break;
        }
        const translateProgres = useTransform(scrollYProgress, [0, 1], singleData.translateProgres)
        return (
            <motion.div style={{ translate: translateProgres }} className='name-letters'>
                {spans}
            </motion.div>
        )
    }
    return (
        <div className='here-section'>
            <div className='name-container' ref={NameSection}>
                <motion.span style={{ zIndex: zIndexProgres }} className='first-name' onMouseEnter={(e) => { changeCursorSize('100px') }} onMouseLeave={(e) => { changeCursorSize('0px') }} ><GenerateName name='Fáwzi' /></motion.span>
                <motion.span style={{ zIndex: zIndexProgres }} className='second-name' onMouseEnter={(e) => { changeCursorSize('100px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}><GenerateName name='Sayéd' /></motion.span>
            </div>
            <div className='figure-container'>
                <img src={wave1} alt='wave1' className='wave' />
                <img src={figure} alt='figure' className='figure' />
            </div>
            <div ref={FigureRef} className='figure-stand'></div>
        </div>
    )
}
function AboutSection() {
    const { setCursorSize } = useCursor()
    const changeCursorSize = (size) => {
        setCursorSize((prev) => {
            return prev !== size ? size : prev;
        })
    }
    return (
        <div className='about-section'>
            <AboutTitle name='Ui/Ux' />
            <AboutTitle name='Designer' />
            <AboutTitle name='+' />
            <AboutTitle name='Creative' />
            <AboutTitle name='Web' />
            <AboutTitle name='Developer' />
            <div className='about-text'>
                <p className='greeting'>I'm Fawzi Sayed</p>
                <p className='about-block'>An independent digital designer and front-end developer. Passionate about crafting unforgettable experiences and providing companies with innovative, user-centric solutions for nearly a decade.</p><br />
                <p className='about-block'>Collaborating with global brands and agencies, I specialize in designing and developing websites and applications that prioritize interaction, motion, and visual engagement.</p><br />
                <p className='about-block'>My work has been on converting complex issues into straightforward, user-friendly solutions that are accessible to everyone.</p><br />
                <p className='get-in' onMouseEnter={(e) => { changeCursorSize('60px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}>Get in touch <FontAwesomeIcon className='contact-icon' icon="fa-solid fa-arrow-right" /></p>
            </div>
        </div >
    )
}
function Home() {
    const homeRef = React.useRef(null)
    React.useEffect(() => {
        homeRef.current.animate({
            opacity: 1
        }, { duration: 1200, fill: "forwards" })
    })
    return (

        <CursorProvider>
            <Cursor />
            <div ref={homeRef} style={{ opacity: 0 }}>
                <Nav />
                <HeroSection />
                <AboutSection />
            </div>
        </CursorProvider>

    )
}

export default Home