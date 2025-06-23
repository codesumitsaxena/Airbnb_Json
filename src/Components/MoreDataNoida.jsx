import React, { useEffect, useState } from "react";

function MoreDataNoida() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/noida")  // Update URL to your backend route
      .then((res) => res.json())
      .then((data) => setShowData(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []); // empty dependency array so it runs once on mount

  return (
    <div className="container-fluid">
     
    </div>
  );
}

export default MoreDataNoida;
