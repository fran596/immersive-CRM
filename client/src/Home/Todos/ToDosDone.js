import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'

const ToDosDone = (props) => {
    return (
        <ul>
            {
                props.todos.map(function (item) {
                    if (item.done === true) {
                        return <ToDoItem key={item._id} todo={item} onItemDone={props.onItemDone} onItemDelete={props.onItemDelete} />
                    }
                })
            }
        </ul>
    );

}

ToDosDone.propTypes = {
    todos: PropTypes.array,
}

ToDosDone.defaultProps = {
    todos: []
}

export default ToDosDone;