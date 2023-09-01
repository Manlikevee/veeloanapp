import React from 'react'
import { getUser } from '../../service/auth'

const Lazyloadingdashboard = ({timeOfDay}) => {
  return (
    <div>
        <>





  









        
  <article className="article">
    <h2 className="h2 article-title">Good {timeOfDay} {getUser().username} </h2>
    <p className="article-subtitle">Welcome to Dashboard!</p>
    {/*
            - #HOME
          */}
    <section className="home skelenton">
      <div className="card revenue-card">
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
        <p className="card-title">Loan Balance</p>
        <data className="card-price" value={2100}>
          $2,100
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
              21
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
              21
            </data>
            <p className="card-text">Total Loans</p>
          </div>
        </div>
      </div>
      <div className="card profile-card">
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
            <img src="" alt="Elizabeth Foster" width={48} height={48} />
          </figure>
          <div>
            <p className="card-title">Victor Odah</p>
            <p className="card-subtitle">Web &amp; Graphic Designer</p>
          </div>
        </div>
        <ul className="contact-list">
          <li>
            <a href="mailto:xyz@mail.com" className="contact-link icon-box">
              <span className="material-symbols-outlined icon">mail</span>
              <p className="text">xyz@mail.com</p>
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
  <br />
  <article>
    <div className="loanrequests " id="step2Target">
      <div className="loanrequestheader skelenton">
        <div className="loanrequesttitle">
          <h4> Loan Requests </h4>
        </div>
        <div className="loanrequestbutton">
          <button onclick="openModal(66)">New Loan +</button>
        </div>
      </div>
      <br />
    </div>
    <p className="card-texts" style={{ width: "fit-content" }}>
      This shows the most recent activities across your Tafagar finance account.
    </p>
    <br />
    <div className="loantablediv" id="step3Target">
      <div className="mustscroll activityscroll">
        <div className="activitybox">
          <div className="activitydemo skelenton">
            <div className="activitylogo">
              <div className="svs">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
              </div>
            </div>
            <div className="activitytext">
              <div className="activitytoptext">
                Loading Loading Loading ( 123456789 )
              </div>
              <div className="activitybottomtext">
                <small>23-LOADING-Loading</small>
              </div>
            </div>
          </div>
          <div className="activityview card-subtitle">View Details</div>
        </div>
        <div className="activitybox">
          <div className="activitydemo skelenton">
            <div className="activitylogo">
              <div className="svs">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
              </div>
            </div>
            <div className="activitytext">
              <div className="activitytoptext">
                Loading Loading Loading ( 123456789 )
              </div>
              <div className="activitybottomtext">
                <small>23-LOADING-Loading</small>
              </div>
            </div>
          </div>
          <div className="activityview card-subtitle">View Details</div>
        </div>
      </div>
    </div>
  </article>
</>
    </div>
  )
}

export default Lazyloadingdashboard