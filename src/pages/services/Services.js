import { useEffect } from "react";
import Pricing from "../../components/service/pricing/Pricing";
import ServiceIntro from "../../components/service/ServiceIntro";
import Video from "../../components/service/video/Video";
import Service from "../../components/shared/service/Service";

const Services = () => {
  useEffect(() => {
    document.title = "Medico | Services";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="mt-9 sm:mt-[55px] lg:mt-[67px] xl:mt-[83px]">
      {/* page title */}
      <div className="page-title pt-6 lg:pt-12 pb-3 lg:pb-6">
        <div className="container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-primary-text text-center">Services</h2>
        </div>
      </div>

      <ServiceIntro/>
      <Service/>
      <Video/>
      <Pricing/>
    </main>
  )
}

export default Services;