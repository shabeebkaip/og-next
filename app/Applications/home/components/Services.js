
import OrangeGradient from '../../../shared/components/OrangeGradient';
import BlueGradient from '../../../shared/components/BlueGradient';
import { motion } from "framer-motion"
import { fadeIn, fadeOut } from '../../../constant/motion';
import { globalGetService } from "@/app/utils/apiServices";
import BlueGradientRight from '@/app/shared/components/BlueGradientRight';


const Services = ({ serviceData, pageContent }) => {
    console.log(serviceData);
    const pageContent1 = pageContent[0]?.pageContent[0]
    const text = pageContent1?.text
    return (
        <div className='w-full font-Sans'>

            <div className='relative flex justify-center w-full mt-12 md:mt-28 '>
                <div className='w-[20%] absolute h-full top-[10%] left-[10%] lg:block hidden'><BlueGradient /></div>
                <div className='absolute -mt-36 left-[26rem] h-[300px] w-[300px] block md:hidden z-[-1]'><OrangeGradient /></div>
                <div className='absolute mt-[5rem] -left-28 h-[300px] w-[300px] block md:hidden z-[-1]'><BlueGradient /></div>
                <div className='w-[50%] absolute h-[100%] top-[68%]  block md:hidden left-0 '><BlueGradient /></div>
                <div className='w-[40%] absolute h-[100%] top-[-30%]  block md:hidden right-0 '><OrangeGradient /></div>



                <h3 className='2xl:text-[50px] xl:leading-[70px] lg:leading-[60px] xl:text-[35px] md:text-[30px] text-center 2xl:w-[79%] text-[25px] xl:w-[70%]  font-medium text-gray-500 bg-white box-shadows p-5 rounded-3xl md:z-[100] break-words  z-0'>
                    {text?.split(pageContent1?.borderText).map((splitText, index) => (
                        <div key={index} style={{ display: 'inline' }}>
                            {index > 0 && (
                                <span
                                    className="py-2 px-5 border-2 border-gray-500 rounded-[53px]"
                                    style={{
                                        // If ar_borderText and ar_textColor are the same, apply both border and text color
                                        color:
                                            pageContent1?.textColor.trim().toLowerCase() ===
                                                pageContent1?.borderText.trim().toLowerCase()
                                                ? '#FF8500'
                                                : 'inherit',
                                    }}
                                >
                                    {pageContent1?.borderText}
                                </span>
                            )}
                            {splitText?.split(' ').map((word, innerIndex) => (
                                <span
                                    key={innerIndex}
                                    style={{
                                        color:
                                            pageContent1?.textColor.trim().toLowerCase() === word.trim().toLowerCase()
                                                ? '#FF8500'
                                                : 'inherit',
                                        border:
                                            pageContent1?.borderText.trim().toLowerCase() === word.trim().toLowerCase()
                                                ? '2px solid '
                                                : 'none',
                                    }}
                                >
                                    {word}
                                    {innerIndex < splitText?.split(' ').length - 1 && ' '}
                                </span>
                            ))}
                        </div>
                    ))}
                </h3>
                <div className='w-[20%] absolute h-full right-[5%] top-[-10%] lg:block hidden'><OrangeGradient /></div>
            </div>
            <div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='grid grid-cols-1 gap-4 mt-20 md:grid-cols-3'>
                {serviceData?.map((item, index) => (
                    <div
                        variants={fadeOut("right", "spring", index * 0.5, 0.75)}
                        // initial="hidden"
                        whileInView={"show"}
                        initial="hidden"
                        key={index} className='flex items-center justify-center w-full box-shadow' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '23px', height: '300px' }}>
                        <div className=' 2xl:w-[80%] w-[90%]'>
                            <h1 className=' 2xl:text-[30px] text-[25px] font-medium text-[#4C4C4D] w-[80%]'>{item.title}</h1>
                            <h3 className=' 2xl:text-[26px] text-lg font-light text-[#4C4C4D]'>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
