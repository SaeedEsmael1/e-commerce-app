import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

import FailedToFetch from './FailedToFetch';

import useProducts from '../hooks/useProducts';
import LoadingSpinner from './LoadingSpinner';
export const Categories = () => {
  const { data, isLoading, isError, error, refetch } = useProducts(
    'http://localhost:1337/api/categories?populate=*',
    'categories',
  );

  return (
    <div>
      <div className="container mx-auto">
        {isLoading ? (
          <h3>
            <LoadingSpinner />
          </h3>
        ) : isError ? (
          <FailedToFetch errorMessage={error.message} refetch={refetch} />
        ) : (
          <div className="categories grid min-md:grid-cols-2 min-lg:grid-cols-3 gap-5">
            {data?.length > 0 &&
              data.map((category) => {
                const imageUrl = category?.photo?.formats?.small?.url || null;
                return (
                  <div
                    key={category.id}
                    className="cursor-pointer category relative bg-white-color pt-0.5 px-1 pb-5 rounded-md"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl} // No localhost prefix if Cloudinary URL
                        alt="Category Image"
                        className="w-full shadow-[0_2px_5px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_5px_#f7ce26] transition-all duration-500 hover:-translate-y-2"
                      />
                    ) : (
                      <div>Category Image</div>
                    )}
                    <div className="flex items-center absolute left-8 bottom-8 text-secondary-color text-xl font-bold">
                      <FontAwesomeIcon icon={faThLarge} className=" mr-3" />
                      <span>{category.name}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
