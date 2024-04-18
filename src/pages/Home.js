
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useScroll, useTransform } from 'framer-motion';
import './HomeStyle.css'
import Nav from '../components/Nav'
import Cursor from '../components/Cursor'
import CursorProvider, { useCursor } from '../components/CursorProvider'
import AboutTitle from '../components/AboutTitle'
import figure from '../assets/figure.png'
import skillsFigure from '../assets/skills-figure.png'
import wave1 from '../assets/wave1.svg'
import SkillItem from '../components/SkillItem';

import Figma from '../assets/logos/Figma.png'
import Sketch from '../assets/logos/Sketch.png'
import AdobeXD from '../assets/logos/AdobeXD.png'
import AdobeIllustrator from '../assets/logos/AdobeIllustrator.png'
import CounterOne from '../assets/counter-one.png'
import CounterTwo from '../assets/counter-two.png'
import CounterThree from '../assets/counter-three.png'


import one from '../assets/certficates/one.png'
import two from '../assets/certficates/two.png'
import three from '../assets/certficates/three.png'
import four from '../assets/certficates/four.png'
import PortfolioCard from '../components/PortfolioCard';

import PortfolioCardOne from '../assets/portfolioCards/one.jpg';
import PortfolioCardTwo from '../assets/portfolioCards/two.jpg';
import PortfolioCardThree from '../assets/portfolioCards/three.jpg';
import PortfolioCardFour from '../assets/portfolioCards/four.jpg';
import PortfolioCardFive from '../assets/portfolioCards/five.jpg';
import PortfolioCardSix from '../assets/portfolioCards/six.jpg';
import PortfolioCardSeven from '../assets/portfolioCards/seven.jpg';
import ClientComment from '../components/ClientComment';

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
    const ref = React.useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '0 0.5']
    })
    const translateProgres1 = useTransform(scrollYProgress, [0, 1], ['-200px', '0px'])
    const translateProgres2 = useTransform(scrollYProgress, [0, 1], ['-200px', '0px'])
    const translateProgres3 = useTransform(scrollYProgress, [0, 1], ['100px', '0px'])
    return (
        <div className='about-section'>
            <AboutTitle name='Ui/Ux' />
            <AboutTitle name='Designer' />
            <AboutTitle name='+' />
            <AboutTitle name='Creative' />
            <AboutTitle name='Web' />
            <AboutTitle name='Developer' />
            <motion.div className='about-text' ref={ref} style={{ opacity: scrollYProgress, translateY: translateProgres1 }}>
                <motion.p className='greeting' style={{ translateX: translateProgres2, transition: '0.2s' }}>I'm Fawzi Sayed</motion.p>
                <motion.p style={{ translateX: translateProgres2, transition: '0.3s' }} className='about-block'>An independent digital designer and front-end developer. Passionate about crafting unforgettable experiences and providing companies with innovative, user-centric solutions for nearly a decade.</motion.p><br />
                <motion.p style={{ translateX: translateProgres2, transition: '0.4s' }} className='about-block'>Collaborating with global brands and agencies, I specialize in designing and developing websites and applications that prioritize interaction, motion, and visual engagement.</motion.p><br />
                <motion.p style={{ translateX: translateProgres2, transition: '0.5s' }} className='about-block'>My work has been on converting complex issues into straightforward, user-friendly solutions that are accessible to everyone.</motion.p><br />
                <motion.p style={{ translateY: translateProgres3, }} className='get-in' onMouseEnter={(e) => { changeCursorSize('60px') }} onMouseLeave={(e) => { changeCursorSize('0px') }}>Get in touch <FontAwesomeIcon className='contact-icon' icon="fa-solid fa-arrow-right" /></motion.p>
            </motion.div>
        </div >
    )
}
function SkillsAndEducation() {
    const [switchState, setSwitchState] = React.useState(false);
    const firstGroupRef = React.useRef(null)
    const secondGroupRef = React.useRef(null)
    React.useEffect(() => {
        if (switchState) {
            firstGroupRef.current.className = 'skills-group active';
            secondGroupRef.current.className = 'skills-group';
            setTimeout(() => {
                firstGroupRef.current.style.display = 'block'
                secondGroupRef.current.style.display = 'none'
            }, 300);
        } else {
            secondGroupRef.current.className = 'skills-group active';
            firstGroupRef.current.className = 'skills-group';
            setTimeout(() => {
                secondGroupRef.current.style.display = 'block'
                firstGroupRef.current.style.display = 'none'
            }, 300);
        }
    }, [switchState])
    function figureSwitchHover() {
        document.querySelectorAll('.figure-switch-btn').forEach((e) => {
            e.classList.toggle('active')
        })
    }
    return (
        <div className='skills-container'>
            <div className='section-header-container'>
                <p className='section-header'>Skills & Education</p>
                <p className='section-sub-header'>For those who know what they're looking for..</p>
                <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" value={switchState} onChange={() => { setSwitchState(!switchState) }} />
                <label className="react-switch-label" htmlFor={`react-switch-new`}>
                    <p className='label-switch-text'>Skills</p>
                    <span className="react-switch-button" />
                    <p className='label-switch-text'>Education</p>
                </label>
            </div>
            <div className='skills-designer-text'>
                <span>DESIG</span>
                <span>NER</span>
            </div>
            <div className='table-container'>
                <div className='skills-figure'>
                    <img src={skillsFigure} alt='skills-figure' className='skills-figure-img' />
                    <div className="react-switch-label figure-switch">
                        <p className='label-switch-text figure-switch-btn active' onMouseEnter={() => { figureSwitchHover() }}>Portfolio<FontAwesomeIcon className='figure-switch-icon' icon="fa-solid fa-arrow-right" /></p>
                        <p className='label-switch-text figure-switch-btn' onMouseEnter={() => { figureSwitchHover() }} >Hire me<FontAwesomeIcon className='figure-switch-icon' icon="fa-solid fa-arrow-right" /></p>
                    </div>
                </div>
                <div className='skills-text-section'>
                    <div className='skills-educations-container'>
                        <div className='skills-group' ref={firstGroupRef} >
                            <SkillItem textClass='education-text' nameClass='education-name' name='Advanced User Experience Design' sub='Udacity 2022' certficate={one} />
                            <SkillItem textClass='education-text' nameClass='education-name' name='User Experience Nanodegree' sub='Udacity 2022' certficate={two} />
                            <SkillItem textClass='education-text' nameClass='education-name' name='UX Design Fundamentals' sub='Mhara-Tech 2022' certficate={three} />
                            <SkillItem textClass='education-text' nameClass='education-name' name='Google UX Design Professional' sub='Coursera 2023' certficate={four} />
                        </div>
                        <div className='skills-group' ref={secondGroupRef} >
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='FIGMA' sub='01' icon={Figma} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='SKETCH' sub='02' icon={Sketch} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='ADOBE XD' sub='03' icon={AdobeXD} />
                            <SkillItem textClass='skill-text' nameClass='skill-name' name='ADOBE ILLUSTRATOR' sub='04' icon={AdobeIllustrator} />
                        </div>
                    </div>
                    <div className='counters-container'>
                        <img src={CounterOne} alt={CounterOne} />
                        <img src={CounterTwo} alt={CounterTwo} />
                        <img src={CounterThree} alt={CounterThree} />
                    </div>
                </div>
            </div>
        </div>
    )
}
function PortfolioSection() {
    return (
        <div className='portfolio-container' id='portfolio'>
            <div className='section-header-container'>
                <p className='section-header'>Portfolio & Projects</p>
                <p className='section-sub-header'>Latest projects</p>
            </div>
            <div className='portfolio-cards-container'>
                <PortfolioCard gridArea='1 / 1 / 2 / 2' projectName='Project Name' projectImage={PortfolioCardOne} />
                <PortfolioCard gridArea='1 / 2 / 3 / 4' projectName='Project Name' projectImage={PortfolioCardTwo} />
                <PortfolioCard gridArea='1 / 4 / 3 / 5' projectName='Project Name' projectImage={PortfolioCardThree} />
                <PortfolioCard gridArea='2 / 1 / 3 / 2' projectName='Project Name' projectImage={PortfolioCardFour} />
                <PortfolioCard gridArea='3 / 1 / 4 / 2' projectName='Project Name' projectImage={PortfolioCardFive} />
                <PortfolioCard gridArea='3 / 2 / 4 / 3' projectName='Project Name' projectImage={PortfolioCardSix} />
                <PortfolioCard gridArea='3 / 3 / 4 / 5' projectName='Project Name' projectImage={PortfolioCardSeven} />
            </div>
        </div>
    )
}
function ClientsComments() {
    React.useEffect(() => {
        const comments = document.querySelector('.comments-container')
        const commentsContainers = [...comments.children]
        // // 
        commentsContainers.slice(0, 6).reverse().forEach(comment => {
            const htmlString = comment.outerHTML;
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const htmlObject = doc.body.firstChild;
            comments.insertAdjacentElement("afterbegin", htmlObject);
        })
        // // 
        commentsContainers.slice(0, 6).forEach(comment => {
            const htmlString = comment.outerHTML;
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const htmlObject = doc.body.firstChild;
            comments.insertAdjacentElement("beforeend", htmlObject);
        })
        const refreshActiveComment = () => {
            document.querySelectorAll('.client-comment').forEach(e => {
                e.classList.remove('active')
                function inRange(x, min, max) {
                    return x >= min && x <= max;
                }
                function isElementCentered(element) {
                    const rect = element.getBoundingClientRect();
                    const windowCenter = window.innerWidth / 2;
                    return inRange(Math.trunc(rect.left + (rect.width / 2)), Math.trunc(windowCenter - 10), Math.trunc(windowCenter + 10));
                }
                if (isElementCentered(e)) {
                    e.classList.add('active')
                }
            })
        }
        let isDragging = false, startX, startScrollLeft;
        const dragStart = (e) => {
            isDragging = true;
            // 
            startX = e.pageX
            startScrollLeft = comments.scrollLeft;
            // 
            comments.classList.add('dragging')
        }
        const dragging = (e) => {
            if (!isDragging) return;
            comments.scrollLeft = startScrollLeft - (e.pageX - startX)
        }
        const dragStop = () => {

            isDragging = false;
            // 
            comments.classList.remove('dragging')
            // 
            refreshActiveComment()
        }
        const infiniteScroll = () => {
            if (comments.scrollLeft === 0) {
                comments.classList.add('no-trans')
                comments.scrollLeft = comments.scrollWidth - (2 * comments.offsetWidth)
                comments.classList.remove('no-trans')
            } else if (Math.ceil(comments.scrollLeft) === comments.scrollWidth - comments.offsetWidth) {
                comments.classList.add('no-trans')
                comments.scrollLeft = comments.offsetWidth
                comments.classList.remove('no-trans')
            }
        }
        comments.addEventListener('mousedown', dragStart)
        comments.addEventListener('mousemove', dragging)
        comments.addEventListener('mouseup', dragStop)
        comments.addEventListener('scroll', infiniteScroll)
    }, [])
    return (
        <div className='clients-container'>
            <div className='section-header-container'>
                <p className='section-sub-header'>Testimonials</p>
                <p className='section-header'>What Clients Say</p>
            </div>
            <div className='comments-container'>
                <ClientComment personImage={figure} personName='Brian Smith' personTitle='Project Manager' comment='I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!' />
                <ClientComment personImage={figure} personName='Lisa Morrison' personTitle='Photographer' comment='For me as a photographer, this is an awesome opportunity to share my works and to communicate with other people who are into graphic art and photography!' />
                <ClientComment personImage={figure} personName='John Lewis' personTitle='CEO, Designer' comment='When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help – I will be recommending you to everyone!' />
                <ClientComment personImage={figure} personName='Rita Johnson' personTitle='Sales Manager' comment='This is a great website for any type of creative agency or a designer to get inspired, educated and simply to see other designers’ works. Excellent job guys!' />
                <ClientComment personImage={figure} personName='Fawzi Sayed' personTitle='Ui/Ux Designer' comment='I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!' />
            </div>
        </div>
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
                <SkillsAndEducation />
                <PortfolioSection />
                <ClientsComments />
            </div>
        </CursorProvider>
    )
}
export default Home