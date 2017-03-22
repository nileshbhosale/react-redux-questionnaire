import { call, put } from "redux-saga/effects";
import Data from '../../data/Data.js';


// fetch the user's list
export function* fetchData(action) {
  // call the api to get the users list
  const data = Data;
  
  // save the users in state
  yield put({
    type : 'SAVE_DATA',
    questions : data.questions,
    answers : data.answers
  });
}
