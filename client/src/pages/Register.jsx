import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import UserContext from "../context/UserContext";
import { useRef } from "react";
import axios from "axios";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);
  // const onSubmitHandler = (formData) => {
  //   console.log(formData);
  // };

  async function onSubmitHandler(formData) {
    // e.preventDefault();
    // setLoading(true);
    try {
      // const newUser = { email, password, confirmPassword, username };
      const { username, email, password, number } = formData;
      console.log(formData);
      await axios.post("http://localhost:3000/signup", {
        email,
        password,
        username,
        number,
      });
      const loginRes = await axios.post("http://localhost:3000/login", {
        email,
        password,
        number,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      toast.success("Sucessfully Registered In");
      navigate("/login");
    } catch (err) {
      // err.response.data.msg && setError(err.response.data.msg);
      console.log(err);
      toast.error(err.response.data.msg);
    }
  }

  return (
    <section className="my-10">
      <h1 className="my-10 text-center text-4xl uppercase tracking-wider">
        Create Account
      </h1>

      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form
            className="rounded-xl p-20"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div class="formbold-input-flex">
              <div>
                <label for="firstname" class="formbold-form-label">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Jane"
                  class="formbold-form-input"
                  {...register("username", {
                    required: "Full Name Required",
                  })}
                />

                {errors.username && (
                  <span className="font-light italic text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Phone{" "}
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="000 000 0000"
                  class="formbold-form-input"
                  {...register("number", {
                    required: "Number is required",
                  })}
                />
                {errors.number && (
                  <span className="font-light italic text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label for="number" class="formbold-form-label">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                class="formbold-form-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <span className="font-light italic text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div class="formbold-input-flex my-4">
              <div>
                <label for="number" class="formbold-form-label">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  class="formbold-form-input"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters.",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                      message:
                        "Password should contain at least one uppercase letter, one lowercase letter, and one digit.",
                    },
                  })}
                />

                {errors.password && (
                  <span className="font-light italic text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <label for="number" class="formbold-form-label">
                  {" "}
                  Confirm Password{" "}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=""
                  class="formbold-form-input"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password.current ||
                      "The passwords does not match",
                  })}
                />

                {errors.confirmPassword && (
                  <span className="italic text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            <button class="formbold-btn">Create Account</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

// <div className="flex items-center justify-center">
// <form
//   className="flex max-w-lg flex-col items-center justify-center rounded-md border px-5 py-20"
//   onSubmit={handleSubmit(onSubmitHandler)}
// >
//   <div className="-mx-3 md:flex md:flex-wrap">
//     <div className="mb-6 w-80 px-3 md:mb-0 md:w-1/2">
//       {/* <label
//         className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
//         for="grid-first-name"
//       >
//         First Name
//       </label> */}
//       <Input
//         name="username"
//         type="text"
//         className={`w-full ${errors.firstname ? "border-red-500" : ""}`}
//         placeholder="Full Name"
// {...register("username", {
//   required: "Username Name Required",
// })}
//       />

//       {errors.firstname && (
//         <span className="italic text-red-500">
//           {errors.firstname.message}
//         </span>
//       )}
//     </div>
//     <div className="mb-6 w-80 px-3 md:mb-0 md:w-1/2">
//       <Input
//         name="email"
//         type="email"
//         className={`w-full ${errors.firstname ? "border-red-500" : ""}`}
//         placeholder="Email"
// {...register("email", {
//   required: "Email is required",
//   pattern: {
//     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//     message: "Invalid email address",
//   },
// })}
//       />

// {errors.email && (
//   <span className="italic text-red-500">
//     {errors.email.message}
//   </span>
// )}
//     </div>
//     <div className="mb-6 w-80 px-3 md:mb-0 md:w-1/2">
//       <Input
//         name="number"
//         type="text"
//         className={`w-full ${errors.number ? "border-red-500" : ""}`}
//         placeholder="Number"
//         {...register("number", {
//           required: "Number is required",
//         })}
//       />
//     </div>
//   </div>

//   <div className="-mx-3 md:flex md:flex-wrap">
//     <div className="mb-6 w-80 px-3 md:mb-0 md:w-1/2">
//       <Input
//         name="password"
//         type="password"
//         id="grid-last-name"
//         className={`w-full ${errors.firstname ? "border-red-500" : ""}`}
//         placeholder="Password"
// {...register("password", {
//   required: "Password is required",
//   minLength: {
//     value: 6,
//     message: "Password should be at least 6 characters.",
//   },
//   pattern: {
//     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
//     message:
//       "Password should contain at least one uppercase letter, one lowercase letter, and one digit.",
//   },
// })}
//       />
//       {errors.password && (
//         <span className="italic text-red-500">
//           {errors.password.message}
//         </span>
//       )}
//     </div>

//     <div className="w-80 px-3 md:w-1/2">
//       <Input
//         name="confirmPassword"
//         type="password"
//         className={`w-full ${errors.firstname ? "border-red-500" : ""}`}
//         placeholder="Confirm Password"
// {...register("confirmPassword", {
//   required: "Please confirm your password",
//   validate: (value) =>
//     value === password.current ||
//     "The passwords does not match",
// })}
//       />

// {errors.confirmPassword && (
//   <span className="italic text-red-500">
//     {errors.confirmPassword.message}
//   </span>
// )}
//     </div>
//   </div>
//   <Button type="submit" className="w-full">
//     Create Account
//   </Button>
// </form>
// </div>
