import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import menuIcons from "../../../assets/images/menuIcons.png";
import './Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for controlling mobile nav

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="h-56 bg-[#fff2db] flex flex-col justify-center items-center">
        <img className="w-16 mb-1" src={logo} alt="Logo" />
        <hr className="border-2 w-36 border-black" />
        
        <p className="text-2xl">EMMY AWARD</p>
        {/* <p className='underline text-5xl'  style={{ font: 'linear-gradient(45deg, #FFD700, #FFAC00)'}}>WINNER</p> */}
        <p
          className="underline text-5xl"
          style={{
            backgroundImage: "linear-gradient(45deg, #FFD700, #FFAC00)",
            WebkitBackgroundClip: "text", // For Safari
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WINNER
        </p>
      </div>
      {/* Mobile Navbar */}
      <div className="bg-gray-200 h-16 flex justify-between items-center md:hidden">
        <img
          className="w-8 ml-4 cursor-pointer"
          src={menuIcons}
          alt="Menu"
          onClick={toggleNav}
        />
      </div>
      {/* Main Nav - Desktop */}
      <div className="bg-gray-200 h-16 gap-5 flex justify-center items-center font-semibold md:flex hidden">
        <Link className="block  custom-hover-underline py-2 px-4 hover:text-amber-600" to="/">প্রথমপাতা</Link>
        <Link className="block  custom-hover-underline py-2 px-4 hover:text-amber-600" to="#">পরিচিতি</Link>
        <Link className="block  custom-hover-underline py-2 px-4 hover:text-amber-600" to="#">নমিনেশন জমা</Link>
        <Link className="block  custom-hover-underline py-2 px-4 hover:text-amber-600" to="#">গ্যালারি</Link>
        <Link to="/contacts" className="block  custom-hover-underline py-2 px-4 hover:text-amber-600"> যোগাযোগ</Link>
        <Link to="#" className="bg-amber-500 rounded-lg p-2 text-white hover:underline"> রেজিস্ট্রেশন</Link>
      </div>
      {/* Mobile Nav - Collapsible */}
      {isNavOpen && (
        <div className="bg-gray-200 h-auto md:hidden">
          <Link to="/" className="block py-2 px-4 hover:underline"> প্রথমপাতা </Link>
          <Link to="#" className="block py-2 px-4 hover:underline"> পরিচিতি </Link>
          <Link to="#" className="block py-2 px-4 hover:underline"> নমিনেশন জমা </Link>
          <Link to="#" className="block py-2 px-4 hover:underline"> গ্যালারি  </Link>
          <Link to="/contacts" className="block p hover:underline underline y-2 px-4"> যোগাযোগ </Link> 
          <Link to="#" className="block py-2 px-4 hover:underline bg-amber-500 text-white">  রেজিস্ট্রেশন  </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;