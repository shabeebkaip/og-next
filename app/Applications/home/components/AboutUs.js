import { motion } from "framer-motion";
import { fadeIn } from '../../../constant/motion'
import Image from "next/image";
import { getGlobalCookie } from "@/app/utils";

const AboutUs = ({aboutus}) => {
    const language = getGlobalCookie('language')
    return (
        <div className='relative grid w-full grid-cols-1 gap-5 mt-16 lg:grid-cols-2 font-Sans'>
            <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
                <Image className='w-full rounded-[23px] box-shadow mt-3 h-full object-cover  hidden md:block' src={aboutus?.image} alt="" width={1000} height={200} />
                <Image className='w-full rounded-[23px] box-shadow mt-3 h-full  object-cover' src={aboutus?.image1} alt="" width={1000} height={200} />
            </motion.div>
            <div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='w-full md:bg-white md:box-shadow md:rounded-[23px] flex flex-col justify-center md:items-center box-shadow '>
                <div className='flex flex-col md:w-[80%] w-full xl:gap-7 gap-3  py-5 px-3 md:px-0'>
                    <h3 className='text-[#FF8500] 2xl:text-[50px] lg:text-[40px] text-[34px] '>{language === "ar" ? aboutus?.ar_heading : aboutus?.heading}</h3>

                    {aboutus?.description && aboutus?.description.map((item, index) => (
                        <h4 className='2xl:text-[24px] xl:text-lg md:text-[17px] text-[24px] font-light leading-6	' key={index}>{language === "ar" ? item.ar_text : item.text}</h4>
                    ))}
                    <Image className='w-full rounded-[23px] box-shadow h-full  md:hidden object-cover' src={aboutus?.image} alt="" width={1000} height={200} />
                    <h3 className='text-[#FF8500] 2xl:text-[50px] xl:text-[40px] text-[34px]'>{language === "ar" ? aboutus?.ar_heading1 : aboutus?.heading1}</h3>
                    {aboutus?.description_1 && aboutus?.description_1.map((item, index) => (
                        <h4 className='2xl:text-[24px] xl:text-lg md:text-[17px] text-[24px] font-light leading-6 ' key={index}>{language === "ar" ? item.ar_text : item.text}</h4>
                    ))}

                </div>

            </div>

        </div>

    );
}

export default AboutUs;