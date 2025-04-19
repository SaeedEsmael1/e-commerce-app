import { useEffect, useRef, useState } from 'react';
import useProducts from '../hooks/useProducts';
import LoadingSpinner from './LoadingSpinner';
import FailedToFetch from './FailedToFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const SpecialShirts = () => {
  const { data, isLoading, isError, error, refetch } = useProducts(
    'http://localhost:1337/api/special-shirts?populate=*',
    'special-shirts',
  );

  const [specialShirtsCount, setSpecialShirtsCount] = useState(0);
  useEffect(() => {
    setSpecialShirtsCount(data?.length);
  }, [data?.length]);

  const [isPrevFinshed, setIsPrevFinshed] = useState(true);
  const [isNextFinshed, setIsNextFinshed] = useState(false);

  const sliderRef = useRef(null);
  const [indexSection, setIndexSection] = useState(0);
  const nextSpecialShirt = () => {
    const slider = sliderRef.current;
    setIndexSection((prev) => prev + 1);
    setIsPrevFinshed(false);
    if (indexSection >= specialShirtsCount - 2) {
      setIsNextFinshed(true);
    }
    if (indexSection >= specialShirtsCount - 1) {
      setIndexSection(specialShirtsCount - 1);
    } else {
      slider.style.transform = `translateX(${(indexSection + 1) * -(100 / specialShirtsCount)}%)`;
    }
  };
  const prevSpecialShirt = () => {
    const slider = sliderRef.current;
    setIndexSection((prev) => prev - 1);
    setIsNextFinshed(false);
    if (indexSection <= 1) {
      setIsPrevFinshed(true);
    }
    if (indexSection <= 0) {
      setIndexSection(0);
    } else {
      slider.style.transform = `translateX(${(indexSection - 1) * -(100 / specialShirtsCount)}%)`;
    }
  };

  return (
    <div className="my-10 py-10 bg-white-color">
      <div className="container mx-auto">
        <div className="content">
          {isLoading ? (
            <LoadingSpinner />
          ) : isError ? (
            <FailedToFetch errorMessage={error.message} refetch={refetch} />
          ) : (
            <>
              {data.length > 0 ? (
                <div className="carousel relative h-96 overflow-hidden">
                  <div
                    ref={sliderRef}
                    className={`slider transition-all duration-800 flex  h-full `}
                    style={{ width: `${specialShirtsCount * 100}%` }}
                  >
                    {data.map((specialShirt) => (
                      <div
                        key={specialShirt.id}
                        className="h-full basis-full flex items-center justify-center"
                      >
                        <div className="h-full">
                          <img
                            className="max-h-full"
                            src={`${specialShirt?.photo?.formats?.small?.url}`}
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    onClick={prevSpecialShirt}
                    className={`${isPrevFinshed ? 'bg-gray-color' : 'bg-primary-color'} text-white-color rounded-full   flex items-center justify-center absolute left-0 w-18 h-18 top-1/2  -translate-y-1/2 cursor-pointer text-4xl `}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </div>
                  <div
                    onClick={nextSpecialShirt}
                    className={`${isNextFinshed ? 'bg-gray-color' : 'bg-primary-color'}  text-white-color  rounded-full  flex items-center justify-center absolute right-0  w-18 h-18  top-1/2 -translate-y-1/2 cursor-pointer text-4xl `}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              ) : (
                <h3>No Special Shirts Found!</h3>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
