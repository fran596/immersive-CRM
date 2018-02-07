const API_URL = 'http://localhost:8081/api/v2/companies'

const FETCH_COMPANY_REQUEST = 'FETCH_COMPANY_REQUEST';
const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
const FETCH_COMPANY_FAILURE = 'FETCH_COMPANY_FAILURE';

const UPDATE_COMPANY_REQUEST = 'UPDATE_COMPANY_REQUEST';
const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
const UPDATE_COMPANY_FAILURE = 'UPDATE_COMPANY_FAILURE';

const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST';
const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE';

const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST';
const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE';


export const fetchCompany = () => {
  return function (dispatch) {
    dispatch({
      type: FETCH_COMPANY_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_COMPANY_SUCCESS,
          companies: data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_COMPANY_FAILURE,
          error: error
        })
      })
  }
}

export const updateCompany = (element) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_COMPANY_REQUEST
    })
    fetch(`${API_URL}/update`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: UPDATE_COMPANY_SUCCESS,
          id: element.id
        })
      })
      .catch(error => {
        dispatch({
          type: UPDATE_COMPANY_FAILURE,
          error: error
        })
      })
  }
}

export const addCompany = company => {
  return function (dispatch) {
    dispatch({
      type: ADD_COMPANY_REQUEST
    })
    fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: company.name,
        address: company.address,
        phone: company.phone
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_COMPANY_SUCCESS,
          company: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_COMPANY_FAILURE,
          error: error
        })
      })
  }
}

export const deleteCompany = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_COMPANY_REQUEST
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
          type: DELETE_COMPANY_SUCCESS,
          id: id
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_COMPANY_FAILURE,
          error: error
        })
      })
  }
}