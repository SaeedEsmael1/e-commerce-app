import AppImage1 from '../images/app_imags/app_img-1.jpeg';
import AppImage2 from '../images/app_imags/app_img-2.jpeg';

export const AppImages = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="contnt">
          <div className="images flex justify-center items-center gap-5">
            <img className="max-sm:w-[150px]" src={AppImage1} alt="" />
            <img className="max-sm:w-[150px]" src={AppImage2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
