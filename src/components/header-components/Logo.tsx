interface LogoProps {
  handleNavigation: (path: string) => void;
}

function Logo({ handleNavigation }: LogoProps) {
  return (
    <div>
      <h1
        onClick={() => handleNavigation("/")}
        className="text-white text-3xl font-bold hover:text-purple-600 transition duration-1000 ease-in-out"
      >
        BookmarkVerse
      </h1>
    </div>
  );
}

export default Logo;
