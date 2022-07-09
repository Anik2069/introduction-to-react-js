import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
)








//Element Use

// const index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className="heading" tabIndex={index}>
//        <span>Date {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br/>
//       <span>Time {new Date().toLocaleTimeString()}</span>
//     </h1>
//   );

//   ReactDOM.render(element, document.getElementById('root'));
// }, 1000);


//Functional Component

// function Clock({locale}){
//   return (
//     <h1 className="heading">
//        <span>Date {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br/>
//       <span>Time {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

//One Way
//ReactDOM.render(Clock(), document.getElementById('root'));
//2nd Way 
//ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));



//Class Component

// class Clock {
//   print() {
//     return (
//       <h1 className="heading">
//         <span>Date {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br />
//         <span>Time {new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }
// const ClockComponent  =  new Clock();
// ReactDOM.render(ClockComponent.print(), document.getElementById('root'));


// class Clock extends React.Component {
//   render() {
//     return (
//       <h1 className="heading">
//         {this.props.children} <br />
//         <span>Date {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br />
//         <span>Time {new Date().toLocaleTimeString(this.props.locale)}</span>
//       </h1>
//     );
//   }
// }

//ReactDOM.render(<Clock locale="bn-BD"> children Component </Clock>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
