import React from 'react'
import Footer from '../Footer'
import "../style/about.css"

function ContactUs() {
  
  return (
    <>
      <div className="about ">
        <p class="aboutP">
          hi, you can contact me from
          <a href="https://wa.me/01008059594" className='mx-1 contact btn btn-danger btn-sm'>

           here
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
}



export default ContactUs