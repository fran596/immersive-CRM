const API_URL = 'http://localhost:8081/api/v2/contacts'

const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';

const UPDATE_CONTACT_REQUEST = 'UPDATE_CONTACT_REQUEST';
const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
const UPDATE_CONTACT_FAILURE = 'UPDATE_CONTACT_FAILURE';

const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

const UPDATE_CONTACTS_COMPANY_REQUEST = 'UPDATE_CONTACTS_COMPANY_REQUEST'
const UPDATE_CONTACTS_COMPANY_SUCCESS = 'UPDATE_CONTACTS_COMPANY_SUCCESS'
const UPDATE_CONTACTS_COMPANY_FAILURE = 'UPDATE_CONTACTS_COMPANY_FAILURE'

export const fetchContact = () => {
  return function (dispatch) {
    dispatch({
      type: FETCH_CONTACT_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_CONTACT_SUCCESS,
          contacts: data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_CONTACT_FAILURE,
          error: error
        })
      })
  }
}


export const addContact = contact => {
  return function (dispatch) {
    dispatch({
      type: ADD_CONTACT_REQUEST
    })
    fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        company: contact.company,
        company_id: contact.company_id,
        position: contact.position,
        phone: contact.phone
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_CONTACT_SUCCESS,
          contact: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_CONTACT_FAILURE,
          error: error
        })
      })
  }
}

export const updateContact = (element) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CONTACT_REQUEST
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
          type: UPDATE_CONTACT_SUCCESS,
          id: element.id
        })
      })
      .catch(error => {
        dispatch({
          type: UPDATE_CONTACT_FAILURE,
          error: error
        })
      })
  }
}

export const deleteContact = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CONTACT_REQUEST
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
          type: DELETE_CONTACT_SUCCESS,
          id: id
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_CONTACT_FAILURE,
          error: error
        })
      })
  }
}

export const updateContactsCompany = (contacts, names) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CONTACTS_COMPANY_REQUEST
    })
    fetch(`${API_URL}/updateCompanyName`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(names),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: UPDATE_CONTACTS_COMPANY_SUCCESS,
          data: names
        })
      })
      .catch(error => {
        dispatch({
          type: UPDATE_CONTACTS_COMPANY_FAILURE,
          error: error
        })
      })
  }
}