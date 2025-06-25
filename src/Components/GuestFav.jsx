import React, { useEffect, useState } from 'react';
import GuestLeftImg from "../assets/GuestFavImg11.png";
import GuestRightImg from "../assets/GuestFavImg12.png";

function GuestFav({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/Guest.json")
      .then((res) => res.json())
      .then((json) => {
        const matched = json.find((item) => item.id === id);
        setData(matched);
      })
      .catch((err) => console.error("API fetch error:", err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className='container my-5'>
      <div className="BigGuestFav d-flex flex-column justify-content-center align-items-center">
        <div className="col-lg-12 col-md-12 text-center d-flex justify-content-center align-items-start mb-3 mb-lg-0">
          <img
            src={GuestLeftImg}
            alt="GuestFavrouteLogo"
            className="img-fluid"
            style={{ height: "170px" }}
          />
          <div className="GuestFavrouteLogoText">
            <h6 className="fw-bold mt-2" style={{ fontSize: "7vw", lineHeight: "0.9" }}>
              {data.overallRating}
            </h6>
          </div>
          <img
            src={GuestRightImg}
            alt="GuestFavrouteLogo"
            className="img-fluid"
            style={{ height: "170px" }}
          />
        </div>
        <h3 className='fw-bold'>Guest favourite</h3>
        <p className='text-center' style={{ fontSize: "19px", lineHeight: "1.2" }}>
          This home is a guest favourite based on<br />ratings, reviews and reliability
        </p>
      </div>

      <div className="row my-4">
        <div className="col me-3 border-end">
          <div style={{ minWidth: "160px" }}>
            <h6 className="fw-bold mb-3">Overall rating</h6>
            {data.ratingBars.map(({ star, value }) => (
              <div key={star} className="d-flex align-items-center mb-1">
                <div style={{ width: "13px", fontSize: "13px" }}>{star}</div>
                <div className="progress flex-grow-1 mx-1" style={{ height: "4px", backgroundColor: "#e9ecef" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${value}%`,
                      backgroundColor: star === 5 ? "#000" : "#ccc",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {data.categories.map((cat, index) => (
          <div className="col ms-3 border-end" key={index}>
            <h6 className='fw-bold'>{cat.name}</h6>
            <h6 className='fw-bold'>{cat.score}</h6>
            <div className="Homereview mt-4">
              {cat.type === "svg" ? (
                <img src={cat.icon} alt={cat.name} className='img-fluid' style={{ height: "35px" }} />
              ) : (
                <i className={`${cat.icon} fs-3`}></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestFav;
