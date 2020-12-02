import React from "react"
import Layout from '../components/layout';
import Hero from "../components/hero";
import HeroTarget from "../components/heroTarget";

import { Container, Row, Col } from 'react-bootstrap';

import blackRabbit from "../images/black_rabbit.jpg";
import hamster from "../images/hamster.jpg";

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
        <HeroTarget
          title="Great or small, we love them all!"
          imgUrl={hamster}
          imgAlt="Smiling Hamster sat down"
          cssClasses="img center-img-sm img-mh"
        >
        <ul class="animals-list">
            <li>Hamsters &amp; Gerbils</li>
            <li>Rabbits &amp; Guinea Pigs</li>
            <li>Tortoise &amp; Turtles</li>
            <li>Birds</li>
            <li>Fish</li>
            <li>Ferrets</li>
            <li>Reptiles</li>
        </ul>
        <p>We’re always up for a challenge and the opportunity to expand our knowledge of all kinds of animals. Just let us know what you need.</p>
        </HeroTarget>
      </Container>
    </Layout>
    </>
    )
}
