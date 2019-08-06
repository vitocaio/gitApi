import { GET_REPOSITORYS } from '../../actions/gitRepos';

const INITIAL_STATE = { data: {} };

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_REPOSITORYS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
