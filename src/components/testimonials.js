import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "./Slider"

export default function Testimonials(props) {
  return (
    <div className="bg-black testimonials">
        <Container>
            <Row>
                <Col xs={12} md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                    <h2 className="text-center testimonials-header">{props.title}</h2>
                    <Slider testimonials={props.testimonials} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
