import React from "react"
import Layout from '../components/layout';
import Hero from "../components/hero";
import { Container, Row, Col } from 'react-bootstrap';

import blackRabbit from "../images//black_rabbit.jpg";

export default function Home() {
  return (
    <>
    <Layout>
      <Container>
        <Hero 
          title="Pet Sitting in Warrington"
          tagline="Quality care for all your household pets&hellip;"
          ctaText="Find out more"
          heroImg={blackRabbit}
          heroAlt="Black Rabbit with big floppy ears"
        />
      </Container>
    </Layout>
    </>
    )
}
