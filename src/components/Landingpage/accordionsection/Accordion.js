import React , { useEffect } from 'react'

const imageUrls = [
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Dominos-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/MTN-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Lagos-Internal-Revenue-Service.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Bolt-Stack-Blue_200304_153027.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Betway-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/carbon-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Axa-mansard-_-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Abia-State-University.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/GIGM-Plain_180827_172142.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/IrokoTV-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Smile-Plain_180827_172218.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Cowrywise-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Air-Peace-Stack-Blue_200305_154114.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/FilmHouse-Stack-Blue_200304_153641.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Piggyvest-Stack-Blue_200304_153734.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ibom-Air-Stack-Blue_200304_154259.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/kuda-Stack-Blue_200304_154345.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Ariiya-Stack-Blue_200304_155307.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Dominos-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/MTN-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Lagos-Internal-Revenue-Service.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Bolt-Stack-Blue_200304_153027.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Betway-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/carbon-dark.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Axa-mansard-_-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Abia-State-University.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/GIGM-Plain_180827_172142.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/IrokoTV-Plain.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Smile-Plain_180827_172218.svg',
    'https://assets.paystack.com/assets/img/logos/merchants/_300xAUTO_crop_center-center_none/Cowrywise-dark.svg'

    // Add more image URLs as needed
  ];
  
  function Accordion() {
    useEffect(() => {
      // Function to create and append image elements to the accordion div
      function appendImagesToAccordionDiv() {
        const accordionDiv = document.getElementById('accordiondiv');
  
        // Loop through the imageUrls array
        for (const imageUrl of imageUrls) {
          // Create a new image element
          const imgElement = document.createElement('img');
  
          // Set the source attribute to the URL from the array
          imgElement.src = imageUrl;
  
          // Optionally, you can set other attributes and styles for the image element here
          // Example: imgElement.alt = 'Image description';
  
          // Append the image element to the accordion div
          accordionDiv.appendChild(imgElement);
        }
      }
  
      // Call the function to append images to the accordion div
      appendImagesToAccordionDiv();
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
  
    return (
        <>
        <br />
        <br className="db" />
        <br className="db" />
        <div className="movingaccordion" data-aos="fade-up">
          <div className="powering">Powering growth for amazing businesses</div>
          <div className="container">
            <p className="smalltext">
              Empowering Businesses with Financial Growth: Welcome to Trafa. We offer
              tailored lending solutions, expert support, and flexible options to fuel
              your business's success. Unlock your company's potential and thrive with
              our reliable and trusted lending services.
            </p>
          </div>
          <br />
          <br />
          <marquee behavior="scroll" scrollamount={2}>
            <div className="accordiondiv" id="accordiondiv"></div>
          </marquee>
          <br className="db" />
          <br className="db" />
          <br />
          <div className="container">
            <div className="trustfund">
              <div className="trusted" data-aos="fade-up">
                Your Trusted Money <span> Lending </span>Partner
              </div>
              <div className="trusstee" data-aos="fade-right">
                Empowering Your Financial Pathway: Streamlined Loan Application &amp;
                Customized Repayment Plans
              </div>
            </div>
            <div className="gridboxes">
              <div className="tinybox tinyactive" data-aos="fade-right">
                <div className="tinyicon">
                  <img
                    src="https://res.cloudinary.com/dfvot6oia/image/upload/v1674215414/cross-channel_yzvzwt.svg"
                    alt=""
                  />
                </div>
                <div className="tinytext">
                  <div className="tinuboxbuttext">
                    quick and easy registration process{" "}
                  </div>
                  <div className="tinyboxsmalltext">
                    Register at Trafargal in seconds! Enter basic informations, create
                    a secure password, and explore personalized loan options.
                    Hassle-free borrowing awaits you today!
                  </div>
                </div>
              </div>
              <div className="tinybox" data-aos="fade-right">
                <div className="tinyicon">
                  <img
                    src="https://res.cloudinary.com/dfvot6oia/image/upload/v1674215414/quick-integration_mnepnr.svg"
                    alt=""
                  />
                </div>
                <div className="tinytext">
                  <div className="tinuboxbuttext">Verify Your Identity</div>
                  <div className="tinyboxsmalltext">
                    To ensure security, we require identity verification. Provide
                    necessary documents, and our team will promptly review them. Rest
                    assured, your information is protected with utmost
                    confidentiality.
                  </div>
                </div>
              </div>
              <div className="tinybox" data-aos="fade-up">
                <div className="tinyicon">
                  <img
                    src="https://res.cloudinary.com/dfvot6oia/image/upload/v1674215414/delivery_dcoczz.svg"
                    alt=""
                  />
                </div>
                <div className="tinytext">
                  <div className="tinuboxbuttext">Simple Loan Process</div>
                  <div className="tinyboxsmalltext">
                    Applying for a loan is simple and efficient. Submit your
                    application with essential details, and our dedicated team will
                    process it promptly. Get ready to access the funds you need!
                  </div>
                </div>
              </div>
              <div className="tinybox" data-aos="fade-down">
                <div className="tinyicon">
                  <img
                    src="https://res.cloudinary.com/dfvot6oia/image/upload/v1674215414/cost-saving_g5z9da.svg"
                    alt=""
                  />
                </div>
                <div className="tinytext">
                  <div className="tinuboxbuttext">Flexible Repayment Options</div>
                  <div className="tinyboxsmalltext">
                    Experience the freedom of flexible repayment options tailored to
                    your needs. Choose a plan that suits your financial situation,
                    making loan repayment stress-free and convenient.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </>
      
    );
  }
  
  export default Accordion;
  