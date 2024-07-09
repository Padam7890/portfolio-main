import React from "react";
import getData from "../CustomHook/getData";
import { SyncLoader } from "react-spinners";
import GetDataFromApi from "../CustomHook/getData";
import { useOutletContext } from "react-router";

const About = () => {
  const { data, isLoading, error } = useOutletContext();

  if (isLoading) {
    return (
      <SyncLoader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          height: "100vh",
        }}
        color="yellow"
      />
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const personalInfo = data?.users[0];
  const skills = data?.skills;
  const testimonials = data?.testimonials.data;
  console.log(testimonials);

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{personalInfo.aboutMe}</p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {skills.map((skill) => {
            return (
              <li className="service-item">
                <div className="service-icon-box">
                  <img src={skill.image} alt="design icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{skill.title}</h4>

                  <p className="service-item-text">{skill.descriptions}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}
    

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial._id} className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                  {testimonial.name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    {
                      testimonial?.descriptions?.length > 200
                       ? testimonial.descriptions.slice(0, 200) + "..."
                        : testimonial.descriptions
                    }
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>


      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default About;
