import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
export const HalfStar = () => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faStarHalfStroke}
        className="text-sm pl-2 text-primary-color"
      />
    </span>
  );
};
