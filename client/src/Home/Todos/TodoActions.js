// API URL Constant
const API_URL = 'http://localhost:8081/api/v2/todos'


// todo actions

const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST'
const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS'
const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE'

const MARK_TODO_REQUEST = 'MARK_TODO_REQUEST'
const MARK_TODO_SUCCESS = 'MARK_TODO_SUCCESS'
const MARK_TODO_FAILURE = 'MARK_TODO_FAILURE'

const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST'
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE'

export const addTodo = value => {
  return function (dispatch) {
    dispatch({
      type: ADD_TODO_REQUEST
    })
    fetch(API_URL+'/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        value: value,
        done: false
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_TODO_SUCCESS,
          todo: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_TODO_FAILURE,
          error: error
        })
      })
  }
}


export function getTodos() {
  return function (dispatch) {
    dispatch({
      type: FETCH_TODO_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_TODO_SUCCESS,
          todos: data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_TODO_FAILURE,
          error: error
        })
      })
  }
}

export const markTodo = obj => {
  console.log(obj)
  return function (dispatch) {
    dispatch({
      type: MARK_TODO_REQUEST
    })
    fetch(`${API_URL}/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: obj._id,
        value: obj.value,
        done: !obj.done
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: MARK_TODO_SUCCESS,
          id: obj._id
        })
      })
      .catch(error => {
        dispatch({
          type: MARK_TODO_FAILURE,
          error: error
        })
      })
  }
}

export const deleteTodo = id => {
  return function (dispatch) {
    dispatch({
      type: DELETE_TODO_REQUEST
    })
    fetch(`${API_URL}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_TODO_SUCCESS,
          id: id
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_TODO_FAILURE,
          error: error
        })
      })
  }
}