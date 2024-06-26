"use client"
import { useEffect, useState } from 'react'
import MobHeroSlider from '../../../shared/components/MobHeroSlider'
import Image from 'next/image'
import { globalGetService } from '@/app/utils/apiServices'
const PageContent = () => {



    const [pageContent, setPageContent] = useState([])
    const array = [
        pageContent?.image,
        pageContent?.image_1,
        pageContent?.image_2
    ]

    useEffect(() => {
        globalGetService('hero', { key: "reverse_page" })
            .then(response => {
                setPageContent(response.data[0])
            })
    }, [])
    return (
        <div className='md:px-3 px-6'>
            <div className='flex items-center justify-center my-20 '>
                <button className='border  rounded-[40px] border-[#FF8500]  text-[20px] text-[#1C2126] px-6 py-2'>
                    Join hackathon
                    <span className='pl-4'>&rarr;</span>
                </button>

            </div>

            <div className='flex flex-col gap-8 pt-20 xl:gap-16 lg:flex-row'>
                <div className='hidden gap-5 lg:flex lg:w-1/2 '>

                    <div className='flex flex-col items-center justify-center gap-[20px] '>
                        <Image src={pageContent?.image} className='rounded-[23px] w-full h-[50%] object-cover' width={200} height={200} alt=''></Image>
                        <Image src={pageContent?.image_1} className='rounded-[23px] w-full h-[50%] object-cover' width={200} height={200} alt=''></Image>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src={pageContent?.image_2} className='rounded-[23px]  lg:h-full w-full  h-[50%] object-cover ' width={200} height={200} alt=''></Image>
                    </div>


                </div>
                <MobHeroSlider item={array} />

                <div className='flex flex-col items-center justify-center lg:w-1/2'>
                    <h1 className='uppercase text-[#FF8500] 2xl:text-[50px]  xl:text-[30px] text-[34px]   font-medium '>{pageContent?.text}</h1>
                    <p className='2xl:text-[26px] xl:text-[18px] text-[24px] text-[#4C4C4D] font-normal pt-4'>{pageContent?.text_1}</p>
                    <p className='2xl:text-[26px] xl:text-[18px] text-[24px] text-[#4C4C4D] font-normal pt-4'>{pageContent?.text_2}</p>
                </div>
            </div>
        </div>
    )
}

export default PageContent
