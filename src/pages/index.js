import React from "react"
import Layout from '../components/layout';
import Hero from "../components/hero";
import { Container, Row, Col } from 'react-bootstrap';

import gingerCat from "../images/ginger_cat_resting.jpg";

export default function Home() {
  return (
    <>
    <Layout>
      <Container>
        <Hero 
          title="Cat Sitting in Warrington"
          tagline="Our 5-star rated cat sitting service gives you peace of mind while you’re away&hellip;"
          ctaText="Find out more"
          heroImg={gingerCat}
          heroAlt="Sleepy ginger cat"
        />
      </Container>
    </Layout>
    </>
    )
}
