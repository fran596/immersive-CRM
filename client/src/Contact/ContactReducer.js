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
        case 'ADD_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: [...state.contacts, { ...action.contact }]
            }
        case 'ADD_CONTACT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'UPDATE_CONTACT_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_CONTACT_SUCCESS':
            console.log(action.data)
            return {
                ...state,
                contacts: state.contacts.filter(item => {
                    if (item._id === action.data._id) {
                        item.name = action.data.name
                        item.email = action.data.email
                        item.phone = action.data.phone
                        item.company = action.data.company
                        item.position = action.data.position
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
                contacts: state.contacts.filter(item => {
                    return item.id !== action.id;
                })
            }
        case 'DELETE_CONTACT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'DELETE_CONTACT_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_CONTACT_COMPANY_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.filter(item => {
                    return item.company !== action.name;
                })
            }
        case 'DELETE_CONTACT_COMPANY_FAILURE':
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}

export default contacts