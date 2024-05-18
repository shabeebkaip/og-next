import { globalGetService } from "@/app/utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return err
  }

}
export const getHeroApi = () => getData('hero', { key: "home" })
export const getAboutUsApi = () => getData('about')
export const getServicesApi = () => getData('homeFeature')
export const getPageContentHomeApi = () => getData('page_content', { key: "home" })
export const getProgramsListApi =  () => getData('programs')
export const getCommunityApi =  () =>  getData('community')
export const getCommunityListApi =  () => getData('community_list')
export const getTestimonialApi =  () => getData('testimonial')