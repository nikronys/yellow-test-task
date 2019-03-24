import {fetchJogs} from './jogs.api';

export const GET_JOGS = 'GET_JOGS';

export const getJogsAction = jogs => ({
  type: GET_JOGS,
  payload: jogs,
});

export const getJogs = () => async dispatch => {
  try {
    const jogs = await fetchJogs();
    dispatch(getJogsAction(jogs));
  } catch (error) {
    console.log(error);
  }
};