import React, {Component} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class BookPickupInput extends Component {

    state = {
        inputValue: ''
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value});
    };

    dispatch = () => {
        this.props.newBookingPickupNumberValue(this.state.inputValue);
        this.setState({inputValue: ''})
    };

    render() {
        return (
            <div className="todo-input" >
                <span>Pickup Number: </span><input type="text" value={this.state.newBookingPickupValue} onChange={this.handleInputChange} />
                <span>Pick-up Time: </span><input type="text" value={this.state.newBookingPickupValue} onChange={this.handleInputChange} />
                <Button type="primary" onClick={this.dispatch}>Affirm</Button>
            </div>
        )
    }


}