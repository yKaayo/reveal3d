const Header = () => {
  return (
    <header className="h-[60px] w-full">
      <div className="container mx-auto h-full flex items-center">
        <nav>
          <ul className="flex items-center gap-5">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/sobre">
              <li>Sobre</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
