import React from "react"
import { Row, Col } from "react-bootstrap"

export default function ContactSmall(props) {
  return (
        <Row id="contact">
            <Col xs={12} lg={{span: 10, offset: 1}} className="contact text-left">
                <h2>{props.title}</h2>
                <p>{props.lead}</p>
                <p>T: <a href={"tel:" + props.phoneNum.replace(/\s/g, '')} aria-label={"Call: " + props.phoneNum}>{props.phoneNum}</a></p>
                <p>E: <a href={"mailto:" + props.email + "?subject=Website%20Enquiry"}
                    aria-label={props.email}>{props.email}</a></p>
                    <p>Find us on <a href={props.facebookUrl} aria-label="Find us on Facebook" className="social-link">Facebook</a> &amp; <a href={props.googleUrl} aria-label="See our Google Business Page" className="social-link">Google</a></p>
            </Col>
        </Row>

  )
}