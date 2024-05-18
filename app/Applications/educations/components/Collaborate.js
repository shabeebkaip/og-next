"use client"
import { useEffect, useState } from 'react';
import { globalGetService } from '@/app/utils/apiServices';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';

const Collaborate = () => {

  const [universities, setuniversities] = useState([])
  useEffect(() => {
    globalGetService('universities')
        .then(response => {
          setuniversities(response.data)
        })
}, [])
  

  return (
    <div className="container mx-auto mt-12 ">
    <div className="flex flex-col items-center justify-center ">
        <p className="text-[#FF8500] md:border rounded-full px-1 py-1 border-[#656565] 2xl:leading-[75px] leading-[44px] lg:text-[40px] font-normal uppercase 2xl:w-[790px] lg:w-[680px] 2xl:text-[50px] text-[34px] md:text-[40px] text-center "> We collaborate <span className='hidden md:inline-block' > with 500+</span> </p>
        <span className='md:hidden flex border rounded-full px-2 py-1 text-[#FF8500] border-[#656565] leading-[44px] font-normal uppercase text-[34px]' > with 500+</span>
        <p className="2xl:leading-[75px] leading-[44px] font-normal 2xl:text-[50px] text-[34px] md:text-[40px] lg:text-[40px]    text-center uppercase">professors, universities, companies</p>
    </div>
  
    
    <Swiper
        spaceBetween={15}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        className="flex justify-center px-2 py-10 pb-32 custom-scrollbar"
        style={{paddingBottom:'80px'}}
        autoplay={{ delay: 3000 }}
        initialSlide={1}
        breakpoints={{

            1024: {
                slidesPerView: 5
            },

            768: {
                slidesPerView: 4
            },

            0: {
                slidesPerView: 2
            }
        }}
    >     
          {universities.map((item, index) => (
            <SwiperSlide key={index} className=''>


                <Image  className="object-contain w-20 h-20 " src={item.image} alt={`img-${index}`} width={200} height={200}/>

            </SwiperSlide>
        ))}
       
      
    </Swiper>
</div>
  );
};

export default Collaborate;
