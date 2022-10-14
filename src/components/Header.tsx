const Header = () => {
  return (
    <header className="text-md p-2 fixed top-0 w-screen">
      <nav className="flex items-center justify-start gap-5">
        <a href="#">
          <img
            src="/bitmoji.png"
            alt="Joshua Bitmoji Avatar"
            className="border-2 border-secondary rounded-full w-16"
          />
        </a>
        <ul className="flex items-center gap-5 font-bold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
