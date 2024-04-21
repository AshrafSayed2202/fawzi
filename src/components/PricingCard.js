import React from 'react'

function PricingCard(props) {
    return (
        <div className='pricing-card'>
            <div className='pricing-text'>
                <div>
                    <p className='pricing-header'>{props.head}</p>
                    <p className='pricing-sub-header'>{props.sub}</p>
                </div>
                <div>
                    <p className={props.noteType === 'text' ? 'note' : 'note round'}>{props.note}</p>
                    <p className={props.priceType === 'price' ? 'price' : 'note'}>{props.price}</p>
                </div>
            </div>
            <div className={props.btnType === 'normal' ? 'pricing-btn' : 'pricing-btn trans'}>{props.btnType === 'normal' ? 'Get Started' : 'Free Skill Check'}</div>
        </div>
    )
}

export default PricingCard