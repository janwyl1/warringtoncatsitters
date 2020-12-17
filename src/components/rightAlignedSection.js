import React from "react"
import { Row, Col } from "react-bootstrap"
import PropTypes from 'prop-types';

export default function RightAlignedSection(props){
    return (
        <Row className="v-spacer">
            <Col xs={12} md={{span: 6, order: 2}} lg={5}>
                <h2>{props.title}</h2>
                {props.children}
            </Col>
            <Col xs={12} md={{span: 6, order: 1}} lg={{span: 6, offset: 1}} className="flex-wrap">
                <img src={props.imgUrl} alt={props.imgAlt} className={props.cssClasses}  />
            </Col>
        </Row>
    )
}

RightAlignedSection.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    cssClasses: PropTypes.string,
};