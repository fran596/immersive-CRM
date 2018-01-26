// todos reducer

const DEFAULT_STATE = {
    contacts: []
}

const contacts = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_CONTACT':
            return{
                contacts: action.value
            }
        default:
            return state
    }
}

export default contacts