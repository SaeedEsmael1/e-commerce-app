import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import HeroSectionImage from '../images/heroSection.jpg';

export const HeroSection = () => {
  return (
    <div
      className="bg-white-color min-h-[calc(100vh-80px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroSectionImage})` }}
    >
      <div className="container mx-auto min-h-[calc(100vh-80px)]">
        <div className="content min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="w-96 text-center" style={{ minWidth: '50%' }}>
            <h3 className="text-4xl mb-8 font-bold ">
              Search Your One Form{' '}
              <span className="text-secondary-color">Thousand</span> Of Products
            </h3>
            <div className="flex items-center border justify-between rounded-2xl py-2 px-5 border-gray-color bg-white-color mb-8">
              <input
                type="text"
                placeholder="Search For A Product"
                className="flex-1 border-none outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className=" text-gray-color cursor-pointer"
              />
            </div>
            <p className="text-xl text-gray-color">
              We Have The Largest Collection Of Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
