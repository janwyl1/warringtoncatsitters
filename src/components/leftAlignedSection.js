import React from "react"
import { Row, Col } from "react-bootstrap"

export default function LeftAlignedSection(props){
    return (
        <Row className="v-spacer">
            <Col xs={12}><h2>{props.title}</h2></Col>
            <Col xs={12} md={6} lg={5}>
                {props.children}
            </Col>
            <Col xs={12} md={6} lg={{span: 6, offset: 1}}>
                <img src={props.imgUrl} alt={props.imgAlt} className={props.cssClasses}  />
            </Col>
        </Row>
    )
}