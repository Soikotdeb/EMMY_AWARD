import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AwardCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('AwardCategory.json');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div className='py-10 bg-amber-50 mt-5'>
            <div className='flex justify-center'>
                <p className='text-amber-600 font-semibold'>অ্যাওয়ার্ড ক্যাটাগরি</p>
            </div>
            <hr className='border-2 w-44 border-amber-400 text-base mt-2 mx-auto' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 px-5'>
                {
                    data.map(category => (
                        <Link key={category._id} className='border border-gray-100 p-5 bg-white h-36 hover:border-gray-300 '>
                            <p className='font-semibold text-amber-700 flex justify-center'>{category.categoryName}</p>
                            <p className='flex justify-center mt-2'>{category.title}</p>
                        </Link>
                    ))
                }
            </div>
            <div className='mt-5 flex justify-center'>
            <Link className="bg-amber-600 rounded-lg p-2 mt-2 text-white">নমিনেশন জমা দিন</Link>
            </div>
        </div>
    );
};

export default AwardCategory;
