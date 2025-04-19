import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import PageLink from './PageLink';

import { useState } from 'react';
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="h-20 flex items-center bg-white-color">
      <div className="container mx-auto">
        <div className="content">
          <nav className="flex justify-between items-center">
            <Link to={'/'}>
              <img src={Logo} alt="Logo" />
            </Link>
            <div
              className={`${isCollapsed ? 'max-md:max-h-96' : 'max-md:max-h-0'} z-50 max-md:transition-all max-md:duration-500 overflow-hidden max-md:absolute max-md:w-full max-md:bg-light-dark  top-20 left-0`}
            >
              <div className="max-md:container max-md:mx-auto">
                <ul className="flex max-md:flex-col py-3">
                  <li className="max-md:border-b-3  border-primary-color  max-md:py-2 min-md:px-2 group">
                    <PageLink path={'/'} content={'Home'} />
                  </li>
                  <li className="max-md:border-b-3 border-primary-color  max-md:py-2 min-md:px-2 group">
                    <PageLink path={'/shop'} content={'Shop'} />
                  </li>
                  <li className="max-md:border-b-3 border-primary-color  max-md:py-2 min-md:px-2 group">
                    <PageLink path={'/cart-shop'} content={'Cart Shop'} />
                  </li>
                  <li className="max-md:border-b-3 border-primary-color  max-md:py-2 min-md:px-2 group">
                    <PageLink path={'/blog'} content={'Blog'} />
                  </li>
                  <li className="max-md:border-b-3 border-primary-color  max-md:py-2 min-md:px-2 group">
                    <PageLink path={'/about'} content={'About'} />
                  </li>
                  <li className="max-md:py-2 group">
                    <PageLink path={'/contact'} content={'Contact'} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="login bg-primary-color p-1 px-2 rounded-md pb-1.5 text-white-color hover:bg-secondary-color transition-colors duration-200 ">
              <button className="flex items-center cursor-pointer">
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="text-xl relative top-0.5"
                />
                <span className="font-bold">Log In</span>
              </button>
            </div>
            <div className="bars min-md:hidden">
              <button onClick={() => setIsCollapsed((prev) => !prev)}>
                <FontAwesomeIcon
                  icon={faBars}
                  className=" text-3xl text-primary-color cursor-pointer"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
