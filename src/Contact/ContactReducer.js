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
                loading: true
            }
        case 'FETCH_CONTACT_SUCCESS':
            return {
                loading: false,
                contacts: action.contacts
            }
        case 'FETCH_CONTACT_FAILURE':
            return {
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default contacts