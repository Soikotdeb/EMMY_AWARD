
import React, { useEffect, useState } from 'react';

const CommingGuest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('CommingGuest.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-10 bg-amber-50 py-10'>
      <div className='flex justify-center'>
        <p className='font-semibold text-amber-700'>এবারের আয়োজনে থাকছেন</p>
      </div>
      <hr className='border-t-2 border-amber-600 w-52 mb-5 flex mx-auto' />
      <div className='grid grid-cols-2 md:grid-cols-5 gap-2 px-10'>
        {data.map((Guest) => (
          <div
            key={Guest._id}
            className='flex flex-col items-center border border-gray-200 p-2 transition-transform hover:shadow-lg hover:border-amber-500'
          >
            <img src={Guest.image} alt='' className='mb-2 w-full h-auto' />
            <p className='font-semibold'>{Guest.name}</p>
            <p>{Guest.title}</p>
            <p>{Guest.from}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommingGuest;
