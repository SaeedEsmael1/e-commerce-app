import {
  HeroSection,
  SectionGuide,
  Categories,
  OurProducts,
  SpecialShirts,
  Register,
  ClientsMap,
  AboutUs,
  AppImages,
  SponsorImages,
} from '../components';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionGuide
        title={'Chose Any Product'}
        description={'By Everything with Us'}
      />
      <Categories />
      <OurProducts />
      <SpecialShirts />
      <Register />
      <SectionGuide
        title={'More Then 60,000 Customers'}
        description={
          'Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping'
        }
      />
      <ClientsMap />
      <SectionGuide title={'About Us'} />
      <AboutUs />
      <SectionGuide
        title={'Learn Anytime, Anywhere'}
        description={
          'Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn'
        }
      />
      <AppImages />
      <SponsorImages />
    </div>
  );
};
