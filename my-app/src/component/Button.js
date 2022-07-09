import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    shouldComponentUpdate(nextProps){

    }
    render(){
        const {change} = this.props;
        return (
            <button type='button' onClick={change}>Click Here</button>
        )
    }

}

export default Button;