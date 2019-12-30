import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Shilpi',
  lastName: 'MAdaan'
};



function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

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
    
    render() {
          return (
                  <div>
                    Hello, {formatName(user)}
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                  </div>
                )
        }
};


function tick() {
    ReactDOM.render(<Example />, document.getElementById('root'));
  }
  setInterval(tick, 1000);
