import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getLocation } from "../utils/location";

const Dashboard = () => {
  const [userJob, setUserJob] = useState([]);
  const [location, setLocation] = useState("400028");

  // // FETCH ON MOUNT
  // useEffect(() => {
  //   async function fetchLocation() {
  //     try {
  //       const { postcode } = await getLocation();
  //       setLocation(postcode);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchLocation();
  // }, []);

  useEffect(() => {
    const getUserJobsDetails = async () => {
      const userJobs = await axios.get(
        `${import.meta.env.VITE_API_URL}/getJobs`,
      );
      setUserJob(userJobs);
    };
    getUserJobsDetails();
  }, []);

  // Filter jobs where location matches postcode
  const filteredJobs = userJob.data?.filter((job) => job.pincode === location);

  return (
    <>
      <div className="px-6 py-0">
        {/* Grid 1 */}
        <div className="grid grid-cols-9 grid-rows-1 gap-12">
          {filteredJobs != undefined &&
            filteredJobs?.map((item) => (
              <div className="col-span-12" key={item._id}>
                <div className="mb-5 flex rounded-lg bg-white p-6">
                  <div className="flex w-full">
                    {/* Carousel */}
                    <Carousel
                      className="h-full w-[400px]"
                      showArrows={true}
                      showIndicators={false}
                      showStatus={false}
                      showThumbs={false}
                    >
                      <div className="h-full">
                        <img
                          className="h-full rounded-lg object-cover"
                          src={`http://localhost:3000/${item.image}`}
                          alt="Job Image"
                        />
                      </div>
                    </Carousel>

                    <div className="mx-5 w-full ">
                      <div className="w-full">
                        <h2 className="my-3 text-[20px] font-bold text-black">
                          {item.name}
                        </h2>
                        <p>{item.title}</p>
                        <p>
                          Location: {item.location} {item.pincode}
                        </p>
                        <p>{item.description}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-md bg-[#ffdd00c9] p-4">
                        <h2 className="font-bold text-black">{item.number}</h2>
                        <button className="w-40 rounded-[7px] bg-white px-[24px] py-[7px]">
                          Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Grid 2 */}
      </div>
    </>
  );
};

export default Dashboard;
