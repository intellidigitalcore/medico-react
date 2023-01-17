import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClinicLocation from "../../components/singleDoctor/clinicLocation/ClinicLocation";
import SingleDoctorDetails from "../../components/singleDoctor/singleDoctorDetails/SingleDoctorDetails";
import { doctors } from "../../data/doctors";

const DoctorDetails = () => {
  const {doctorId} = useParams();
  const [singleDoctor, setSingleDoctor] = useState({});

  useEffect(() => {
    setSingleDoctor(doctors.find(({id}) => id === parseInt(doctorId)));
  },[doctorId]);

  useEffect(() => {
    document.title = "Medico | Single Doctor";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      <SingleDoctorDetails data={singleDoctor}/>
      <ClinicLocation/>
    </main>
  )
}

export default DoctorDetails;