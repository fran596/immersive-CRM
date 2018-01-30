// todos reducer

const DEFAULT_STATE = {
    companies: [], 
    loading: false,
    error: ''
}

const companies = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_COMPANY_REQUEST':
            return {
                loading: true
            }
        case 'FETCH_COMPANY_SUCCESS':
            return {
                loading: false,
                companies: action.companies
            }
        case 'FETCH_COMPANY_FAILURE':
            return {
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default companies