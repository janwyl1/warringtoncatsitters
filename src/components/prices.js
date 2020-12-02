import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Prices(props){
    return (
        <>
        <Row>
            <Col xs={12}>
                <h2>{props.title}</h2>
            </Col>
        </Row>
        <Container>
            <Row>
                <Col md={4} lg={3}>
                    <div className="price-area">
                        <div className="price">{props.price}</div>
                        <p className="price-visit">{props.pricePer}</p>
                        <p className="price-desc">{props.priceDesc}</p>
                    </div>
                </Col>
                <Col md={8} lg={4} className="vertical-center">
                    <p className="price-aside">{props.priceAside}</p>
                </Col>
            </Row>
        </Container>
        <Row className="v-spacer">
            <Col xs={12} md={8} lg={6}>
                <div className="meet-greet bg-grey">
                    <h3>{props.meetGreetTitle}</h3>
                    <p>{props.meetGreetText}</p>
                    <a className="btn btn-grey" href="#contact">{props.meetGreetCtaText}</a>
                </div>
            </Col>
            <Col xs={12} md={3} lg={{span: 5, offset: 1}}>
            <img src={props.imgUrl} className={props.imgClasses} alt={props.imgAlt} />
            </Col>
        </Row>
        </>
    )
}

