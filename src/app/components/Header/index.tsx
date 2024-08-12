import { appRoutesArray } from '../../../helpers/AppRoutes';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../AppIcons/LogoIcon';
import { useEffect } from 'react';

export function Header() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="flex flex-col items-center space-y-2 border-b-2 border-primary-950 pb-2 lg:flex-row lg:space-x-1 lg:space-y-0 lg:border-transparent lg:pb-0">
      <div className="flex w-full justify-center lg:w-auto lg:justify-start">
        <LogoIcon className="aspect-video w-full lg:w-[250px]" />
      </div>
      <div className="flex items-center space-x-5 lg:space-x-10">
        {appRoutesArray.map(route => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `${isActive ? 'text-white' : 'text-white/50'} text-[1.05rem] lg:text-[1.25rem]`
            }
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
