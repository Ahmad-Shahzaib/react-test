import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import Alert from '../../Alert';
import Navebar from "../Navbar/Navebar";

function Home(props) {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const handleSignOut = (user) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Signout Successfully");
        // props.showAlert("Signout Successfully");
        navigate("login");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
    // console.log(user)
  };

  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user);
    });
  });

  return (
    <>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Navebar name={userName} />

        {/* <header className="site-navbar py-4" role="banner">

      <div className="container">
        <div className="d-flex align-items-center">
          <div className="site-logo">
            <a href="index.html">
              <img alt='' src="images/logo.png" alt="Logo">
            </a>
          </div>
          <div className="ml-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                <li><a href="matches.html" className="nav-link">Matches</a></li>
                <li><a href="players.html" className="nav-link">Players</a></li>
                <li><a href="blog.html" className="nav-link">Blog</a></li>
                <li><a href="contact.html" className="nav-link">Contact</a></li>
              </ul>
            </nav>

            <a href="/" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
                className="icon-menu h3 text-white"></span></a>
          </div>
        </div>
      </div>

    </header> */}

        <div className="hero overlay mans">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 ml-auto">
                <h1 className="text-white">
                  {props.name ? `Hi ${props.name}` : ""} World Cup Event
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, molestias repudiandae pariatur.
                </p>
                <div id="date-countdown"></div>
                <p>
                  <a href="/" className="btn btn-primary py-3 px-4 mr-3">
                    Book Ticket
                  </a>
                  <a href="/" className="more light">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex team-vs">
                <span className="score">4-1</span>
                <div className="team-1 w-50">
                  <div className="team-details w-100 text-center">
                    <img src="images/logo_1.png" alt="" className="img-fluid" />
                    <h3>
                      LA LEGA <span>(win)</span>
                    </h3>
                    <ul className="list-unstyled">
                      <li>Anja Landry (7)</li>
                      <li>Eadie Salinas (12)</li>
                      <li>Ashton Allen (10)</li>
                      <li>Baxter Metcalfe (5)</li>
                    </ul>
                  </div>
                </div>
                <div className="team-2 w-50">
                  <div className="team-details w-100 text-center">
                    <img alt="" src="images/logo_2.png" className="img-fluid" />
                    <h3>
                      JUVENDU <span>(loss)</span>
                    </h3>
                    <ul className="list-unstyled">
                      <li>Macauly Green (3)</li>
                      <li>Arham Stark (8)</li>
                      <li>Stephan Murillo (9)</li>
                      <li>Ned Ritter (5)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="latest-news">
          <div className="container">
            <div className="row">
              <div className="col-12 title-section">
                <h2 className="heading">Latest News</h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="/">
                    <img alt="" src="images/img_1.jpg" className="img-fluid" />
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">Romolu to stay at Real Nadrid?</h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img alt="" src="images/person_1.jpg" />
                        </div>
                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="/">
                    <img alt="" src="images/img_3.jpg" className="img-fluid" />
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">
                        Kai Nets Double To Secure Comfortable Away Win
                      </h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img alt="" src="images/person_1.jpg" />
                        </div>
                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-entry">
                  <a href="/">
                    <img alt="" src="images/img_2.jpg" className="img-fluid" />
                  </a>
                  <div className="caption">
                    <div className="caption-inner">
                      <h3 className="mb-3">Dogba set for Juvendu return?</h3>
                      <div className="author d-flex align-items-center">
                        <div className="img mb-2 mr-3">
                          <img alt="" src="images/person_1.jpg" />
                        </div>
                        <div className="text">
                          <h4>Mellissa Allison</h4>
                          <span>May 19, 2020 &bullet; Sports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="widget-next-match">
                  <div className="widget-title">
                    <h3>Next Match</h3>
                  </div>
                  <div className="widget-body mb-3">
                    <div className="widget-vs">
                      <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                          <img alt="" src="images/logo_1.png" />
                          <h3>Football League</h3>
                        </div>
                        <div>
                          <span className="vs">
                            <span>VS</span>
                          </span>
                        </div>
                        <div className="team-2 text-center">
                          <img alt="" src="images/logo_2.png" />
                          <h3>Soccer</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center widget-vs-contents mb-4">
                    <h4>World Cup League</h4>
                    <p className="mb-5">
                      <span className="d-block">December 20th, 2020</span>
                      <span className="d-block">9:30 AM GMT+0</span>
                      <strong className="text-primary">New Euro Arena</strong>
                    </p>

                    <div id="date-countdown2" className="pb-1"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="widget-next-match">
                  <table className="table custom-table">
                    <thead>
                      <tr>
                        <th>P</th>
                        <th>Team</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>PTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <strong className="text-white">
                            Football League
                          </strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <strong className="text-white">Soccer</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <strong className="text-white">Juvendo</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <strong className="text-white">
                            French Football League
                          </strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <strong className="text-white">Legia Abante</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <strong className="text-white">Gliwice League</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <strong className="text-white">Cornika</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <strong className="text-white">Gravity Smash</strong>
                        </td>
                        <td>22</td>
                        <td>3</td>
                        <td>2</td>
                        <td>140</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-6 title-section">
                <h2 className="heading">Videos</h2>
              </div>
              <div className="col-6 text-right">
                <div className="custom-nav">
                  <a href="/" className="js-custom-prev-v2">
                    <span className="icon-keyboard_arrow_left"></span>
                  </a>
                  <span></span>
                  <a href="/" className="js-custom-next-v2">
                    <span className="icon-keyboard_arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="owl-4-slider owl-carousel">
              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_1.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Dogba set for Juvendu return?</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_2.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">
                        Kai Nets Double To Secure Comfortable Away Win
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_3.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Romolu to stay at Real Nadrid?</h3>
                    </div>
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_1.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Dogba set for Juvendu return?</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_2.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">
                        Kai Nets Double To Secure Comfortable Away Win
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="video-media">
                  <img alt="" src="images/img_3.jpg" className="img-fluid" />
                  <a
                    href="https://vimeo.com/139714818"
                    className="d-flex play-button align-items-center"
                    data-fancybox
                  >
                    <span className="icon mr-3">
                      <span className="icon-play"></span>
                    </span>
                    <div className="caption">
                      <h3 className="m-0">Romolu to stay at Real Nadrid?</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container site-section">
          <div className="row">
            <div className="col-6 title-section">
              <h2 className="heading">Our Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="custom-media d-flex">
                <div className="img mr-4">
                  <img alt="" src="images/img_1.jpg" className="img-fluid" />
                </div>
                <div className="text">
                  <span className="meta">May 20, 2020</span>
                  <h3 className="mb-4">
                    <a href="/">Romolu to stay at Real Nadrid?</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus deserunt saepe tempora dolorem.
                  </p>
                  <p>
                    <a href="/">Read more</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-media d-flex">
                <div className="img mr-4">
                  <img alt="" src="images/img_3.jpg" className="img-fluid" />
                </div>
                <div className="text">
                  <span className="meta">May 20, 2020</span>
                  <h3 className="mb-4">
                    <a href="/">Romolu to stay at Real Nadrid?</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus deserunt saepe tempora dolorem.
                  </p>
                  <p>
                    <a href="/">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget mb-3">
                  <h3>News</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="/">All</a>
                    </li>
                    <li>
                      <a href="/">Club News</a>
                    </li>
                    <li>
                      <a href="/">Media Center</a>
                    </li>
                    <li>
                      <a href="/">Video</a>
                    </li>
                    <li>
                      <a href="/">RSS</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget mb-3">
                  <h3>Tickets</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="/">Online Ticket</a>
                    </li>
                    <li>
                      <a href="/">Payment and Prices</a>
                    </li>
                    <li>
                      <a href="/">Contact &amp; Booking</a>
                    </li>
                    <li>
                      <a href="/">Tickets</a>
                    </li>
                    <li>
                      <a href="/">Coupon</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="widget mb-3">
                  <h3>Matches</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="/">Standings</a>
                    </li>
                    <li>
                      <a href="/">World Cup</a>
                    </li>
                    <li>
                      <a href="/">La Lega</a>
                    </li>
                    <li>
                      <a href="/">Hyper Cup</a>
                    </li>
                    <li>
                      <a href="/">World League</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget mb-3">
                  <h3>Social</h3>
                  <ul className="list-unstyled links">
                    <li>
                      <a href="/">Twitter</a>
                    </li>
                    <li>
                      <a href="/">Facebook</a>
                    </li>
                    <li>
                      <a href="/">Instagram</a>
                    </li>
                    <li>
                      <a href="/">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-12">
                <div className=" pt-5">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="icon-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com">Colorlib</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* <div className='container'>
        <h2>{props.name ? `Welcome - ${props.name}` : <Link to="/login"><button className='btn btn-primary'>Login</button></Link>}</h2>
     </div> */}

      {/*       
     <div className='container'>
        <div className='d-flex justify-content-between'>
            <h1>
            <Link to="/login"><button className='btn btn-primary'>Login</button></Link>
            </h1>

            <h1>
            <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
            </h1>
        </div>
     </div> */}

      {/* 
     <div className='container d-flex justify-content-center'>
     <button className='btn btn-primary' onClick={handleSignOut}>Sign Out</button>
     </div> */}

      <b className="man">{errorMsg}</b>
    </>
  );
}

export default Home;
