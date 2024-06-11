import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div className={`flex justify-between px-4 py-2 items-center bg-${props.bgcolor} text-${props.bgcolor === 'dark'?'light':'black'}  border-b-2`}>
      <Link to="/" className='hover:no-underline hover:cursor-pointer hover:text-black'><h1 className={`${props.text} font-bold text-3xl `}>{props.title}</h1></Link>
      <ul className="flex gap-4 text-base ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">{props.aboutName}</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul> 
      <button className={`border-none py-2 px-3 rounded-full focus:outline-none ${props.bgcolor==='dark'?'bg-gray-500':' bg-blue-200'}`} onClick={props.toggleMode}>{props.bgcolor==='dark'?'Light':'Dark'}</button>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutName: PropTypes.string,
  bgcolor: PropTypes.string.isRequired, // Added bgcolor prop type
  toggleMode: PropTypes.func.isRequired // Added toggleMode prop type
};

Navbar.defaultProps = {
  title: 'TextArtisan',
  aboutName: 'About Us'
};
