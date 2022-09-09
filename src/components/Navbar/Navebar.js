import React from "react";
import "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Navebar(props) {
  const navigate = useNavigate();

  const handleSignOut = (user) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Signout Successfully");
      // props.showAlert("Signout Successfully");
      navigate("/");
    });
    // console.log(user)
  };
  return (
    <div>
      <header className="site-navbar py-4" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <a href="index.html">
                <img src="./images/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="ml-auto">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="active">
                    <a href="index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="matches.html" className="nav-link">
                      Matches
                    </a>
                  </li>
                  <li>
                    <a href="players.html" className="nav-link">
                      Players
                    </a>
                  </li>
                  <li>
                    <a href="blog.html" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li>
                    {props.name ? (
                      <button
                        className="btn btn-primary"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                      </Link>
                    )}
                  </li>
                  {/* <li><Link to="/login"><button className='btn btn-primary'>Login</button></Link></li> */}
                  {/* <li>{props.name ? `Welcome - ${props.name}` : <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>}</li> */}
                  <li>
                    {" "}
                    <Link to="/signup">
                      <button className="btn btn-primary">Signup</button>
                    </Link>
                  </li>
                </ul>
              </nav>

              <a
                href="/"
                className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"
              >
                <span className="icon-menu h3 text-white"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* <nav className="navbar navbar-expand-lg navbar-light navigation">
<a href="/" className="navbar-logo">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navbar-right" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <a href="/">Home</a>
      </li>
      <li className="nav-item">
      <a href="/">Tonsser United</a>
      </li>
      <li className="nav-item">
      <a href="/">Club Partners</a>
      </li>

      <li className="nav-item">
      <Link to="/login"><button className='btn btn-primary'>Login</button></Link>

      </li>

      <li className="nav-item">
      <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
      </li>
   
    </ul>
  </div>
</nav> */}

      {/* <div className="bg-video">
    <video src="http://bigcom.com/assets/2014/08/iChooseB.mp4" muted loop="true" autoplay="autoplay">
    </video>
 
    <h1 className="new-home-title px-5">UNLOCK YOUR POTENTIAL</h1>

    
  </div> */}
    </div>
  );
}

export default Navebar;
