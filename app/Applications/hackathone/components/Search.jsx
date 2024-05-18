import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const array =[
        {
            title:"Overview"
        },
        {
            title:"My projects"
        },
        {
            title:"Rules"
        },
        {
            title:"Projects gallery"
        },
        {
            title:"Updates"
        },
        {
            title:"Participants"
        },
        {
            title:"Resources & Inspiration"
        },
        {
            title:"Feedback Survey"
        },
    ]
  return (
    <div className='relative flex flex-col justify-between gap-10 py-12 md:gap-0 md:flex-row'>
         <div className='block md:hidden'>
            <div className='border border-[#4C4C4D] rounded-full  flex flex-row  p-2 '>
            <CiSearch className="h-[25px] w-[25px] " />
            <input type="text" name="" id=""  placeholder="Search" className=" border-none outline-none text-[16px] ml-2" />

            </div>
            </div>
      <div className='flex flex-row flex-wrap gap-3'>
                {array.map((item, index) => (
                   <button key={index} className='border border-gray-700 rounded-[40px] text-[16px] 2xl:px-6 px-3 hover:bg-[#FF8500]' >{item.title}</button>
                ))}
            </div>
            <div className='hidden md:block'>
            <div className='border border-[#4C4C4D] rounded-full  flex flex-row  p-1'>
            <CiSearch className="h-[25px] w-[25px] " />
            <input type="text" name="" id=""  placeholder="Search" className=" border-none outline-none text-[16px] ml-2" />

            </div>
            </div>
           
    </div>
  )
}

export default Search
