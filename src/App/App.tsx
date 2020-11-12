import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home/Home'
import Calculator from '../Calculator/Calculator'
import Calendar from '../Calendar/Calendar'
import Counter from '../Counter/Counter'

// Styling
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { count } from 'console';
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
            <Nav.Link href="/counter">Counter</Nav.Link>
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
          <Route path="/counter">
            <Counter>
            {(count, setCount) => (
              <div>
                <p>{count}</p>
                <button onClick={() => setCount(count+1)}> Add One </button>
                <button onClick={() => setCount(count-1)}> Subtract </button>
              </div>
            )}
            </Counter>
          </Route>
        </Switch>

      </Router>
    </Container>
  );
}

export default App;


// const Container_ = styled(Container)`
// `