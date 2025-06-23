import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Bathroom from '../assets/BathRooom.svg'
import BedLeian from '../assets/BedLeian.svg'
import BodySoap from '../assets/BodySoap.svg'
import Camera from '../assets/Camera SVG.svg'
import Car from '../assets/Car SVg.svg'
import CarbonAlarm from '../assets/Carbon alarm.svg'
import CleaningPRoducat from '../assets/CleaningPRoducat.svg'
import cleanliness from '../assets/cleanliness Svg.svg'
import ClothesStorage from '../assets/ClothesStorage.svg'
import Coffee from '../assets/Coffee.svg'
import Cooler from '../assets/Cooler.svg'
import Dishes from '../assets/Dishes.svg'
import Essential from '../assets/Essential.svg'
import Fan from '../assets/Fan.svg'
import Fire from '../assets/Fire.svg'
import FreeDryerUnit from '../assets/FreeDryerUnit.svg'
import Freezer from '../assets/Freezer.svg'
import Garden from '../assets/Garden.svg'
import Gym from '../assets/Gym.svg'
import HairDryer from '../assets/HairDryer.svg'
import Hangers from '../assets/Hangers.svg'
import heating from '../assets/heating.svg'
import HostGreetYou from '../assets/HostGreetYou.svg'
import HotWater from '../assets/HotWater.svg'
import Iron from '../assets/Iron.svg'
import kettle from '../assets/kettle.svg'
import kitchen from '../assets/kitchen svg.svg'
import lauage from '../assets/lauage Drop of Allowed.svg'
import Laundary from '../assets/Laundary Nearby.svg'
import Lift from '../assets/Lift Svg.svg'
import Lockboox from '../assets/Lockboox.svg'
import LongTermAllowed from '../assets/LongTermAllowed.svg'
import Minifreeze from '../assets/Minifreeze.svg'
import cleaning from '../assets/noun-cleaning-1134398.svg'
import OutDoorPlayGround from '../assets/OutDoorPlayGround.svg'
import pets from '../assets/pets svg.svg'
import PrivateSpace from '../assets/Private Space.svg'
import SelfChecKIn from '../assets/SelfChecKIn.svg'
import Shampo from '../assets/Shampo.svg'
import ShowerGel from '../assets/ShowerGel.svg'
import SmokeAlarm from '../assets/SmokeAlarm.svg'
import Temprature from '../assets/Temprature.svg'
import Tv from '../assets/Tv SVG.svg'
import WashingMachine from '../assets/WashingMachine.svg'
import Wifi from '../assets/Wifi SVG.svg'
import wineGlass from '../assets/wineGlass.svg'
import WorkSpace from '../assets/WorkSpace Svg.svg'


function AmenitiesComponent() {
  const [modalShow, setModalShow] = useState(false);

  const amenitiesGrouped = [
    {
      category: "Bathroom",
      facilities: [
        { name: "Bathroom", icon: Bathroom },
        { name: "Body Soap", icon: BodySoap },
        { name: "Cleaning Products", icon: CleaningPRoducat },
        { name: "Hair Dryer", icon: HairDryer },
        { name: "Shampoo", icon: Shampo },
        { name: "Shower Gel", icon: ShowerGel },
        { name: "Hot Water", icon: HotWater },
      ]
    },
    {
      category: "Bedroom & Laundry",
      facilities: [
        { name: "Bed Linen", icon: BedLeian },
        { name: "Clothes Storage", icon: ClothesStorage },
        { name: "Free Dryer Unit", icon: FreeDryerUnit },
        { name: "Iron", icon: Iron },
        { name: "Washing Machine", icon: WashingMachine },
        { name: "Laundry Nearby", icon: Laundary },
        { name: "Hangers", icon: Hangers },
      ]
    },
    {
      category: "Entertainment & Internet",
      facilities: [
        { name: "TV", icon: Tv },
        { name: "Wi-Fi", icon: Wifi },
        { name: "Workspace", icon: WorkSpace },
      ]
    },
    {
      category: "Heating & Cooling",
      facilities: [
        { name: "Cooler", icon: Cooler },
        { name: "Fan", icon: Fan },
        { name: "Heating", icon: heating },
        { name: "Temperature Control", icon: Temprature },
      ]
    },
    {
      category: "Kitchen & Dining",
      facilities: [
        { name: "Coffee Maker", icon: Coffee },
        { name: "Dishes", icon: Dishes },
        { name: "Essential Items", icon: Essential },
        { name: "Freezer", icon: Freezer },
        { name: "Kettle", icon: kettle },
        { name: "Kitchen", icon: kitchen },
        { name: "Mini Freezer", icon: Minifreeze },
        { name: "Wine Glasses", icon: wineGlass },
      ]
    },
    {
      category: "Safety & Security",
      facilities: [
        { name: "Camera", icon: Camera },
        { name: "Carbon Alarm", icon: CarbonAlarm },
        { name: "Fire Extinguisher", icon: Fire },
        { name: "Lockbox", icon: Lockboox },
        { name: "Smoke Alarm", icon: SmokeAlarm },
      ]
    },
    {
      category: "Services & Access",
      facilities: [
        { name: "Cleaning Service", icon: cleaning },
        { name: "Cleanliness", icon: cleanliness },
        { name: "Lift", icon: Lift },
        { name: "Luggage Drop Allowed", icon: lauage },
        { name: "Long Term Allowed", icon: LongTermAllowed },
        { name: "Self Check-In", icon: SelfChecKIn },
        { name: "Host Greets You", icon: HostGreetYou },
      ]
    },
    {
      category: "Outdoor & Recreation",
      facilities: [
        { name: "Garden", icon: Garden },
        { name: "Gym", icon: Gym },
        { name: "Outdoor Playground", icon: OutDoorPlayGround },
        { name: "Private Space", icon: PrivateSpace },
      ]
    },
    {
      category: "Transport & Pets",
      facilities: [
        { name: "Car Parking", icon: Car },
        { name: "Pets Allowed", icon: pets },
      ]
    }
  ];
  
  

  return (
    <>
      {/* Your original button */}
      <button
        className="px-4 py-3 ms-3 my-4 border-0 fw-bold ShowMore"
        style={{ width: "fit-content" }}
        onClick={() => setModalShow(true)}
      >
        Show all 45 amenities
      </button>

      {/* Modal with All Amenities */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
        dialogClassName="rounded-modal"

        contentClassName="bg-white text-dark custom-modal-radius"
       >
        <Modal.Header closeButton>
          <Modal.Title>What this place offers</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{height: "450px", overflowX: "hidden" }}>
          <div className="container SpecialFont my-3">
            <div className="row">
            {amenitiesGrouped.map((item, index) => (
  <div key={index} className="mb-4">
    <h5 className="fw-semibold mb-5 mx-3">{item.category}</h5>
    <div className="d-flex flex-column gap-3 ps-2">
      {item.facilities.map((item, idx) => (
        <div
          key={idx}
          className="d-flex align-items-center gap-3 border-bottom pb-3"
          style={{ paddingLeft: '4px' }}
        >
          <img src={item.icon} alt={item.name} width={26} height={26} />
          <span className="text-capitalize">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
))}

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AmenitiesComponent;
