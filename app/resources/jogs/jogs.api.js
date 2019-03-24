import axios from 'axios';

export const fetchJogs = async () => {
  const response = await axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync', {
    headers: {
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    }
  });

  return response.data.response.jogs;
};