import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="flex justify-center bg-amber-50 py-10 flex-wrap-reverse gap-10">
            <div className="bg-white p-4">
                <p className="text-amber-800  font-semibold">দেশীয়  উদ্যোগজগত ও সামাজিক কার্যক্রমের উদ্দীপ্ত করার প্রয়াস <br /> রাইজিং ইয়ুথ অ্যাওয়ার্ড এর তৃতীয় সিজনের কার্যক্রম</p>
                <hr className='border-2 w-36 border-amber-400 text-base' />
                <p>রাইজিং ইয়ুথ অ্যাওয়ার্ড এবারের আয়োজন আরো বড় কলরবে হতে যাচ্ছে। <br /> তার জন্য আপনাদের ছোট একটা কাজ করতেহবে।  একটি অনলাইন ফরম <br /> ফিলাপ করতে হবে। বেশী কিছু নয় আপনার ও আপনার উদ্যোগের কিছু <br /> ডিটেইলস এতে  থাকবে।  আমরা যেটা আশা করি সেটি হলো রাইজিং ইয়ুথ <br /> অ্যাওয়ার্ড শুধু ইয়ুথদের নয় দেশীয় উদ্যোগপতিদের সিগনেচার ইভেন্ট হবে .</p> <br />
                <p> আজকে যিনি রাইজিং, কাল তিনি আরেকজনের জন্য পাইওনিয়ার  <br /> হবেন  আসুন, পাইওনিয়ার হওয়ার পদযাএায়</p>
                
            <div className="flex gap-5">
                <Link className="bg-amber-500 rounded-lg p-2 mt-2 text-white">নমিনেশন জমা</Link>
                <Link className="bg-amber-500 rounded-lg p-2 mt-2 text-white">রেজিস্ট্রেশন করুন</Link>
                </div>
            </div>
            <div className="">
                <video controls className="max-w-full  rounded-lg">
                    <source src="https://bestvpn.org/html5demos/assets/dizzy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HomeBanner;
