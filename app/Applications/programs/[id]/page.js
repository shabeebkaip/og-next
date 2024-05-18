"use client"
import React from 'react'
import ProgramDetails from './contents/ProgramDetails'
import { useParams, useSearchParams } from 'next/navigation';

const Page = ({searchParams}) => {
  return (
    <div><ProgramDetails programId={searchParams}/></div>
  )
}

export default Page