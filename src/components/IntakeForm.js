import React from "react";
import TextElement from './TextElement';
import SelectElement from './SelectElement';

function IntakeForm() {
  const firstName = { label: 'First Name', style: '', placeholder: 'First Name'};
  const lastName = { label: 'Last Name', style: '', placeholder: 'Last Name'};
  const reportingMethod = { label: 'Reporting Method', 
    "options" :[{ name: "F - Fax", value: "Fax"},
    { name: "P - Phone", value: "Phone"},
    { name: "E - Email", value: "Email"},
    { name: "I - Internet", value: "Internet"}]};
  //const incidentDate = { label: 'Date Of Incident', style: '', placeholder: 'Date Of Incident'};
  //const incidentTime = { label: 'Time Of Incident', style: '', placeholder: 'Time Of Incident'};
  const reporterType = { label: 'Reporter Type', 
    "options" :[
      { name: "EMP", value: "Employee"},
      { name: "EMR", value: "Employer"},
      { name: "OTH", value: "Other"}]};

  return (
    <div className="flex-col items-center px-12">
      <div className="mt-6">
        <h1 className="text-xl text-blue-700 text-center leading-tight">Auto Liability</h1>
      </div>
      <div>
        <div className="text-lg text-gray-800 text-center mt-4 mb-2">
          <h2>
            <span>Reporter Information</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="text-sm py-4">
          <div>
            <SelectElement element={reportingMethod} />
          </div>
          <div>
            <span aria-label="Date Of Incident">Date Of Incident</span>
          </div>
          <div>
            <input type="date" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
          </div>
          <div>
            <span aria-label="Time Of Incident">Time Of Incident</span>
          </div>
          <div>
            <input type="time" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" />
          </div>
          <div>
            <SelectElement element={reporterType} />
          </div>
          <div>
            <TextElement element={firstName} />
          </div>
          <div>
            <TextElement element={lastName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntakeForm;
