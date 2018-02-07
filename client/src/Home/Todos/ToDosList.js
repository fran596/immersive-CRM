import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'

const ToDosList = (props) => {
    return (
        <ul>
            {
                props.todos.map(function (item) {
                    if (item.done === false) {
                        return <ToDoItem key={item._id} todo={item} onItemDone={props.onItemDone} onItemDelete={props.onItemDelete} />
                    }
                })
            }
        </ul>
    );
}

ToDosList.propTypes = {
    todos: PropTypes.array,
}

ToDosList.defaultProps = {
    todos: []
}

export default ToDosList;