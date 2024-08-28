import React, { useState } from 'react'
import IconStar from '../assets/images/icon-star.svg'

import FaqItem from './FaqItem'


const FaqCard = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const FAQs = [{
        'question':'What is Frontend Mentor, and how will it help me?',
        'answer':'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
    },{
        'question':'Is Frontend Mentor free?',
        'answer':'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
    },{
        'question':'Can I use Frontend Mentor projects in my portfolio?',
        'answer':'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
    },{
        'question':'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
        'answer':'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
    }]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-White rounded-xl p-8 max-w-[43rem] mx-5'>
            <div className='flex gap-6 mb-5 md:mb-3'>
                <img src={IconStar} alt="" />
                <h1 className='font-bold text-4xl text-Dark-purple'>FAQs</h1>
            </div>
            <div className='divide-y divide-Grayish-purple divide-opacity-20'>
                {FAQs.map((faq,index)=>(
                    <FaqItem key={index} Question={faq.question} Answer={faq.answer} isOpen={openIndex === index} toggleFAQ={() => toggleFAQ(index)}/> 
                ))}
            </div>
        </div>
    )
}

export default FaqCard