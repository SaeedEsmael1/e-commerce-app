import { useState } from 'react';
import useProductsNames from '../hooks/useProductsNames';
import { BeatLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const ProductHeader = ({
  keyQuery,
  collectionName,
  HeaderTitle,
  updateProducts,
}) => {
  const { productsNames, isLoading } = useProductsNames(
    `http://localhost:1337/api/${collectionName}?populate=*`,
    keyQuery,
  );

  const uniqueProductsNames = Array.from(
    new Map(productsNames?.map((product) => [product.name, product])).values(),
  );

  const [activeProductName, setActiveProductName] = useState('all');

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="my-10 ">
      <div className="container mx-auto relative">
        <div className="content">
          <header className=" bg-white-color p-5 rounded-lg shadow-[0_4px_8px_#aaa] flex justify-between items-center">
            <h3 className="text-2xl font-bold text-secondary-color">
              {HeaderTitle}
            </h3>
            <div className="min-md:hidden">
              <button
                onClick={() => setIsCollapsed((prev) => !prev)}
                className="text-primary-color cursor-pointer"
              >
                <FontAwesomeIcon icon={faBars} size="2xl" />
              </button>
            </div>
            <div
              className={`${isCollapsed ? 'max-md:max-h-96 max-md:py-5' : 'max-md:max-h-0 max-md:py-0'}  max-md:transition-all max-md:duration-500 overflow-hidden max-md:absolute z-10 top-16  bg-white-color max-md:w-full left-0 rounded-b-md`}
            >
              <ul className="flex max-md:flex-col items-center gap-2 ">
                <li
                  onClick={() => {
                    setActiveProductName('all');
                    updateProducts('all');
                    setIsCollapsed((prev) => !prev);
                  }}
                  className={`max-md:w-[80%] max-md:text-center min-md:ml-2 py-0.5  rounded-md cursor-pointer ${activeProductName === 'all' ? 'bg-primary-color text-white-color  px-4' : ''}`}
                >
                  All
                </li>
                {isLoading && (
                  <BeatLoader
                    size={10}
                    color="#f7ce26"
                    className="min-md:ml-2"
                  />
                )}
                {uniqueProductsNames?.length > 0 &&
                  uniqueProductsNames.map((productName) => (
                    <li
                      onClick={() => {
                        setActiveProductName(productName.name.toLowerCase());
                        updateProducts(productName.name);
                        setIsCollapsed((prev) => !prev);
                      }}
                      className={`min-md:ml-2 max-md:w-[80%] max-md:text-center  py-0.5 rounded-md cursor-pointer ${activeProductName === productName.name.toLowerCase() ? 'bg-primary-color text-white-color px-4' : ''}`}
                      key={productName.id}
                    >
                      {productName.name}
                    </li>
                  ))}
              </ul>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
