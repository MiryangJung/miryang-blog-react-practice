import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
