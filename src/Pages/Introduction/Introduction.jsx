import introduction from '../../assets/images/introduction2.png'
import demo from '../../assets/images/bigBanner.jpeg'
import { Link } from 'react-router-dom';
import CommingGuest from '../CommingGuest/CommingGuest';


const Introduction = () => {
    return (
        <div>
           <div className='flex flex-wrap p-1 gap-5 justify-center py-5'>
<div>
<img className='w-32 rounded-full h-12 mt-5 mx-auto flex' src={introduction} alt="" />
        <div className='flex mb-5 justify-center  mt-2'>
        <p> আমাদের  উদ্যোগ ও পরিচিতি</p>
        </div>
         <div className="md:w-[550px] md:h-400">
          <img className="rounded-md w-full h-full" src={demo} alt="" />
        </div>
        <div className="flex gap-5 mt-5 justify-center">
                <Link className="bg-amber-700 rounded-lg p-2 mt-2 text-white">রেজিস্ট্রেশন করুন</Link>
                <Link className="bg-amber-700 rounded-lg p-2 mt-2 text-white">নমিনেশন জমা</Link>
                </div>
</div>


<div className='md:py-6'>
    <p className='font-semibold text-amber-600'>দেশীয় উদ্যোগজগত ও সামাজিক কার্যক্রমকে উদ্দীপ্ত করার প্রয়াস <br />
     রাইজিং ইয়ুথ অ্যাওয়ার্ড এর তৃতীয় সিজনের কার্যক্রম</p>
   <div>
   <p className="mt-2">
        
        রাইজিং ইয়ুথ অ্যাওয়ার্ড এবারের আয়োজন আরো বড় কলরবে হতে যাচ্ছে। <br />{" "}
        তার জন্য আপনাদের ছোট একটা কাজ করতেহবে। একটি অনলাইন ফরম <br />
        ফিলাপ করতে হবে। বেশী কিছু নয় আপনার ও আপনার উদ্যোগের কিছু <br />
        ডিটেইলস এতে থাকবে। আমরা যেটা আশা করি সেটি হলো রাইজিং ইয়ুথ <br /> 
        অ্যাওয়ার্ড শুধু ইয়ুথদের নয় দেশীয় উদ্যোগপতিদের সিগনেচার ইভেন্ট হবে .
      </p>
      <p className="mt-2">
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
            Rising Youth Award প্রাপ্ত সকলেই বাংলাদেশি তরুণ-তরুণী।তাঁদের <br />
            কেউ স্বাস্থ্যসেবায়, কেউ নারী জাগরণে, কেউ ফ্রিল্যান্সে, কেউ স্টার্টআপে, <br />
            কেউ বিনোদন জগতে আবার কেউ সার্ভিস সেক্টরে নিজেদের জায়গা থেকে <br />
            দেশের উন্নয়নে অবদান রেখে যাচ্ছেন। হাজার কাঠখড় পুড়িয়েও যারা হার না  <br />
            মেনে  ছুটে চলেছেন সফলতার পেছনে আর স্বপ্ন দেখেছেন দৃঢ় ও আত্মপ্রত্যয়ী <br />
            বাংলাদেশ গঠনের; Emmy_Award প্রতিবছর এমনই প্রায় অর্ধশতাধিক তরুণ- <br />
            তরূণীদের Rising Youth Award প্রদান করে সম্মাননা দিয়ে থাকে।
          </p>
          <p className="mt-2">
            Rising Youth Award প্রাপ্ত সকলেই বাংলাদেশি তরুণ-তরুণী।তাঁদের <br />
            কেউ স্বাস্থ্যসেবায়, কেউ নারী জাগরণে, কেউ ফ্রিল্যান্সে, কেউ স্টার্টআপে, <br />
            কেউ বিনোদন জগতে আবার কেউ সার্ভিস সেক্টরে নিজেদের জায়গা থেকে <br />
            দেশের উন্নয়নে অবদান রেখে যাচ্ছেন। 
          </p>
   </div>

</div>
           </div>
           <CommingGuest></CommingGuest>
        </div>
    );
};

export default Introduction;