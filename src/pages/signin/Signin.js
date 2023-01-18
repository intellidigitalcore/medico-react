import { useEffect } from "react";
import Login from "../../components/authentication/Login";

const Signin = () => {
  useEffect(() => {
    document.title = "Medico | Login";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main>
      <Login/>
    </main>
  )
}

export default Signin;