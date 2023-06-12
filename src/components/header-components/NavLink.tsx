interface NavLinkProps {
  text: string;
  href: string;
  handleNavigation: (path: string) => void;
}

function NavLink({ text, href, handleNavigation }: NavLinkProps) {
  return (
    <li>
      <a
        className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
        onClick={() => handleNavigation(href)}
      >
        {text}
      </a>
    </li>
  );
}

export default NavLink;
