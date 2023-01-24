import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/svg/menu.svg';
import {IoClose} from 'react-icons/io5';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    openMenu ? body.style.overflow = "hidden" : body.style.overflow = "visible";
  }, [openMenu]);

  return (
    <header className="py-2 xl:py-4 w-full fixed left-0 top-0 z-40 bg-white/40 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="inline-block w-[75px] sm:w-[150px] lg:w-auto">
            <img src={logo} alt="Logo"/>
          </Link>

          <div>
            {/* mobile screen overlay */}
            <div onClick={() => setOpenMenu(false)} className={`${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} mobile-overlay transition-all ease-linear duration-500 h-screen w-full bg-black/30 fixed inset-0 z-40 lg:hidden`}></div>

            {/* mobile menu toggle button */}
            <button onClick={() => setOpenMenu(true)} type="button" className="menu-toggle h-5 w-5 flex items-center justify-center lg:hidden">
              <img src={menuIcon} alt="Logo"/>
            </button>

            <div className={`${openMenu ? 'left-0' : '-left-[320px]'} mobile-menu transition-all ease-linear duration-500 h-screen lg:h-auto w-[320px] lg:w-auto bg-white lg:bg-transparent fixed z-50 lg:static top-0 p-4 lg:p-0 overflow-y-auto lg:overscroll-none shadow lg:shadow-none`}>
              {/* close menu button */}
              <button onClick={() => setOpenMenu(false)} type="button" className="close-menu h-8 w-8 bg-secondary rounded-full flex items-center justify-center absolute top-3 right-3 lg:hidden">
                <IoClose className='text-white text-xl'/>
              </button>

              {/* mobile screen logo */}
              <Link to="/" className="inline-block mb-6 w-36 lg:hidden">
                <img src={logo} alt="Logo"/>
              </Link>

              {/* menu items */}
              <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-7">
                <li>
                  <NavLink to="/" end onClick={() => setOpenMenu(false)} className="nav-link inlione-block text-base text-primary-text">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setOpenMenu(false)} className="nav-link inlione-block text-base text-primary-text">About</NavLink>
                </li>
                <li>
                  <NavLink to="/service" onClick={() => setOpenMenu(false)} className="nav-link inlione-block text-base text-primary-text">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/doctors" onClick={() => setOpenMenu(false)} className="nav-link inlione-block text-base text-primary-text">Doctors</NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={() => setOpenMenu(false)} className="nav-link inlione-block text-base text-primary-text">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setOpenMenu(false)} className="inline-block py-3 px-12 border border-secondary/20 bg-secondary/10 text-sm font-semibold text-secondary rounded-md">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header