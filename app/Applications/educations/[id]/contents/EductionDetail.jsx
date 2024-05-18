"use client"
import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { globalGetService } from '@/app/utils/apiServices';
import Aboutus from "../components/AboutUs"
import ZoomClass from "../components/ZoomClass"
import CourseProgram from "../components/CourseProgram"
import Organizer from "../components/Organizer"
import TakeCourse from "../components/TakeCourse"
import AskQuestion from "../components/AskQuestion"
import ShareCourse from "../components/ShareCourse"

const EductionDetail = ({educationId}) => {
    console.log(educationId);
    const id = educationId?.id

    const [data,setData] = useState()
    useEffect(() => {
        globalGetService('course-list', { id })
            .then(response => {
                setData(response.data)
            })
    }, [])
    console.log(data);
  return (
    <div className='container mx-auto px-3 md:px-0 overflow-hidden'>
      <Hero educationDetail={data}/>
   <Aboutus educationDetail={data}/>
   <ZoomClass  educationDetail={data}/>
   <CourseProgram educationDetail={data}/>
   <Organizer educationDetail={data}/>
   <TakeCourse educationDetail={data}/>
   <AskQuestion educationDetail={data}/>
   <ShareCourse/>
    </div>
  )
}

export default EductionDetail
