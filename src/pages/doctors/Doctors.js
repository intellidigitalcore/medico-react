import { useEffect } from "react";
import AllDoctors from "../../components/doctors/AllDoctors";

const Doctors = () => {
  useEffect(() => {
    document.title = "Medico | All Doctors";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      <AllDoctors/>
    </main>
  )
}

export default Doctors;