import { Link } from 'react-router-dom';
import logo from '../../../assets/images/images.jpeg';

const Navbar = () => {
    return (
        <div>
            <div className='h-40  bg-[#FAFAD2] flex flex-col justify-center items-center '>
            {/* TODO LOGO */}
<img className='w-16 mb-1 ' src={logo} alt="Logo" />
<hr className='border-2 w-36 border-black' />
<p className=' text-2xl'>EMMY AWARD</p>
<p className='underline text-5xl'>WINNER</p>
    </div>
    {/* this is main nav */}
    <div className='bg-gray-200 h-16  gap-5 flex  justify-center items-center font-semibold'>
        <Link>প্রথমপাতা</Link>
        <Link>পরিচিতি</Link>
        <Link>নমিনেশন জমা</Link>
        <Link>গ্যালারি</Link>
        <Link>যোগাযোগ</Link>
        <Link className='bg-amber-500 rounded-lg p-1 text-white'>রেজিস্ট্রেশন</Link>
    </div>
        </div>
    );
};

export default Navbar;