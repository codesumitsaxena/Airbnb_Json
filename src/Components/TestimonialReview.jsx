import React, { useEffect, useState } from 'react';

function TestimonialReview({ id }) {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/data/Testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error fetching testimonials:', err));
  }, []);
  

  const currentTestimonial = testimonials.find((item) => item.id === id);

  if (!currentTestimonial) {
    return <p>No testimonials found for this listing.</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {currentTestimonial.reviews.map((item, index) => (
          <div className="col-lg-6 p-3" key={index}>
            <div className="ProfileArea d-flex align-items-center gap-3">
              <img
                src={item.img}
                alt={item.UserName}
                className="img-fluid"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div className="ProfileText d-flex flex-column justify-content-center">
                <h5 className="fw-bold" style={{ fontSize: "16px" }}>{item.UserName}</h5>
                <p style={{ lineHeight: "0.2" }}>{item.LastYear}</p>
              </div>
            </div>
            <div className="Profile-rating d-flex gap-1 align-items-center mt-1">
              <h6 style={{ fontSize: "14px" }}>{item.Rating}</h6>
              <p className="fw-bold" style={{ fontSize: "15px" }}>{item.AgoTime}</p>
            </div>
            <p className="ItemComment">{item.Comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialReview;
