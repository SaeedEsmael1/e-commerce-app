export const SectionGuide = ({ title, description }) => {
  return (
    <div className="py-14 bg-light-color">
      <div className="container mx-auto">
        <div className="content flex justify-center items-center ">
          <div className="w-96 max-w-full">
            <h3 className="text-center bg-primary-color py-3 px-5 rounded-md text-secondary-color mb-2 text-2xl font-bold">
              {title}
            </h3>
            <p className="text-center text-gray-color text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
