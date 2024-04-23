import Typewriter from "typewriter-effect";
import Footer from "../components/shared/Footer";
import { useParallax } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { ref } = useParallax({
    easing: "easeOutQuad",
    translateX: [200, -10],
  });
  const { ref: ref2 } = useParallax({
    easing: "easeOutQuad",
    translateX: [200, -10],
  });
  const { ref: ref3 } = useParallax({
    easing: "easeOutQuad",
    translateX: [30, -10],
  });

  const { ref: left1 } = useParallax({
    easing: "easeOutQuad",
    translateX: [-100, 60],
  });

  const { ref: left2 } = useParallax({
    easing: "easeOutQuad",
    translateX: [-70, 60],
  });

  const { ref: left3 } = useParallax({
    easing: "easeOutQuad",
    translateX: [-10, 40],
  });

  // Grid bana k

  return (
    <section>
      <Fade cascade>
        <div className="mt-10 grid grid-cols-12 grid-rows-1 gap-4">
          <div className="col-span-3">
            <img
              ref={ref}
              src="./testione.png"
              className="w-44  cursor-pointer rounded-[24px] border"
              alt=""
            />
            <img
              ref={ref2}
              src="./testione.png"
              className="mt-10  w-44 cursor-pointer rounded-[24px] border"
              alt=""
            />
            <img
              ref={ref3}
              src="./testione.png"
              className="mt-10 w-44 cursor-pointer rounded-[24px] border"
              alt=""
            />
          </div>

          <div className="col-span-6 col-start-4">
            <div class="flex h-full flex-col  items-center justify-center py-20">
              <h1 class="my-thing text-bold text-center text-[54px] font-bold md:w-[752px]">
                Connecting People
                <Typewriter
                  options={{
                    strings: ["Who Need Assistance With Those Offering Help"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p class="w-[900px] text-center text-[22px]">
                WorkConnect Is An Innovative Online Platform Designed <br />
                To Facilitate Local Collaboration By Connecting Users Who Need
                Assistance <br /> With Their Day-To-Day Tasks.
              </p>
              <button
                type="button"
                class="my-10 rounded-full bg-[#FFDD00] p-4 px-6 text-center text-2xl font-bold text-black"
              >
                Join Now
              </button>
            </div>
          </div>
          <div className="col-span-3 col-start-10">
            <img
              ref={left1}
              src="./testitwo.png"
              className="w-44  cursor-pointer rounded-[24px] border"
              alt=""
            />

            <img
              ref={left2}
              src="./creator.png"
              className="mt-10 w-44  cursor-pointer rounded-[24px] border"
              alt=""
            />

            <img
              ref={left3}
              src="./creator.png"
              className="ml-16 mt-10 w-40 cursor-pointer rounded-[24px] border"
              alt=""
            />
          </div>
        </div>
      </Fade>

      <Fade className="mx-20 my-10 flex flex-col items-center justify-center rounded-[48px] bg-white p-48">
        <div>
          <h1 class="my-thing text-bold mx-auto text-center text-[54px] font-bold md:w-[752px]">
            Find your suitable service.
          </h1>
          <p class="mb-10 w-[900px] text-center text-[22px]">
            Get all the local jobs listing available near your locality in just
            simple clicks.
          </p>
          <div className="flex space-x-10">
            <div class="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="	https://akam.cdn.jdmagicbox.com/images/website/packersandmovers.png
                  "
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Repairing Work</h2>
                  <div className="card-actions justify-end">
                    <button
                      type="button"
                      class="text-medium w-full rounded-full bg-[#F7D046] p-4 px-6 text-center text-sm font-bold text-black"
                    >
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/website/ac_repairs.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Repairing Work</h2>
                  <div className="card-actions justify-end">
                    <button
                      type="button"
                      class="text-medium w-full rounded-full bg-[#F7D046] p-4 px-6 text-center text-sm font-bold text-black"
                    >
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/website/carpenter.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Find Carpainters</h2>
                  <div className="card-actions justify-end">
                    <button
                      type="button"
                      class="text-medium w-full rounded-full bg-[#F7D046] p-4 px-6 text-center text-sm font-bold text-black"
                    >
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade className="mx-20 my-10 flex flex-col items-center justify-center rounded-[48px] bg-white p-48">
        <div>
          <h1 class="my-thing text-bold mx-auto text-center text-[54px] font-bold md:w-[752px]">
            Access Everything Within Your Dashboard.
          </h1>
          <p class="mb-10 w-[900px] text-center text-[22px]">
            Simple Minimal Dashboard
          </p>
          <div>
            <img className="mx-auto" src="./dashboard.png" alt="" />
          </div>
        </div>
      </Fade>

      <Fade>
        <Footer />
      </Fade>
    </section>
  );
};

export default Home;