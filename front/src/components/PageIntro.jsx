import PageIntroBackground from '../images/pageIntroBackground.jpg';
export const PageIntro = ({ text }) => {
  return (
    <div
      className="min-h-[400px] flex justify-center items-center mb-10"
      style={{ backgroundImage: `url(${PageIntroBackground})` }}
    >
      <h2 className="text-4xl font-bold">{text}</h2>
    </div>
  );
};
