import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col s4">
            <div className="col s4 m7">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s4 m7">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s4 m12">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s12 m7">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s12 m7">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s12 m7">
              <h2 className="header">Horizontal Card</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col s12">
            <Slider {...settings}>
              <div>
                <div className="col s12 m7">
                  <h2 className="header">Horizontal Card</h2>
                  <div className="card horizontal">
                    <div className="card-image">
                      <img src="https://lorempixel.com/100/190/nature/6" />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
