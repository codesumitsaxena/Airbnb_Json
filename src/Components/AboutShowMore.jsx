import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function AboutShowMore() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="px-4 my-3 py-3 ShowMore border-0 fw-bold" onClick={() => setShow(true)}>
                Show More </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        contentClassName="bg-white border-0"
        dialogClassName="rounded-modal"
       >
        <Modal.Body className=" SpecialFont" style={{height: "480px" , overflowX:"hidden"}}>
        <div className="container SpecialFont px-2 pt-4 d-flex  flex-column gap-3" style={{fontSize:"1.093rem" , paddingTop:"60px"}}>
        <h2 className='fw-bold'>About this space</h2>
         <p className='TextBlack' >Relax with family and friends at this peaceful, fully furnished studio apartment (370 sq. ft.) in DLF Capital Greens, New Delhi, Moti Nagar. Enjoy self-check-in via a locker box, 3 lifts, and premium amenities for a comfortable stay. This cozy, well-designed studio features an attached washroom and modern facilities, conveniently located near Central Delhi.
</p>
<p>This is the best option for both long and short stays.
</p>
<div className="SpaceHeaing">
<h4 className='fw-bold' style={{fontSize:"1.4rem"}}>The space</h4>
<p style={{lineHeight:"0.4rem"}}>Independent Studio apartment with
</p>
</div>


<ol>
  <li>King-size bed for ultimate comfort</li>
  <li>Smart TV with OTT subscriptions (no set-top box)</li>
  <li>Fridge for your essentials</li>
  <li>High-speed WiFi for seamless connectivity</li>
  <li>Modular kitchen with cutlery and cooking essentials</li>
  <li>Electric kettle for your hot beverages</li>
  <li>Central common balcony on the 8th floor</li>
  <li>Pet-friendly access</li>
  <li>Hair dryer for convenience</li>
  <li>Cozy sofa for relaxation</li>
  <li>Induction cooktop for easy cooking</li>
  <li>Complimentary tea, sugar, and coffee</li>
  <li>Lush green garden</li>
  <li>Open gym for fitness enthusiasts</li>
  <li>Microwave for quick meals</li>
  <li>Fully automatic Washing Machine</li>
  <li>Study Desk + High-Speed Wi-Fi – great for students & remote workers</li>
</ol>
<div className="AboutPara">
<p>All this and more in a lavish society with an exceptional ambiance.
</p>
<p>Nearest Metro Station: Moti Nagar Metro Station
</p>
<p>NOTE: CABS ARE ALLOWED INSIDE THE SOCIETY
</p>
<p>“Discover the Epitome of Comfort”
</p>
</div>
 <div className="AboutGuest">
 <h4 className='fw-bold' style={{fontSize:"1.4rem"}}>Guest access</h4>
<p style={{lineHeight:"1"}}>Enjoy independent, hassle-free access with a personal gate pass and convenient self-check-in via a locker box.
</p>
 </div>

  <div className="AboutOther">
  <h4 className='fw-bold' style={{fontSize:"1.4rem"}}>Other things to note</h4>
<p>🚇 Just 5 mins to Moti Nagar & Kirti Nagar Metro stations</p>
<p>🚉 Only 7 mins to Inderlok & Punjabi Bagh
</p>
<p>☕ Close to Rajouri Garden cafés & Moti Nagar Market</p>
<p>🛍️ Near Pacific Mall (NSP & Subhash Nagar)</p>
<p>🏙️ 20 mins to Connaught Place & Railway Station</p>
<p>🛕 10 mins to ISKCON Temple, Nehru Park & Kirti Nagar Furniture Market</p>
<p>✈️ Airport just 30 mins away</p>

  </div>

        </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .rounded-modal .modal-content {
            border-radius: 30px !important;
            overflow: hidden !important; /* Ensure child elements don't overflow the border */
          }
      `}</style>
    </>
  );
}

export default AboutShowMore;
