import { useEffect } from 'react';
import Appointment from '../../components/appointment/Appointment';

const AppointmentPage = () => {
  useEffect(() => {
    document.title = "Medico | Appointment";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      <Appointment/>
    </main>
  )
}

export default AppointmentPage;