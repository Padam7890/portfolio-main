import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { useOutletContext } from "react-router";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const { data, isLoading, error } = useOutletContext();

  const [portfolio, setPortfolio] = useState([]);
  const [Loading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const categories = data?.category;

  useEffect(() => {
    getPortfolio(""); 

  }, []);



  const getPortfolio = async (category) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://127.0.0.1:3000/api/portfolio/?category=${category}`
      );
      setPortfolio(response.data.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              onClick={() => getPortfolio("")}
              className="active"
              data-filter-btn
            >
              All
            </button>
          </li>
          {categories?.map((category) => (
            <li className="filter-item">
              <button
                onClick={() => getPortfolio(category.name)}
                data-filter-btn
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isActive ? "active" : ""}`}
            data-select
            onClick={toggleActive}
          >
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories?.map((category) => (
              <li className="select-item">
                <button
                  onClick={() => getPortfolio(category.name)}
                  data-select-item
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {Loading ? (
            <div style={{
              color:"white"
            }}>Loading...</div>
          ) : error ? (
            <div style={{
              color:"white"
            }}>Error: {error.message}</div>
          ) : (
            portfolio.map((project) => (
  
            <li
              className="project-item  active"
              data-filter-item
              data-category="web development"
            >
              <NavLink to ={project.url}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEye name="eye-outline"></IoEye>
                  </div>

                  <img
                    src={project.image}
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category.name}</p>
              </NavLink>
            </li>
            )
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
