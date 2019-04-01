export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  payload: startDate,
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  payload: endDate,
});
