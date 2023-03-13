import React, { useState } from "react";
import Addwizard from "./functions/Addwizard";
import TemplateFullTable from "./TemplateFullTable";
import Wizardstep1 from "./Wizardstep1";
import Wizardstep2 from "./Wizardstep2";

export default function DocumentMultiStepForm() {

  const [step, setStep] = useState(1);
  const[preID,SetPreID]=useState("");
  const nextStep = (templateID) => {
    setStep(step + 1);
    SetPreID(templateID);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step === 1 && (
        <div id="section-1">
          <Wizardstep1 next={nextStep} previous={prevStep} />
        </div>
      )}

      {step === 2 && (
        <div>
          <Wizardstep2 id="section-2"  previousID  ={preID} previous={prevStep} />

        </div>
      )}
    
    </>
  );
}
