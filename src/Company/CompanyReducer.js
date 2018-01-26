// todos reducer

const DEFAULT_STATE = {
    companies: []
}

const companies = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_COMPANY':
            return{
                companies: action.value
            }
        default:
            return state
    }
}

export default companies