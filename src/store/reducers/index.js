import { combineReducers } from 'redux';
import Repositorys from './repository';

const rootReducer = combineReducers({
    gitApi: Repositorys,
});

export default rootReducer;
