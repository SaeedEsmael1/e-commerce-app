import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUserGraduate,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import InstructorImg from '../images/instructor-img/instructor-img.png';
export const AboutUs = () => {
  return (
    <div className="bg-dark-color text-white-color py-20">
      <div className="container mx-auto">
        <div className="contant grid min-md:grid-cols-2 min-lg:grid-cols-3 gap-20 items-center">
          <div className="achievements">
            <div className="item max-md:justify-center mb-10 flex items-center">
              <div className="icon w-16 h-16 rounded-full mr-16  bg-[#e74f00] shadow-[0_0_10px_10px_#e74f008c] flex items-center justify-center">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="">
                <span className="block text-secondary-color mb-2 pl-5 text-2xl">
                  12,600 +
                </span>
                <span className="block">Marchant Enrolled</span>
              </div>
            </div>
            <div className="item max-md:justify-center mb-10 flex items-center">
              <div className="icon w-16 h-16 rounded-full mr-16  bg-[#008000] shadow-[0_0_10px_10px_#0080006b] flex items-center justify-center">
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <div className="">
                <span className="block text-secondary-color mb-2 pl-5 text-2xl">
                  30 +
                </span>
                <span className="block">Certified Courses</span>
              </div>
            </div>
            <div className="item max-md:justify-center mb-10 flex items-center">
              <div className="icon w-16 h-16 rounded-full mr-16  bg-[#e94560] shadow-[0_0_10px_10px_#e945604f] flex items-center justify-center">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="">
                <span className="block text-secondary-color mb-2 pl-5  text-2xl">
                  100 +
                </span>
                <span className="block">Rewards and GitCards</span>
              </div>
            </div>
          </div>
          <div className="details text-center">
            <span className="text-secondary-color mb-2">Why Choose Us</span>
            <p className="mb-2 leading-7">
              Take courses on your any device with our app & learn all about
              business what you want. Just download & install & start to learn
            </p>
            <h2 className="text-secondary-color text-2xl font-bold mb-2">
              Become a Marchant
            </h2>
            <button className="cursor-pointer bg-primary-color py-2 px-5 block max-sm:w-[80%] w-full mx-auto rounded-md">
              Apply Now
            </button>
          </div>
          <div className="instructor-img flex justify-center items-center min-md:col-span-2 min-lg:col-span-1">
            <img src={InstructorImg} className="w-[300px] max-w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
