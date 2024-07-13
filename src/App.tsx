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
import { PrivateComponent } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { ListComponent } from './components/generics/List';

function App() {
  return (
    <div className="App">

      {/* generics  */}
      <ListComponent items={['nik', 'ekta']} clickHandler={(item) => console.log(item)}/>
      <ListComponent items={[3, 6 , 2, 9]} clickHandler={(item) => console.log(item)}/>

      {/* <PrivateComponent isLoggedIn={true} component={Profile} />
      <PrivateComponent isLoggedIn={false} component={Profile} /> */}

      {/* <ClassCounter message='abcd'/> */}

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
