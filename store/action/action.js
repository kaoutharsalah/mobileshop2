import { GET_CATEGORIES } from '../type';
import GetApiCategories from './axiosRequest';
const Action = () => {
  return function (dispatch) {
    return GetApiCategories()
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
};

export default Action;