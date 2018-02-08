import React from 'react'
import { connect } from 'react-redux'

import { addTodo, markTodo, deleteTodo,  getTodos } from './TodoActions'
import ToDosList from './ToDosList'
import ToDosDone from './ToDosDone'


class ToDosContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        },
        this.onTextChange = this.onTextChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onItemDone = this.onItemDone.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
    }

    componentDidMount() {
        this.props.loadData()
    }

    onTextChange(ev) {
        this.setState({ inputVal: ev.target.value })
    }

    onClick(ev) {
        this.props.addTodo(this.state.inputVal)
        this.setState({ inputVal: '' })
    }

    onItemDone(obj) {
        this.props.markTodo(obj)
    }

    onItemDelete(id) {
        this.props.deleteTodo(id)
    }

    render() {
        // console.log(this.props.todos)
        return (
            <div>
                <input type="text" value={this.state.inputVal} onChange={this.onTextChange} className="todos-input" />
                <span><img src={require("../../img/add.png")} className="add-icon-todos" onClick={this.onClick}/></span>
                {/* <button className="button-secondary pure-button" onClick={this.onClick}>Add Todo</button> */}
                <ToDosList todos={this.props.todos} onItemDone={this.onItemDone} onItemDelete={this.onItemDelete} />
                <h3>Done:</h3>
                <ToDosDone todos={this.props.todos} onItemDone={this.onItemDone} onItemDelete={this.onItemDelete} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todo.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
            dispatch(getTodos())
          },
        addTodo: value => dispatch(addTodo(value)),
        markTodo: value => dispatch(markTodo(value)),
        deleteTodo: id => dispatch(deleteTodo(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ToDosContainer);