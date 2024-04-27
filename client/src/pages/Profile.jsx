import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  // const [images, setImages] = React.useState([]);
  const [profile, setProfileData] = useState([]);
  const { userData } = useContext(UserContext);

  console.log();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getUserJobsDetails = async () => {
      const userJobs = await axios.get(
        `${import.meta.env.VITE_API_URL}/getUserProfile?user_id=${
          userData.user.id
        }`,
      );
      setProfileData(userJobs);
    };
    getUserJobsDetails();
  }, []);

  const onSubmitHandler = async (formData) => {
    console.log(formData);
    try {
      // const newUser = { email, password, confirmPassword, username };
      const { username, number } = formData;

      await axios.put(
        `http://localhost:3000/updateUserProfile/${userData.user.id}`,
        {
          username,
          number,
        },
      );

      toast.success("Sucessfully Updated");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <>
      <div className="px-6 py-8">
        <div className="mb-10 rounded-xl bg-white p-10">
          {profile?.data?.map((item) => (
            <div
              className="flex items-center justify-start space-x-2"
              key={item.number}
            >
              <img
                className="w-20"
                src="https://www.reshot.com/preview-assets/icons/9E63DBP5AS/smile-9E63DBP5AS.svg"
                alt=""
              />
              <div>
                <h2 className="text-2xl">Hi, {item.username}</h2>
                <p>{item.number}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Update Profile */}

        <h2 className="mb-4 text-2xl font-bold">Update Profile</h2>
        <div class="formbold-form-wrapper mx-0">
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
                  placeholder="Full Name"
                  class="formbold-form-input"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>
              <div>
                <label for="location" class="formbold-form-label">
                  {" "}
                  Phone Number{" "}
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
              </div>
            </div>

            <button class="formbold-btn">Save Changes</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
