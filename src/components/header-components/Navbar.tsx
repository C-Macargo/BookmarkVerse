import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import SearchBar from './SearchBar';

interface NavbarProps {
  handleNavigation: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleNavigation }) => (
  <nav className="flex items-center justify-evenly  mx-auto px-6">
    <Logo handleNavigation={handleNavigation} />
    <SearchBar/>
    <NavLinks handleNavigation={handleNavigation} />
  </nav>
);

export default Navbar;
