import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import HeroTarget from "../components/heroTarget"
import RightAlignedSection from "../components/rightAlignedSection"
import PriceSection from "../components/prices"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"

import { Container } from "react-bootstrap"

import gingerCat from "../images/ginger_cat_resting.jpg"
import smilingCat from "../images/smiling_cat.jpg"
import greyCatMoustache from "../images/grey-cat-moustache.jpg"
import catLookingLeft from "../images/look-left-cat.jpg"
import catWithHeart from "../images/cat-with-heart-toy.jpg"
import kittenReachingUp from "../images/kitten-reaching-up.jpg"


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
              You can relax while you&lsquo;re away, knowing that your home is secure
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
          <RightAlignedSection
            title="We won’t let you down!"
            imgUrl={catWithHeart}
            imgAlt="Cat with a heart toy"
            cssClasses="img center-img-sm img-mh"
          >
            <p>We’re friendly, experienced and professional cat sitters, that pride ourselves on our excellent customer service.</p>
            <p>You can rely on us show up on time, everytime. We’re trustworthy and honest, and we always aim to impress.</p>
            <p>Come rain or shine, we’ll always be there when you need us&hellip; </p>
          </RightAlignedSection>
        </Container>
        <Testimonials 
          title="What our customers say about us"
          testimonials={[
            {
              quote: "Fantastic service from Sam and Rachael. Very personable and reassured all of my worries about leaving my 2 furry babies with someone else for the first time...",
              author: "Kate",
              url: "https://www.google.com/maps/place/Warrington+Dog+Walkers/@53.3998141,-2.6615011,13z/data=!3m1!4b1!4m13!1m5!8m4!1e1!2s102856696462867624938!3m1!1e1!3m6!1s0x487b03a9956e2b25:0x49c35f3434c0f356!8m2!3d53.3997681!4d-2.6264818!9m1!1b1",
              urlSource: "Google Reviews"
            },
            {
              quote: "Efficient and professional service. Respond in a timely manner and very trustworthy.",
              author: "Liz"
            },                     
            {
              quote: "Great friendly service and they never let you down, would most definitely recommend!!! 👍",
              author: "Mike"
            },                     
          ]}
          />
          <Contact 
            title="Get in touch!"
            lead="We’re available 24/7, 365 days a year"
            email="warringtoncatsitters@gmail.com"
            phoneNum="07914 251511"
            facebookUrl="https://www.facebook.com/warringtondogwalkers/"
            googleUrl="https://www.google.com/maps/place/Warrington+Dog+Walkers/@53.3997585,-2.6264759,15z/data=!4m5!3m4!1s0x0:0x49c35f3434c0f356!8m2!3d53.3997585!4d-2.6264759"
            imgUrl={kittenReachingUp}
            imgAlt="Cute kitten reaching up"
            imgClasses="center-img contact-img"
          />
      </Layout>
    </>
  )
}