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
                    <h1>Privacy Policy</h1>
                    <p className="lead">Warrington Cat Sitters is a trading name for Warrington Dog Walkers.</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={12} lg={{span: 10, offset: 1}}>
                    <h2>Privacy Policy</h2>
                    <p>Your privacy is important to us. It is Warrington Cat Sitters policy to respect your privacy regarding any information we may collect from you across our website, www.warringtoncatsitters.com and other sites we own and operate.</p>
                    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
                    <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                    <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                    <p>This policy is effective as of 1st November 2020.</p>
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
