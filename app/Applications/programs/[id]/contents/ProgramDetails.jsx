"use client"
import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ApplicationProcess from '../components/ApplicationProcess'
import EligibilityCriteria from '../components/EligibilityCriteria'
import MobEligibilityCriteria from '../components/MobEligibiltyCriteria'
import ApplyNow from '../components/ApplyNow'
import {getProgramDetails,getPageContent} from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { setProgramDetails,setProgramPageContent } from '@/app/redux/programReducer';



const ProgramDetails = ({ programId }) => {
  const id = programId?.id
  const { programDetails, pageContentProgram } = useSelector(state => state.program)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  

  useEffect(() => {
    getProgramDetails(id).then(res => { dispatch(setProgramDetails(res)) })
    getPageContent().then(res => { dispatch(setProgramPageContent(res[0])) })

  }, [])
 

  useEffect(() => {
    if ( programDetails && pageContentProgram) {
        setLoading(false)
    }
}, [ programDetails, pageContentProgram])
if(loading) return <div className='h-screen'></div>
  
  return (
    
    <div className='overflow-hidden relative'>
      {programDetails && <Hero programDetail={programDetails} />}
      {programDetails && <ApplicationProcess programDetail={programDetails} />}
      <div className='hidden md:block'>
      {programDetails && <EligibilityCriteria programDetail={programDetails} />}
      </div>
      <div className='md:hidden'>
      {programDetails && <MobEligibilityCriteria programDetail={programDetails}/>}
      </div>
      {pageContentProgram && <ApplyNow pageContent1={pageContentProgram}/> }
    </div>
  )
}

export default ProgramDetails