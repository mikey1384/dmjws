import {URL} from 'constants/hidden'
import request from 'axios'
const API_URL = `${URL}/user`

export const checkIfWorks = () => dispatch =>
  request.get(`${API_URL}`).then(
    response => {
      console.log(response)
    }
  ).catch(
    error => {
      console.error(error.response || error)
    }
  )
