import { useUser } from '../../contexts/UserContext';
import NavLink from './NavLink';
import UserDropDownMenu from './UserDropDown';

interface NavLinksProps {
  handleNavigation: (path: string) => void;
}

function NavLinks({ handleNavigation }: NavLinksProps) {
  const { results } = useUser();

  return (
    <>
      {results.length !==0 ? (
        <ul className="flex space-x-4">
          <NavLink text="Home" href="/" handleNavigation={handleNavigation} />
          <NavLink text="Bookmarks" href="/bookmarks" handleNavigation={handleNavigation} />
          <UserDropDownMenu />
        </ul>
      ) : (
        <ul className="flex space-x-4">
          <NavLink text="Home" href="/" handleNavigation={handleNavigation} />
          <NavLink text="Login" href="/login" handleNavigation={handleNavigation} />
          <NavLink text="Register" href="/register" handleNavigation={handleNavigation} />
        </ul>
      )}
    </>
  );
}

export default NavLinks;
