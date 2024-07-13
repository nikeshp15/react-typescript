import React from 'react';
import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { MainUser } from './components/context/MainUser';
import ClassCounter from './components/class/ClassCounter';

function App() {
  return (
    <div className="App">

      <ClassCounter message='abcd'/>

      {/* <UserContextProvider>
        <MainUser/>
      </UserContextProvider> */}

      {/* <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}
      {/* <Counter /> */}
      {/* <User /> */}
      {/* <LoggedIn /> */}
    </div>
  );
}

export default App;
