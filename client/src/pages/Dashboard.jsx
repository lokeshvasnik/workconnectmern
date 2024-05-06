import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Dashboard = () => {
  const [userJob, setUserJob] = useState([]);
  const [location, setLocation] = useState("400028");
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const getUserJobsDetails = async () => {
      try {
        const userJobs = await axios.get(
          `${import.meta.env.VITE_API_URL}/getJobs`,
        );
        setUserJob(userJobs);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of error
      }
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
          {loading ? ( // Render spinner if loading is <true></true>
            <div className="col-span-12 flex items-center justify-center">
              <span className="loading loading-spinner loading-lg text-3xl text-warning"></span>
              {/* Replace Spinner with your actual spinner component */}
            </div>
          ) : (
            filteredJobs != undefined &&
            filteredJobs?.map((item) => (
              <div className="col-span-9" key={item._id}>
                <div className="mb-5 flex flex-col rounded-lg bg-white p-6 md:flex-row">
                  {/* Carousel */}
                  <div className="w-full md:mr-6 md:w-[400px]">
                    <Carousel
                      className="h-full"
                      showArrows={true}
                      showIndicators={false}
                      showStatus={false}
                      showThumbs={false}
                    >
                      <div className="h-full">
                        <img
                          className="h-full rounded-lg object-cover"
                          src={`${import.meta.env.VITE_API_URL}/${item.image}`}
                          alt="Job Image"
                        />
                      </div>
                    </Carousel>
                  </div>

                  <div className="w-full">
                    <div>
                      <h2 className="my-3 text-2xl font-bold text-black">
                        {item.name}
                      </h2>
                      <p>{item.title}</p>
                      <p>
                        Location: {item.location} {item.pincode}
                      </p>
                      <p>{item.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-md bg-[#FFDD00] p-4">
                      <h2 className="font-bold text-black">{item.number}</h2>
                      <button className="w-28 rounded-md bg-white px-4 py-2">
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
