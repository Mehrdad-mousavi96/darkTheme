import React from "react";
import { DARK, useTheme, LIGHT } from "../../contexts/theme";
import { Toggle } from "./toggle";

import logo from "../../assets/images/logo.svg";
import profilePicture from "../../assets/images/profile.jpg";

const Header = () => {
    
  const { theme, toggleThemeMode } = useTheme();

  const showMobileMenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  const onToggleChange = () => toggleThemeMode();

  const isDark = theme.mode === DARK;

  return (
    <header className="topbar navbarbg" data-navbarbg="skin6">
      <nav className={`navbar navbar-${isDark ? DARK.toLowerCase() : LIGHT.toLowerCase()} h-100`}>
        <div className="navbar-header" id="logobg" data-logobg="skin6">
          <a className="navbar-brand" href="/">
            <b className="logo-icon">
              <img src={logo} alt="homepage" className="dark-logo" />
            </b>
          </a>
          <button
            className="btn-link nav-toggler d-block d-md-none"
            onClick={() => showMobileMenu()}
          >
            <i className="ti-menu ti-close" />
          </button>
        </div>
        <Toggle onChange={onToggleChange} label={theme.mode === DARK ? 'تاریک' : 'روشن'} />
        <div className="collapse navbarbg show">
          <div className="dropdown">
            <img
              src={profilePicture}
              alt="user"
              className="rounded-circle"
              width="31"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
