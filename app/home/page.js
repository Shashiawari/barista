import React from "react";
import "./page.css";
import Navbar from "../components/navbar/navbar";
const page = () => {
  return (
    <div>
      <div className="main-img">
        <Navbar />
        <h1>Barista</h1>
        <p>We serve every thing you eat</p>
      </div>
      <section className="sell p-5">
        <h1>What do we sell</h1>
        <hr></hr>
        <div className="row ">
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://thedomesticdietitian.com/wp-content/uploads/2018/11/vegetarian-wonton-bites-wide.jpg"
                className="img-fluid"
              ></img>
              <h2>Veg Apetizers</h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img src="ss.webp" className="img-fluid"></img>
              <h2>milk shakes</h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://amritsruae.com/blog/wp-content/uploads/2021/02/tandoori-chicken.jpeg"
                className="img-fluid"
              ></img>
              <h2>non-Veg </h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://things2.do/blogs/wp-content/uploads/2024/08/burger-7221436_1280.jpg"
                className="img-fluid"
              ></img>
              <h2>burger</h2>
            </div>
          </div>{" "}
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg"
                className="img-fluid"
              ></img>
              <h2>sandwich</h2>
            </div>
          </div>{" "}
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img src="ss.webp" className="img-fluid"></img>
              <h2>thick shakes</h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://vaya.in/recipes/wp-content/uploads/2018/05/Coffee.jpg"
                className="img-fluid"
              ></img>
              <h2>coffee</h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63de300f72df38001c517238.webp"
                className="img-fluid"
              ></img>
              <h2>Fruit juices</h2>
            </div>
          </div>
          <div className="col-6 col-lg-4 p-3">
            <div className="card">
              <img
                src="https://www.plantperks.com/wp-content/uploads/2020/02/IMG_0198-Edit.jpg"
                className="img-fluid"
              ></img>
              <h2>wraps</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="contact p-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.8860830040853!2d79.55354469164885!3d17.997348056549978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f816c6d273d%3A0x5e55828b4eea66c!2sBaarista%20Fast%20food%20%26%20Juice%20center!5e1!3m2!1sen!2sin!4v1738477217202!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-12 col-lg-6">
            <form className="form">
              <div className="title">Contact us</div>
              <input type="text" placeholder="Your email" className="input" />
              <textarea
                placeholder="Your message"
                defaultValue={""}
                rows={10}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer p-3">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-12 col-lg-4 col-md-6 my-3">
            <div className="d-flex mb-4 justify-content-center">
              <img src="/2.png" height={"100px"}></img>
            </div>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div className="col-12 col-lg-4 col-md-6 my-3">
            <div>
              <h1>For carrer</h1>
            </div>
            <p>Get hired</p>
            <p>Training</p>
            <p>carrers</p>
          </div>
          <div className="col-12 col-lg-4 col-md-6 my-3">
            <h1>Legal</h1>
            <p>Terms Of use</p>

            <p> Privacy Policy</p>

            <p> Commertial Art</p>

            <p> Contact Us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
