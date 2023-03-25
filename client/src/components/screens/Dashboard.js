import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useHistory } from "react-router-dom";
import WorkProgress from "./WorkProgress"
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [userID, setuserID] = useState("");

  var eventData = [
    {
      eventName: "Lavaza",
      collageNmae: "vel Tech",
      date: "23/03/2003",
      time: "12:34 AM",
      contactDetails: "veltechSupport@edu.in",
    },
    {
      eventName: "Hackfy",
      collageNmae: "IIT Madras",
      date: "23/03/2003",
      time: "12:34 AM",
      contactDetails: "iitmSupport@edu.in",
    },
    {
      eventName: "IdeaThon",
      collageNmae: "IIT Kanpur",
      date: "23/03/2003",
      time: "12:34 AM",
      contactDetails: "veltechSupport@edu.in",
    },
    {
      eventName: "Cognizance",
      collageNmae: "VIT",
      date: "23/03/2003",
      time: "12:34 AM",
      contactDetails: "vitSupport@edu.in",
    },
    {
      eventName: "HackSRM",
      collageNmae: "SRM",
      date: "23/03/2003",
      time: "12:34 AM",
      contactDetails: "srmSupport@edu.in",
    },
  ];

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("-id", user._id);
    setuserID(user._id);
    fetch("/allqueries", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  return (
    <>
    <WorkProgress />
      <div class="container">
        <div class="row">
          <div class="col s4">
            <div className="col s4 m12">
              <h4 className="header">Transaction History</h4>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="https://fampay.in/">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s4 m12">
              <h4 className="header">Upload Statement</h4>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a
                      class="waves-effect waves-light btn modal-trigger"
                      href="#modal1"
                    >
                      Upload Statement
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div className="col s4 m12">
              <h4 className="header">CloseFrens</h4>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="https://closefrens.fampay.in/quiz/create">
                      This is a link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col s4">
            <div className="col s4 m12">
              <h4 className="header">Student Zone</h4>
              <div className="card horizontal">
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
          </div> */}
          <div class="col s7">
            <div className="col s4 m12">
              <h4 className="header">Announcement</h4>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Event</th>
                          <th>Place</th>
                          <th>Date</th>
                          <th>Contact Details</th>
                        </tr>
                      </thead>

                      <tbody>
                        {eventData.map((data) => (
                          <tr>
                            <td>{data.eventName}</td>
                            <td>{data.collageNmae}</td>
                            <td>{data.date}</td>
                            <td>{data.contactDetails}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s5">
            <div className="col s4 m12">
              <h4 className="header">Hot Queries</h4>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Query</th>
                          <th>Likes No</th>
                        </tr>
                      </thead>

                      <tbody>
                        {data.map((data) => (
                          <tr>
                            <td>{data.query}</td>
                            <td>{data.likes.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-action">
                    <Link to="/f&q">View Queries</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Area */}
      <div class="container">
        <div class="row">
          <div class="col s12">
            <Slider {...settings}>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1544179559-032b931c661e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1508243771214-6e95d137426b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=801"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col s12 m12">
                  <div className="card horizontal">
                    <div className="card-image">
                      <img
                        className="carousel-image"
                        src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      />
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <p>
                          I am a very simple card. I am good at containing small
                          bits of information.
                        </p>
                      </div>
                      <div className="card-action">
                        <a href="#">Thank you so much!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* <!-- Modal Structure --> */}
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Upload Statement</h4>
          <div>

          </div>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </>
  );
}
