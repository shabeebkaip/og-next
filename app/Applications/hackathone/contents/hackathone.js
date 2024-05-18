
"use client"
import dynamic from 'next/dynamic'
const HackathonHero = dynamic(() => import('@/app/Applications/hackathone/components/HackathonHero'))
const Rules = dynamic(() => import('@/app/Applications/hackathone/components/Rules'))
const HackathonSponser = dynamic(() => import('@/app/Applications/hackathone/components/HackathonSponser'))
const JoinHackathon = dynamic(() => import('@/app/Applications/hackathone/components/JoinHackathon'))
const Requirements = dynamic(() => import('@/app/Applications/hackathone/components/Requirements'))
const Bonus = dynamic(() => import('@/app/Applications/hackathone/components/Bonus'))
const Prize = dynamic(() => import('@/app/Applications/hackathone/components/PrizeSection'))
const Judges = dynamic(() => import('@/app/Applications/hackathone/components/Judges'))
const PrizeMobile = dynamic(() => import('@/app/Applications/hackathone/components/PrizeMobile'))
const JudgeMobile = dynamic(() => import('@/app/Applications/hackathone/components/JudgeMobile'))


import { useEffect, memo } from 'react'
import { getHackathonApi, getHeroApi, getPageContentHackathonApi } from '../api'
import { useSelector, useDispatch } from 'react-redux'
import { setHackathonHero, setHackathon, setHackathonPageContent } from '@/app/redux/hackathonReducer'






const Hackathon = () => {
  const dispatch = useDispatch()
  const { hero, hackathon, pageContent } = useSelector(state => state.hackathon)
  useEffect(() => {
    getHeroApi().then(res => dispatch(setHackathonHero(res[0])))
    getHackathonApi().then(res => dispatch(setHackathon(res)))
    getPageContentHackathonApi().then(res => dispatch(setHackathonPageContent(res)))
  }, [])
  console.log(hackathon, hero, pageContent)
  return (
    <div className='pb-10'>
      <div className='container px-6 mx-auto md:px-0'>
        {hero && <HackathonHero hero={hero} />}
        {/* <Search/> */}
        {hackathon && <Rules hackathonData={hackathon} />}
      </div>

      {hackathon && <HackathonSponser hackathonData={hackathon} />}
      <div className='container  mx-auto'>
        {pageContent && <JoinHackathon pageContent={pageContent} hackathonData={hackathon} />}
        {hackathon && <Requirements requirements={hackathon?.requirements} />}
        {hackathon && <Bonus bonus={hackathon?.bonus} />}

        <div>
          {hackathon && <div className='md:block lg:hidden'><PrizeMobile hackathonData={hackathon} /></div>}
          {hackathon && <div className='lg:block hidden'><Prize hackathonData={hackathon} /></div>}
          <div className='md:hidden block'><JudgeMobile /></div>
          <div className='md:block hidden'><Judges /></div>

        </div>


      </div>


    </div>
  )
}

export default memo(Hackathon)

