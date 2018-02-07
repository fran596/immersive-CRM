import React from 'react'
import PropTypes from 'prop-types'

const ToDoItem = (props) => {

    
        return (
            <div>
                <li>
                <span className="bullet-margin"> <input type="checkbox" onChange={()=>props.onItemDone(props.todo)} id={props.todo._id} /></span>
                {props.todo.value} 
                <span> <img src={require('../../img/delete.png')} className="delete-icon-todos" onClick={()=>props.onItemDelete(props.todo._id)} /> </span>
                </li> 
            </div>
        );
    
}

ToDoItem.propTypes = {
    todo: PropTypes.any,
    onItemDone: PropTypes.func,
    onItemDelete: PropTypes.func
}

ToDoItem.defaultProps = {
    todo: {},
    onItemDone: () => {},
    onItemDelete: () => {}
}

export default ToDoItem;