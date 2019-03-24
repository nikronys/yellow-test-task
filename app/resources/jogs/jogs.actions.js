export const GET_JOGS = 'GET_JOGS';

export const getJogsAction = jogs => ({
  type: GET_JOGS,
  payload: jogs,
});

export const getJogs = jogs => async dispatch => {
  try {
    dispatch(getJogsAction(jogs));
  } catch (error) {
    console.log(error);
  }
};