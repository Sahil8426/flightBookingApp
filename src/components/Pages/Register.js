import React from "react";
import "../registrationcomp/Form.css";

import CountryCity from "../registrationcomp/CountryCity";
import useForm from "../registrationcomp/useForm";

import validate from '../registrationcomp/ValidateInfo';

export function Register() {
  const { handleChange, inputs, handleSubmit } = useForm(validate);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          
          <input
            type="text"
            name="firstname"
            placeholder="First Name (in english)*"
            value={inputs.firstname}
            onChange={handleChange}
            // className={`${errors.firstname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name (in english)*"
            value={inputs.lastname}
            onChange={handleChange}
            // className={`${errors.lastname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

         
          <CountryCity />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={inputs.email}
            onChange={handleChange}
            // className={`${errors.email} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
         
        

          <input
            type="number"
            name="mobile"
            placeholder="966 57452455"
            value={inputs.mobile}
            onChange={handleChange}
            // className={`${errors.mobile} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
         
         
          <input
            type="text"
            name="username"
            placeholder="User Name *"
            value={inputs.username}
            onChange={handleChange}
            // className={`${errors.username} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Password *"
            value={inputs.password}
            onChange={handleChange}
            // className={`${errors.password} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password *"
            value={inputs.password2}
            onChange={handleChange}
            // className={`${errors.password2} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

