
import React, { useState } from 'react';
import awardMomant from '../../assets/images/awardMomant.jpg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AwardWinnerMomant = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAllImages, setShowAllImages] = useState(false);
    const images = Array.from({ length: 12 }, (_, index) => index);

    const openModal = (index) => {
        setShowModal(true);
        setCurrentImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const toggleAllImages = () => {
        setShowAllImages(!showAllImages);
    };

    return (
        <div className="bg-white p-16">
            <p className="text-amber-600 font-semibold flex justify-center">
                অ্যাওয়ার্ড বিজয়ী ও অতিথিদের কিছু স্মরণীয় মুহূর্ত
            </p>
            <hr className="mx-auto border-t-2 border-amber-600 w-36 mb-7" />
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3">
                {images.slice(0, showAllImages ? images.length : 8).map((index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <img
                            className="w-full h-40 object-cover rounded-md transition transform hover:scale-105"
                            src={awardMomant}
                            alt={`Image ${index + 1}`}
                        />
                        <div className="hidden absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">
                                Image {index + 1}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {!showAllImages && (
                <div className='flex justify-center align-middle items-center'>
                    <button
                        className="mt-2 p-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition"
                        onClick={toggleAllImages}
                    >
                        সব ছবি দেখুন
                    </button>
                </div>
            )}
           {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative max-w-3xl mx-auto">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="relative">
                            <img
                                className="w-full h-auto max-h-80 rounded-md"
                                src={awardMomant}
                                alt={`Image ${currentImageIndex + 1}`}
                            />
                            <button
                                className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white text-2xl p-4"
                                onClick={prevImage}
                                disabled={currentImageIndex === 0}
                            >
                                &lt;
                            </button>
                            <button
                                className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white text-2xl p-4"
                                onClick={nextImage}
                                disabled={currentImageIndex === images.length - 1}
                            >
                                &gt;
                            </button>
                            <div className="flex justify-center items-center text-center align-middle">
                                <Link
                                    className="absolute top-5 right-5 text-white text-2xl p-4"
                                    onClick={closeModal}
                                >
                                     <AiFillCloseCircle/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AwardWinnerMomant;









