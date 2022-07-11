import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //     };
    // }

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
    //best practics
    handleClick = (locale) => {
        //e.preventDefault();

        this.setState({
            locale: locale,
        });
    }
    render() {
        const { date, locale } = this.state;
        return (<div>
            <h1 className="heading">
                <span>Date {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</span> <br />
                <span>Time {date.toLocaleTimeString(locale)}</span>
            </h1>
            <Button change={()=>this.handleClick('en-US')}>Click Here</Button>
        </div>
        );
    }
}
/* <button type='button' onClick={this.handleClick.bind(this,'en-US')}>Click Here</button> */


export default Clock;