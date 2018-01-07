import _ from 'lodash';
import { CREATE_POST } from '../actions/index';

const createPostReducer = (state = {}, action) => {
  switch(action.type) {
    case CREATE_POST:
      // return state.concat([ action.payload.data ]);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

export default createPostReducer;
