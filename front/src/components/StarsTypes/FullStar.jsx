import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
export const FullStar = () => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faStar}
        className="text-sm pl-2 text-primary-color"
      />
    </span>
  );
};
