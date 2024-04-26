"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { User } from "@/interfaces";
import Link from "next/link";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const router = useRouter();

  const userLogin = async () => {
    alert("User logged in");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(userLogin)}
        className="  rounded-lg py-10 px-5 mb-10"
        noValidate
      >
        <p className="text-md mt-5 text-center mb-10 font-bold ">Log in</p>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm  ">
            Email
          </label>
          <input
            id="email"
            className={`w-full p-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-100"
            }`}
            type="email"
            placeholder="joe@email.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-sm  ">
            Password
          </label>
          <input
            id="password"
            className={`w-full p-3 border rounded-md ${
              errors.password ? "border-red-500" : "border-gray-100"
            }`}
            type="password" // Cambiado de type="text" a type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-5  flex justify-end">
          <Link href={"/forgot-password"} className="underline text-gray-600 text-sm">
            forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="bg-emerald-300 w-full mt-9 p-3 text-sm   rounded-md font-semibold hover:bg-emerald-600 cursor-pointer transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
