
import React from "react";
import { useForm } from "../FormContext";
import HeaderStep from "./HeaderStep";
import ImportStep from "./ImportStep";
import ExportStep from "./ExportStep";
import RejectedStep from "./RejectedStep";
import ManufacturingStep from "./ManufacturingStep";
import SummaryStep from "./SummaryStep";

const StepNavigator = () => {
  const { step, setStep, formData } = useForm();

  const steps = [
    <HeaderStep />,
    <ImportStep />,
    <ExportStep />,
    formData.drawbackType.startsWith("Rejected") ? <RejectedStep /> : <ManufacturingStep />,
    <SummaryStep />
  ];

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <div>{steps[step]}</div>
      <div style={{ marginTop: "20px" }}>
        {step > 0 && <button onClick={back}>Back</button>}
        {step < steps.length - 1 && <button onClick={next}>Next</button>}
      </div>
    </div>
  );
};

export default StepNavigator;
