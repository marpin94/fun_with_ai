import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ResponseCard = ({prompt, responseText}) => {
  return (
    <Container className='response-card-div'>
        <Row>
            <Col>
                <h4>Prompt: </h4>
                <p> {prompt} </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>Response: </h4>
                <p> {responseText} </p>
            </Col>    
        </Row>
    </Container>
  )
}

export default ResponseCard