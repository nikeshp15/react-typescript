import React from 'react';
import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <User /> */}
      {/* <LoggedIn /> */}
    </div>
  );
}

export default App;
