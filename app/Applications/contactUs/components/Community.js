
import Image from 'next/image';
import OrangeGradient from '../../../shared/components/OrangeGradient'
import FourImages from './FourImage';
import { Oneimage } from './OneImage';
import Threeimage from './ThreeImage';
import TwoImages from './TwoImage';
import { motion } from 'framer-motion'



const Community = ({ mentor, index }) => {
    return (
        <div className="container relative mx-auto">
            <div className="flex flex-col w-full gap-5 p-2 font-sans lg:flex-row lg:p-4">



                <div className="flex w-full lg:w-1/2">
                    <div className="md:p-8 p-2 rounded-[23px] flex justify-center flex-col gap-10">
                        <h1 className="text-[24px] xl:text-[50px] lg:text-[30px] md:text-[50px] font-medium text-orange-500 leading-tight uppercase">{mentor?.heading}</h1>
                        <div className="lg:hidden sm:block">
                            <Image width={1000} height={1000} src={mentor?.images?.[0]} alt="Image" className="w-full h-auto rounded-[23px]" />
                        </div>
                        <div className="text-[26px] lg:text-[20px] xl:text-[26px]  font-light leading-7 lg:leading-8 text-[#4C4C4D] md:justify-center md:items-center">
                            <p className="lg:max-w-[500px]">{mentor?.description1}</p>
                            <p className="mt-4">{mentor?.description2}</p>
                        </div>
                        <div>
                            <button className="border px-9 lg:px-14 py-3 lg:py-1 rounded-full border-orange-500 text-[20px] md:text-[30px] xl:text-[30px] lg:text-[25px] text-[#4C4C4D] font-medium">
                                {mentor?.btnText}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-col hidden w-full gap-4 lg:w-1/2 lg:flex md:p-5">
                    {mentor?.images?.length === 3 && <Threeimage images={mentor.images} />}
                    {mentor?.images?.length === 1 && <Oneimage images={mentor.images} />}
                    {mentor?.images?.length === 2 && <TwoImages images={mentor.images} />}
                    {mentor?.images?.length === 4 && <FourImages images={mentor.images} />}
                </div>



            </div>
        </div>
    )
}

export default Community


