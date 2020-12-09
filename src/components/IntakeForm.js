import React from "react";

function IntakeForm() {
  return (
    <div>
      <div className="col-md-12 text-black">
        <h1 className="text-xl text-blue-700 leading-tight">Auto Liability</h1>
      </div>
      <div className="" tabindex="-1" id="CALLER_INFORMATION">
        <div className="col-md-12">
          <h2>
            <span>Reporter Information</span>
          </h2>
        </div>
      </div>
      <div className="row">
	      <div className="text-sm">
          <div>
		        <span aria-label="Reporting Method">Reporting Method</span>
		        <i className="fa fa-asterisk secondary-blue" aria-hidden="true" data-original-title="Answer required"/>
          </div>
          <div>
            <select  >
              <option value=""/>
              <option value="F - Fax">Fax</option>
              <option value="P - Phone">Phone</option>
              <option value="E - Email">Email</option>
              <option value="I - Internet">Internet</option>
		        </select>
          </div>
          <div>
            <span  aria-label="Date Of Incident">Date Of Incident</span>
          </div>
          <div>
            <input type="date" class="form-control"  inputmode="numeric" />
          </div>
          <div>
            <span aria-label="Time Of Incident">Time Of Incident</span>
          </div>
          <div>
            <input type="time" class="form-control" inputmode="text" />
          </div>
          <div>
            <span aria-label="Reporter Type">Reporter Type</span>
          </div>
          <div>
            <select searchable="Search">
              <option value=""/>
              <option value="EMP">Employee</option>
              <option value="EMR">Employer</option>
              <option value="OTH">Other</option>
            </select>
          </div>
	      </div>
      </div>
    </div>
  );
}

export default IntakeForm;
