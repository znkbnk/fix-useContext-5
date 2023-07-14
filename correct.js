//correct

import React, {useContext, useState, useEffect} from 'react';

const UserContext = React.createContext();

function Component1() {
  const [count, setCount] = useState(0); 
  
  useEffect(() => {
    // add any effects here
  }, []);
  
  function handleClick() {
     setCount((prevCount) => prevCount + 1);
  }
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

function Component2() {
  const user = useContext(UserContext);
  
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
    setUser({
      name: 'Jane'
    });
  }
  
  return (
    <UserContext.Provider value={user}>
      <Component1 />
  
      <Component2 />
  
      <button onClick={handleLogin}>Login</button>
    </UserContext.Provider>
  );
}
