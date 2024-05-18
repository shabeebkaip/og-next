import { globalGetService } from "../utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return  err
  }

}
export const getFormApi = (key) => getData('form',key)