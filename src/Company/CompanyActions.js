const API_URL = 'http://localhost:2000/Company'

const FETCH_COMPANY_REQUEST = 'FETCH_COMPANY_REQUEST';
const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
const FETCH_COMPANY_FAILURE = 'FETCH_COMPANY_FAILURE';

export const fetchCompany = () => {
        return function (dispatch) {
                dispatch({
                  type: FETCH_COMPANY_REQUEST
                })
                fetch(API_URL)
                  .then(response => response.json())
                  .then(data => {
                          console.log('aqui')
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