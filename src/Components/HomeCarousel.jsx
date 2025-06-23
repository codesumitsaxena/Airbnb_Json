import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function HomeCarousel({ title, data }) {
  const scrollRef = useRef();
  const [cards, setCards] = useState([]);
  

  useEffect(() => {
    if (data && data.length > 0) {
      setCards(data);
    }
  }, [data]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  const toggleLike = (id) => {
    const updated = cards.map(card =>
      card.id === id ? { ...card, liked: !card.liked } : card
    );
    setCards(updated);
  };

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/cardmore/${id}`);
  };

  return (
    <div className='container-fluid my-3 px-3'>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className='fw-semibold fs-4 mb-0'>{title}</h4>
        <div className="d-flex gap-2">
          <i className="bi bi-arrow-left-short leftArrow fs-3" onClick={scrollLeft}></i>
          <i className="bi bi-arrow-right-short me-3 rightArrow fs-3" onClick={scrollRight}></i>
        </div>
      </div>

      <div
        className="d-flex overflow-auto hide-scroll"
        ref={scrollRef}
        style={{ scrollBehavior: 'smooth', gap: '16px', padding: '0 1px', marginRight:"10px" }}
      >
        {cards.map((item) => (
          <div className='flex-shrink-0' style={{ width: "204px" }} key={item.id}>
<div className='card border-0' onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
              <div className="position-relative">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="top-badge d-flex justify-content-between px-1 py-1 w-100 position-absolute top-0">
                  <span className="guest-fav">Guest Favourite</span>
                  <i
                    className={`bi ${item.liked ? "bi-heart-fill liked" : "bi-heart"} fs-5 heart-icon`}
                    onClick={() => toggleLike(item.id)}
                  ></i>
                </div>
              </div>
              <div className='card-body m-0 p-2'>
                <h6 className='card-title'>{item.title}</h6>
                <p className='card-text'>
                  {item.rate} <span className='fw-semibold'>Rating: ★ {item.rating}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel;
