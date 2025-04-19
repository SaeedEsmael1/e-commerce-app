import { FullStar, OutlineStar, HalfStar } from './StarsTypes';
import ProductHeader from './ProductHeader';
import useProducts from '../hooks/useProducts';

import LoadingSpinner from './LoadingSpinner';
import FailedToFetch from './FailedToFetch';
import { useEffect, useState } from 'react';

export const OurProducts = () => {
  const { data, isLoading, isError, error, refetch } = useProducts(
    'http://localhost:1337/api/our-products?populate=*',
    'ourProducts',
  );
  const [copyedData, setCopyedData] = useState(data || []);
  // console.log(data);
  const [displayedData, setDisplayedData] = useState(data || []);
  useEffect(() => {
    setDisplayedData(data || []);
    setCopyedData(data || []);
  }, [data]);

  const updateProducts = (productName) => {
    if (productName === 'all') {
      setDisplayedData(data);
    } else {
      const filtered = copyedData?.filter(
        (product) => product.name === productName,
      );
      setDisplayedData(filtered);
    }
  };

  return (
    <div className="mb-5">
      <ProductHeader
        keyQuery={'ourProductsNames'}
        collectionName={'our-products'}
        HeaderTitle={'Our Products'}
        updateProducts={updateProducts}
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
            <div className=" grid min-sm:grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-4 min-xl:grid-cols-5 gap-5">
              {displayedData?.length > 0 &&
                displayedData.map((product) => {
                  const fullStars = Math.floor(product.rate);
                  const halfStars = product.rate % 1 >= 0.5;
                  const emptyStars =
                    5 - Math.floor(product.rate) - (halfStars ? 1 : 0);
                  const imageUrl =
                    product?.photo?.formats?.thumbnail?.url || null;
                  return (
                    <div
                      key={product.id}
                      className="cursor-pointer bg-white-color rounded-md overflow-hidden shadow-[0_4px_10px_#aaa]"
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl} // No localhost prefix if Cloudinary URL
                          alt="Category Image"
                          className="w-full "
                        />
                      ) : (
                        <div>Category Image</div>
                      )}
                      <div className="flex items-center justify-between p-2 text-xl bg-secondary-light-color relative -top-11">
                        <span className="text-primary-color">
                          {product.name}
                        </span>
                        <div className="flex">
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
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 pb-2 border-b-2 border-light-color text-primary-color text-2xl font-bold">
                          {product.brandName}
                        </h3>
                        <div className="flex justify-between text-lg">
                          <span className="text-gray-color">
                            {product.companyName}
                          </span>
                          <span className="text-primary-color">
                            $
                            {Number.isInteger(product.price)
                              ? product.price + '.00'
                              : product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
