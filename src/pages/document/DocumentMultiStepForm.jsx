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
    
    <>
                    
      {step === 1 && (
        <div  id="section-1">
              
               <Wizardstep1 next={nextStep} previous={prevStep}/>
              
        </div>
      )}

      {step === 2 && (
        <div>
        
         <Wizardstep2  id="section-2" next={nextStep} previous={prevStep} />
        
          
        </div>
      )}
     
    </>
  );
}


