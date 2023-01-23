import { Link } from 'react-router-dom';
import AppointmentTitle from './AppointmentTitle';

function ConfirmDone({search}) {
  return (
    <div class="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Done"} description={"Please come within time & check the clinic address"} search={search}/>

      {/* content */}
      <div class="flex-grow lg:p-5 flex justify-center">
        <div class="max-w-[720px]">
          <p class="text-base text-primary-text/60 pb-6">Dear Mr/Mrs/Ms. user name</p>

          <p class="text-base text-primary-text/60">An appointment has been made for <span class="font-bold text-primary-text">Dr.Travis Ward</span> to see you at our <span class="font-bold text-primary-text">Houston clinic(4600 ALDINE BENDER RD NORTH HOUSTON).</span></p>
        
          <h5 class="py-6 text-center text-base font-bold text-secondary">2022-10-28 at 06:00 PM </h5>

          <p class="text-base text-primary-text/60">It would be helpful if a family member or friend could attend this appointment with you. It would also be helpful if you could have with you a list of all your current medication (prescribed and over-the-counter).</p>
        </div>
      </div>

      {/* buttons */}
      <div class="flex items-center justify-center lg:justify-end gap-4 w-full flex-shrink-0 mt-10 lg:mt-6">
        <Link to="/" class="next-button inline-block px-9 text-center leading-9 text-sm font-semibold text-white rounded-md bg-[#084C94]">Go Back to Home</Link>
      </div>
    </div>
  )
}

export default ConfirmDone;