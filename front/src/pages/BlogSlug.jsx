import {
  faCalendarDays,
  faMagnifyingGlass,
  faQuoteLeft,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import QueryString from 'qs';
import { useParams } from 'react-router-dom';

import PopularPost1 from '../images/popular-posts/popular-post-1.jpg';
import PopularPost2 from '../images/popular-posts/popular-post-2.jpg';
import PopularPost3 from '../images/popular-posts/popular-post-3.jpg';
import PopularPost4 from '../images/popular-posts/popular-post-4.jpg';

import BlogSlugImage1 from '../images/blogSlug/blog-slug-1.jpg';
import BlogSlugImage2 from '../images/blogSlug/blog-slug-2.jpg';

import LoadingSpinner from '../components/LoadingSpinner';
import FailedToFetch from '../components/FailedToFetch';
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faSquareInstagram,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const BlogSlug = () => {
  const { slug } = useParams();

  const fetchShopSlug = async () => {
    const queryString = QueryString.stringify({
      filters: {
        slug: slug,
      },
    });
    const response = await fetch(
      `http://localhost:1337/api/blogs?${queryString}&populate=*`,
    );
    const json = await response.json();
    return json;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['shop-slug'],
    queryFn: fetchShopSlug,
  });

  const blogSlut = data?.data[0];
  console.log(blogSlut);

  return (
    <div className="pt-5">
      <div className="container mx-auto">
        <div className="content flex flex-col min-md:flex-row gap-5">
          <div className="flex-1 bg-white p-3 border mb-5">
            {isLoading ? (
              <LoadingSpinner />
            ) : isError ? (
              <FailedToFetch />
            ) : (
              <div>
                <div>
                  <img
                    className="w-[100%]"
                    src={blogSlut?.photo?.formats?.thumbnail?.url}
                    alt=""
                  />
                </div>
                <h3 className="leading-6 text-xl font-medium my-5 text-primary-color">
                  {blogSlut.blogName}
                </h3>
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary-color mr-2"
                    />
                    <span className="text-[#777] font-bold">
                      {blogSlut.personName}
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="text-primary-color mr-2"
                    />
                    <span className="text-[#777] font-bold">
                      {blogSlut.date}
                    </span>
                  </div>
                </div>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi magni sapiente libero nesciunt dicta non impedit
                  similique unde nisi dolore voluptas voluptate quibusdam, quas
                  eum, mollitia asperiores, doloremque atque quisquam. Optio
                  ducimus nostrum numquam quae at doloremque animi saepe est ut
                  accusantium. Mollitia aliquid laborum labore a iure, ratione
                  veritatis.
                </p>
                <p className="quote bg-primary-color text-[#f2e4e4] py-2 px-4 rounded-md mb-5">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  vel illum et alias odio assumenda tempore? Deserunt velit
                  culpa impedit! Eveniet hic at vero ipsa a, eius, delectus
                  laborum modi voluptatibus esse perferendis tempora aut impedit
                  porro veritatis debitis sequi.
                </p>
                <p className="text-sm text-[#534949] mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis dolorem soluta quo totam quam id vero quod
                  reprehenderit illo culpa, neque fugit? Tenetur consectetur
                  cumque alias, ratione mollitia itaque repellat repudiandae
                  libero suscipit, rerum quas? Alias nemo, asperiores architecto
                  deserunt ipsum iure aliquam delectus suscipit incidunt nihil
                  fuga assumenda expedita error quo culpa quos inventore
                  possimus fugiat dolores? Quia, similique.
                </p>

                <img className="w-full mb-5" src={BlogSlugImage1} alt="" />
                <p className="text-sm text-[#534949] mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis dolorem soluta quo totam quam id vero quod
                  reprehenderit illo culpa, neque fugit? Tenetur consectetur
                  cumque alias, ratione mollitia itaque repellat repudiandae
                  libero suscipit, rerum quas? Alias nemo, asperiores architecto
                  deserunt ipsum iure aliquam delectus suscipit incidunt nihil
                  fuga assumenda expedita error quo culpa quos inventore
                  possimus fugiat dolores? Quia, similique.
                </p>

                <img className="w-full mb-5" src={BlogSlugImage2} alt="" />

                <div className="flex gap-5 p-5 border-t-1 border-primary-color">
                  <FontAwesomeIcon
                    className="text-[#3b5998] hover:scale-150 transition-all duration-300 cursor-pointer"
                    icon={faFacebook}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="text-[#55acee] hover:scale-150 transition-all duration-300 cursor-pointer"
                    icon={faSquareXTwitter}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="text-[#007bb5] hover:scale-150 transition-all duration-300 cursor-pointer"
                    icon={faLinkedin}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="text-[#e4405f] hover:scale-150 transition-all duration-300 cursor-pointer"
                    icon={faSquareInstagram}
                    size="xl"
                  />
                  <FontAwesomeIcon
                    className="text-[#bd081c] hover:scale-150 transition-all duration-300 cursor-pointer"
                    size="xl"
                    icon={faPinterest}
                  />
                </div>
              </div>
            )}
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
      </div>
    </div>
  );
};
