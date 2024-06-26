
import OrangeGradient from '../../../shared/components/OrangeGradient'
import BlueGradient from '../../../shared/components/BlueGradient'
import { motion } from "framer-motion"
import { fadeIn } from '../../../constant/motion'
import Image from 'next/image'
import { globalGetService } from '@/app/utils/apiServices'
import { getGlobalCookie } from '@/app/utils'

const ProgramHub =  ({programs, pageContent}) => {
    const language = getGlobalCookie('language')
    const array = [
        {
            title: 'Pre-Inc & Incubation Programs:',
            description: 'Refine business models, develop prototypes, and validate ideas.'
        },
        {
            title: 'Entrepreneurship Development Courses: ',
            description: 'Educate yourself on various aspects of entrepreneurship.'
        },
        {
            title: 'Acceleration and  Post-Act Programs:',
            description: 'Rapidly scale your startup with intensive programs.'
        },
        {
            title: 'International Exchange Programs:',
            description: 'Engage in global networking, market exploration, and partnership building. '
        },
        {
            title: 'Industry-Specific Programs:',
            description: 'Receive specialized support and expertise. '
        },
        {
            title: 'Fellowship or Residency Programs:',
            description: 'Receive dedicated support, resources, and mentorship.'
        },
        {
            title: 'Pre-Acceleration Workshops:',
            description: 'Prepare for accelerator programs with refined pitches and strategies.'
        },
        {
            title: 'Innovation Challenges or Hackathons:',
            description: 'Showcase creativity and problem-solving skills.'
        },
        {
            title: 'Corporate Innovation Programs: ',
            description: 'Collaborate on innovation challenges, projects, or partnerships. '
        },
        {
            title: 'Investor Pitch Programs:',
            description: 'Craft effective pitches to attract investors or secure funding.'
        },

    ]
    return (
        <div className='relative mt-20'>
            <div className=' text-[50px] font-medium text-[#4C4C4D] w-full flex justify-center'><h3 className='text-center'>HUB <span className=' text-[#FF8500] border border-[#4C4C4D] rounded-[32px] px-3'>PROGRAMS</span></h3></div>
            <div className='grid grid-cols-10 gap-3 mt-20 '>
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"} className='flex col-span-10 lg:gap-2 mx-2 lg:col-span-3 lg:flex-col'>
                    <Image width={1000} height={200} className=' w-full lg:h-[60%] box-shadow rounded-[23px] object-cover' src={pageContent?.progam_image} alt="" />
                    <Image width={1000} height={200} className=' w-full lg:h-[40%] box-shadow rounded-[23px] object-cover hidden lg:block ' src={pageContent?.progam_image_1} alt="" />
                </motion.div>

                <div className=' lg:col-span-7 col-span-10 md:bg-white  rounded-[23px] 2xl:px-16 md:px-10 px-0 mx-2 2xl:py-20 md:py-14 py-0 flex flex-col gap-8 mob_box_shadows'>
                    <div className=''>
                        <h3 className=' uppercase text-[#FF8500] xl:text-[50px] sm:text-[40px] text-[30px] font-medium xl:leading-8'>Explore our programs</h3>
                        <h3 className=' uppercase text-[#4C4C4D] xl:text-[50px] sm:text-[40px] text-[30px] font-medium'>designed for your success:</h3>
                    </div>
                    <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:gap-5'>
                        {
                            programs.map((item, index) => (
                                <div className='pb-5 2xl:pr-5 lg:px-0 lg:pb-0' key={index}>
                                    <h3 className='font-medium 2xl:text-[30px] xl:text-[26px] text-xl text-[#4C4C4D]'>{language === "ar" ? item.ar_programName : item.programName}</h3>
                                    <h4 className='font-light 2xl:text-[26px] xl:text-[22px] text-lg text-[#4C4C4D]'>{language === "ar" ? item.shortDescription : item.shortDescription}</h4>
                                    {index === Math.floor(array.length / 2) && (
                                        <div className='my-5 md:hidden'>
                                            <Image className='w-full  box-shadow rounded-[23px]' src={pageContent?.progam_image_1} alt="" />
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-[300px] h-[300px] absolute right-0 top-0 md:block hidden'>
                <OrangeGradient />
            </div>
            <div className='w-[140px] h-[130px] absolute left-[34%] bottom-[57px] md:block hidden'>
                <OrangeGradient />
            </div>
            <div className='absolute top-0 -left-28 h-[300px] w-[300px] block md:hidden z-[-1]'><OrangeGradient /></div>
            <div className='absolute top-[31%] left-[28rem] h-[300px] w-[300px] block md:hidden z-[-1]'><BlueGradient /></div>

        </div>
    )
}

export default ProgramHub