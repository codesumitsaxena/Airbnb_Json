import React, { useEffect, useState } from 'react';
import HomeCarousel from './HomeCarousel';

function PopularHomes() {
  const [gurgaon, setGurgaon] = useState([]);
  const [gautam, setGautam] = useState([]);
  const [dehradun, setDehradun] = useState([]);
  const [southDelhi, setSouthDelhi] = useState([]);
  const [eastdelhi, setEastDelhi] = useState([]);
  const [kullu, setKullu] = useState([]);
  const [nainital, setNainital] = useState([]);

  useEffect(() => {
    fetch('/data/gurgaon.json')
      .then(res => res.json())
      .then(data => setGurgaon(data));
  
    fetch('/data/Noida.json')
      .then(res => res.json())
      .then(data => setGautam(data));
  
    fetch('/data/similar.json')
      .then(res => res.json())
      .then(data => setDehradun(data));
  
    fetch('/data/SouthDelhi.json')
      .then(res => res.json())
      .then(data => setSouthDelhi(data));
  
    fetch('/data/Kullu.json')
      .then(res => res.json())
      .then(data => setKullu(data));
  
    fetch('/data/Nainital.json')
      .then(res => res.json())
      .then(data => setNainital(data));
  
    fetch('/data/EastDelhi.json')
      .then(res => res.json())
      .then(data => setEastDelhi(data));
  }, []);
  
  

  return (
    <>
      <HomeCarousel title="Popular Homes in Gurgaon" data={gurgaon} />
      <HomeCarousel title="Stay near Chandni Chowk" data={gautam} />
      <HomeCarousel title="Available for similar dates" data={dehradun} />
      <HomeCarousel title="Available in South Delhi next weekend" data={southDelhi} />
      <HomeCarousel title="Homes in Kullu" data={kullu} />
      <HomeCarousel title="Available in Nainital next weekend" data={nainital} />
      <HomeCarousel title="Places to stay in South East Delhi" data={eastdelhi} />
      <HomeCarousel title="Check out homes in Jaipur" data={dehradun} />


    </>
  );
}

export default PopularHomes;
