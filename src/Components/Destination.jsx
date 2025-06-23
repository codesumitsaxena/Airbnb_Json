import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DestinationSeacrch_01 from '../assets/DestinationSeacrch_01.png'
import DestinationSeacrch_02 from '../assets/DestinationSeacrch_02.png'
import DestinationSeacrch_03 from '../assets/DestinationSeacrch_03.png'
import DestinationSeacrch_04 from '../assets/DestinationSeacrch_04.png'
import DestinationSeacrch_05 from '../assets/DestinationSeacrch_05.png'
import DestinationSeacrch_06 from '../assets/DestinationSeacrch_06.png'
import DestinationSeacrch_07 from '../assets/DestinationSeacrch_07.png'
import DestinationSeacrch_08 from '../assets/DestinationSeacrch_08.png'


function Destination() {
  const [modalShow, setModalShow] = useState(false);

  const Destination = [
    {
      id: 2,
      img: DestinationSeacrch_02,
      location: "Nainital, Uttarakhand",
      Description: "Scenic lake town in the Himalayas",
    },
    {
      id: 3,
      img: DestinationSeacrch_03,
      location: "South Delhi, Delhi",
      Description: "Heritage-rich urban lifestyle",
    },
    {
      id: 4,
      img: DestinationSeacrch_04,
      location: "East Delhi, Delhi",
      Description: "Culturally vibrant residential hub",
    },
    {
      id: 5,
      img: DestinationSeacrch_05,
      location: "Jaipur",
      Description: "The Pink City of royal palaces",
    },
    {
      id: 6,
      img: DestinationSeacrch_06,
      location: "Kullu",
      Description: "Gateway to Himachal’s adventure trails",
    },
    {
      id: 7,
      img: DestinationSeacrch_07,
      location: "Gurgaon, Haryana",
      Description: "Modern business and nightlife hub",
    },
    {
      id: 8,
      img: DestinationSeacrch_08,
      location: "Similar Cities",
      Description: "Explore nearby trending destinations",
    },
  ];
  

  return (
    <>
        <input type="text" placeholder='Search destination' className='inputArea' onClick={() => setModalShow(true)} />



      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{maxWidth:"400px", marginTop:"90px", marginLeft:"200px"}}>
       
        <Modal.Body >
        <div className="container p-3 custom-scroll-modal" style={{ maxHeight: "430px", overflowY: "auto" }}>
            <h6>Recent searches</h6>
            <div className="destinationArea d-flex align-items-center gap-3 p-2 rounded  mb-2" style={{ cursor: "pointer",  }}>
  <div className="destinationImg">
    <img
      src={DestinationSeacrch_01}
      alt="DestinationSeacrch_01"
      className="img-fluid rounded"
      style={{ height: "70px", width: "70px", objectFit: "cover" }}
    />
  </div>
  <div className="destionationText">
    <h6 className="m-0 fw-bold">Noida, Uttar Pradesh</h6>
    <p className="m-0 text-muted" style={{ fontSize: "14px" }}>Family Friendly</p>
  </div>
</div>
<h6>Suggested destinations</h6>
<div className="ParentDestination">
  {Destination.map((item, index)=>(
                <div className="destinationArea d-flex align-items-center gap-3 p-2 rounded  mb-2" style={{ cursor: "pointer",  }}>
                <div className="destinationImg">
                  <img
                    src={item.img}
                    alt={item.location}
                    className="img-fluid rounded"
                    style={{ height: "70px", width: "70px", objectFit: "cover" }}
                  />
                </div>
                <div className="destionationText">
                  <h6 className="m-0 fw-bold">{item.location}</h6>
                  <p className="m-0 text-muted" style={{ fontSize: "14px" }}>{item.Description}</p>
                </div>
              </div>
  ))}
</div>

            
         </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Destination;
