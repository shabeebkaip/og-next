
import MobHeroSlider from '../../../shared/components/MobHeroSlider'
import OrangeGradient from '../../../shared/components/OrangeGradient'
import BlueGradient from '../../../shared/components/BlueGradient'
import { motion } from "framer-motion"
import { fadeIn } from '../../../constant/motion'
import { globalGetService } from '@/app/utils/apiServices'
import { getGlobalCookie } from '@/app/utils'
import Image from 'next/image'
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft'


const CommunityList =  ({pageContent, communityList}) => {
    const language = getGlobalCookie('language')
     
    const arrayImage = ['/Home/communityimg1.png', '/Home/communityimg2.png', '/Home/communityimg3.png']
    const array =[
        pageContent?.community_image,
        pageContent?.community_image_1,
        pageContent?.community_image_2
    ]
    return (
        <div className='relative grid w-full grid-cols-10 gap-5 mt-20 font-Sans '>
            <div className=' lg:col-span-6 col-span-10 bg-white box-shadow rounded-[23px] flex flex-col justify-start 2xl:px-16 md:px-10 px-0 2xl:py-20 md:py-14 py-0 gap-10'>
            <div className="lg:hidden sm:block ">
                        <MobHeroSlider item={array} className='w-full' />
                    </div>
                <div className='flex flex-col px-5 lg:px-0'>
                    <span className='text-[#FF8500] xl:text-[50px] text-[38px] font-medium leading-8 uppercase'>Join a diverse</span>
                    <span className=' xl:text-[50px] text-[38px] font-medium text-[#4C4C4D] uppercase'>community of:</span>
                </div>
                <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:gap-5'>
                    {communityList?.map((item, index) => (
                        <div className='px-5 pb-5 2xl:pr-5 lg:px-0 lg:pb-0' key={index}>
                            <h3 className='font-medium 2xl:text-[30px] xl:text-[26px] text-xl text-[#4C4C4D]'>{language === "ar" ? item.ar_name : item.name}</h3>
                            <h4 className='font-light 2xl:text-[26px] xl:text-[22px] text-lg text-[#4C4C4D]'>{language === "ar" ? item.ar_shortDescription : item.shortDescription}</h4>
                        </div>
                    ))}
                </div>

            </div>
            <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='flex-col hidden col-span-4 gap-3 lg:flex'>
                <motion.div
                    variants={fadeIn("top", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    className='w-full h-1/2'>
                    <Image className='w-full h-full box-shadow rounded-[23px]' src={pageContent?.community_image} alt="" width={1000} height={200} />
                </motion.div>
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    className='flex items-center w-full gap-3 h-1/2'>
                    <Image className='w-1/2 h-full box-shadow rounded-[23px] object-cover' src={pageContent?.community_image_1} alt="" width={1000} height={200} />
                    <Image className='w-1/2 h-full box-shadow rounded-[23px] object-cover' src={pageContent?.community_image_2} alt="" width={1000} height={200} />
                </motion.div>
            </motion.div>
           

            <div className='w-[300px] h-[300px] absolute left-[39%] lg:block hidden'>
                <OrangeGradient />
            </div>
            <div className='w-[200px] h-[200px] absolute left-[45%] bottom-0 lg:block hidden'>
                <OrangeGradient/>
            </div>
            <div className='w-[350px] h-[300px] absolute left-[16%] bottom-0 lg:block hidden'>
                <BlueGradient />
            </div>
        </div>
    )
}

export default CommunityList