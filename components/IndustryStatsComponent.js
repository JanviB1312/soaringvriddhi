import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function IndustryStatsComponent() {
  /*  useEffect(() => {
     Aos.init({ duration: 1000 });
   });
  */
  const [schoolCount, setSchoolCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  const schoolsPartnered = 23;
  const clientsServed = 67;
  const studentsReached = 10000;

  useEffect(() => {
    Aos.init({ duration: 1000 });

    // Setup intervals for all counters
    setupCounter(schoolsPartnered, setSchoolCount, 6000);
    setupCounter(clientsServed, setClientCount, 7000);
    setupCounterForStudentReached(studentsReached, setStudentCount, 8000);
  }, []);

  const setupCounter = (target, setter, duration) => {
    let start = 0;
    let intervalTime = duration / target;

    let timer = setInterval(() => {
      start++;
      setter(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, intervalTime);
  };

  const setupCounterForStudentReached = (target, setter, duration) => {
    let start = 0;
    let intervalTime = duration / target;

    let timer = setInterval(() => {
      start=start+10;
      setter(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, intervalTime);
  };

  return (
    <div className="w-screen bg-white p-4 place-content-center flex justify-center my-10">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="w-4/6 sm:w-3/6 bg-logo-blue text-white rounded sm:p-10 p-2"
      >
        {/* <div className="text-center text-5xl font-bold sm:text-7xl mb-5">
          Our Stats
        </div> */}
        <div className="grid min-h-max grid-cols-1  sm:grid-cols-3 sm:divide-x gap-4">
          <div className="">
            <div className="flex flex-col items-center gap-2">
              <div className="text-lg text-center text-white">
                Students Reached
              </div>
              <div className="text-5xl min-w-max text-white ">{studentCount}</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center gap-2">
              <div className="text-lg text-center text-white">
                Schools Partnered
              </div>
              <div className="text-5xl text-white">{schoolCount}</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center gap-2 ">
              <div className="text-lg text-center text-white">
                Clients Served
              </div>
              <div className="text-5xl text-white">{clientCount}</div>
            </div>
          </div>
        </div>
        {/* <div className="grid sm:min-h-40 min-h-80 grid-cols-2 sm:grid-cols-12">
          <div className=" sm:col-start-3 col-span-2">
            <div className="flex flex-col items-center gap-2 ">
              <div className="text-5xl ">23</div>
              <div className="text-lg">Schools Partnered</div>
            </div>
          </div>
          <div className=" sm:col-start-9 col-span-2">
            <div className="flex flex-col items-center gap-2 ">
              <div className="text-5xl ">67</div>
              <div className="text-lg">Clients Served</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default IndustryStatsComponent;
