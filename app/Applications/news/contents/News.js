"use client"
import Hero from "../components/Hero"
import News from "../components/News"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeroApi, getNewsListApi } from '../api'
import { setNewsHero, setNewsList, setNewsPagination } from '@/app/redux/newsReducer'


const NewsPage = () => {
    const dispatch = useDispatch()
    const { newsList, hero, } = useSelector(state => state.news)
    useEffect(() => {
        getNewsListApi().then(res => {
            dispatch(setNewsList(res.data))
            dispatch(setNewsPagination(res.pagination))
        })
        getHeroApi().then(res => dispatch(setNewsHero(res[0])))
    }, [])
    return (
        <div className=" overflow-hidden pb-8">
            <div className="md:px-0  px-2 mx-auto">
                {hero && <Hero hero={hero} />}
            </div>
            <div className="">
                {newsList && <News />}
            </div>
        </div>
    )
}

export default NewsPage
