
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import contact from "../../assets/images/contact.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
// TODO replace the right contact info
  return (
    <div className="py-8 bg-gray-50">
      <div>
        <div className="flex justify-center flex-wrap-reverse">
          <img className="w-40 rounded-lg mt-5" src={contact} alt="Contact" />
        </div>
        <p className="flex justify-center mt-3">আমাদের সাথে সব ধরণের যোগাযোগ</p>
      </div>
      <div className="flex flex-col px-5 mt-10 md:flex-row md:px-20">
        {/* Input Fields */}
        <div className="w-full md:w-1/2 sm:px-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border rounded-lg py-5 bg-[#fff2db] flex flex-col gap-5 px-5">
              <div className="flex gap-5">
                <input
                  {...register("name")}
                  type="text"
                  className="w-full rounded-sm h-10 py-3"
                  placeholder="  নাম.."
                />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full rounded-sm h-10"
                  placeholder="  ইমেইল.."
                />
              </div>
              <div className="flex gap-5">
                <input
                  {...register("phone")}
                  type="number"
                  className="w-full rounded-sm h-10"
                  placeholder="  ফোন.."
                />
                <input
                  {...register("address")}
                  type="text"
                  className="w-full rounded-sm h-10"
                  placeholder="  ঠিকানা.."
                />
              </div>
              <textarea
                {...register("question")}
                cols="30"
                rows="10"
                className="w-full rounded-sm"
                placeholder="  আপনার প্রশ্ন.."
              ></textarea>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 w-full md:w-32 rounded self-center"
              >
                প্রেরণ করুন
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div>
            <p className="text-amber-600 font-semibold">প্রয়োজনে ফোনালাপ</p>
            <p>+880 1700000000</p>
          </div>
          <hr className="border-t-2 border-amber-600 w-36 mb-5" />
          <div className="mt-2">
            <p className="text-amber-600 font-semibold">ইমেইল</p>
            <p>divisonaward@gmail.com</p>
          </div>
          <hr className="border-t-2 border-amber-600 w-48 mb-5" />
          <div className="mt-2">
            <p className="text-amber-600 font-semibold">ঠিকানা</p>
            <p>মৌলভীবাজার, সিলেট, বাংলাদেশ</p>
          </div>
          <hr className="border-t-2 border-amber-600 w-56 mb-5" />

          <div className="mt-2">
            <p className="text-amber-600 font-semibold">সোশ্যাল মিডিয়া</p>
            <span className="flex gap-3">
              <a href="#" className="hover:text-blue-600 text-blue-500 ">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-600 text-blue-500 ">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-green-600 text-green-500">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="hover:text-pink-600 text-pink-500">
                <FaInstagram size={24} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

