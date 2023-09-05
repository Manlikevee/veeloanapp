import React from 'react'

const Popups = (props) => {
  return (
    <div>
<div className="loading-over2" style={{ display: "flex" }}>
  <div className="popups" data-aos="zoom-in" >
    <p id="close2" onClick={props.toggleshowcard}>×</p>
    <br />
    <div className="secoact" >
      <div className="logoac">
        <svg
          width={72}
          height={72}
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={72} height={72} rx={36} fill="#219653" />
          <path
            d="M50.0361 23.9934C49.5241 23.9934 48.9901 24.1614 48.6001 24.5454L31.186 41.7334C30.672 42.2394 30.156 42.1454 29.752 41.5494L23.76 32.7094C23.148 31.8074 21.868 31.5554 20.95 32.1574C20.034 32.7594 19.778 34.0174 20.39 34.9194L26.38 43.7594C28.184 46.4174 31.698 46.7554 33.996 44.4954L51.472 27.3694C52.25 26.6014 52.25 25.3134 51.472 24.5454C51.082 24.1614 50.5461 23.9934 50.0361 23.9934Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="logomen"> {props.mytitle} </div>
      <div className="logobod">
       {props.mybody}
      </div>
      <div className="logobtn">
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Popups