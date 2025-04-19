import AboutImage1 from '../images/about/about-img-1.jpg';
import AboutImage2 from '../images/about/about-img-2.jpg';

import AboutIcon1 from '../images/about/about-icon-1.jpg';
import AboutIcon2 from '../images/about/about-icon-2.jpg';
import AboutIcon3 from '../images/about/about-icon-3.jpg';

export const AboutComponent = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="content flex justify-between gap-10 flex-col items-center text-center min-lg:flex-row min-lg:text-start">
          <div className="images flex-1 relative">
            <img
              src={AboutImage1}
              alt=""
              className="min-w-[300px] max-w[400px]"
            />
            <img
              className="absolute bottom-0 right-0 w-[200px] border-10 border-white hidden min-lg:block"
              src={AboutImage2}
              alt=""
            />
          </div>
          <div className="details flex-1">
            <div className="info mb-10">
              <h5 className="text-xl mb-3 text-primary-color font-bold tracking-wide">
                About Our Brand
              </h5>
              <h1 className="mb-3 text-2xl font-medium leading-7 text-[#444]">
                Good Qualification Services And Better Expriences
              </h1>
              <p className="hidden min-sm:block w-[400px]  leading-7 text-[#777] mx-auto min-lg:mx-0">
                Distinctively provide acces mutfuncto users whereas transparent
                proceses somes ncentivize eficient functionalities rather than
                extensible archtectur communicate leveraged services and
                cross-platform.
              </p>
            </div>

            <ul className="about-list px-5">
              <li className="flex items-center gap-5 mb-5 justify-center">
                <img src={AboutIcon1} alt="" />
                <div>
                  <h4 className="text-[#333] text-xl p-1 font-bold">
                    Get Certificate
                  </h4>
                  <p className="w-[200px] min-lg:w-full">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-5 mb-5 justify-center">
                <img src={AboutIcon2} alt="" />
                <div>
                  <h4 className="text-[#333] text-xl p-1 font-bold">
                    Get Certificate
                  </h4>
                  <p className="w-[200px] min-lg:w-full">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-5 mb-5 justify-center">
                <img src={AboutIcon3} alt="" />
                <div>
                  <h4 className="text-[#333] text-xl p-1 font-bold">
                    Online Classes
                  </h4>
                  <p className="w-[200px] min-lg:w-full">
                    Distinctively provide acces mutfuncto users whereas
                    communicate leveraged services
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
