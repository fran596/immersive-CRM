// company reducer


const DEFAULT_STATE = {
    companies: [],
    loading: false,
    error: ''
}

const companies = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_COMPANY_SUCCESS':
            return {
                ...state,
                loading: false,
                companies: action.companies
            }
        case 'FETCH_COMPANY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'ADD_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_COMPANY_SUCCESS':
            return {
                ...state,
                companies: [...state.companies, { ...action.company }]
            }
        case 'ADD_COMPANY_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'DELETE_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_COMPANY_SUCCESS':
            return {
                ...state,
                todos: state.companies.filter(item => {
                    return item.id !== action.id;
                })
            }
        case 'DELETE_COMPANY_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'UPDATE_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_COMPANY_SUCCESS':
            return {
                ...state,
                companies: state.companies.map(item => {
                    if (item.id === action.id) {
                        item.name = action.name
                        item.address = action.address
                        item.phone = action.phone
                    }
                    return item;
                }
            ),
                loading: false
            }
        case 'UPDATE_COMPANY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default companies