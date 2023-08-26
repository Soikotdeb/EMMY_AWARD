import React from 'react';
import logo from '../../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='h-36 flex flex-col justify-center items-center bg-gray-900 text-white'>
        {/* TODO LOGO */}
      <img className='w-16 mb-2' src={logo} alt="Logo" />

      <p className='text-center'>
      Copyright &copy; {currentYear} Creation Institute of Technology. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
