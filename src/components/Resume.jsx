import React from 'react'
import { useOutletContext } from 'react-router';
import { IoBookOutline } from "react-icons/io5";

const Resume = () => {
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
const resume = data?.resume;
const skillPercentage = data?.skillPercentage;


console.log(resume)

  return (
    <>
    <article className="resume" >
 <header>
      <h2 className="h2 article-title">Resume</h2>
    </header> 

     {/* <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">University school of the arts</h4>

          <span>2007 — 2008</span>

          <p className="timeline-text">
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
            quas molestias
            exceptur.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">New york academy of art</h4>

          <span>2006 — 2007</span>

          <p className="timeline-text">
            Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
            omnis..
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">High school of art and design</h4>

          <span>2002 — 2004</span>

          <p className="timeline-text">
            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
            magni dolores
            eos.
          </p>

        </li>

      </ol>

    </section>  */}

   <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IoBookOutline name="book-outline"/>
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">

        {
          resume.map(item=> (
            <li className="timeline-item">

            <h4 className="h4 timeline-item-title">{item.title}</h4>
  
            <span>{new Date(item.dateTo).toISOString().slice(0, 10)} - {new Date(item.dateFrom).toISOString().slice(0, 10)}</span>
  
            <p className="timeline-text">
              {
                item.description
              }
            </p>
  
          </li>
          ))
        }

        

      </ol>

    </section> 

     <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">

        {
          skillPercentage.map(item=>(
            <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">{item.title}</h5>
              <data value={`${item.percentage}`}>{item.percentage} %</data>
            </div>
  
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" 
              style={{
                  width: `${item.percentage}%`
              }}></div>
            </div>
  
          </li>
          ))
        }

     

   
      </ul>

    </section> 

  </article>
    </>



)
}

export default Resume