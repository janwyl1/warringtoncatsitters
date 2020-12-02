import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import HeroTarget from "../components/heroTarget"
import RightAlignedSection from "../components/rightAlignedSection"
import PriceSection from "../components/prices"
import Testimonials from "../components/testimonials"

import { Container, Row, Col } from "react-bootstrap"

import gingerCat from "../images/ginger_cat_resting.jpg"
import smilingCat from "../images/smiling_cat.jpg"
import greyCatMoustache from "../images/grey-cat-moustache.jpg"
import catLookingLeft from "../images/look-left-cat.jpg"


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
            <p>
              Keeping a consistent routine can help keep your cat happy and
              healthy.
            </p>
            <p>
              Adjusting to a new environment, with new sights and smells, can be
              stressful for them. We’ll give your cat the care it needs from the
              comfort of their own home.
            </p>
            <p>
              You can relax while you're away, knowing that your home is secure
              and your furry friend is well looked after. Purrfect!
            </p>
          </HeroTarget>
          <RightAlignedSection
            title="Cat Sitters you can count on"
            imgUrl={greyCatMoustache}
            imgAlt="Grey cat with a walrus moustache"
            cssClasses="img center-img img-mh img-cat-moustache"
          >
            <p>
              We cover all the basics from feeding and litter changes, to
              grooming and veterinary needs. Giving your cat as much or as
              little playtime as they desire.
            </p>
            <p>
              We’ll ensure your cat has everything they need and that your home
              is safe and secure. If there’s any issues, we’re just a phone call
              away.
            </p>
            <p>
              We’re always willing to go the extra mile - we’ll put the bins out
              for you, and if theres anything else you need while your away,
              we’re more than happy to help.
            </p>
          </RightAlignedSection>
          <PriceSection
            title="Quality care at affordable prices"
            price="£7"
            pricePer="per visit"
            priceDesc="(up to 30 minutes)"
            priceAside="We can do block bookings and multiple visits throughout the day."
            meetGreetTitle="Free 'Meet and Greet' session"
            meetGreetText="Get to know us first with a Free Meet and Greet session. We’ll introduce ourselves and provide
            our ID, DBS certificate and insurance information."
            meetGreetCtaText="Arrange your’s today!"
            imgUrl={catLookingLeft}
            imgClasses="img img-cat-left"
            imgAlt="Cat looking left"
          />
        </Container>
        <Testimonials 
          title="What our customers say about us">

        </Testimonials>
      </Layout>
    </>
  )
}
