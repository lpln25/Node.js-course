import React, {useState} from 'react';

function Todo () {
    // const Todo = (props) => {
    // 1. initial state: '' , {}, [], "", 0
    // 2. return array [currnetState, functionChange]
    const [todoName, setTodoName] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        setTodoName(e.target.value)
    }

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName))
    }

    return(
        <div>
            <input 
            value={todoName}
            onChange={handleChange}
            placeholder='Todo'
            />
            <button
            className="btn btn-sm btn-primary"
            onClick={todoAddHandler}
            >Add</button>
            <ul>
                {todoList.map((todo, i=0) => (
                    <li key={i++}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;


/*
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            todo: e.target.value
        })
    }
    render(){
        return(
            <div>
                <input
                value={this.state.todo}
                onChange={this.handleChange}
                placeholder='Todo'
                />
                <button>
                    Add
                </button>
            </div>
        )
    }
}*/
