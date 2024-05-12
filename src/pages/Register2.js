import { useForm } from "react-hook-form";
import React from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm();

  // // const onSubmit = async (data, e) => {
  // //   e.preventDefault();

  // //   const response = await fetch("https://rentor-b.onrender.com/user/create", {
  // //     method: "POST",
  // //     headers: { "Content-Type": "application/json" },
  // //     body: JSON.stringify(data),
  // //   });

  // //   if (response.ok) {
  // //     console.log("User registered successfully!");
  // //     router.push("/");
  // //   } else {
  // //     // Handle registration errors
  // //     console.error("Failed to register user");
  // //   }
  // // };
  // const onSubmit = async (data, e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://rentor-b.onrender.com/user/create",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(data),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error(`Failed to register user, status: ${response.status}`);
  //     }
  //     console.log("User registered successfully!");
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Error during registration:", error.message);
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.birthdate = new Date(data.birthdate).toISOString();
      const response = await fetch(
        "https://rentor-b.onrender.com/user/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to register user, status: ${response.status}`);
      }
      // data.birthdate = new Date(birthdate).toISOString();
      console.log("User registered successfully!");
      router.push("/Login");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-4 p-3 bg-gray-50 rounded shadow-xl"
    >
      {/* Form fields */}
      <div className="mb-4 text-center">
        <p className="text-gray-700 text-base font-bold mb-2">Register</p>

        {/* first name */}
        <input
          {...register("firstName", {
            required: "First Name is Required",
          })}
          name="firstName"
          type="firstName"
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
        />
        {errors.firstName && (
          <p className="text-red-700 w-auto mt-1 text-center">{`${errors.firstName.message}`}</p>
        )}
      </div>
      <div className="mb-4 text-center">
        {/* last name */}
        <input
          {...register("lastName", {
            required: "Last Name is Required",
          })}
          name="lastName"
          type="lastName"
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
        />
        {errors.lastName && (
          <p className="text-red-700 w-auto mt-1 text-center">{`${errors.lastName.message}`}</p>
        )}
      </div>
      {/* email  */}
      <div className="mb-4 text-center">
        <input
          {...register("email", {
            required: "Email is required",
          })}
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
        />
        {errors.email && (
          <p className="text-red-700 w-auto mt-1 text-center">{`${errors.email.message}`}</p>
        )}
      </div>
      {/* password */}
      <div className="mb-4 text-center">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
        />
        {errors.password && (
          <p className="text-red-700 w-auto mt-1 text-center">{`${errors.password.message}`}</p>
        )}
      </div>
      {/* gender */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <p className="pl-1">Gender</p>
        </label>
        <div className="pl-1 mb-4">
          <input
            {...register("gender", {
              required: "Gender is Required",
            })}
            name="gender"
            type="radio"
            value={"male"}
          />
          <span className="ml-2 text-gray-700">Male</span>
          <input
            {...register("gender", {
              required: "Gender is Required",
            })}
            name="gender"
            type="radio"
            value={"Female"}
            className="ml-4"
          />
          <span className="ml-2 text-gray-700">Female</span>
          {errors.gender && (
            <p className="text-red-700 w-auto mt-1 text-center">{`${errors.gender.message}`}</p>
          )}
        </div>
        {/* birthdate */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <p className="pl-1">Birthdate</p>
          </label>
          <input
            {...register("birthdate", {
              required: "Birthdate is Required",
            })}
            name="birthdate"
            type="date"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          />
          {errors.birthdate && (
            <p className="text-red-700 w-auto mt-1 text-center">{`${errors.birthdate.message}`}</p>
          )}
        </div>
        <div className="mb-4 text-center">
          {/* Phone Numbers */}
          <input
            {...register("phone", {
              required: "Phone Number is Required",
              maxLength: {
                value: 11,
                message: "Phone Number must be 11 characters",
              },
              minLength: {
                value: 11,
                message: "Phone Number must be 11 characters",
              },
            })}
            name="phone"
            type="phone"
            placeholder="Phone"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
          />
          {errors.phone && (
            <p className="text-red-700 w-auto mt-1 text-center">{`${errors.phone.message}`}</p>
          )}
        </div>
      </div>
      <div className="mb-4 text-center">
        <input
          {...register("address", {
            required: "address is required",
          })}
          name="address"
          type="address"
          placeholder="address"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline-blue"
        />
        {errors.address && (
          <p className="text-red-700 w-auto mt-1 text-center">{`${errors.address.message}`}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-amber-600 text-white p-2 rounded focus:outline-none focus:shadow-outline-blue "
      >
        Sign Up
      </button>
    </form>
  );
};

export default Register;
