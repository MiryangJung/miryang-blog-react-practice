import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Til from "./pages/TIL/Til";
import styled from "@emotion/styled";
import Head from "./components/Head/Head";

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Container>
          <Head/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/til" component={Til} />
          </Switch>
        </Container>
    </BrowserRouter>
  );
}

const Container = styled.section`
  flex: 1;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
`;

export default App;
