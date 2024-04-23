import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/UserContext";
import axios from "axios";

const Profile = () => {
  // const [images, setImages] = React.useState([]);
  const [profile, setProfileData] = useState([]);
  const { userData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getUserJobsDetails = async () => {
      const userJobs = await axios.get(
        `http://localhost:3000/getUserProfile?user_id=${userData.user.id}`,
      );
      setProfileData(userJobs);
    };
    getUserJobsDetails();
  }, []);

  const onSubmitHandler = async (formData) => {
    console.log(images);
  };

  console.log(profile.data);
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

        <div class="formbold-form-wrapper mx-0">
          <form
            className="rounded-xl p-20"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div class="formbold-input-flex">
              <div>
                <label for="firstname" class="formbold-form-label">
                  Username{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  class="formbold-form-input"
                  {...register("name", {
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
                  {...register("location", {
                    required: "Location is required",
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
