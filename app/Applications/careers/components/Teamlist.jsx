'use client';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { fadeIn, fadeOut } from '../../../constant/motion';
import OrangeGradientLeft from '../../../shared/components/OrangeGradientLeft';
import { globalGetService } from '@/app/utils/apiServices';
import FormSubmission from '@/app/shared/components/FormSubmission';


const Teamlist = ({ teamList }) => {

    const [firstRender, setFirstRender] = useState(true);
    const [name, setName] = useState(null)
    const [popup, setPopup] = useState(false);

    const hideHandler = () => {
        setPopup(false)
    }

    return (
        <div className='relative' >
            <div className='sm:w-[300px] w-[200px] absolute sm:h-[500px] h-[300px] top-[45%] right-0 z-[-10] md:hidden'><OrangeGradientLeft /></div>
            <div className="absolute sm:w-[300px] w-[200px] sm:h-[500px] h-[300px] right-0  top-[-5%] z-[-10] md:hidden"><OrangeGradientLeft /></div>
            <div className='w-full font-Sans container mx-auto relative md:px-0 px-6'>
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    animate={firstRender ? 'show' : 'hidden'}
                    className='grid grid-cols-1 gap-4 mt-20 lg:grid-cols-3 md:grid-cols-2'>
                    {teamList?.map((item, index) => (
                        <motion.div
                            variants={fadeOut("right", "spring", index * 0.5, 0.75)}
                            initial="hidden"
                            animate={firstRender ? 'show' : 'hidden'}
                            key={index} className='grid  items-center justify-center w-full gap-[10%] py-10 box-shadow sm:px-10 px-7' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                            <div className='   h-[90%] grid grid-rows-6 px-3 '>
                                <h1 className=' 2xl:text-[30px] sm:text-[25px] text-[20px] font-medium row-span-2 text-[#4C4C4D] md:pb-10 w-[80%] uppercase'>{item.name}</h1>
                                <h3 className=' 2xl:text-[26px] text-lg font-light text-[#4C4C4D] pb-10 row-span-3'>{item.desc}</h3>
                                <button onClick={() => {
                                    setPopup(true)
                                    setName(item?.name)
                                }}
                                    className='border mt-3 h-[40px] rounded-[40px] border-[#FF8500] row-span-1 text-[12px] text-[#1C2126] lg:w-[80%] md:w-[50%] sm:w-[40%] w-[53%] xl:w-[40%] md:px-2'>
                                    Appply Now
                                    <span className='pl-4 '>&rarr;</span>
                                </button>
                            </div>


                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {popup && <FormSubmission name={name} orderHideHandler={hideHandler} id="career" />}

        </div>
    );
};

export default Teamlist;
