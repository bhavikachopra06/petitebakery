import { NavLink } from 'react-router-dom';
import React from 'react';
import { useRef } from 'react';
import './products.css';

function Aside({ handleCategoryClick }) {
  const donutRef = useRef(null);
  const cakeRef = useRef(null);
  const cupcakeRef = useRef(null);
  const croissantRef = useRef(null);
  const brownieRef = useRef(null);
  const cheesecakesRef = useRef(null);
  const cookiesRef = useRef(null);
  



  const handleClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="aside" id="aside">
      <h2 className="aside-h2">Petite Palate</h2>
      <NavLink to="#Donuts" onClick={() => handleCategoryClick('Donuts')}>
        Donuts
      </NavLink>
      <NavLink to="#cakes" onClick={() => handleCategoryClick('Cakes')}>
        Cakes
      </NavLink>
      <NavLink to="#Cupcakes" onClick={() => handleCategoryClick('Cupcakes')}>
      Cupcakes
      </NavLink>
      <NavLink to="#Croissants" onClick={() => handleCategoryClick('Croissants')}>
      Croissants
      </NavLink>
      <NavLink to="#Brownies" onClick={() => handleCategoryClick('Brownies')}>
      Brownies
      </NavLink>
      <NavLink to="#Cheesecakes" onClick={() => handleCategoryClick('Cheesecakes')}>
      Cheesecakes
      </NavLink>
      <NavLink to="#Cookies" onClick={() => handleCategoryClick('Cookies')}>
      Cookies
      </NavLink>
      
      <div ref={donutRef}></div>
      <div ref={cakeRef}></div>
      <div ref={cupcakeRef}></div>
      <div ref={croissantRef}></div>
      <div ref={brownieRef}></div>
      <div ref={cheesecakesRef}></div>
      <div ref={cookiesRef}></div>
  
    </div>
  );
}

export default Aside;

