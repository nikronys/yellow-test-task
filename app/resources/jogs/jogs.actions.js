import {fetchJogs} from './jogs.api';

export const SET_JOGS = 'SET_JOGS';

export const getJogsAction = jogs => ({
  type: SET_JOGS,
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