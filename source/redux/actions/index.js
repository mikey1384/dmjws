import request from 'axios';
import {URL} from 'constants/hidden';

export const signup = props => dispatch =>
request.post(`${URL}/users`, props)
  .then(response => console.log(response))
