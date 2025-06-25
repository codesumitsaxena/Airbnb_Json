import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../features/likes/LikeSlice';



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


  const dispatch = useDispatch();
const likedItems = useSelector(state => state.likes.likedItems);


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
  className="d-flex overflow-auto hide-scroll py-2"
  ref={scrollRef}
  style={{
    scrollBehavior: 'smooth',
    gap: '12px',
    padding: '0 12px',
    marginRight: '0',
  }}
>
  {cards.map((item) => (
    <div
      className="flex-shrink-0 bg-dark CardHover"
      style={{ width: '209px', borderRadius: '12px' }}
      key={item.id}
    >
      <div
        className="card border-0 h-100"
        onClick={() => handleCardClick(item.id)}
        style={{ cursor: 'pointer', borderRadius: '12px' }}
      >
        <div className="position-relative">
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            style={{
              height: '170px',
              objectFit: 'cover',
            }}
          />
          <div className="top-badge d-flex justify-content-between px-1 py-1 w-100 position-absolute top-0">
            {item.guestFav && (
              <span className="guest-fav px-2 py-1">Guest Favourite</span>
            )}
            <div className="position-absolute top-0 end-0 px-2 py-2">
              <i
                className={`bi ${likedItems[item.id] ? "bi-heart-fill liked" : "bi-heart"} fs-5 heart-icon`}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleLike(item.id));
                }}
                role="button"
              />
            </div>
          </div>
        </div>
        <div className="card-body p-2">
          <h6 className="card-title mb-1">{item.title}</h6>
          <p className="card-text small mb-0">
            {item.rate} <span className="fw-semibold">★ {item.rating}</span>
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
