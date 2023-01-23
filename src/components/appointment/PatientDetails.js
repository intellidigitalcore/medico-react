import { useState } from 'react';
import AppointmentDropdown from './AppointmentDropdown';
import AppointmentTitle from './AppointmentTitle';
import StepButtons from './StepButtons';

function PatientDetails({search, handlePrev,handleNext}) {
  const [activeBtn, setActiveBtn] = useState('Register');
  const tabItems = ['Register', 'Login'];

  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState("Gender");
  const genders = ["Gender", "Male", "Female"];

  const handleTab = (item) => {
    setActiveBtn(item);
  }

  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Details"} description={"Register if your new, otherwise just login"} search={search}/>

      {/* content */}
      <div className="flex-grow">
        <ul id="tabs-nav" className="flex items-center justify-center mb-6 gap-6">
          {
            tabItems.map((item, i) => (
              <li key={i}>
                <button onClick={() => handleTab(item)} className={`${item === activeBtn ? 'active' : ''} inline-block w-[100px] rounded-[5px] text-center text-secondary leading-[33px] border border-solid border-secondary/20 bg-white text-sm font-semibold`}>{item}</button>
              </li>
            ))
          }
        </ul>

        {/* Registration tab content */}
        <div className={`${activeBtn === 'Register' ? '' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* first name */}
            <div>
              <label htmlFor="fname" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">First Name</label>
              <input type="text" id="fname" placeholder="First Name" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* last name */}
            <div>
              <label htmlFor="lname" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Last Name</label>
              <input type="text" id="lname" placeholder="Last Name" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Email</label>
              <input type="email" id="email" placeholder="Email" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Phone</label>
              <input type="tel" id="phone" placeholder="Phone" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Age</label>
              <input type="text" id="age" placeholder="Age" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Gender</label>
              <AppointmentDropdown showDropdown={showGender} setShowDropdown={setShowGender} selectData={gender} setSelectData={setGender} data={genders}/>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Password</label>
              <input type="password" id="password" placeholder="Password" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="cpassword" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Confirm Password</label>
              <input type="password" id="cpassword" placeholder="Confirm Password" className="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>
          </div>
        </div>

        {/* Login tab content */}
        <div className={`${activeBtn === 'Login' ? '' : 'hidden'}`}>
          <div class="max-w-[580px] mx-auto">
            {/* email */}
            <div class="mb-6">
              <label for="email_login" class="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Email</label>
              <input type="email" id="email_login" placeholder="Email" class="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>

            {/* password */}
            <div>
              <label for="password_login" class="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Password</label>
              <input type="password" id="password_login" placeholder="Password" class="outline-none border border-solid border-black/20 rounded-lg w-full h-10 px-[10px] text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
            </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={activeBtn === 'Login' ? 'Login' : 'Register'}/>
    </div>
  )
}

export default PatientDetails