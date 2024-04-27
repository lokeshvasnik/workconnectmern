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
              src="./jayesh_tak.png"
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
            <div className="flex h-full flex-col  items-center justify-center py-20">
              <h1 className="my-thing text-bold text-center text-[54px] font-bold md:w-[752px]">
                Connecting People
                <Typewriter
                  options={{
                    strings: ["Who Need Assistance With Those Offering Help"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <p className="w-[900px] text-center text-[22px]">
                WorkConnect Is An Innovative Online Platform Designed <br />
                To Facilitate Local Collaboration By Connecting Users Who Need
                Assistance <br /> With Their Day-To-Day Tasks.
              </p>
              <button
                type="button"
                className="my-10 rounded-full bg-[#FFDD00] p-4 px-6 text-center text-2xl font-bold text-black"
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
          <h1 className="my-thing text-bold mx-auto text-center text-[54px] font-bold md:w-[752px]">
            Find your suitable person.
          </h1>
          <p className="mb-10 w-[900px] text-center text-[22px]">
            Get all the local works/tasks listing available near your locality
            in just simple clicks.
          </p>
          <div className="flex space-x-10">
            <div className="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://media.istockphoto.com/id/1449552590/photo/portrait-of-indian-woman-enjoying-while-cooking-meal-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=sSSFGWffGnjDJEX_VCA3YQ5B3T1jQ_0kCbPTL0BItlg="
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Find Cook</h2>
                </div>
              </div>
            </div>
            <div className="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img src="./car_washer.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Find Car Washer</h2>
                </div>
              </div>
            </div>

            <div className="transform rounded-lg px-4 py-6 transition duration-500 hover:scale-110">
              <div className="card glass w-64 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-56fad305fc7134be522d1c4e73521f09"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mx-auto">Find Dog Trainer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade className="mx-20 my-10 flex flex-col items-center justify-center rounded-[48px] bg-white p-48">
        <div>
          <h1 className="my-thing text-bold mx-auto text-center text-[54px] font-bold md:w-[752px]">
            Access Everything Within Your Dashboard.
          </h1>
          <p className="mb-10  text-center text-[22px]">
            Simple Minimal Dashboard
          </p>
          <div>
            <img
              className="mx-auto rounded-lg  border-4 p-10"
              src="./workconnect_dashboard.png"
              alt=""
            />
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
