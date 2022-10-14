const Header = () => {
  return (
    <header className="text-secondary">
      <nav>
        <ul>
          <li>
            <a href="#">
              <img
                src="/bitmoji.png"
                alt="Joshua Bitmoji Avatar"
                className="border-2 rounded-full w-20"
              />
            </a>
          </li>
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
