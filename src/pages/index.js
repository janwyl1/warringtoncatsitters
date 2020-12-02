import React from "react"
import Layout from '../components/layout';
import Hero from "../components/hero";
import HeroTarget from "../components/heroTarget";
import { Container, Row, Col } from 'react-bootstrap';

import gingerCat from "../images/ginger_cat_resting.jpg";
import smilingCat from "../images/smiling_cat.jpg";

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
        <HeroTarget
          title="There’s no place like home&hellip;"
          imgUrl={smilingCat}
          imgAlt="Grey Cat with a big smile"
          cssClasses="img"
        >
          <p>Keeping a consistent routine can help keep your cat happy and healthy.</p>
          <p>Adjusting to a new environment, with new sights and smells, can be stressful for them. We’ll give your cat the care it needs from the comfort of their own home.</p>
          <p>You can relax while you're away, knowing that your home is secure and your furry friend is well looked after. Purrfect!</p>
        </HeroTarget>
      </Container>
    </Layout>
    </>
    )
}
