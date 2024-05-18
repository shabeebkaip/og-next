import React from 'react'
import Hero from '../components/Hero'
import Event from '../components/Event'
import ReverseSponser from '../components/ReverseSponsor'
import PageContent from '../components/PageContent'
import Requirements from '../components/Requirements'
import PrizeMobile from '../components/PrizeMobile'
import Prize from '../components/Prize'
import JudgeMobile from '../components/JudgeMobile'
import Judges from '../components/Judges'

const ReversePitch = () => {
    return (
        <div className='pb-10'>
            <div className='container px-6 mx-auto md:px-0'>
                <Hero />
                <Event />
            </div>
            <ReverseSponser />

            <div className='container  mx-auto'>
                <PageContent />
                <Requirements />

                <div>
                    <div className='md:block lg:hidden'><PrizeMobile /></div>
                    <div className='lg:block hidden'><Prize /></div>
                    <div className='md:hidden block'><JudgeMobile /></div>
                    <div className='md:block hidden'><Judges /></div>

                </div>


            </div>


        </div>
    )
}

export default ReversePitch