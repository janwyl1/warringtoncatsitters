import React from "react"
import { Row, Col } from 'react-bootstrap';

export default function Hero({title, tagline, ctaText, heroImg, heroAlt}) {
    return (
        <Row>
            <Col xs={12} className="text-center">
                <h1>{title}</h1>
            </Col>
            <Col xs={12} md={{span: 8, offset: 2}} lg={{span:6, offset:3}} className="hero">
                <p className="lead">{tagline}</p>
                <a className="btn btn-purple hero-btn" href="#hero-target">{ctaText}</a>
            </Col>
            <Col xs={12} lg={{span:10, offset:1}} className="v-spacer">
            <img src={heroImg} className="img hero-img" alt={heroAlt} />
            </Col>          
        </Row>
    )
}