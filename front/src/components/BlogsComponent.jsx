import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './LoadingSpinner';
import FailedToFetch from './FailedToFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarDays,
  faUpRightFromSquare,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export const BlogsComponent = () => {
  const fetchBlogs = async () => {
    const response = await fetch(`http://localhost:1337/api/blogs?populate=*`);
    const json = await response.json();
    return json;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  console.log(data?.data);

  return (
    <div className="m-5">
      <div className="container mx-auto">
        {isLoading ? (
          <h3>
            <LoadingSpinner />
          </h3>
        ) : isError ? (
          <FailedToFetch errorMessage={error.message} refetch={refetch} />
        ) : (
          <div className="content">
            <div className="blogs grid min-sm:grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-4 gap-10  ">
              {data?.data.length > 0 ? (
                data.data.map((blog) => (
                  <div
                    key={blog.id}
                    className="p-2 bg-white rounded-md hover:scale-110 transition-all duration-1000 shadow-[0_0_4px_1px_#888]"
                  >
                    <img
                      className="mb-5 w-full rounded-md"
                      src={blog?.photo?.formats?.thumbnail?.url}
                      alt="Blog Image"
                    />
                    <h3 className="leading-6 text-xl font-medium mb-5 hover:text-primary-color transition-colors duration-300 cursor-pointer">
                      <NavLink to={`${blog.slug}`}>{blog.blogName}</NavLink>
                    </h3>
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-primary-color mr-2"
                        />
                        <span className="text-[#777] font-bold">
                          {blog.personName}
                        </span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-primary-color mr-2"
                        />
                        <span className="text-[#777] font-bold">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                    <div className="description text-[#333] leading-6 tracking-wide font-medium mb-5">
                      {blog.blogDescription}
                    </div>

                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[#777] font-bold cursor-pointer">
                          Read More{' '}
                        </span>
                        <FontAwesomeIcon
                          icon={faUpRightFromSquare}
                          className="text-primary-color"
                        />
                      </div>
                      <div className="relative cursor-pointer">
                        <span className="absolute left-0 -top-1 w-5 h-5 bg-primary-color text-white rounded-full flex justify-center items-center z-10 text-xs">
                          {blog.notification}
                        </span>
                        <FontAwesomeIcon
                          icon={faComment}
                          size="2x"
                          className="text-[#555]"
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2 className="text-3xl font-bold text-center ">
                  No Blogs Are Available Now
                </h2>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
