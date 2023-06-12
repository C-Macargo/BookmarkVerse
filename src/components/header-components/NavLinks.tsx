import NavLink from './NavLink';

interface NavLinksProps {
  handleNavigation: (path: string) => void;
}

function NavLinks({ handleNavigation }: NavLinksProps) {
  return (
    <ul className="flex space-x-4">
      <NavLink text="Home" href="/" handleNavigation={handleNavigation} />
      <NavLink text="Login" href="/login" handleNavigation={handleNavigation} />
      <NavLink text="Register" href="/register" handleNavigation={handleNavigation} />
      <NavLink text="Reviews" href="/reviews" handleNavigation={handleNavigation} />
      <NavLink text="Bookmarks" href="/bookmarks" handleNavigation={handleNavigation} />
    </ul>
  );
}

export default NavLinks;
