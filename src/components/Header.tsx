const Header = () => {
  return (
    <header className="bg-green-500">
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="/bitmoji.png" alt="Joshua Bitmoji" className="border-2 rounded-full" />
            </a>
          </li>
          <li>
            <a href="">Home</a>
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
