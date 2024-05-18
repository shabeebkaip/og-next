import dynamic from "next/dynamic"
import Payment from './contents/Payment'


const page = () => {
  return (
    <div className='container mx-auto px-6 md:px-0'>
     <Payment />
    </div>
  )
}

export default page
