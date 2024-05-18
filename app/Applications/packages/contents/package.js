
// import React from 'react'
import Hero from '../components/Hero'
import PackagePlans from '../components/PackagePlans'
import Terms_conditions from '../components/Terms_conditions'
import Continue from '../components/Continue'

const Packages = () => {
  return (
    <div className='container px-4 mx-auto overflow-hidden md:px-0'>
        <Hero/>
        <PackagePlans/>
        <Terms_conditions/>
        <Continue/>
      
    </div>
  )
}

export default Packages
