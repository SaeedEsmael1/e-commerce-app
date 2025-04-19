import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faHeart,
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import ProductHeader from './ProductHeader';
import useProducts from '../hooks/useProducts';
import LoadingSpinner from './LoadingSpinner';
import FailedToFetch from './FailedToFetch';
import { FullStar, HalfStar, OutlineStar } from './StarsTypes';

import PopularPost1 from '../images/popular-posts/popular-post-1.jpg';
import PopularPost2 from '../images/popular-posts/popular-post-2.jpg';
import PopularPost3 from '../images/popular-posts/popular-post-3.jpg';
import PopularPost4 from '../images/popular-posts/popular-post-4.jpg';

const PRODUCTS_PER_PAGE = 10;

import { CartShopContaxt } from '../App';

export const ShopComponent = () => {
  const { checkCartFound } = useContext(CartShopContaxt);

  const { data, isLoading, isError, error, refetch } = useProducts(
    'http://localhost:1337/api/shop-products?populate=*',
    'shop-products',
  );

  const [copyedData, setCopyedData] = useState(data || []);
  // console.log(data);
  const [displayedData, setDisplayedData] = useState(data || []);
  useEffect(() => {
    setDisplayedData(data || []);
    setCopyedData(data || []);
  }, [data]);

  const updateShop = (productName) => {
    setSelectedCategory(productName);

    // Restore previous page if exists, otherwise set to 1
    const savedPage = currentPageMap[productName] || 1;
    setCurrentPage(savedPage);
    if (productName === 'all') {
      setDisplayedData(data);
    } else {
      const filtered = copyedData?.filter(
        (product) => product.name === productName,
      );
      setDisplayedData(filtered);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageMap, setCurrentPageMap] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  const totalPages = Math.ceil(displayedData?.length / PRODUCTS_PER_PAGE);
  const pagention = Array.from({ length: totalPages }, (_, i) => i + 1);
  const indexOfFirstProduct = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const indexOfLastProduct = indexOfFirstProduct + PRODUCTS_PER_PAGE;

  const slicedProducts = displayedData?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPageMap((prev) => ({
      ...prev,
      [selectedCategory]: pageNumber,
    }));
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="content">
          <ProductHeader
            keyQuery={'shopProductsNames'}
            collectionName={'shop-products'}
            HeaderTitle={'Shop'}
            updateProducts={updateShop}
          />
          <div>
            <div className="container mx-auto">
              {isLoading ? (
                <h3>
                  <LoadingSpinner />
                </h3>
              ) : isError ? (
                <FailedToFetch errorMessage={error.message} refetch={refetch} />
              ) : (
                <div className="flex flex-col min-md:flex-row gap-5 ">
                  <div className=" grow-2 flex-1 ">
                    <div className="shop-products py-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
                      {slicedProducts.length > 0 &&
                        slicedProducts.map((product) => {
                          const fullStars = Math.floor(product.rate);
                          const halfStars = product.rate % 1 >= 0.5;
                          const emptyStars =
                            5 - Math.floor(product.rate) - (halfStars ? 1 : 0);

                          return (
                            <div
                              className="group bg-white-color p-2 rounded-md text-center shadow-[1px_4px_5px_1px_#aaa] relative overflow-hidden"
                              key={product.id}
                            >
                              <div className="absolute z-10 transition-all duration-800 top-8 -right-10 flex flex-col gap-2 group-hover:right-5">
                                <span className="bg-primary-color text-white-color px-1 cursor-pointer">
                                  <FontAwesomeIcon icon={faEye} />
                                </span>
                                <span className="bg-primary-color text-white-color px-1 cursor-pointer">
                                  <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span
                                  onClick={() => checkCartFound(product)}
                                  className="bg-primary-color text-white-color px-1 cursor-pointer"
                                >
                                  <FontAwesomeIcon icon={faCartShopping} />
                                </span>
                              </div>
                              <img
                                src={product.photo.url}
                                alt=""
                                className="mb-5 h-[230px] w-full hover:scale-110 transition-all duration-1000"
                              />
                              <h3 className="mb-5 text-xl font-bold">
                                {product.brandName}
                              </h3>
                              <div className="flex items-center justify-center mb-5">
                                {[...Array(fullStars)].map((_, i) => (
                                  <FullStar key={`filled-${i}`} />
                                ))}

                                {/* Render half star if there's a decimal */}
                                {halfStars && <HalfStar key="half" />}

                                {/* Render empty stars */}
                                {[...Array(emptyStars)].map((_, i) => (
                                  <OutlineStar key={`empty-${i}`} />
                                ))}
                              </div>
                              <span className="text-secondary-color font-bold text-lg">
                                {product.price}$
                              </span>
                            </div>
                          );
                        })}
                    </div>
                    <div className="flex justify-center gap-5 my-5">
                      {pagention.length > 0 &&
                        pagention.map((num) => (
                          <span
                            onClick={() => goToPage(num)}
                            className={`${num === currentPage ? 'bg-[#222] text-white-color' : 'bg-white'}  p-3 text-center rounded-md shadow-[0_0_3px_1px_#aaa] cursor-pointer`}
                            key={num}
                          >
                            {num}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="shop-products-right-side flex-1 py-5">
                    <form className="mb-5">
                      <label
                        htmlFor="search"
                        className="flex items-center border border-gray-color w-full px-2 py-1 rounded-3xl"
                      >
                        <input
                          type="text"
                          placeholder="Search"
                          className="flex-1 border-none outline-none"
                          id="search"
                        />
                        <FontAwesomeIcon
                          className="cursor-pointer text-gray-color"
                          icon={faMagnifyingGlass}
                        />
                      </label>
                    </form>
                    <div className="popular-post text-center bg-white-color p-5 rounded-md shadow-[1px_1px_1px_1px_#aaa]">
                      <h2 className="text-gray-color text-3xl my-5 font-bold">
                        Popular Post
                      </h2>
                      <div className="post min-lg:flex items-center mb-5">
                        <img
                          src={PopularPost1}
                          className="block w-[200px] max-w-full mx-auto rounded-md min-lg:mr-4"
                          alt=""
                        />
                        <div className="details ">
                          <h5 className="text-[#555555] font-bold ">
                            Poor People Campaign Our Resources
                          </h5>
                          <strong>Jun 05,2022</strong>
                        </div>
                      </div>
                      <div className="post min-lg:flex items-center mb-5">
                        <img
                          src={PopularPost2}
                          className="block w-[200px] max-w-full mx-auto rounded-md min-lg:mr-4"
                          alt=""
                        />
                        <div className="details ">
                          <h5 className="text-[#555555] font-bold ">
                            Poor People Campaign Our Resources
                          </h5>
                          <strong>Jun 05,2022</strong>
                        </div>
                      </div>
                      <div className="post min-lg:flex items-center mb-5">
                        <img
                          src={PopularPost3}
                          className="block w-[200px] max-w-full mx-auto rounded-md min-lg:mr-4"
                          alt=""
                        />
                        <div className="details ">
                          <h5 className="text-[#555555] font-bold ">
                            Poor People Campaign Our Resources
                          </h5>
                          <strong>Jun 05,2022</strong>
                        </div>
                      </div>
                      <div className="post min-lg:flex items-center mb-5">
                        <img
                          src={PopularPost4}
                          className="block w-[200px] max-w-full mx-auto rounded-md min-lg:mr-4"
                          alt=""
                        />
                        <div className="details text-sm">
                          <h5 className="text-[#555555] font-bold ">
                            Poor People Campaign Our Resources
                          </h5>
                          <strong>Jun 05,2022</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
