import { useEffect } from 'react';
import Register from '../../components/authentication/Register';

const Signup = () => {
  useEffect(() => {
    document.title = "Medico | Signup";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main>
      <Register/>
    </main>
  )
}

export default Signup;