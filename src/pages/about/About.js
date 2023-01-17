import { useEffect } from 'react'
import AboutUs from '../../components/about/AboutUs'
import CertifiedDoctors from '../../components/about/CertifiedDoctors'
import History from '../../components/about/history/History'
import Service from '../../components/shared/service/Service'
import WhyUs from '../../components/shared/whyUs/WhyUs'

const About = () => {
  useEffect(() => {
    document.title = "Medico | About";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[107px]">
      <AboutUs/>
      <Service/>
      <WhyUs/>
      <History/>
      <CertifiedDoctors/>
    </main>
  )
}

export default About;