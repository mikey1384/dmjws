import request from 'axios';
const URL = 'http://localhost:3500';

export const signup = props => dispatch =>
request.post(`${URL}/users`, props)
  .then(response => console.log(response))
