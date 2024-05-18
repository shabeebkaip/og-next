import React from 'react'
import NewsDetails from './contents/NewsDetails'

const page = ({searchParams}) => {
  return (
    <div>
        <NewsDetails newsId={searchParams}/>
    </div>
  )
}

export default page