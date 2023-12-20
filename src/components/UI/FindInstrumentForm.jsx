import React from "react";
import "../../styles/find-instrument-form.css";
import "../../styles/find-instrument-form.css";
import { Form, FormGroup } from "reactstrap";

const FindInstrumentForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Electro</option>
            <option value="non-ac">Non Electro</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__instruments-btn">Find Instrument</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindInstrumentForm;
