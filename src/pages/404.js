import React from "react"
import Layout from "../components/layout"

import {Link} from "gatsby"

import ContactSmall from "../components/contactSmall"
// import Hero from "../components/hero"
// import LeftAlignedSection from "../components/leftAlignedSection"

import { Container, Row, Col} from "react-bootstrap"

import cat404 from "../images/404-cat.jpg"


export default function Home() {
  return (
    <>
      <Layout>
        <Container>
        {/* <Hero
            title="Page not found!"
            tagline="Our expert team is on the case"
            ctaText="View homepage"
            heroImg={cat404}
            heroAlt="Cat playing with computer cables"
          />


        <LeftAlignedSection
            title="Links"
          >
            <p>You may be looking for:</p>
            <ul>
                <li><a href="/">Cat Sitting</a></li>
                <li><a href="/pet-sitting">Pet Sitting</a></li>
            </ul>
          </LeftAlignedSection> */}

            <Row className="mb-2">
                <Col xs={12} lg={{span: 10, offset: 1}} className="text-center">
                    <h1>Something went wrong!</h1>
                    <p className="lead mb-2">Sorry, we couldn't find the page you were looking for.</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={12} md={{span: 10, offset: 1}} lg={{span:6, offset:3}} className="text-center">
                    <a className="btn btn-purple hero-btn d-block mb-4" href="/">Return to homepage</a> 
                    <span className="text-grey error-code d-block">Error Code: 404</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={{span:10, offset:1}} className="v-spacer">
                    <img src={cat404} className="img hero-img" alt="Cat playing with computer cables" />
                </Col>          
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
