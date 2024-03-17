import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const nav = useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  const createAccount = () => {
    // Extract fields from signupState
    const { email, age, password, confirmPassword, username } = signupState;

    // Check if required fields are empty

    console.log(signupState);
    if (!email || !password || !confirmPassword) {
      console.error("Email, password, and confirm password are required");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      console.error("Password and confirm password do not match");
      return;
    }

    // Construct request body
    const requestBody = {
      name: username,
      email: email,
      password: password,
      gender: "Male",
      image: "string",

      contactNumber: "string",
      address: "Ichal",
      // Add any additional fields as required by your backend
    };
    console.log("reqestbody :", requestBody);
    // Make POST request to create account
    fetch(
      "https://hospital-management-backend-n7ck.onrender.com/patient/create-patient",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful account creation response
        console.log(data);
        setTimeout(() => {
          nav("/Home");
        }, 2000);
        // Redirect or perform necessary actions upon successful account creation
      })
      .catch((error) => {
        console.error("Error creating account:", error);
        // Handle error, display error message to user, etc.
      });
  };

  return (
    <div
      className="Mainbody"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "70%",
        }}
      >
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
          <FormAction handleSubmit={handleSubmit} text="Signup"  style={{width:'30%'}}/>
      </form>
    </div>
  );
}
