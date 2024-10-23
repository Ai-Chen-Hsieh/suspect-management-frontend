import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Nav = ({ list }) => {
  return (
    <nav className="shadow-lg">
      <ul className="flex px-4">
        {list.map((navItem, index) => (
          <NavLink
            key={index}
            to={navItem.path}
            className={({ isActive }) => clsx("nav-item", { active: isActive })}
          >
            {navItem.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
