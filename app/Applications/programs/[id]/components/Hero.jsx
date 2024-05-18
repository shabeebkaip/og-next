import { getGlobalCookie } from '@/app/utils'
import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../../../constant/motion';
import BlueGradient from '@/app/shared/components/BlueGradient';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import Image from 'next/image';

const Hero = ({programDetail}) => {
  let language = getGlobalCookie('language')

  return (
    <div className='container  relative flex flex-col w-full px-3 mx-auto lg:flex-row md:gap-4 font-Sans md:px-0 overflow-hidden pb-8'>
            <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='lg:w-1/2 '>
                <Image src={programDetail?.heroImage} alt='Image' className='w-full h-full rounded-[23px] hidden md:block object-cover' width={200} height={200} />
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='relative z-40 flex lg:w-1/2 '>
                <div className='flex flex-col w-full rounded-[23px] justify-center items-center xl:py-8  bg-white ' style={{ boxShadow: '0px 4px 20px 0px #00000026' }}>
                    <Image src={programDetail?.heroImage} alt='Image' className='w-full h-full rounded-[23px] md:hidden block ' width={200} height={200} />

                    <div
                        className='flex flex-col justify-start   xl:w-[80%] xl:gap-10  gap-5 p-4 py-3' >
                        <h2 className='xl:text-[50px] lg:text-[38px] text-[30px]  text-[#4C4C4D] font-medium xl:leading-[58px] '>{language === "ar" ? programDetail?.ar_programName : programDetail?.programName}</h2>
                        <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[20px] text-[20px] leading-[30px] font-normal'>{language === "ar" ? programDetail?.ar_description : programDetail?.description}</p>

                    </div>
                </div>
            </motion.div>


            <div className='absolute right-0 top-[-14%] lg:w-[25%] h-[50%] '><BlueGradient /></div>
            <div className='absolute lg:bottom-[50px] lg:right-[38%] lg:w-[200px] h-[200px]  bottom-[-20%] lg:z-[100] hidden lg:block'><OrangeGradient /></div>
            <div className='absolute left-[20%] h-[200px] w-[60%]  bottom-[-10%] lg:hidden'><OrangeGradient /></div>


        </div>
  )
}

export default Hero