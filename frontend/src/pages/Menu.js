import React, { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/Menu.css";


//  IMPORT IMAGES (mandatory in React)
import banner from "../Assets/4a.png";
import a from "../Assets/4b.png";
import b from "../Assets/4c.png";
import c from "../Assets/4d.png";
import d from "../Assets/4e.png";
import bookImg from "../Assets/4f.png";
import chef1 from "../Assets/5a.png";
import chef2 from "../Assets/5b.png";
import chef3 from "../Assets/5c.png";
import chef4 from "../Assets/5d.png";
import client from "../Assets/5e.png";

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);


  const handleReadMore = () => {
  setShowMore(!showMore);
   };


  //  Safe API call
  const load = async () => {
    try {
      setLoading(true);
      await API.get("/api/menu");
    } catch (err) {
      console.error("Menu API failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="main">
      {/* HERO */}
      {/* <div className="center">
        <h1>Enjoy Our Delicious Meal</h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.  
          Aliqu diam amet diam et eos.
        </p>
        <button id="btn">BOOK A TABLE</button>
      </div> */}
      <img className="image" src={banner} alt="banner" />

      {/* SERVICES */}
      <div className="container">
        <div className="card">
          <h2>Master Chefs</h2>
          <p>Professional & experienced chefs</p>
        </div>
        <div className="card">
          <h2>Quality Food</h2>
          <p>Fresh & delicious ingredients</p>
        </div>
        <div className="card">
          <h2>Online Order</h2>
          <p>Fast & easy ordering</p>
        </div>
        <div className="card">
          <h2>24/7 Service</h2>
          <p>Always open for you</p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="About-Container">
        <div className="name">
          <h2>About Us</h2>
          <h1>Welcome to Restoran</h1>
          <p>We serve the best food in town.</p>

          {showMore && (
            <p>
             Restoran me hum fresh ingredients, experienced chefs aur best
             customer service dete hain. Hamara aim hai ki har customer
             satisfied rahe aur dobara aaye.
            </p>
          )}

          <button className="btn" onClick={handleReadMore}>
           {showMore ? "READ LESS" : "READ MORE"}
          </button>
        </div>
        <br />
        <br />


        <div className="c-image">
          <img src={a} alt="about" />
          <img src={b} alt="about" />
          <img src={c} alt="about" />
          <img src={d} alt="about" />
        </div>
      </div>

      {/* RESERVATION */}
      <div className="container-Book">
        <img id="im" src={bookImg} alt="reservation" />
        <div className="book">
          <h2>Reservation</h2>
          <h1>Book A Table Online</h1>
          <form action="https://formspree.io/f/mzddpdja" method="POST">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required />
              <button type="submit">Send</button>
          </form>

        </div>
      </div>

      {/* TEAM */}
      <div className="container-team">
        <h1>Our Master Chefs</h1>
        {[chef1, chef2, chef3, chef4].map((img, i) => (
          <div className="team-card" key={i}>
            <img src={img} className="T" alt="chef" />
            <h2>Chef Name</h2>
            <p>Designation</p>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL */}
      <div className="container-test">
        <h1>Our Clients Say</h1>
        <div className="client">
          <p>Best restaurant experience ever!</p>
          <img src={client} className="S" alt="client" />
          <h2>Client Name</h2>
        </div>
      </div>

      {/*  LOADING STATE */}
      {loading && <p style={{ textAlign: "center" }}>Loading menu...</p>}
    </div>
  );
}
