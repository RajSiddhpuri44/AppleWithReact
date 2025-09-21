import { useState } from "react";
import { navOptions } from "../../utilities/metadata";
import "../../css/Navbar/Nav.css";
import Options from "./Options";

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);

  const changeActiveMenu = (menuKey) => {
    setActiveMenu(menuKey);
  };
  return (
    <>
      <header className="header-main">
        <nav
          className="navbar navbar-expand-lg nav-fixed-top w-100 bg-dark text-white cursor-pointer"
          style={{ fontSize: "12px" }}
        >
          <div className="container py-2 gap-2">
            <div role="button">Logo</div>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-between w-75"
              id="navbarContent"
            >
              {Object.entries(navOptions).map((menuKey) => {
                return (
                  <div
                    key={menuKey[0]}
                    role="button"
                    onMouseEnter={() => setActiveMenu(menuKey[0])}
                  >
                    {menuKey[0]}
                  </div>
                );
              })}
              <div role="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div role="button">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {Object.entries(navOptions).map(([menuKey, optionData], i) => {
        return (
          <Options
            key={i}
            optionData={optionData}
            changeActiveMenu={changeActiveMenu}
            isVisible={menuKey === activeMenu}
          />
        );
      })}
    </>
  );
}
