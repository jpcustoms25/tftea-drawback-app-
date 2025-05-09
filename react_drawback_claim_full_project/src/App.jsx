
import React from "react";
import { FormProvider } from "./FormContext";
import StepNavigator from "./components/StepNavigator";

function App() {
  return (
    <FormProvider>
      <div className="app-container">
        <h1>TFTEA Drawback Claim Form</h1>
        <StepNavigator />
      </div>
    </FormProvider>
  );
}

export default App;
