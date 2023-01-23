import AppointmentTitle from "./AppointmentTitle";
import StepButtons from "./StepButtons";
import location from '../../assets/images/location/clinic2.jpg';

function Confirmation({search, handlePrev, handleNext}) {
  return (
    <div class="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Confirmation"} description={"Preview your reservation and confirm"} search={search}/>

      {/* content */}
      <div class="flex flex-col sm:flex-row items-start justify-center gap-6 flex-grow">
        
        {/* card 1 */}
        <div class="w-full sm:w-[216px] rounded-[10px] overflow-hidden bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
          <div class="rounded-br-[10px] overflow-hidden h-[76px] w-full">
            <img src={location} class="w-full h-full object-cover" alt="Location"/>
          </div>
          <div class="mt-[10px] p-[10px] text-center">
            <h5 class="text-sm lg:text-base font-semibold text-primary-text">Houston</h5>
            <p class="pt-[10px] text-xs lg:text-sm text-primary-text/60">4600 ALDINE BENDER RD NORTH HOUSTON</p>
          </div>
        </div>

        {/* card 2 */}
        <div class="w-full sm:w-[240px]">
          <h4 class="pb-2 text-base lg:text-xl font-semibold text-secondary/80">Patient Info</h4>
          <div class="bg-white rounded-lg p-[10px]">
            <ul class="space-y-[10px]">
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Name</span>
                <p class="text-sm lg:text-base text-primary-text/60">Kimic Lee</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Age</span>
                <p class="text-sm lg:text-base text-primary-text/60">27 years</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Email</span>
                <p class="text-sm lg:text-base text-primary-text/60">abcd@gmail.com</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Phone</span>
                <p class="text-sm lg:text-base text-primary-text/60">+1 800 258 631</p>
              </li>
            </ul>
          </div>
        </div>

        {/* card 3 */}
        <div class="w-full sm:w-[240px]">
          <h4 class="pb-2 text-base lg:text-xl font-semibold text-secondary/80">Appointment Info</h4>
          <div class="bg-white rounded-lg p-[10px]">
            <ul class="space-y-[10px]">
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Doctor</span>
                <p class="text-sm lg:text-base text-primary-text/60">Travis Ward</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Date</span>
                <p class="text-sm lg:text-base text-primary-text/60">2022-10-28</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Time</span>
                <p class="text-sm lg:text-base text-primary-text/60">06:00 PM</p>
              </li>
              <li class="flex items-center gap-[10px]">
                <span class="w-[50px] flex-shrink-0 text-sm lg:text-base font-medium text-primary-text">Phone</span>
                <p class="text-sm lg:text-base text-primary-text/60">+1 800 258 631</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={"Confirm"}/>
    </div>
  )
}

export default Confirmation;