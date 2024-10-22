import { NavLink } from "react-router-dom";
import clsx from 'clsx';

const Nav = () => {
  return (
    <nav className="shadow-lg">
      <ul className="flex px-4">
        <NavLink to="/" className={({ isActive }) => clsx("nav-item", { "active": isActive })}>
          Home
        </NavLink>
        <NavLink to="/watchList" className={({ isActive }) => clsx("nav-item", { "active": isActive })}>
          WatchList
        </NavLink>
        <NavLink to="/general" className={({ isActive }) => clsx("nav-item", { "active": isActive })}>
          General
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;