"use client"
import HeroCarrier from "../components/HeroCarrier";
import Joinus from "../components/Joinus.jsx";
import Teamlist from "../components/Teamlist.jsx";
import Explore from "../components/Explore.jsx";
import GlobalHub from "../components/GlobalHub.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCareerList, getExploreApi, getGlobalApi, getHeroApi, getPageContentCareerApi } from '@/app/Applications/careers/api'
import { setCareerHero, setCareerList, setCareerPageContent, setExplore, setGlobalHub } from '@/app/redux/careerReducer'

const Careers = () => {
  const dispatch = useDispatch()
  const { hero, explore, globalHub, careerList, pageContentCareer } = useSelector(state => state.career)
  useEffect(() => {
    getHeroApi().then(res => { dispatch(setCareerHero(res[0])) })
    getExploreApi().then(res => { dispatch(setExplore(res)) })
    getGlobalApi().then(res => { dispatch(setGlobalHub(res)) })
    getCareerList().then(res => { dispatch(setCareerList(res)) })
    getPageContentCareerApi().then(res => { dispatch(setCareerPageContent(res[0])) })
  }, [])
  return (
    <div className=" overflow-hidden pb-8">
      <div className="container md:px-0  px-6 mx-auto">
        {hero && <HeroCarrier hero={hero} />}
      </div>
      <div className="md:px-0 px-6 container mx-auto">
        {globalHub && <Joinus globalHub={globalHub} />}
      </div>
      <div className=" ">
        {careerList && <Teamlist teamList={careerList} />}
      </div>
      <div className=" px-6 container mx-auto">
        {explore && <Explore explore={explore} />}
        {pageContentCareer && <GlobalHub pageContent={pageContentCareer} />}
      </div>
    </div>

  );
};

export default Careers;
