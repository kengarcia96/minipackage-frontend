import React, {Component} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import BookingPickupInput from './BookPickupInput'

export default class BookPickupWrapper extends Component {

    render() {
        return (
            <div className="todo-wrapper">
                <BookingPickupInput onNewTodoAdded={this.addNewTodo}/>
                {/*<Todos todos={this.props.todos} onChangeStatus={this.updateTodos}/>*/}
                <Button onClick={this.getAllCompletedTodo}>Completed</Button>
            </div>
        )
    }

}