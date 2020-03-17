import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/'
import TaskBar from './Components/TaskBar/'
import TaskList from './Components/TaskList/'
import { Row, Col, Container } from 'react-bootstrap'



function App() {
  return (
    <div>

      <Container>
        <Header />
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}> <TaskBar /></Col>
          <Col sm={4}></Col>

        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>  <TaskList /></Col>
          <Col sm={4}></Col>
        </Row>

      </Container>


    </div>
  );
}

export default App;
