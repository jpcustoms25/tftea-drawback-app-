
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    drawbackType: "",
    header: {},
    import: {},
    export: {},
    rejected: {},
    manufacturing: {}
  });

  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
