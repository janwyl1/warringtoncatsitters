import React from "react"
import Layout from "../components/layout"

// import Contact from "../components/contact"
import ContactSmall from "../components/contactSmall"

import { Container, Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
            <Row className="mb-4">
                <Col xs={12} className="text-center">
                    <h1>Cookie Policy</h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={12} lg={{span: 10, offset: 1}}>
                    <h2>Cookies</h2>
                    <p>We don&lsquo;t use cookies, pixel tags, and/or other similar technologies to collect personal information.</p>
                    <p>We use Google Analytics to collect <a href="https://support.google.com/analytics/answer/2763052?hl=en" aria-label="IP Anonymization in Analytics">anonymous usage statistics</a>. No Person Identifiable Information, including IP addresses, is shared with Google.</p>
                    <p>Cookies are stored in your browser to enable us to collect this anonymised information. The cookies are:</p>
                    <p>_ga</p>
                    <p>_ga_[unique id] (the value of this cookie changes on each page view)</p>
                    <p>You can learn more about cookies on the <a href="https://www.cookiesandyou.com/" aria-label="Cookies and You">cookies and you website</a></p>
                </Col>
            </Row> 

            <ContactSmall
                title="Contact Info"
                lead="For more information, contact:"
                email="warringtoncatsitters@gmail.com"
                phoneNum="07914 251511"
                facebookUrl="https://www.facebook.com/warringtondogwalkers/"
                googleUrl="https://www.google.com/maps/place/Warrington+Dog+Walkers/@53.3997585,-2.6264759,15z/data=!4m5!3m4!1s0x0:0x49c35f3434c0f356!8m2!3d53.3997585!4d-2.6264759"
            />
                
        </Container>
      </Layout>
    </>
  )
}
