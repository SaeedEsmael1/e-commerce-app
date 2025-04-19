import SponsorImage1 from '../images/sponsor_imgs/sponsor_img1.png';
import SponsorImage2 from '../images/sponsor_imgs/sponsor_img-2.png';
import SponsorImage3 from '../images/sponsor_imgs/sponsor_img3.png';
import SponsorImage4 from '../images/sponsor_imgs/sponsor_img4.png';
import SponsorImage5 from '../images/sponsor_imgs/sponsor_img5.png';
import SponsorImage6 from '../images/sponsor_imgs/sponsor_img6.png';
export const SponsorImages = () => {
  return (
    <div className="my-40">
      <div className="container mx-auto">
        <div className="content">
          <div className="images flex gap-8 justify-center flex-wrap">
            <img src={SponsorImage1} alt="" />
            <img src={SponsorImage2} alt="" />
            <img src={SponsorImage3} alt="" />
            <img src={SponsorImage4} alt="" />
            <img src={SponsorImage5} alt="" />
            <img src={SponsorImage6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
