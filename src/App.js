import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/app">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <h1>Home screen</h1>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
