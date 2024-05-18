
// import { useEffect } from "react";
import EducationHero from '../components/EducationHero'
import Courses from '../components/Courses'
import LoadMore from '../components/LoadMore'
import Collaborate from '../components/Collaborate'
import CollaborateMobile from '../components/CollabarateMobile'
import YourGoal from '../components/YourGoal'
import ComingSoon from '../components/ComingSoon'
import MobileProffesionalSlider from '../components/MobileProffesionalSlider'
import Professionals from '../components/Professionals'
import SupportTeam from '../components/SupportTeam'

const Educations = () => {

    
  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // })

    return (  
        <div className='flex flex-col gap-2 mx-auto pb-10 '>
        <EducationHero/>
        <Courses/>
        <div className='hidden lg:block'>
        <Collaborate/>
        </div>
        <div className='lg:hidden'>
        <CollaborateMobile/>
        </div>
        <YourGoal/>
        <ComingSoon/>
        <div className="md:hidden flex">
        <MobileProffesionalSlider/>
        </div>
        <div className="md:flex hidden">
        <Professionals/>
        </div>
        <SupportTeam/>
        </div>
    );
}
 
export default Educations;