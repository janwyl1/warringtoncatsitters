import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from 'prop-types'

export default function Contact(props) {
  return (
        <Container>
        <Row id="contact">
            <Col xs={12} className="contact">
                <h2 className="text-center">{props.title}</h2>
                <p className="lead">{props.lead}</p>
                <a className="btn btn-purple" href={"tel:" + props.phoneNum.replace(/\s/g, '')}  aria-label={"Call: " + props.phoneNum}>{props.phoneNum}</a>
                <a className="btn btn-dark-purple btn-email" href={"mailto:" + props.email + "?subject=Website%20Enquiry"}
                    aria-label={"Email:" + props.email}>{props.email}</a>
                <p>Find us on <a href={props.facebookUrl} aria-label="Find us on Facebook" className="social-link">Facebook</a> &amp; <a href={props.googleUrl}  aria-label="See our Google Business Page" className="social-link">Google</a></p>
            </Col>
        </Row>
        <Row className="v-spacer">
            <Col xs={12}>
                <img src={props.imgUrl} alt={props.imgAlt} className={props.imgClasses} />
            </Col>
        </Row>
        </Container>
  )
}

Contact.propTypes = {
    title: PropTypes.string,
    lead: PropTypes.string,
    phoneNum: PropTypes.string,
    email: PropTypes.string,
    facebookUrl: PropTypes.string,
    googleUrl: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    imgClasses: PropTypes.string
};