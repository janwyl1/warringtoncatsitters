import React from "react"
import Slider from "react-slick"

export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 10000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false
  }
  return (
    <Slider {...settings}>
      <div>
        <blockquote>
          <span className="testimonials-stars">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </span>
          <span className="testimonials-quote">
            Fantastic service from Sam and Rachael. Very personable and
            reassured all of my worries about leaving my 2 furry babies with
            someone else for the first time&hellip;
          </span>
          <cite className="testimonials-author">
            Kate -{" "}
            <a href="https://www.google.com/maps/place/Warrington+Dog+Walkers/@53.3998141,-2.6615011,13z/data=!3m1!4b1!4m13!1m5!8m4!1e1!2s102856696462867624938!3m1!1e1!3m6!1s0x487b03a9956e2b25:0x49c35f3434c0f356!8m2!3d53.3997681!4d-2.6264818!9m1!1b1">
              Google Reviews
            </a>
          </cite>
        </blockquote>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}
