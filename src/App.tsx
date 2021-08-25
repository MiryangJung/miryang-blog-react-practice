import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Til from "./pages/TIL/TIL";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/til" component={Til} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
