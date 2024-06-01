import React from 'react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import SearchForm from './SearchForm';
import LoginRegisterDropdown from './LoginRegisterDropdown';
import UserAccount from './UserAccount';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <Logo />
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavigationLinks />
        <SearchForm />
        <LoginRegisterDropdown />
        <UserAccount />
      </div>
    </nav>
  );
};

export default Navbar;
