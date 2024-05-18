import React from 'react'
import EductionDetail from './contents/EductionDetail'

const page = ({searchParams}) => {
  return (
    <div>
      <EductionDetail educationId={searchParams}/>
    </div>
  )
}

export default page
