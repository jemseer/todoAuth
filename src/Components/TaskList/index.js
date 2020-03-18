import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FaTrash from 'react-icons/lib/fa/trash'
import FaEdit from 'react-icons/lib/fa/edit'

const Index = () => {
    return (
        <div className="list-component p-10 typo">
            <Container>
                <Row>
                    <Col sm={8}>
                        List
                    </Col>
                    <Col sm={4}>
                        <FaTrash className="icon-style" /> <FaEdit className="icon-style" />
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Index
