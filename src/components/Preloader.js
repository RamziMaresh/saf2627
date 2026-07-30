"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="preloader" style={{ display: load ? "flex" : "none" }}>
        <div className="custom-loader" >
          <img
            src="/assets/images/logos/logo-white.png"
            width={100}
            alt="Safra Logo"
            title="Logo"
          />
        </div>
      </div>

    </>

  );
};
export default Preloader;
