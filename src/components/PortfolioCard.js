import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCursor } from './CursorProvider'

function PortfolioCard(props) {
    const { setCursorSize } = useCursor()
    return (
        <div className='portfolio-card' style={{ gridArea: props.gridArea }}>
            <img className='portfolio-card-image' src={props.projectImage} alt={props.projectName} />
            <div className='card-text-container'>
                <div>
                    <p className='card-see-more'>See more</p>
                    <p className='card-name' onMouseEnter={() => { setCursorSize('65px') }} onMouseLeave={() => { setCursorSize('0px') }}>{props.projectName}</p>
                </div>
                <FontAwesomeIcon className='contact-icon certficate-btn' icon="fa-solid fa-arrow-right" />
            </div>
        </div>
    )
}

export default PortfolioCard