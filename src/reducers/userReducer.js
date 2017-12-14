import { FETCH_USER, UPDATE_USER } from '../actions/types';
const user = [
  {
    first_name: 'arslan',
    last_name: 'shakoor',
    email: 'arslantechielive@gmail.com',
    title: 'Frontend Developer(React.js)',
    description: 'i dream javascript and react is my favorite library.'
  }
];

export default function(state = { user }, action) {
  switch (action.type) {
    case FETCH_USER:
      return state.user;
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
}
