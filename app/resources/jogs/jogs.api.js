import axios from 'axios';
import history from '../../utils/history';

export const login = () => {
  let formData = new FormData();
  formData.append('uuid', 'hello');

  axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => {
      window.localStorage.setItem('token', res.data.response.access_token);
      history.push('/jogs');
    })
    .catch(err => console.log(err));
};

export const fetchJogs = async () => {
  const res = await axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync', {
    headers: {
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    }
  });

  return res.data.response.jogs;
};

export const sendJog = data => {
  axios.post('https://jogtracker.herokuapp.com/api/v1/data/jog', data, {
    headers: {
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    }
  })
    .then(() => history.goBack())
    .catch(err => console.log(err));
};