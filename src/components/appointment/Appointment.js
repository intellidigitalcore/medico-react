import { useState } from "react";

const stepsDetail = [
    {heading:"12 May",title:"You have taken test drive", description:"2010 White Alto LXI and 2 Others"},
    {heading:"14 May",title:"Pay Token", description:"for 2010 White Alto LXI"},
    {heading:"14 May",title:"Processing your loan", description:"Usually take 3-6 days for different banks"},
    {heading:"15 june",title:"Take Car Delivery", description:"2010 White Alto LXI and 2 Others"},
    {heading:"16 july",title:"Start Ownership Transfer Process", description:" Please bring the list of documents at the time of delivery"}
  ]

const Appointment = () => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const numberOfSteps = 5;

  const prev = () => {
    let step= completedSteps;
    if(step>0){
      step=step-1;
      setCompletedSteps(step);
    }
  }
  const next = () => {
      let step= completedSteps;
      if(step<numberOfSteps){
        step=step+1;
        setCompletedSteps(step);
      }
  }
   
  return (
    <div className="container">
      <div className="steps-card">
        {
          stepsDetail.map((item, index) => (
            <div className={`step ${index < completedSteps ? 'step-completed' : index > completedSteps ? 'step-incomplete' : 'step-current'}`}>
              <h1 className="step-heading"> {item.heading} </h1>
              <h2 className="step-title"> {item.title} </h2>
              <p className="step-description"> {item.description} </p>
            </div>
          ))
        }
      </div>
      <div className="control-buttons">
        {
          completedSteps > 0 && <button onClick={prev} className="btn previous">Prev</button>
        }
        <button onClick={next} className="btn next">next</button>
      </div>
    </div>
  )
}

export default Appointment;