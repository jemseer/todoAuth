import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/'
import TaskBar from './Components/TaskBar/'
import TaskList from './Components/TaskList/'
import { Row, Col, Container } from 'react-bootstrap'



function App() {
  return (

    <>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Header />
            <TaskBar />
            <TaskList />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
