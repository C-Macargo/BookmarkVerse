import NavLinks from './NavLinks';
import Logo from './Logo';
import SearchBar from './SearchBar';

interface NavbarProps {
  handleNavigation: (path: string) => void;
}

function Navbar({ handleNavigation }: NavbarProps) {
  
  return (
    <nav className="flex items-center justify-evenly mx-auto px-6">
      <Logo handleNavigation={handleNavigation} />
      <SearchBar />
      <NavLinks handleNavigation={handleNavigation} />
    </nav>
  );
}

export default Navbar;
