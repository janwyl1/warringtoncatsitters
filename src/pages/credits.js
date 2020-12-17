import React from "react"
import Layout from "../components/layout"

import ContactSmall from "../components/contactSmall"

import { Container, Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
            <Row className="mb-4">
                <Col xs={12} className="text-center">
                    <h1>Credits</h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={12} lg={{span: 10, offset: 1}}>
                    <h2>Images</h2>
                    <p><a href="https://stock.adobe.com" aria-label="Adobe Stock Photo">Licensed Photos from Adobe Stock Photo</a></p>
                    <p><a href="https://www.freepik.com/brgfx" aria-label="Turtle Photo">Turtle Photo by brgfx (Freepik.com)</a></p>
                    <p><a href="https://www.freepik.com/jcomp" aria-label="Fish Photo">Fish Photo by jcomp (Freepik.com)</a></p>
                </Col>
            </Row> 
            <Row className="mb-4">
                <Col xs={12} lg={{span: 10, offset: 1}}>
                    <h2>Design &amp; Development</h2>
                    <p>Designed and Built by <a href="https://github.com/janwyl1" aria-label="James Anwyl Github"> James Anwyl</a></p>
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
