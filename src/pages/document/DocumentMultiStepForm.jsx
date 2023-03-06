import React, { useState } from 'react';  
import Wizardstep1 from './Wizardstep1';
import Wizardstep2 from './Wizardstep2';
// import Wizardstep3 from './Wizardstep3';
export default function DocumentMultiStepForm() {
  const [step, setStep] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    
    <form onSubmit={handleSubmit}>
                    
      {step === 1 && (
        <div  id="section-1">
              
               <Wizardstep1 />
               <div className='p-l-15'> 
                  <button className='next-pre-btn  mrg-r-3' type="button" onClick={nextStep}>Next</button>
                  <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel </button>
              </div>
        </div>
      )}

      {step === 2 && (
        <div>
        
         <Wizardstep2  id="section-2"/>
         <div className='p-l-15 m-b-50 '>
              <button className='next-pre-btn  mrg-r-3' type="button" onClick={prevStep}>Back</button>
              <button className='next-pre-btn  mrg-r-3' type="button" onClick={nextStep}>Next</button>
              <button type="button" className="next-pre-btn-secondary mrg-r-3">Cancel </button>
         </div>
          
        </div>
      )}
     
    </form>
  );
}


