const API_URL = 'http://localhost:2000/Contact'

const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

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