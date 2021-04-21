import { GET_BEDAH, BEDAH_LOADING, ADD_BEDAH  } from './bedahTypes'

export const getBedah = () => {
  return {
    type: GET_BEDAH
  }
}

export const addBedah = (bedah) => {
  return {
    type: ADD_BEDAH,
    payload: bedah
  }
}

export const setBedahLoading = () => {
  return {
    type: BEDAH_LOADING
  }
}