import Logo from "../assets/logo/logo.png";

const Nav = () => {
  return (
          
<nav className="w-full px-4 md:px-20 bg-white fixed top-0 left-0 z-50 md:h-24 shadow-md">
  <div className="relative flex items-center justify-between max-w-7xl mx-auto h-20">

    <div className="block md:hidden">
      <button className="text-2xl focus:outline-none">
        <i className='bx bx-menu'></i>
      </button>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <img src={Logo} alt="My Bakery Logo" className="h-24 md:h-28 lg:h-32 md:mt-5 object-contain" />
    </div>
    <ul className="hidden md:flex items-center gap-6 lg:gap-10 lg:mr-24 font-semibold  font-nav text-base sm:text-lg lg:text-2xl ">
      {["ORDER", "PRODUCTS", "ABOUT US"].map((label, index) => (
        <li key={index} className="group relative cursor-pointer flex items-center gap-1">
          {label}
          <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000" className="w-3 h-3 transition-transform group-hover:rotate-180"/>
        </li>
      ))}
    </ul>


    <div className="hidden md:flex items-center gap-5 lg:ml-20">
      <a href="#"><i className='bx bx-search-alt-2 text-base sm:text-lg lg:text-2xl'></i></a>
      <a href="#"><i className='bx bx-user text-base sm:text-lg lg:text-2xl'></i></a>
      <a href="#"><i className='bx bx-cart text-base sm:text-lg lg:text-2xl'></i></a>
    </div>
  </div>
</nav>


  );
};

export default Nav;
