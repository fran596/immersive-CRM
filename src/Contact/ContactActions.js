const API_URL = 'http://localhost:2000/Contact'

const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

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

export const updateContactsCompany = (contacts) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CONTACTS_COMPANY_REQUEST
    })
    fetch(`${API_URL}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Contact: contacts
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: UPDATE_CONTACTS_COMPANY_SUCCESS,
          data: contacts
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