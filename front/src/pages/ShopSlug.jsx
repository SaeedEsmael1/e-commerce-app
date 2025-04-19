import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import QueryString from 'qs';
import { useParams } from 'react-router-dom';

import PopularPost1 from '../images/popular-posts/popular-post-1.jpg';
import PopularPost2 from '../images/popular-posts/popular-post-2.jpg';
import PopularPost3 from '../images/popular-posts/popular-post-3.jpg';
import PopularPost4 from '../images/popular-posts/popular-post-4.jpg';
import LoadingSpinner from '../components/LoadingSpinner';
import FailedToFetch from '../components/FailedToFetch';
import { FullStar, HalfStar, OutlineStar } from '../components/StarsTypes';

import ReviewsImage1 from '../images/reviews/reviews-img-1.jpg';
import ReviewsImage2 from '../images/reviews/reviews-img-2.jpg';
import ReviewsImage3 from '../images/reviews/reviews-img-3.jpg';
import ReviewsImage4 from '../images/reviews/reviews-img-4.jpg';

export const ShopSlug = () => {
  const { slug } = useParams();

  const fetchShopSlug = async () => {
    const queryString = QueryString.stringify({
      filters: {
        slug: slug,
      },
    });
    const response = await fetch(
      `http://localhost:1337/api/shop-products?${queryString}&populate=*`,
    );
    const json = await response.json();
    return json;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['shop-slug'],
    queryFn: fetchShopSlug,
  });

  const shopSlug = data?.data[0];
  // console.log(shopSlug);

  return (
    <div className="pt-5">
      <div className="container mx-auto">
        <div className="content flex flex-col min-md:flex-row gap-5">
          <div className="flex-1 bg-white p-3">
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : isError ? (
              <FailedToFetch></FailedToFetch>
            ) : (
              <div>
                <img
                  className="block w-[70%] h-[250px] mx-auto rounded-md"
                  src={shopSlug?.photo?.url}
                  alt=""
                />
                <h2 className="text-2xl font-medium my-5">
                  {shopSlug.brandName}
                </h2>
                <div className="flex">
                  {[...Array(Math.floor(shopSlug.rate))].map((_, i) => (
                    <FullStar key={`filled-${i}`} />
                  ))}

                  {/* Render half star if there's a decimal */}
                  {shopSlug.rate % 1 >= 0.5 && <HalfStar key="half" />}

                  {/* Render empty stars */}
                  {[
                    ...Array(
                      5 - Math.floor(shopSlug.rate) - (shopSlug ? 1 : 0),
                    ),
                  ].map((_, i) => (
                    <OutlineStar key={`empty-${i}`} />
                  ))}
                  <span className="pl-1 text-gray-color">(3 Review)</span>
                </div>
                <h3 className="my-3 text-2xl font-bold">${shopSlug.price}</h3>
                <strong className="text-[#222] font-medium block mb-1">
                  Addidas
                </strong>
                <p className="w-[200px] px-2">
                  Energistia an deliver atactica metrcs after avsionary Apropria
                  trnsition enterpris an sources applications emerging psd
                  template.
                </p>

                <form className="my-5 flex justify-between items-center">
                  <select className="border outline-none rounded-sm">
                    <option>Select Size</option>
                    <option className="" value="sm">
                      SM
                    </option>
                    <option className="" value="mo">
                      Mo
                    </option>
                    <option className="" value="lo">
                      LO
                    </option>
                    <option className="" value="xl">
                      XXL
                    </option>
                  </select>

                  <select className="border outline-none rounded-sm">
                    <option className="" value="blue">
                      Blue
                    </option>
                    <option className="" value="white">
                      White
                    </option>
                    <option className="" value="green">
                      Green
                    </option>
                    <option className="" value="yellow">
                      Yellow
                    </option>
                  </select>
                </form>

                <div className="reviews-container">
                  <h2 className="py-2 px-4 bg-primary-color text-white w-fit rounded-md">
                    Reviews
                  </h2>
                  <div className="review flex items-center gap-5 mt-10">
                    <div>
                      <img className="w-[200px]" src={ReviewsImage1} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-medium mb-2">
                        Ganelon Boileau
                      </h3>
                      <h4 className="text-[#444]">
                        Posted on Jun 10, 2022 at 6:57 am
                      </h4>
                      <div className="py-5">
                        {[...Array(5)].map((_, i) => (
                          <FullStar key={`filled-${i}`} />
                        ))}
                      </div>
                      <p className="text-[#888]">
                        Enthusiast build innovativ initiatives before lonterm
                        high-impact awesome theme seo psd porta monetize
                        covalent leadership after without resource.
                      </p>
                    </div>
                  </div>
                  <div className="review flex items-center gap-5 mt-10">
                    <div>
                      <img className="w-[200px]" src={ReviewsImage2} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-medium mb-2">
                        Morgana Cailot
                      </h3>
                      <h4 className="text-[#444]">
                        Posted on Jun 10, 2022 at 6:57 am
                      </h4>
                      <div className="py-5">
                        {[...Array(5)].map((_, i) => (
                          <FullStar key={`filled-${i}`} />
                        ))}
                      </div>
                      <p className="text-[#888]">
                        Enthusiast build innovativ initiatives before lonterm
                        high-impact awesome theme seo psd porta monetize
                        covalent leadership after without resource.
                      </p>
                    </div>
                  </div>
                  <div className="review flex items-center gap-5 mt-10">
                    <div>
                      <img className="w-[200px]" src={ReviewsImage3} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-medium mb-2">Telford Bois</h3>
                      <h4 className="text-[#444]">
                        Posted on Jun 10, 2022 at 6:57 am
                      </h4>
                      <div className="py-5">
                        {[...Array(5)].map((_, i) => (
                          <FullStar key={`filled-${i}`} />
                        ))}
                      </div>
                      <p className="text-[#888]">
                        Enthusiast build innovativ initiatives before lonterm
                        high-impact awesome theme seo psd porta monetize
                        covalent leadership after without resource.
                      </p>
                    </div>
                  </div>
                  <div className="review flex items-center gap-5 mt-10">
                    <div>
                      <img className="w-[200px]" src={ReviewsImage4} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-xl font-medium mb-2">Cher Daviau</h3>
                      <h4 className="text-[#444]">
                        Posted on Jun 10, 2022 at 6:57 am
                      </h4>
                      <div className="py-5">
                        {[...Array(5)].map((_, i) => (
                          <FullStar key={`filled-${i}`} />
                        ))}
                      </div>
                      <p className="text-[#888]">
                        Enthusiast build innovativ initiatives before lonterm
                        high-impact awesome theme seo psd porta monetize
                        covalent leadership after without resource.
                      </p>
                    </div>
                  </div>
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
