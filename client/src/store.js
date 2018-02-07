import { createStore, applyMiddleware, combineReducers  } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import CompanyReducer from './Company/CompanyReducer'
import ContactReducer from './Contact/ContactReducer'

const logger = createLogger({
    collapsed: true,
    duration: true,
    diff: true,
})

var reducer = combineReducers({
    company: CompanyReducer,
    contact: ContactReducer
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
        ReduxThunk,
        logger,
    ),
))

export default store