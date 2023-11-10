import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-md p-4 z-10">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex-grow flex items-center">
          <img src={Logo} alt="Logo" className="w-[180px] mx-auto mb-[700px]"/>
        </div>
        {/* Aquí puedes agregar otros elementos de navegación, como enlaces */}
      </div>
    </nav>
  );
};

export default Navbar;
