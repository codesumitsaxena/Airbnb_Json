import React from 'react';

function HomeCarousel({ title, data }) {
  const scrollRef = React.useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <div className='container-fluid my-0 py-1'>
      <div className="container-fluid px-3 py-0">
        <div className="d-flex justify-content-between">
          <h4 className='fw-semibold fs-4'>{title}</h4>
          <div className="d-flex gap-1">
            <i className="bi bi-arrow-left-short leftArrow fs-3" onClick={scrollLeft}></i>
            <i className="bi bi-arrow-right-short rightArrow fs-3" onClick={scrollRight}></i>
          </div>
        </div>

        <div className="d-flex overflow-auto hide-scroll" ref={scrollRef} style={{ scrollBehavior: 'smooth', gap: '16px' }}>
          {data.map((item) => (
            <div className='flex-shrink-0' style={{ width: "200px" }} key={item.id}>
              <div className='card border-0'>
                <img src={item.image} className='card-img-top' alt={item.title} />
                <div className='card-body m-0 p-2'>
                  <h6 className='card-title'>{item.title}</h6>
                  <p className='card-text'>{item.rate} <span className='fw-semibold'>Rating: ★ {item.rating}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
