import React from "react";

const DropdownSubmenu = ({ data = [] }) => {
  return (
    <ul className="dropdown-submenu">
      {data.map((item) => {
        return (
          <li key={item.id} className="dropdown-submenu__item">
            <a href="#!" className="dropdown-submenu__link">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownSubmenu;
