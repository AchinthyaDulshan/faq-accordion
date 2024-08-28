import React from 'react'
import IconPlus from '../assets/images/icon-plus.svg'
import IconMinus from '../assets/images/icon-minus.svg'

const FaqItem = ({Question,Answer,isOpen,toggleFAQ}) => {
    return (
        <div className='pt-3'>
            <div className='pb-3'>
                {/* FAQ item header --> Question  */}
                <button onClick={toggleFAQ} className='flex justify-between items-center gap-6 w-full cursor-pointer  group'>
                    <h2 className='font-semibold md:text-lg text-base text-Dark-purple text-left tracking-tight group-hover:text-purple-on-star'>{Question}</h2>
                    <img className='' src={isOpen ? IconMinus : IconPlus} alt="icon" />
                </button>
            </div>
            <div>
                {/* FAQ item body --> Answer  */}
                {isOpen && <p className='text-wrap md:text-base text-sm text-Grayish-purple pb-5 animate-[dropFromUp_0.5s_ease-in-out]'>{Answer}</p>}
            </div>
        </div>
    )
}

export default FaqItem