import BlueGradient from '@/app/shared/components/BlueGradient';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import React from 'react'
import { FaAward } from 'react-icons/fa6';
import { TfiWorld } from 'react-icons/tfi';
import moment from "moment"
import { displayDateFormatShort } from '@/app/constant';
import { motion } from "framer-motion"
import Image from 'next/image';
import { fadeIn } from '../../../../constant/motion'



const Hero = ({ educationDetail }) => {
   
    return (

        <div className='relative flex flex-col w-full xl:w-full lg:flex-row md:gap-4 font-Sans  p-1'>

            <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='lg:w-1/2 '>
                <Image width={1000} height={500} src={educationDetail?.image} alt='Image' className='w-full  rounded-[23px] hidden md:block object-cover ' />
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='relative z-40 flex lg:w-1/2 '>
                <div className='flex flex-col w-full rounded-[23px] justify-center items-center md:py-8 bg-white   ' style={{ boxShadow: '0px 4px 20px 0px #00000026' }}>

                    <div className='md:absolute -right-8 top-[-14%] w-[25%] h-[50%] hidden'><BlueGradient /></div>

                    <Image width={1000} height={500} src={educationDetail?.image} alt='Image' className='w-full rounded-[23px] md:hidden block ' />
                    <div className='flex flex-col justify-start xl:w-[80%] xl:gap-10 gap-5 p-4 py-1' >
                        <div className='flex text-[#4C4C4D] gap-3 py-3 '>
                            <button className=' bg-[#92D1FB] rounded-full md:px-4 px-1 lg:h-[33px] lg:w-[135px] '>{educationDetail?.date ? moment(educationDetail?.date).format(displayDateFormatShort) : ""}</button>
                            <button className='border border-[#92D1FB] rounded-full md:px-4 px-1 lg:h-[33px] lg:w-[135px]'>{educationDetail?.time}hours</button>
                            {educationDetail?.license ? (
                                <button className="rounded-full md:px-4 px-1 border border-[#FF8500] lg:h-[33px] lg:w-[135px]">Licence</button>
                            ) : null}

                        </div>
                        <div className='flex -mt-4 gap-11'>
                            <div className='flex items-center justify-center gap-3'><TfiWorld className='w-6 h-6 text-[#4C4C4D]' /><p className='text-[16px] font-medium '>{educationDetail?.mode}</p></div>
                            <div className='flex items-center justify-center '><FaAward className='w-7 h-7 text-[#4C4C4D]' />{educationDetail?.rating}<p className='text-[16px] font-medium ml-4'>Rating</p></div>
                        </div>
                        <h2 className='xl:text-[40px] text-[30px] text-[#4C4C4D] font-medium xl:leading-[58px] uppercase -mt-4'>{educationDetail?.heading}</h2>
                        <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[20px] text-[20px] leading-[30px] font-normal  -mt-4'>{educationDetail?.description}</p>
                        <div className='flex text-center'>
                            <button className='border border-[#92D1FB] rounded-full px-4 h-[53px] w-[270px] md:text-[24px] font-medium text-[#4C4C4D]  mt-2  text-[18px]'>Registration</button>
                        </div>
                    </div>

                    <div className='absolute -left-12 h-[200px] w-[200px] bottom-[-2%] '><OrangeGradient /></div>

                </div>

                {/* <div className='absolute h-[300px] w-[30%] -bottom-[18%] -right-[6%] -z-10 '><OrangeGradient /></div> */}

            </motion.div>


        </div>
    )
}

export default Hero
