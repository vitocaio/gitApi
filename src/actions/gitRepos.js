import axios from 'axios';
import { BASEURL_GITAPI } from '../helpers/consts';
export const GET_REPOSITORYS = 'GET_REPOSITORYS';

export function getRepositorys(user = []) {
  return dispatch => axios.get(`${BASEURL_GITAPI}/users/${user}/repos`)
    .then((resp) => {
      const data = resp.data || {};
      return dispatch({
        type: GET_REPOSITORYS,
        payload: {
          repositorys: data,
        },
      });
    });
}
