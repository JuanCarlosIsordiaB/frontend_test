'use client'
import React, { useState } from "react";

interface FormValues {
  email: string;
}

export const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState<FormValues>({ email: "" });
  const [errors, setErrors] = useState<{ email: string }>({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = formData;

    if (!email) {
      setErrors({ email: "This field is required" });
      return;
    }

    if (!validateEmail(email)) {
      setErrors({ email: "Invalid email format" });
      return;
    }
    alert("Form submitted with email: " + email);
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isValid = regex.test(email);
    setErrors({ email: isValid ? "" : "Invalid email format" });
    return isValid;
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        className="rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
        noValidate
      >
        <p className="text-md mt-5 text-center mb-10 font-bold">Change Password</p>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-100"
            }`}
            type="email"
            placeholder="joe@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-emerald-300 w-full mt-9 p-3 text-sm  rounded-md font-semibold hover:bg-emerald-600 cursor-pointer transition-colors"
        >
          Send Code
        </button>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
