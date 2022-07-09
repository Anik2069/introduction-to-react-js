import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.clocktimer = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    componentWillUnmount() {
        clearInterval(this.clocktimer)
    }

    render() {
        return (
            <h1 className="heading">
                <span>Date {this.state.date.getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br />
                <span>Time {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}



export default Clock;