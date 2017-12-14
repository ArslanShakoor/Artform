import axios from 'axios';
import { FETCH_USER, UPDATE_USER } from './types';

export const fetchUser = () => dispatch => {
  dispatch({ type: FETCH_USER });
};

export const updateUser = values => dispatch => {
  let arr = [values];

  console.log(arr);
  dispatch({ type: UPDATE_USER, payload: arr });
};
