import NotFoundImage from '../images/notFound-page.png';
export const NotFoundPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="content relative">
          <h2 className="bg-[#aaaaaa78] absolute left-1/2 top-1/2 -translate-1/2 w-full text-primary-color text-3xl font-bold p-5 text-center">
            Unexpected Application Error 404 Page Not Found
          </h2>
          <img src={NotFoundImage} alt="" />
        </div>
      </div>
    </div>
  );
};
