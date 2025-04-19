export const Register = () => {
  return (
    <div className="my-10 py-20 bg-[url(https://alfa155518.github.io/E-commerce-shop/static/media/07.af2c9b7284d37c9d850d.jpg)] bg-no-repeat bg-cover bg-center ">
      <div className="container mx-auto">
        <div className="content flex items-center justify-between gap-5 max-sm:flex-col">
          <div className="details flex-1 ">
            <p className="mb-5 text-secondary-color text-xl">Save The Day</p>
            <h4 className="w-[200px] max-w-full text-xl font-bold text-white-color mb-5">
              Join On Day Long Free Workshop For Advanced
              <span className="text-secondary-color"> Mastering </span>On Sales
            </h4>
            <strong className="text-gray-color">
              Limited Time Offer! Hurry Up
            </strong>
          </div>
          <div className="register max-sm:w-full flex-1 bg-gradient-to-b from-white to-white/0 p-5 text-center rounded-md">
            <h2 className="text-2xl text-primary-color font-bold mb-5">
              Register Now
            </h2>
            <form>
              <input
                className="block p-2 bg-white-color w-full rounded-md mb-5"
                type="text"
                placeholder="UserName"
              />
              <input
                className="block p-2 bg-white-color w-full rounded-md mb-5"
                type="email"
                placeholder="Email"
              />
              <input
                className="block p-2 bg-white-color w-full rounded-md mb-5"
                type="number"
                placeholder="Phone"
              />
              <button className="block mx-auto py-2 px-5 bg-primary-color rounded-md hover:bg-secondary-color text-white-color text-lg transition-colors duration-300 cursor-pointer">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
