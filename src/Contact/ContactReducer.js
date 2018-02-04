// todos reducer

const DEFAULT_STATE = {
    contacts: [],
    loading: false,
    error: ''
}

const contacts = (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'FETCH_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_CONTACT_SUCCESS':
            return {
                ...state,
                loading: false,
                contacts: action.contacts
            }
        case 'FETCH_CONTACT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'UPDATE_CONTACTS_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_CONTACTS_COMPANY_SUCCESS':
            return {
                ...state,
                contacts: action.data,
                loading: false
            }
        case 'UPDATE_CONTACTS_COMPANY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default contacts