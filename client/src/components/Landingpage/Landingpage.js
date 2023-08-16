import React from 'react'
import Landingpageheader from "./landingpageheader/Landingpageheader"
import Footer from "./landingpagefooter/Footer"
import Hero from "./hero/Hero"
import Accordion from "./accordionsection/Accordion"
import Whyus from "./whyus/Whyus"
import Newsletter from "./newsletter/Newsletter"

const landingpage = () => {
  return (
    <>
    <Landingpageheader/>
<Hero/>
<Accordion/>
<Whyus/>
<Newsletter/>
<Footer/>
    </>
  )
}

export default landingpage