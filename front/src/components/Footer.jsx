import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import {
  faFacebook,
  faSquareXTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="py-16 bg-dark-color text-white-color">
      <div className="container mx-auto">
        <div className="content">
          <footer className="grid min-sm:grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-4 gap-20">
            <div className="about-shop-cart">
              <h2 className="text-2xl font-bold mb-5">About ShopCart</h2>
              <p className="text-gray-color mb-5">
                Eduaid theme number one world class university in the world
                There are student are studing always in this university for all
                time.
              </p>
              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-5">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span>New York, USA.</span>
                </li>
                <li className="flex items-center mb-5">
                  <span className="mr-5">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span>+880 123 456 789</span>
                </li>
                <li className="flex items-center mb-5">
                  <span className="mr-5">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>info@shopcart.com</span>
                </li>
              </ul>
              <ul className="social-links flex gap-5">
                <li className="py-2 px-3 rounded-md bg-[#3b5998] text-white-color">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="py-2 px-3 rounded-md bg-[#000] text-white-color">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                  </a>
                </li>
                <li className="py-2 px-3 rounded-md bg-[#007bb5] text-white-color">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="py-2 px-3 rounded-md bg-[#e4405f] text-white-color">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="py-2 px-3 rounded-md bg-[#bd081c] text-white-color">
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="categories">
              <h2 className="text-2xl font-bold mb-5">Categories</h2>
              <ul>
                <li className="mb-5 text-xl">
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/shop'}>Shop</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/cart-shop'}>Cart Shop</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/blog'}>Blog</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/blog'}>About</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/blog'}>Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="quick-links">
              <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
              <ul>
                <li className="mb-5 text-xl">
                  <NavLink to={'/summer-sessions'}>Summer Sessions</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/gallery'}>Gallery</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/forums'}>Forums</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                </li>
                <li className="mb-5 text-xl">
                  <NavLink to={'/terms-of-use'}>Terms of Use</NavLink>
                </li>
              </ul>
            </div>
            <div className="recent-tweets">
              <h2 className="text-2xl font-bold mb-5">Recent Tweets</h2>
              <div className="flex items-center mb-5">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </span>
                <span className="text-gray-color">
                  Aminur islam @ShopCart Greetings! #HTML_Template Grab your
                  item, 50% Big Sale Offer !!
                </span>
              </div>
              <div className="flex items-center mb-5">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </span>
                <span className="text-gray-color">
                  Aminur islam @ShopCart Greetings! #HTML_Template Grab your
                  item, 50% Big Sale Offer !!
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
