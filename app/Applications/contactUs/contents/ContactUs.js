"use client"
// import { useEffect } from "react";
import ContactHero from '../components/ContactHero'
import StayInTouch from '../components/StayInTouch'
import { globalGetService } from '@/app/utils/apiServices'
import Community from '../components/Community'
import CommunityReverse from '../components/CommunityReverse'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommunityListApi, getHeroApi } from '../api'
import { setContactCommunityList, setContactHero } from '@/app/redux/contactReducer'



const ContactUs = () => {
    const dispatch = useDispatch()
    const { communityList, hero } = useSelector(state => state.contact)
    useEffect(() => {
        getCommunityListApi().then(res => dispatch(setContactCommunityList(res)))
        getHeroApi().then(res => dispatch(setContactHero(res[0])))
    }, [])
    return (
        <div className='flex flex-col gap-10 mx-auto '>
            {hero && <ContactHero hero={hero} />}
            {communityList?.map((item, index) => (
                index % 2 === 0 ? (
                    <Community key={index} mentor={item} />
                ) : (
                    <CommunityReverse key={index} mentor={item} />
                )
            ))}


            <StayInTouch />

        </div>
    );
};

export default ContactUs;