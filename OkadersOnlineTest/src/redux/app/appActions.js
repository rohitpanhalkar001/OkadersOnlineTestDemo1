import Constants from '../constants';

export const requestStarted = () => dispatch => {
  dispatch({
    type: Constants.REQUEST_STARTED,
  });
};

export const requestCompleted = () => dispatch => {
  dispatch({
    type: Constants.REQUEST_COMPLETED,
  });
};

export const requestLogout = () => dispatch => {
  dispatch({
    type: Constants.LOGOUT_SUCCESS,
  });
};
