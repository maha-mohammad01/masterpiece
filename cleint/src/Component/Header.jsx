// Header.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/footboolia.png';
import profileImage from '../img/avatars.webp';

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!document.cookie.match(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/)); // Set initial state based on the presence of the token

  useEffect(() => {
    setScrolling(window.scrollY > 50);
  
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Check if the user is logged in from localStorage
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoggedIn === 'true');
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleLogout = () => {
    console.log('Logging out');
    
    // Clear the authToken cookie
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    // Clear authentication state in local storage
    localStorage.removeItem('isLoggedIn');
  
    // Update the local state to indicate that the user is no longer logged in
    setIsLoggedIn(false);
  };
  
  
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={`fixed top-0 w-full border-b shadow-lg border-b-1 z-10 border-slate-200 shadow-slate-700/5 ${scrolling ? 'bg-white/95' : 'bg-white/40'} ${menuOpen ? 'after:absolute after:top-full after:left-0 z-[10] after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden' : ''}`}>
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] z-[100]">
          <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
            <Link to="/profile">
              <img src={logo} alt="Logo" className="h-20" />
            </Link>
            <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${menuOpen ? 'text-emerald-500' : 'text-slate-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>

              <ul role="menubar" aria-label="Select page" className={`font-medium lg:flex ${menuOpen ? 'flex' : 'hidden'}`}>
  <li role="none" className="flex items-stretch">
    <Link
      role="menuitem"
      aria-haspopup="false"
      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
      to="/">
      <span>Home</span>
    </Link>
  </li>
  <li role="none" className="flex items-stretch">
    <Link
      role="menuitem"
      aria-current="page"
      aria-haspopup="false"
      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
      to="/playgrounds">
      <span>Playgrounds</span>
    </Link>
  </li>
  <li role="none" className="flex items-stretch">
    <Link
      role="menuitem"
      aria-haspopup="false"
      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
      to="/academies">
      <span>Academies</span>
    </Link>
  </li>
  <li role="none" className="flex items-stretch">
    <Link
      role="menuitem"
      aria-haspopup="false"
      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
      to="/store">
      <span>Store</span>
    </Link>
  </li>
</ul>

            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              {isLoggedIn ? (
                <div className="flex items-center">
                  <Link to='/profile'>
                    <img src={profileImage} className="w-8 h-8 rounded-full shadow-lg cursor-pointer" alt="Profile" />
                  </Link>
                  <button className="ml-2 inline-flex items-center justify-center h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" onClick={handleLogout}>
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Login / Sign up</span>
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
