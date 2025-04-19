import UserImage from '../images/user_imag/heroSection.jpg';
export const ClientsMap = () => {
  return (
    <div className="custom-scroll mb-20">
      <div className="container mx-auto">
        <div className="content">
          <div className="clients-map bg-[url(https://alfa155518.github.io/E-commerce-shop/static/media/bg.fc9a44ade3da70913cdf.png)] bg-cover bg-center bg-no-repeat w-[600px] h-[400px] mx-auto  bg-dark-color">
            <ul className="w-full h-full relative ">
              <li className="absolute group w-4 h-4 bg-[#008000] rounded-full left-[50px] top-[100px] shadow-[0_0_15px_5px_#008000] cursor-pointer transition-transform duration-300 hover-pulse-on-hover">
                <img
                  src={UserImage}
                  className="rounded-full w-full h-auto hidden group-hover:block"
                  alt=""
                />
              </li>
              <li className="absolute group w-4 h-4 bg-[#f7ce26] rounded-full left-[150px] bottom-[110px] shadow-[0_0_15px_5px_#f7ce26] cursor-pointer transition-transform duration-300 hover-pulse-on-hover">
                <img
                  src={UserImage}
                  className="rounded-full w-full h-auto hidden group-hover:block"
                  alt=""
                />
              </li>
              <li className="absolute group w-4 h-4 bg-[#0000ff] rounded-full left-[305px] bottom-[155px] shadow-[0_0_15px_5px_#0000ff] cursor-pointer transition-transform duration-300 hover-pulse-on-hover">
                <img
                  src={UserImage}
                  className="rounded-full w-full h-auto hidden group-hover:block"
                  alt=""
                />
              </li>
              <li className="absolute group w-4 h-4 bg-[#e94560] rounded-full right-[90px] top-[80px] shadow-[0_0_15px_5px_#e94560] cursor-pointer transition-transform duration-300 hover-pulse-on-hover">
                <img
                  src={UserImage}
                  className="rounded-full w-full h-auto hidden group-hover:block"
                  alt=""
                />
              </li>
              <li className="absolute group w-4 h-4 bg-[#800080] rounded-full right-[55px] bottom-[75px] shadow-[0_0_15px_5px_#800080] cursor-pointer transition-transform duration-300 hover-pulse-on-hover">
                <img
                  src={UserImage}
                  className="rounded-full w-full h-auto hidden group-hover:block"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
