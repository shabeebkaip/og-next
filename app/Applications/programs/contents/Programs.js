"use client"
import FooterTop from '@/app/shared/components/FooterTop';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeroApi, getProgramListApi } from '../api'
import { setProgram, setProgramHero } from '@/app/redux/programReducer';

const ProgramHero = dynamic(() => import('../../programs/components/ProgramHero'))
const Mob_Program = dynamic(() => import('../components/Mob_Program'))
const OrangeGradient = dynamic(() => import('@/app/shared/components/OrangeGradient'))
const ProgramList = dynamic(() => import('../components/ProgramList'))
const BlueGradient = dynamic(() => import('@/app/shared/components/BlueGradient'))


const ProgramsContents = () => {
    const dispatch = useDispatch()
    const { hero, program } = useSelector(state => state.program)

    useEffect(() => {
        getHeroApi().then(res => { dispatch(setProgramHero(res[0])) })
        getProgramListApi().then(res => { dispatch(setProgram(res)) })
    }, [])

    return (
        <>
            <div className="relative px-6 md:px-0 overflow-hidden sm:pb-[80px] pb-8 ">
                <div className="container mx-auto">
                    <div className='lg:hidden flex'>
                        {hero && <Mob_Program data={hero} />}
                    </div>
                    <div className='hidden lg:flex'>
                        {hero && <ProgramHero data={hero} />}
                    </div>
                </div>
                {program && <div className="w-[40%] h-[7%] absolute right-0 md:block hidden "><OrangeGradient /></div>}
                <div className="container mx-auto">
                    <ProgramList program={program} />
                </div>
                {program &&
                    <div className="md:w-[30%] h-[7%] absolute  left-0 top-[36%] z-[-1] md:block hidden "><OrangeGradient /></div>
                }
                <div className="w-[40%] h-[7%] absolute right-0 md:block hidden "><OrangeGradient /></div>
                <div className="container mx-auto">
                    {program && <ProgramList program={program} />}
                </div>
                <div className="md:w-[30%] h-[7%] absolute  left-0 top-[36%] z-[-1] md:block hidden "><OrangeGradient /></div>

                <div className="absolute md:w-[40%] h-[7%] bottom-[10%] right-0 z-[-1] md:block hidden"><BlueGradient /></div>
            </div>
            {program && <FooterTop />}
        </>
    );
}

export default ProgramsContents;