import axios from 'axios';

export const sendJogRecord = async (date, time, distance) => {
  let formData = new FormData();
  formData.append('date', date);
  formData.append('time', time);
  formData.append('distance', distance);
  const response = await axios.post('https://jogtracker.herokuapp.com/api/v1/data/jog', formData);

  console.log(response);
};