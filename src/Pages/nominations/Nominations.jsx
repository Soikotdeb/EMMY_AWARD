
import React from 'react';
import nominations from '../../assets/images/nominations.png';
import bann from '../../assets/images/Bann.jpeg';
import { AiFillTags } from 'react-icons/ai';
import AwardCategory from './AwardCategory';

const Nominations = () => {
  return (
    <div className='mt-4 py-5'>
      <div className='flex justify-center'>
        <img className='w-24 h-auto' src={nominations} alt='' />
      </div>
      <div>
       <img className='px-10 w-full max-h-72 ' src={bann} alt="" />
     </div>

      <div className='grid md:grid-cols-2 gap-6 mt-6 lg:px-6'>
        {/* 1st part */}
        <div className='md:py-6  p-4 hover:shadow-lg mx-auto'>
          <p className='font-semibold text-amber-600'>
            দেশীয় উদ্যোগজগত ও সামাজিক কার্যক্রমকে উদ্দীপ্ত করার প্রয়াস <br /> 
            রাইজিং ইয়ুথ অ্যাওয়ার্ড এর তৃতীয় সিজনের কার্যক্রম
          </p>
          <hr className='border-2 w-96 border-amber-400 text-base mt-2' />
          <p className='mt-2'>
            রাইজিং ইয়ুথ অ্যাওয়ার্ড এবারের আয়োজন আরো বড় কলরবে হতে যাচ্ছে। <br />
            তার জন্য আপনাদের ছোট একটা কাজ করতেহবে। একটি অনলাইন ফরম <br />
            ফিলাপ করতে হবে। বেশী কিছু নয় আপনার ও আপনার উদ্যোগের কিছু <br />
            ডিটেইলস এতে থাকবে। আমরা যেটা আশা করি সেটি হলো রাইজিং ইয়ুথ <br /> 
            অ্যাওয়ার্ড শুধু ইয়ুথদের নয় দেশীয় উদ্যোগপতিদের সিগনেচার ইভেন্ট হবে.
          </p>
          <p className='mt-2'>
            আজকে যিনি রাইজিং, কাল তিনি আরেকজনের জন্য পাইওনিয়ার হবেন <br /> আসুন,
            পাইওনিয়ার হওয়ার পদযাএায়
          </p>
          <p className="mt-2">
            Rising Youth Award প্রাপ্ত সকলেই বাংলাদেশি তরুণ-তরুণী।তাঁদের <br />
            কেউ স্বাস্থ্যসেবায়, কেউ নারী জাগরণে, কেউ ফ্রিল্যান্সে, কেউ স্টার্টআপে, <br />
            কেউ বিনোদন জগতে আবার কেউ সার্ভিস সেক্টরে নিজেদের জায়গা থেকে <br />
            দেশের উন্নয়নে অবদান রেখে যাচ্ছেন। হাজার কাঠখড় পুড়িয়েও যারা হার না  <br />
            মেনে  ছুটে চলেছেন সফলতার পেছনে আর স্বপ্ন দেখেছেন দৃঢ় ও আত্মপ্রত্যয়ী <br />
            বাংলাদেশ গঠনের; Emmy_Award প্রতিবছর এমনই প্রায় অর্ধশতাধিক তরুণ- <br />
            তরূণীদের Rising Youth Award প্রদান করে সম্মাননা দিয়ে থাকে।
          </p>
          <p className="mt-2">
            আজকে যিনি রাইজিং, কাল তিনি আরেকজনের জন্য পাইওনিয়ার হবেন <br /> আসুন,
            পাইওনিয়ার হওয়ার পদযাএায়
          </p>
        </div>

        {/* 2nd part */}
        <div className=' text-white font-semibold p-4 hover:shadow-lg bg-amber-50'>
        <p className='border bg-amber-600 text-white font-semibold p-2'>অংশগ্রহণকারীদের জন্য যা যা থাকছে !</p>
        <div className='text-black mt-5'>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> প্রত্যেক অংশগ্রহণকারী কে একটি করে সার্টিফিকেট প্রদান করা হবে ।</p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> যারা নোমিনেশন জমা দিবে তাদের প্রত্যেকের জন্য পার্সোনাল ব্র্যান্ডিংকে ফোকাস করে ব্যানার করা হবে ।</p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> রাইজিং ইয়ুথ এ্যাওয়ার্ড প্রোগ্রাম এর টিকেট প্রদান করা হবে । </p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> উক্ত ইভেন্টে যা যা থাকছে টিশার্ট, নোটবুক, কলম, সার্টিফিকেট, ক্যারিয়ার কথন ম্যাগাজিন, অংশগ্রহণকারীর ক্রেস্ট ও আরো অনেক কিছু ।</p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> নমিনেশন জমা দেওয়া থেকে টপ ১৫০ জনকে নিয়ে আলাদা প্রমোশনাল এক্টিভিটি করা হবে । </p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> প্রত্যেক ক্যাটাগরি থেকে ১ জনের জন্য থাকবে অ্যাওয়ার্ড , সার্টিফিকেট, মেডেল এবং আকর্ষণীয় কিছু গিফট সামগ্রী থাকবে । </p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> নমিনেশন জমা দেওয়া থেকে টপ ১৫০ জনকে নিয়ে আলাদা প্রমোশনাল এক্টিভিটি করা হবে । </p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> সেরাদের ইয়ুথ ক্যারিয়ার ইন্সটিটিউট লাইভে একটি করে লাইভ প্রোগ্রামে সুযোগ দেওয়া হবে, এবং পাশাপাশি বিভিন্ন পত্র পত্রিকায় নিউজ করা হবে ।  </p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> রেজিষ্ট্রেশনকারীদের সারাবছরব্যাপী ইয়ুথ দের বিভিন্ন প্রোগ্রাম ও প্রজেক্টের সাথে সংযুক্ত করা</p>
        <p className='flex items-center gap-2'><span> <AiFillTags/> </span> প্রতিটি ক্যাটাগরিতে টপ ৫ জনকে নিয়ে অনলাইন এক্টিভিটি করা । </p>
        <p className='border bg-amber-600 text-white font-semibold p-2 mt-5'> রেজিস্ট্রেশন ফিঃ ১৫৫০ টাকা। বিকাশঃ ০১৭১৯৮৯৮৮৯২ (পার্সোনাল) </p>
        </div>
        </div>
      </div>
      <AwardCategory></AwardCategory>
    </div>
  );
};

export default Nominations;
