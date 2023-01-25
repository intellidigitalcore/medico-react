import logo from '../../assets/images/logo.png';

const Loader = () => {
  return (
    <div id="preloader" className="h-screen w-full bg-white z-50 fixed inset-0 flex items-center justify-center">
      <div className="zoom-in-out-box">
        <img src={logo} alt="Preloader"/>
      </div>
    </div>
  )
}

export default Loader;