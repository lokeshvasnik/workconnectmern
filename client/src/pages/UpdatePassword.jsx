import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../backend/actions/updatePass";

import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Mutate question
  const { mutate: useForgotPass, isPending } = useMutation({
    mutationFn: (formData) => updatePassword(formData),
    onSuccess: (user) => {
      navigate("/login");
      toast.success("Logged In.", {
        position: "bottom-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "bottom-center",
      });
    },
  });

  const onSubmitHandler = (formData) => {
    useForgotPass(formData);
  };

  return (
    <section className="my-20">
      <h1 className="my-3 text-center text-4xl uppercase tracking-wider">
        UPDATE PASSWORD
      </h1>
      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 0,
                message: "Password must be at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <Button type="submit">
            {isPending && <span className="loading loading-spinner"></span>}
            Reset Password
          </Button>
        </form>
      </div>
    </section>
  );
};

export default UpdatePassword;
