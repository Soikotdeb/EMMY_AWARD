
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import gallery from '../../assets/images/gallery.png';
import galleryJson from '../../../public/gallery.json'; // Assuming you have a JSON file for gallery data
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setData(galleryJson); // Assuming your JSON data is stored in 'galleryJson'
    }, []);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        if (currentImageIndex < data.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className='py-8'>
            <div className='flex justify-center -mt-7'>
                <img className='h-20' src={gallery} alt='' />
            </div>
            <p className='flex justify-center font-semibold mb-8 text-amber-700'>
                আমাদের বিজয়ী ও অতিথিদের স্বরনীয় মূহুর্ত
            </p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-2 px-10'>
                {data.map((Gallery, index) => (
                    <div
                        key={Gallery._id}
                        className='relative flex flex-col items-center border border-gray-200 p-2 transition-transform hover:shadow-lg hover:border-amber-500'
                    >
                        <img
                            src={Gallery.image}
                            alt={`Image ${index + 1}`}
                            className='mb-2 w-full h-auto cursor-pointer'
                            onClick={() => openModal(index)}
                        />
                        <p className='text-center'>{Gallery.dscription}</p>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg'>
                        <div className='relative'>
                            <button
                                className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-1xl p-4 bg-gray-400 hover:bg-gray-500'
                                onClick={prevImage}
                                disabled={currentImageIndex === 0}
                            >
                                &lt;
                            </button>
                            <button
                                className='absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-1xl p-4 bg-gray-400 hover:bg-gray-500'
                                onClick={nextImage}
                                disabled={currentImageIndex === data.length - 1}
                            >
                                &gt;
                            </button>
                            <div className='flex justify-center items-center text-center mb-2'>
                                <Link>
                                <AiFillCloseCircle
                                size={34}
                                   className='text-red-500 hover:text-red-600'
                                    onClick={closeModal}
                                />
                                </Link>
                            </div>
                            <img
                                className='w-full h-auto max-h-96 mx-auto'
                                src={data[currentImageIndex].image}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                            <p className='text-center text-gray-900 mt-4'>
                                {data[currentImageIndex].dscription}
                            </p>
                            <p className='text-center text-gray-500 mt-4'>Current Image No: {currentImageIndex + 1} </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

