import { useEffect } from 'react';
import Banner from '../../components/home/Banner'
import Department from '../../components/home/departments/Department';
import DownloadApp from '../../components/home/DownloadApp';
import Service from '../../components/shared/service/Service';
import WhyUs from '../../components/shared/whyUs/WhyUs';

const Home = () => {
  useEffect(() => {
    document.title = "Medico | Home";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-0">
      <Banner/>
      <Service/>
      <WhyUs/>
      <Department/>
      <DownloadApp/>
    </main>
  )
}

export default Home;