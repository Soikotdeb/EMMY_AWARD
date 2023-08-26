
import React from "react";
import YouthAward from "../../assets/images/bigBanner.jpeg";

const RaisingYouthInfo = () => {
  return (
    <div className="bg-amber-50">
      <div className="flex flex-col md:flex-row gap-5 justify-center p-5">
        <div className="md:w-[450px] md:h-1/2">
          <img className="rounded-md w-full h-full" src={YouthAward} alt="" />
        </div>
        <div>
          <p className="font-semibold">
            <span className="font-extrabold text-3xl">Rising Youth Award </span>
            একটি ছোট্ট পদক্ষেপ
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default RaisingYouthInfo;