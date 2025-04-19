import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
export const OutlineStar = () => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faStar}
        className="text-sm pl-2 text-primary-color"
      />
    </span>
  );
};
