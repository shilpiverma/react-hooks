import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Shilpi',
  lastName: 'MAdaan'
};

var medicalPackages=[
  {PackageTypeId:2,Amount:200},
  {PackageTypeId:3,Amount:200},
  {PackageTypeId:4,Amount:200},
];



function ReactHooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  console.log(medicalPackages);
useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    
    </div>
  );
}
class HelloWorld extends React.Component {
    
    render(){
          return (
                  <div>
                    Hello, {formatName(user)}
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                  </div>
                )
        }
}


function tick() {
    ReactDOM.render(<ReactHooks />, document.getElementById('root'));
  }
  setInterval(tick, 1000);
