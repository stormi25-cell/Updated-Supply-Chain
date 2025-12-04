import styles from './Contacts.module.css';
import React, { useState, FC } from "react";
import { Link, NavLink } from "react-router-dom";
import SSCL from './assets/whiteGamingLogo.mp4';


interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => (
  const [form, setForm] = useState({ user_name: "", user_email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace with your submit logic (fetch, axios, etc.)
    console.log("contact form submit:", form);
    // reset
    setForm({ user_name: "", user_email: "" });
  };

  return (
    <div className="page contact-page" style={{ backgroundColor: "#F7D6E0", minHeight: "100vh" }}>
      <header>
        <h1>
          <Link to="/">
            <video width="400" autoPlay muted playsInline>
              <source src={SSCL} type="video/mp4" />
            </video>
          </Link>
        </h1>

        <nav className="navBar" style={{ backgroundColor: "#89043D" }}>
          <ul>
            <li><NavLink to="/About">Essie's Requiem</NavLink></li>
            <li><NavLink to="/Vision">Stormi's Vision</NavLink></li>
            <li><NavLink to="/Contact">Connect with me?</NavLink></li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="user_name"
            required
            value={form.user_name}
            onChange={handleChange}
          /><br /><br />

          <label htmlFor="email" className="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="user_email"
            required
            value={form.user_email}
            onChange={handleChange}
          /><br /><br />

          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </main>
    </div>

);

export default Contacts;
