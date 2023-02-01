import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Loader from '../components/shared/Loader';
import {BsArrowUp} from 'react-icons/bs';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  
    const body = document.querySelector('body');
    loading ? body.style.overflow = "hidden" : body.style.overflow = "visible";
  }, [loading]);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    }

    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    }
  }, []);

  return (
    <>
      {loading && <Loader/>}
      <Header/>
        <Outlet/>
      <Footer/>
      <button onClick={handleScrollToTop} type='button' className={`${showButton ? 'show' : ''} scrollTopButton`}><BsArrowUp/></button>
    </>
  )
}

export default Layout