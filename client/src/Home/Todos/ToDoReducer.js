
const DEFAULT_STATE = {
    loading: false,
    todos: [],
    error: '',
    id: ''
}

const todos = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'FETCH_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: action.todos
            }
        case 'FETCH_TODO_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'ADD_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                todos: [...state.todos, { ...action.todo }]
            }
        case 'ADD_TODO_FAILURE':
            return {
                ...state,
                error: action.error
            }
        // case 'MARK_TODO':
        //     return {
        //         ...state,
        //         todos: action.value
        //     }

        case 'MARK_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'MARK_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item._id === action.id) {
                        item.done = !item.done
                    }
                    return item;
                }), 
                loading: false
            }

        case 'MARK_TODO_FAILURE':
            return {
                ...state,
                error: action.error
            }

        case 'DELETE_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.filter(item => {
                    return item._id !== action.id;
                })
            }
        case 'DELETE_TODO_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default todos