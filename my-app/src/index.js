import React from 'react';
import ReactDOM from 'react-dom';
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


//Component

function Clock({locale}){
  return (
    <h1 className="heading">
       <span>Date {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</span> <br/>
      <span>Time {new Date().toLocaleTimeString(locale)}</span>
    </h1>
  );
}

//One Way
//ReactDOM.render(Clock(), document.getElementById('root'));
//2nd Way 
ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
