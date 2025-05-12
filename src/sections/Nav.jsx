import Logo from "../assets/logo/logo.png";

const Nav = () => {
  return (
          
    <nav className="w-full px-8 md:px-32 md:py-8 bg-white h-15 fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-5">
        <ul className="hidden md:flex items-start gap-8 font-bold text-sm font-nav">
          <li className="group relative cursor-pointer flex items-center gap-1">
            ORDER
            <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </li>
          <li className="group relative cursor-pointer flex items-center gap-1"> PRODUCTS
            <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </li>
          <li className="group relative cursor-pointer flex items-center gap-1">
            ABOUT US
            <img src="https://img.icons8.com/?size=100&id=39786&format=png&color=000000"
              className="w-3 h-3 transition-transform group-hover:rotate-180"/>
          </li>
        </ul>
        <div className="flex justify-center flex-1 ml-[20px]">
            <img src={Logo} alt="Logo" className="h-[100px]" />
         </div>
         
        <div className="gap-5 flex items-center justify-end flex-1">
          <a href="#"><i className='bx bx-search-alt-2'></i></a>
          <a href="#"><i className='bx bx-user'></i></a>
          <a href="#"><i className='bx bx-cart'></i></a>
        </div>
        
      </div>
    </nav>



  );
};

export default Nav;
