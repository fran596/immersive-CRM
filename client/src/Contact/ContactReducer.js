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
        case 'UPDATE_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.map(item => {
                    if (item.id === action.id) {
                        item.name = action.name
                        item.email = action.email
                        item.phone = action.phone
                        item.company = action.company
                        item.position = action.position
                    }
                    return item;
                }),
                loading: false
            }
        case 'UPDATE_CONTACT_FAILURE':
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
                contacts: state.contacts.map(function (item) {
                    if (item.company === action.data.old) {
                        item.company = action.data.new
                    }
                    return item
                }),
                loading: false
            }
        case 'UPDATE_CONTACTS_COMPANY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'DELETE_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_CONTACT_SUCCESS':
            return {
                ...state,
                todos: state.contacts.filter(item => {
                    return item.id !== action.id;
                })
            }
        case 'DELETE_CONTACT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default contacts