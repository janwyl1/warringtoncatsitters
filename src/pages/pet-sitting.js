import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import HeroTarget from "../components/heroTarget"
import RightAlignedSection from "../components/rightAlignedSection"
import LeftAlignedSection from "../components/leftAlignedSection"
import PriceSection from "../components/prices"

import { Container, Row, Col } from "react-bootstrap"

import blackRabbit from "../images/black_rabbit.jpg"
import hamster from "../images/hamster.jpg"
import fish from "../images/fish.jpg"
import guineapig from "../images/guineapig.jpg"
import tortoises from "../images/two-tortoises-together.jpg"
import paws from "../images/paws.png"


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
            <ul className="animals-list">
              <li>Hamsters &amp; Gerbils</li>
              <li>Rabbits &amp; Guinea Pigs</li>
              <li>Tortoise &amp; Turtles</li>
              <li>Birds</li>
              <li>Fish</li>
              <li>Ferrets</li>
              <li>Reptiles</li>
            </ul>
            <p>
              We’re always up for a challenge and the opportunity to expand our
              knowledge of all kinds of animals. Just let us know what you need.
            </p>
          </HeroTarget>
          <RightAlignedSection
            title="Why hire a pet sitter?"
            imgUrl={fish}
            imgAlt="Colorful Fish swimming downwards"
            cssClasses="img center-img-sm img-rotate mt-4"
          >
                <p>Hiring a pet sitter has many benefits.</p>
                <p>A home visit while your away can eliminate the issues associated with travel or change of routine, and remove the burden from friends and family.</p>
                <p>We’ll take care of food, water, litter changes and veterinary needs. Ensuring your pet has as much exercise and playtime as desired.</p>
                <p>We know how much they mean to you and we'll do whatever it takes to keep your pet happy and healthy.</p>
          </RightAlignedSection>
          <PriceSection
            title="Professional and Affordable"
            price="£7"
            pricePer="per visit"
            priceDesc="(up to 30 minutes)"
            priceAside="We can do block bookings and multiple visits throughout the day."
            meetGreetTitle="Free 'Meet and Greet' session"
            meetGreetText="Get to know us first with a Free Meet and Greet session. We’ll introduce ourselves and provide
            our ID, DBS certificate and insurance information."
            meetGreetCtaText="Arrange your’s today!"
            imgUrl={paws}
            imgClasses="img center-img-sm img-paw"
            imgAlt="Paw prints"
          />
          <LeftAlignedSection
            title="Tailored to you &amp; your pet"
            imgUrl={guineapig}
            imgAlt="Cute Guinea pig looking up"
            cssClasses="img center-img-sm"
          >
                <p>Our pet sitting service is tailored to suit you and your pet.</p>
                <p>We’ll get to know them, what they like to do, and adapt our service to match their routine.</p>
                <p>Your pet is our number one priority and we’ll treat them as our own.</p>
          </LeftAlignedSection>
          <RightAlignedSection
            title="We’ve got it covered"
            imgUrl={tortoises}
            imgAlt="Small Tortoise riding on the back of a larger tortoise"
            cssClasses="img center-img-sm"
          >
                <p>We’re professional, experienced and fully insured.</p>
                <p>Whether your away on holiday, at work during the day or just need a hand to stay on top of things. We can be there to ensure your pet is well looked after, and your home is secure.</p>
                <p>We’re friendly, reliable and always willing to go the extra mile!</p>
          </RightAlignedSection>
        </Container>
      </Layout>
    </>
  )
}
