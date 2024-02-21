import React from "react";
import My_Logo01 from './Assets/My_Logo01.png'
import photo01 from './Assets/photo01.jpg'
import mobileapp from './Assets/mobileapp.jpg'
import ui_ux from './Assets/ui_ux.jpg'
import webapp from './Assets/webapp.jpg'
import My_Logo02 from './Assets/My-Logo02.png'
const Resume_File = "http://localhost:3000/Tilottam_Resume.pdf"
function App() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div>

      {/* Navbar Section */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top">
        <div class="container-fluid">
          <img src={My_Logo01} alt="..." height={50} />
          <button class="navbar-toggler" text-center type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#service" >Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}

      <section id="home" className="home my-5">
        <div className="container-fluid">
          <div className="row d-flex flex-column align-items-center justify-content-center text-center" id="header">
            <h1 id="heading01" data-aos="fade-left" data-aos-duration="2000">Hi.,I'M <span className="fw-bold text-info">TILOTTAM.</span> </h1>
            <h2 id="heading02" data-aos="fade-right" data-aos-duration="2000">Software Developer</h2>
            <h5 id="heading03" data-aos="flip-down" data-aos-duration="1000">Welcome To My Portfolio Website</h5>
            <a href="#contact"><button className="btn btn-success"><i className="fa fa-briefcase mx-1" />Hire Me</button></a>
          </div>
        </div>
      </section>
      <section id="about" className="about my-5">
        <div className="container">
          <div className="text-center my-5">
            <h2 className="text-primary" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">About</h2>
            <hr className="w-25 m-auto" />
          </div>
          <div className="row">
            <div className=" d-flex flex-column align-items-center justify-content-center col-sm-12 col-md-6 col-lg-6 col-12 text-center">
              <p className="about"><span id="#about_heading" className="fw-bold text-primary">Hii...!</span> I'm  A Software Developer. <br />I create responsive secure website for my clients and I am a skilled and passionate web designer with experience in create visually appealing and user-friendly websites. </p>
              <button className="btn btn-success" onClick={() => { downloadFileAtURL(Resume_File) }}>Download CV</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-2 text-center">
              <img id="myImg" src={photo01} alt="..." className="img-fluid img-thumbnail" data-aos="zoom-in-left" data-aos-duration="1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}

      <section id="service" className="services my-5">
        <div className="container">
          <div className="text-center my-5">
            <h2 className="text-primary" data-aos="fade-up" data-aos-duration="1000" >Services</h2>
            <hr className="w-25 m-auto" />
          </div>
          <div className=" my-3 row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={mobileapp} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                  <h5 className="card-title">Mobile App Developer</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat ut quia, ad id et hic porro mollitia ducimus minima!</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={webapp} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                  <h5 className="card-title">Web App Developer</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat ut quia, ad id et hic porro mollitia ducimus minima!</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={ui_ux} className="card-img-top" alt="..." height={200} />
                <div className="card-body">
                  <h5 className="card-title">UI/UX Designer</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat ut quia, ad id et hic porro mollitia ducimus minima!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact" className=" contact my-5">
        <div className="container">
          <div className="text-center my-5">
            <h2 className="text-primary" data-aos="fade-up" data-aos-duration="1000" >Contact Me</h2>
            <hr className="w-25 m-auto" />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8 col-12">
              <form className="row g-3 ">
                <div className="col-md-6 col-sm-12 col-12">
                  <label for="inputEmail4" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputEmail" placeholder="Name" />
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <label for="inputPassword4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputPassword" placeholder="Email" />
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <label for="inputAddress" className="form-label">Contact</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Contact Number" />
                </div>
                <div className="col-md-6  col-sm-12 col-12">
                  <label for="inputAddress" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="subject" />
                </div>
                <div className="md-form">
                  <label className='form-label' for="message">Your message</label>
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Enter Your Message Here"></textarea>
                </div>
                <div class="col-md-6 col-sm-6 col-6  my-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 col-12">
              <div className="text-center">
                <h4 className="text-danger">Follow Me</h4>
                <hr className="w-25 m-auto" />
              </div>
              <div className="row follow_Section">
                <ul>
                  <li className="text-center mt-4 d-flex justify-content-evenly">
                    <a href="https://www.instagram.com/tilottam_zope_?igsh=MW40Nm03OTJhd2JnYg=="><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/qr/G3AMCVWQT5CJL1"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://github.com/TilottamZope"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tilottam-zope-35b62b231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <section id="footer" className="footer">
        <div className="container">
            <div className="row">
              <p className="text-light text-center my-2">&copy;Copyright 2024 <span className="fw-bold text-warning text-decoration-underline">T.L.T.M </span> Website</p>
             <p className="text-light text-end ">Designed By : <img src={My_Logo02} alt="..." height={30}/></p>
             
            </div>
        </div>

      </section>
    </div>
  );
}

export default App;
