import {URL} from 'constants/hidden'
import request from 'axios'
const API_URL = `${URL}/user`

export const checkIfWorks = (username, password) => dispatch =>
  request.get(`${API_URL}?username=${username}&password=${password}`).then(
    response => {
      console.log(response, password, username, username, password)
    }
  ).catch(
    error => {
      console.error(error.response || error)
    }
  )
