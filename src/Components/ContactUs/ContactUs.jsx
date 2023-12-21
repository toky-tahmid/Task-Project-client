import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
const ContactUs = () => {
  return (
    <>
      <div className="mt-9 text-3xl font-bold text-center">
        <h1>Contact US</h1>
        <br />
        <hr />
      </div>
      <br />
      <div className="flex-row  bg-gray-300 lg:flex mx-auto py-24 justify-evenly">
        <div>

          <h2 className="text-3xl mr-24 lg:text-center font-semibold"> OUR INFORMATION</h2>
          <hr />
          <br />
          <div className="flex gap-3 ">
            <BiCurrentLocation className="mt-3 text-xl"></BiCurrentLocation>
            
            <h3 className="text-xl">

              Leo Digital 7th Floor Miami,
              <br /> Fl 33130,Dhaka Bangladesh.
            </h3>
          </div>
          <br />
          <hr />
          <div className="flex gap-3 ">
          <AiOutlinePhone className="mt-1 text-xl"></AiOutlinePhone>
            <h4 className="text-xl">Call us: 0123456789</h4>
          </div>
          <br />
          <hr />
          <div className="flex gap-3 ">
            <AiOutlineMail className="mt-1 text-xl"></AiOutlineMail>
            <h4 className="text-xl">Email us: demo@demo.com</h4>
          </div>
        </div>

       
          <div className="md:flex-row lg:flex gap-4 mt-4 ">
            <div className="w-72">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="w-72">
              <label className="font-semibold">Email</label>
              <input
                type="text"
                placeholder="E-mail"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mt-4 w-96 ">
            <label className="font-semibold ml-2">Message</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Write Message"
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div> <div>
      </div>
    </>
  );
};

export default ContactUs;
