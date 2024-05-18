"use client"
import dynamic from 'next/dynamic';
import OrangeGradientLeft from "@/app/shared/components/OrangeGradientLeft";
import { useEffect, useState , memo } from 'react';
import { getAboutUsApi, getCommunityApi, getCommunityListApi, getHeroApi, getPageContentHomeApi, getProgramsListApi, getServicesApi, getTestimonialApi } from '@/app/Applications/home/api';
import CommunityList from '../components/CommunityList';
import { useSelector, useDispatch } from 'react-redux';
import { setAboutUs, setCommunity, setCommunityList, setHero, setLoading, setPageContentHome, setPrograms, setServices, setTestimonial } from '@/app/redux/homeReducer';


const AboutUs = dynamic(() => import('@/app/Applications/home/components/AboutUs'))
const HomeHero = dynamic(() => import('@/app/Applications/home/components/HomeHero'))
const Services = dynamic(() => import('@/app/Applications/home/components/Services'))
const ProgramList = dynamic(() => import('@/app/Applications/home/components/ProgramList'))
const Community = dynamic(() => import('@/app/Applications/home/components/Community'))
const ProgramHub = dynamic(() => import('@/app/Applications/home/components/ProgramHub'))
const Testimonial = dynamic(() => import('@/app/Applications/home/components/Testimonial'))
const JoinHub = dynamic(() => import('@/app/Applications/home/components/JoinHub'))


const MainHome = (() => {
    const dispatch = useDispatch()
    const { hero, aboutus, services, pageContentHome, programs, community, communityList, testimonial } = useSelector(state => state.home)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const heroRes = await getHeroApi();
                dispatch(setHero(heroRes[0]));
                const aboutUsRes = await getAboutUsApi();
                dispatch(setAboutUs(aboutUsRes));
                const servicesRes = await getServicesApi();
                dispatch(setServices(servicesRes));
                const pageContentHomeRes = await getPageContentHomeApi();
                dispatch(setPageContentHome(pageContentHomeRes));
                const programsRes = await getProgramsListApi();
                dispatch(setPrograms(programsRes));
                const communityRes = await getCommunityApi();
                dispatch(setCommunity(communityRes));
                const communityListRes = await getCommunityListApi();
                dispatch(setCommunityList(communityListRes));
                const testimonialRes = await getTestimonialApi();
                dispatch(setTestimonial(testimonialRes));
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [dispatch]);
    
    return (
        <div className='relative  md:p-0 px-3 bg-white overflow-hidden'>
            <div className='container  mx-auto md:px-0 '>
                {hero && <HomeHero data={hero} />}
                {aboutus && <AboutUs aboutus={aboutus} />}
            </div>
            <div className='container mx-auto mt-20 md:px-0 '>
                {services && pageContentHome && <Services serviceData={services} pageContent={pageContentHome} />}
            </div>
            <div className='container relative px-3 mx-auto md:px-0 '>
                <div className='absolute top-[84px] right-0 h-[300px] w-[500px] block md:hidden z-[-1]'><OrangeGradientLeft /></div>
                {programs && <ProgramList programList={programs} />}
                {community && <Community community={community} />}
                {communityList && pageContentHome && <CommunityList communityList={communityList} pageContent={pageContentHome[0]} />}
                {programs && pageContentHome && <ProgramHub programs={programs} pageContent={pageContentHome[0]} />}
            </div>
            {testimonial && <Testimonial testimonial={testimonial} />}
            <div className='container px-3 mx-auto md:px-0 '>
                {pageContentHome && <JoinHub pageContent={pageContentHome[0]} />}
            </div>
        </div>
    );
})


export default memo(MainHome);