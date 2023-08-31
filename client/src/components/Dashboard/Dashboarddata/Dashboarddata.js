import React, { useState } from 'react';
import { getUser } from '../../../service/auth'
function Dashboarddata({responseData, timeOfDay}) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>

<article className="article">
  <h2 className="h2 article-title">Good {timeOfDay} {getUser().username} </h2>
  <p className="article-subtitle">Welcome to Dashboard!</p>
  {/* 
            - #HOME
          */}
  <section className="home" data-aos="fade-right">
    <div className="card revenue-card" >
      <button
        className="card-menu-btn icon-box"
        aria-label="More"
        data-menu-btn=""
      >
        <span className="material-symbols-outlined  icon">more_horiz</span>
      </button>
      <ul className="ctx-menu">
        <li className="ctx-item">
          <button className="ctx-menu-btn icon-box">
            <span
              className="material-symbols-outlined  icon"
              aria-hidden="true"
            >
              edit
            </span>
            <span className="ctx-menu-text">Edit</span>
          </button>
        </li>
        <li className="ctx-item">
          <button className="ctx-menu-btn icon-box">
            <span
              className="material-symbols-outlined  icon"
              aria-hidden="true"
            >
              cached
            </span>
            <span className="ctx-menu-text">Refresh</span>
          </button>
        </li>
      </ul>
      <p className="card-title">Loan Balances</p>
      <data className="card-price" value={2100}>
        ${responseData.totalloanamount.principal__sum}
      </data>
      <p className="card-text">Last Week</p>
      <div className="divider card-divider" />
      <ul className="revenue-list">
        <li className="revenue-item icon-box">
          <span className="material-symbols-outlined  icon  green">
            trending_up
          </span>
          <div>
            <data className="revenue-item-data" value={15}>
              15%
            </data>
            <p className="revenue-item-text">Prev Week</p>
          </div>
        </li>
        <li className="revenue-item icon-box">
          <span className="material-symbols-outlined  icon  red">
            trending_down
          </span>
          <div>
            <data className="revenue-item-data" value={10}>
              10%
            </data>
            <p className="revenue-item-text">Prev Month</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="card-wrapper">
      <div className="card task-card">
        <div className="card-icon icon-box green">
          <span className="material-symbols-outlined  icon">
            decimal_increase
          </span>
        </div>
        <div>
          <data className="card-data" value={21}>
          {responseData.pendingloans}
          </data>
          <p className="card-text">Pending Loans</p>
        </div>
      </div>
      <div className="card task-card">
        <div className="card-icon icon-box blue">
          <span className="material-symbols-outlined  icon">
            decimal_decrease
          </span>
        </div>
        <div>
          <data className="card-data" value={21}>
          {responseData.loans}
          </data>
          <p className="card-text">Total Loans</p>
        </div>
      </div>
    </div>
    <div className="card profile-card">
    <button
    onClick={toggleMenu}
        className={`card-menu-btn icon-box ${isActive ? 'active' : ''}`}
        aria-label="More"
        
      >

        <span className="material-symbols-outlined  icon">more_horiz</span>
      </button>
      <ul className={`ctx-menu ${isActive ? 'active' : ''}`}>
        <li className="ctx-item">
          <button className="ctx-menu-btn icon-box">
            <span
              className="material-symbols-outlined  icon"
              aria-hidden="true"
            >
              edit
            </span>
            <span className="ctx-menu-text">Edit</span>
          </button>
        </li>
        <li className="ctx-item">
          <button className="ctx-menu-btn icon-box">
            <span
              className="material-symbols-outlined  icon"
              aria-hidden="true"
            >
              cached
            </span>
            <span className="ctx-menu-text">Refresh</span>
          </button>
        </li>
        <li className="divider" />
        <li className="ctx-item">
          <button className="ctx-menu-btn red icon-box">
            <span
              className="material-symbols-outlined  icon"
              aria-hidden="true"
            >
              delete
            </span>
            <span className="ctx-menu-text">Deactivate</span>
          </button>
        </li>
      </ul>
      <div className="profile-card-wrapper">
        <figure className="card-avatar">
          <img
            src="https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Elizabeth Foster"
            width={48}
            height={48}
          />
        </figure>
        <div>
          <p className="card-title">Victor Odah</p>
          <p className="card-subtitle">Web &amp; Graphic Designer</p>
        </div>
      </div>
      <ul className="contact-list">
        <li>
          <a href={getUser().email} className="contact-link icon-box">
            <span className="material-symbols-outlined icon">mail</span>
            <p className="text">{getUser().email}</p>
          </a>
        </li>
        <li>
          <a href="tel:00123456789" className="contact-link icon-box">
            <span className="material-symbols-outlined  icon">call</span>
            <p className="text">+00 123-456-789</p>
          </a>
        </li>
      </ul>
      <div className="divider card-divider" />
      <ul className="progress-list">
        <li className="progress-item">
          <div className="progress-label">
            <p className="progress-title">Profile Completion</p>
            <data className="progress-data" value={85}>
              85%
            </data>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: "85%", background: "var(--blue-ryb)" }}
            />
          </div>
        </li>
        <li className="progress-item">
          <div className="progress-label">
            <p className="progress-title">Credit Rating</p>
            <data className="progress-data" value="7.5">
              7.5
            </data>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: "75%", background: "var(--coral)" }}
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* 
            - #PROJECTS
          */}
  {/* 
            - #TASKS
          */}
</article>

    </div>
  )
}

export default Dashboarddata