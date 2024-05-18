"use client"
import React, { useEffect, useState } from 'react'
import NewsDetailHero from '../components/NewsDetailHero'
import { globalGetService } from '@/app/utils/apiServices'
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft'
import BlueGradientRight from '@/app/shared/components/BlueGradientRight'

const NewsDetails = ({ newsId }) => {
    const id = newsId?.id

    const [data, setData] = useState({})

    useEffect(() => {
        globalGetService('news', { id })
            .then(response => {
                setData(response.data)
            })
    }, [])
    return (
        <div className="w-full overflow-hidden pb-10 ">
            <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px]  right-0 top-10  lg:hidden">
                <OrangeGradientLeft className="" />
            </div>
            <div className="absolute md:w-[200px] w-[100px] md:h-[300px] h-[200px] left-0 top-[210px]  lg:hidden  ">
                <BlueGradientRight />
            </div>
            <div>

                <NewsDetailHero newsDetail={data} />
                <div className='mt-20 '>

                    {/* <News /> */}



                </div>
            </div>
        </div>
    )
}

export default NewsDetails