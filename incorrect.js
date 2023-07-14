//incorrect

import React, {useContext, useState} from 'react';

const UserContext = React.createContext();

function Component1() {
  const [count, setCount] = useState(0); 
  
  function handleClick() {
    count++;
  }
  
  return (
    <div>
      <p>You clicked {count} times</p> 
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

function Component2() {
  user.name = 'Bob';
  
  return (
    <div>
      <p>Hello {user.name}!</p>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState({
    name: 'Mary'
  });

  function handleLogin() {
    user({  
      name: 'Jane'
    });
  }

  return (
    <Component1 />

    <Component2 />

    <button onClick={handleLogin}>Login</button>
  ); 
}
