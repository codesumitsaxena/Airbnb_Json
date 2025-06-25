import React, { useEffect } from "react";
import BnbLogo from "../assets/Airbnb-Logo.wine.png";
import HomeIcon from "../assets/Home.png";
import GuestLeftImg from "../assets/GuestFavImg11.png";
import GuestRightImg from "../assets/GuestFavImg12.png";
import AutomateBnb from "../assets/automateBnb1.jpeg";
import GuestFav from "./GuestFav";
import Testimonials from "./Testimonials";
import WifiSvg from '../assets/Wifi SVG.svg'
import WorkSpaceSvg from '../assets/WorkSpace Svg.svg'
import SmokeAlarm from '../assets/SmokeAlarm.svg'
import TvSvg from '../assets/Tv SVG.svg'
import Pets from '../assets/pets svg.svg'
import Lift from '../assets/Lift Svg.svg'
import kitchenSvg from '../assets/kitchen svg.svg'
import CarSvg from '../assets/Car SVg.svg'
import CarbonSVG from '../assets/Carbon alarm.svg'
import Camera from '../assets/Camera SVG.svg'
import DateSelector from "./DateSelector";
import AmenitiesComponent from './Allameties'
import AboutShowMore from "./AboutShowMore";
import Counter from './Counter'
import Menu from './Menu'
import { useState } from "react";
import CardMoreNav from './CardMoreNav'
import { data } from "react-router-dom";
import TestiReview from './TestimonialReview'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../features/likes/LikeSlice';


function CardMore() {
  const date = new Date().toLocaleDateString('en-GB'); // DD/MM/
  const dispatch = useDispatch();
  const likedItems = useSelector(state => state.likes.likedItems);
  const [showMenu, setShowMenu] = useState(false);
  const [showData, setShowData] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    fetch(`/data/CardDetail.json`)
      .then((res) => res.json())
      .then((data) => {
        const matchedData = data.find((item) => item.id === parseInt(id));
        setShowData(matchedData);
      });
  }, [id]);

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null
  });

  
  if (!showData || !showData.images) {
    return <div>Loading or Data Not Found</div>;
  }


  return (
    <>
    <div
      className="container-fluid"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Mini Nav Area */}
      <CardMoreNav/>
      
      <div className="container">
        {/* CardMore Title */}
        {showData && (
  <div className="row p-3">
    <div className="MoreTitle d-flex justify-content-between">
      <div className="col-lg-9">
        <h4 className="fw-bold">{showData.title}</h4>
      </div>

      <div className="col-lg-3 d-flex justify-content-end gap-4">
        <div className="titleICon d-flex gap-2">
          <i className="bi bi-box-arrow-up fw-bold fs-5"></i>
          <p style={{ textDecoration: "underline" }} className="fw-semibold">
            Share
          </p>
        </div>
        <div className="titleICon d-flex gap-2" onClick={() => dispatch(toggleLike(showData.id))} style={{ cursor: 'pointer' }}>
  <i className={`bi ${likedItems[showData.id] ? "bi-heart-fill liked" : "bi-heart"} fs-5`}></i>
  <p style={{ textDecoration: "underline" }} className="fw-semibold">
    {likedItems[showData.id] ? "Saved" : "Save"}
  </p>
</div>
      </div>
    </div>

    {/* CardMore Img */}
    <div className="MoreImg my-2 px-0">
      <div className="row g-2">
        {/* Left big image */}
        <div className="col-lg-6">
          <img
            src={showData.images[0]}
            alt=""
            className="img-fluid w-100"
            style={{ height: "334px", objectFit: "cover" }}
          />
        </div>

        {/* Right 4 small images */}
        <div className="col-lg-6 d-flex flex-column gap-2">
          <div className="row g-2">
            <div className="col-6">
              <img
                src={showData.images[1]}
                alt=""
                className="img-fluid w-100"
                style={{ height: "160px", objectFit: "cover" }}
              />
            </div>
            <div className="col-6">
              <img
                src={showData.images[2]}
                alt=""
                className="img-fluid w-100"
                style={{ height: "160px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col-6">
              <img
                src={showData.images[3]}
                alt=""
                className="img-fluid w-100"
                style={{ height: "160px", objectFit: "cover" }}
              />
            </div>
            <div className="col-6">
              <img
                src={showData.images[4]}
                alt=""
                className="img-fluid w-100"
                style={{ height: "160px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        <div className="row ScrollableParent">
          <div className="col-lg-8 ">
         <div className="scrollable-left">
{showData && (
  <div className="ServicesApart">
    <h4>Entire serviced apartment in {showData.location}</h4>
    <div className="HouseDetail d-flex">
      <p>{showData.guest} guest{showData.guest > 1 ? 's' : ''}</p>,
      <p>{showData.bedroom} bedroom{showData.bedroom > 1 ? 's' : ''}</p>,
      <p>{showData.bed} bed{showData.bed > 1 ? 's' : ''}</p>,
      <p>{showData.bathroom} bathroom{showData.bathroom > 1 ? 's' : ''}</p>,
    </div>
  </div>
)}

{showData.guestFavorite && (
  <div className="GuestFavroute border p-3 my-2 rounded">
    <div className="row align-items-center">
      <div className="col-lg-3 col-md-12 text-center d-flex justify-content-between mb-3 mb-lg-0">
        <img src={GuestLeftImg} alt="GuestFavrouteLogo" className="img-fluid" style={{ height: "50px" }} />
        <div className="GuestFavrouteLogoText">
          <h6 className="fw-bold">
            Guest<br />Favorite
          </h6>
        </div>
        <img src={GuestRightImg} alt="GuestFavrouteLogo" className="img-fluid" style={{ height: "50px" }} />
      </div>
      <div className="col-lg-6 col-md-12 text-center text-lg-start mb-3 mb-lg-0">
        <h6 className="fw-semibold">
          One of the most loved homes on <br /> Airbnb, according to guests
        </h6>
      </div>
      <div className="col-lg-3 col-md-12 d-flex justify-content-center justify-content-lg-end gap-4">
        <div className="text-center pe-3 border-end">
          <h5 className="mb-1 lineSpace fw-bold">{showData.rating}</h5>
          <span className="text-dark lineSpace">★★★★★</span>
        </div>
        <div className="text-center">
          <h5 className="mb-1 fw-bold">{showData.reviewCount}</h5>
          <p className="mb-0 lineSpace">Reviews</p>
        </div>
      </div>
    </div>
  </div>
)}



            {/* HostedArea */}
            <div className="HostedArea d-flex my-4 py-1 gap-3 align-items-center">
            {showData && (
              <>
              <div className="HostedAreaImg">
                <img
                  src={showData.hostImg}
                  alt={showData.host}
                  className="HostedAreaImg"
                  style={{ height: "40px", width:"40px",objectFit: "cover",
                  objectPosition: "center", borderRadius: "50%" }}
                />
              </div>
              <div className="HostedAreatext">
                <h6 className="fw-bold">Hosted by {showData.HostName}</h6>
                <h6
                  className="hostedName"
                  style={{ lineHeight: "0.5", fontSize: "14px" }}
                >
                  <span>{showData.hostDescription}</span>
                </h6>
              </div>
              </>

            )}
            </div>
            <hr />
            {/* Qualities */}
            <div className="row Qualities d-flex flex-column gap-3 my-5">
              <div className="QualitieArea d-flex align-items-center gap-4">
                <i className="bi bi-people fs-3"></i>
                <div className="QualitiesAreaText">
                  <h6 className="fw-bold">Perfect ratings from families</h6>
                  <p
                    className=""
                    style={{ lineHeight: "0.5", fontSize: "14px" }}
                  >
                    100% of families who stayed here in the past year rated it 5
                    stars overall
                  </p>
                </div>
              </div>
              <div className="QualitieArea d-flex align-items-center gap-4">
                <i className="bi bi-door-open fs-3"></i>
                <div className="QualitiesAreaText">
                  <h6 className="fw-bold">Self check-in</h6>
                  <p
                    className=""
                    style={{ lineHeight: "0.5", fontSize: "14px" }}
                  >
                    Check yourself in with the lockbox.
                  </p>
                </div>
              </div>
              <div className="QualitieArea d-flex align-items-center gap-4">
                <i className="bi bi-geo-alt fs-3"></i>
                <div className="QualitiesAreaText">
                  <h6 className="fw-bold">Peace and quiet</h6>
                  <p
                    className=""
                    style={{ lineHeight: "0.5", fontSize: "14px" }}
                  >
                    Guests say this home is in a quiet area.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* LongPara */}
            <div className="LongPara">
              <p className="fw-semibold" style={{ fontSize: "17.7px" }}>
                Relax with family and friends at this peaceful, fully furnished
                studio apartment (370 sq. ft.) in DLF Capital Greens, New Delhi,
                Moti Nagar. Enjoy self-check-in via a locker box, 3 lifts, and
                premium amenities for a comfortable stay. This cozy,
                well-designed studio features an attached washroom and modern
                facilities, conveniently located near Central Delhi.
              </p>
              <p className="fw-semibold" style={{ fontSize: "17.7px" }}>
                
                This is the best option for both long and short stays.
              </p>
              <p>...</p>

              <AboutShowMore/>
              <hr />
            </div>
            {/* PlaceOffer */}
            <div className="row">
              <h4 className="fw-bold my-4">What this place offers</h4>
              <div className="col-lg-6 d-flex flex-column justify-content-center my-3 gap-4">
              <div className="PlaceOffer d-flex align-items-center gap-4">
                <img src={kitchenSvg} alt="kitchenSvg" className="img-fluid" style={{height:"29px"}}/>
                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Kitchen</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={WorkSpaceSvg} alt="WorkSpaceSvg" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Dedicated workspace</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={Pets} alt="Pets" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Pets allowed</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={Lift} alt="Lift" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Lift</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={CarbonSVG} alt="CarbonSVG" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Carbon monoxide alarm
</h6>  
                </div>
              </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center my-3 gap-4">
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={WifiSvg} alt="WifiSvg" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Wifi – 37 Mbps</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={CarSvg} alt="CarSvg" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Free parking on premises</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={TvSvg} alt="TvSvg" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">TV</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={Camera} alt="Camera" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Exterior security cameras on property
</h6>  
                </div>
              </div>
              <div className="PlaceOffer d-flex align-items-center gap-4">
              <img src={SmokeAlarm} alt="SmokeAlarm" className="img-fluid" style={{height:"29px"}}/>                <div className="PlaceOfferText">
                  <h6 className="fw-bold">Smoke alarm
</h6>  
                </div>
              </div>
              </div>
              <AmenitiesComponent/>

              <hr />
            </div>
            {/* SelectDate Area */}
            <div className="row">
              <h4>Select checkout date</h4>
              <p>Add your travel dates for exact pricing</p>
              <div className="col-lg-6">
              <DateSelector onDateChange={setSelectedDates} />
              </div>
              
          </div>
         </div>
          </div>
          <div className="col-lg-4">
            <div className="sticky-box">
            <Counter
        rate={showData.rate}
        selectedDates={selectedDates}
      />

            </div>
          </div>
          <GuestFav id={showData.id}/>
        </div>
      </div>
    </div>
    {showMenu && <Menu />}

    <TestiReview id={showData.id} />
    <Testimonials id={id} showData={showData} />


    </>


  );
}

export default CardMore;
