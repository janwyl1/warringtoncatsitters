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
                    <h1>Page not found!</h1>
                    <p>Error code: 404</p>
                    <p>Our expert team is on the case</p>
                    <p>You may be looking for one of the following:</p>
                    <ul>
                        <li><a href="/">Cat Sitting</a></li>
                        <li><a href="/pet-sitting">Pet Sitting</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>

            </Row> 
            <ContactSmall
                title="Still can't find what your looking for?"
                lead="Contact us for help:"
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
