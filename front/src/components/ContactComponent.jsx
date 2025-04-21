import MyLocationMap from './MyLocationMap';
import ContactIcon1 from '../images/contact/contact-icon-1.png';
import ContactIcon2 from '../images/contact/contact-icon-2.png';
import ContactIcon3 from '../images/contact/contact-icon-3.png';
import ContactIcon4 from '../images/contact/contact-icon-4.png';
const ContactComponent = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="content">
          <div className="text-center py-5 mb-10">
            <h2 className="text-primary-color font-bold text-2xl mb-2">
              Get in touch with us
            </h2>
            <h5 className="text-xl font-medium">
              "We're Always Eager To Hear From You!"
            </h5>
          </div>
          <div className="flex gap-5 flex-col min-sm:flex-row">
            <div className="flex-1">
              <MyLocationMap />
            </div>
            <div className="location-info flex-1">
              <div className="bg-white-color p-5 rounded-lg shadow-[1px_1px_1px_1px_#888] flex gap-3 items-center justify-center text-center mb-5">
                <img src={ContactIcon1} alt="" />
                <div>
                  <strong>Office Address</strong>
                  <p>1201 park street, Fifth Avenue</p>
                </div>
              </div>

              <div className="bg-white-color p-5 rounded-lg shadow-[1px_1px_1px_1px_#888] flex gap-3 items-center justify-center text-center mb-5">
                <img src={ContactIcon2} alt="" />
                <div>
                  <strong>Phone number</strong>
                  <p>+22698 745 632,02 982 745</p>
                </div>
              </div>

              <div className="bg-white-color p-5 rounded-lg shadow-[1px_1px_1px_1px_#888] flex gap-3 items-center justify-center text-center mb-5">
                <img src={ContactIcon3} alt="" />
                <div>
                  <strong>Send email</strong>
                  <p>admin@shopcart.com</p>
                </div>
              </div>

              <div className="bg-white-color p-5 rounded-lg shadow-[1px_1px_1px_1px_#888] flex gap-3 items-center justify-center text-center mb-5">
                <img src={ContactIcon4} alt="" />
                <div>
                  <strong>Our website</strong>
                  <p>www.shopcart.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-10">
            <h2 className="text-primary-color font-bold text-2xl mb-2">
              Get in touch with Contact us
            </h2>
            <h5 className="font-medium text-2xl">
              Fill The Form Below So We Can Get To Know You And Your Needs
              Better.
            </h5>
          </div>

          <form className="py-5">
            <div className="flex flex-col min-md:flex-row flex-wrap gap-2">
              <input
                className="border border-primary-color outline-none py-1.5 px-2 rounded-md min-md:w-[calc(50%-4px)]"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-primary-color outline-none py-1.5 px-2 rounded-md min-md:w-[calc(50%-4px)]"
                type="email"
                placeholder="Email"
              />
              <input
                className="border border-primary-color outline-none py-1.5 px-2 rounded-md min-md:w-[calc(50%-4px)]"
                type="text"
                placeholder="Subject"
              />
              <input
                className="border border-primary-color outline-none  py-1.5 px-2 rounded-md min-md:w-[calc(50%-4px)]"
                type="phone"
                placeholder="Mobile Number"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="block my-5 resize-none w-[400px] max-w-full h-[150px] outline-none border"
            ></textarea>
            <button className="cursor-pointer bg-primary-color text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
