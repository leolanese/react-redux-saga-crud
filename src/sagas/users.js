import { takeEvery, takeLatest, take, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../apiRequests/users";

/*
  generator function* get try-catch
  /
  generator function* watch yield = saga
*/

function* getUsers() {
  /*
    try / catch = blocking saga
  */
  // worker saga: this describe the flow of how side effects are called
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {
    yield put(
      actions.usersError({
        error: "Error when getting the users",
      })
    );
  }
}

function* watchGetUsersRequest() {
  // non-blocking saga
  // getUsers refereing to the worker saga
  // this is the watcher saga: it watches when a particular
  // redux action has been dispatched
  // then acts upon the actin by calling a worker saga (getUsers)
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* deleteUser(userId) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "Error when deleting a user",
      })
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const { payload } = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, payload.userId);
  }
}

function* createUser({ payload }) {
  try {
    yield call(api.createUser, {
      firstName: payload.firstName,
      lastName: payload.lastName,
    });

    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "Error when creating a user",
      })
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchDeleteUserRequest),
  fork(watchCreateUserRequest),
];

export default userSagas;
