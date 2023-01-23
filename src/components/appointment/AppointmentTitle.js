import React from 'react'

const AppointmentTitle = ({search, title, description}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 flex-shrink-0 justify-between pb-4 lg:border-b lg:border-black/10 mb-6">
      <div className="text-center md:text-left">
        <h5 className="text-sm lg:text-base font-semibold text-primary-text pb-1">{title}</h5>
        <p className="text-xs text-primary-text/60">{description}</p>
      </div>
      {
        search && <input type="text" placeholder="search by name" className="h-10 w-full outline-none md:w-[400px] px-[10px] rounded-[5px] border border-solid border-black/10 bg-white text-sm text-primary-text placeholder:text-sm placeholder:text-primary-text/40"/>
      }
    </div>
  )
}

export default AppointmentTitle;