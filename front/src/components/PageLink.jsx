import { NavLink } from 'react-router-dom';

const PageLink = ({ path, content }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `
      text-lg
        block 
        max-md:text-xl 
        max-md:text-gray-color 
        relative 
        before:content-[''] 
        before:absolute 
        before:-bottom-1 
        before:left-1/2
        before:-translate-x-1/2
        before:w-0 
        before:transition-all 
        before:duration-200 
        before:h-0.5 
        before:bg-primary-color 
        min-md:group-hover:before:w-full
        ${isActive ? 'text-primary-color font-medium' : ''}
      `}
    >
      {content}
    </NavLink>
  );
};

export default PageLink;
