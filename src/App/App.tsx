import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home/Home'
import Calculator from '../Calculator/Calculator'
import Calendar from '../Calendar/Calendar'

// Styling
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components'

function App() {
  return (
    
    <Container className="App">
      
      <Router>
      
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Experiments</Navbar.Brand>
          <Nav className="mr-auto">                
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </Switch>

      </Router>
    </Container>
  );
}

export default App;


// const Container_ = styled(Container)`
// `