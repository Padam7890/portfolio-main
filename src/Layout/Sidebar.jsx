import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/images/my-avatar.png";
import { FaCalendarAlt, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ getDatas }) => {
  const personalinfo = getDatas.users[0];

  const date = new Date(personalinfo.birthday);
  const formattedDate = date.toLocaleDateString().slice(0, 16);
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <aside className={`sidebar ${active? "active": ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            {personalinfo.name}
          </h1>
          <p className="title">{personalinfo.positions.map((item) => item)}</p>
        </div>

        <button
          onClick={() => changeActive()}
          className="info_more-btn"
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <IoIosArrowDown className="arrowDown" name="chevron-down"></IoIosArrowDown>
        </button>
      </div>

      <div className="sidebar-info_more active">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdEmail name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalinfo.email}`} className="contact-link">
                {personalinfo.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${personalinfo.phone}`} className="contact-link">
                {personalinfo.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaCalendarAlt name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1997-08-07">{formattedDate}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalinfo.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={personalinfo.facebookUrl} className="social-link">
              <FaFacebook name="logo-facebook" />
            </a>
          </li>
          <li className="social-item">
            <a href={personalinfo.instagramUrl} className="social-link">
              <FaInstagram name="logo-twitter" />
            </a>
          </li>
          <li className="social-item">
            <a href={personalinfo.linkedinUrl} className="social-link">
              <FaLinkedin name="logo-instagram" />
            </a>
          </li>
        </ul>

        <div className="separator"></div>

        {/* <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;
