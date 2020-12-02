import React from "react"
import Slider from "react-slick"

/*
I'm not sure how to combine these into 1 line?
{testimonial.url && " - "}
{testimonial.url && - <a href={testimonial.url}>

*/
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
       {this.props.testimonials.map((testimonial, index) => {
        return (
            <div key={index}>
              <blockquote>
              <span className="testimonials-stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </span>
              <span className="testimonials-quote">{testimonial.quote}</span>
              <cite className="testimonials-author">{testimonial.author} 
                {testimonial.url && " - "}
                {testimonial.url && <a href={testimonial.url}>
                  {testimonial.urlSource ? testimonial.urlSource : "source"}
                </a>}
              </cite>
              </blockquote>
          </div>
        )
    })}
    </Slider>
  )
}
