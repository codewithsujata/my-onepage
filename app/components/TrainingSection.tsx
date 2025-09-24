"use client";

import { FaBone, FaHome, FaBriefcaseMedical, FaPaw } from "react-icons/fa";
import { GiSlippers, GiRabbitHead, GiDogBowl, GiScissors } from "react-icons/gi";

export default function TrainingSection() {
  const IconComponents = [FaBone, GiDogBowl, FaHome, GiRabbitHead, FaBriefcaseMedical, GiScissors, GiSlippers, FaPaw];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Food. Love.<br />
            <span className="text-orange-500">Trainings</span>
          </h1>
          <hr className="w-12 border-t border-gray-300 mb-6 mx-auto md:mx-0" />
          <p className="text-gray-500 leading-relaxed">
            High energy combined with lots of smarts lends itself to disaster when the dog is not properly cared for. 
            It’s imperative that Corgis receive appropriate amounts of{" "}
            <span className="font-semibold text-gray-700">exercise, special food, bath, care and brain activities.</span>{" "}
            Be caring and responsible.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-[32rem] h-[32rem] rounded-full border border-gray-200 flex items-center justify-center">
            <div className="text-center max-w-xs">
              <h3 className="text-2xl font-semibold text-gray-900">How to Train?</h3>
              <p className="text-gray-500 text-base mt-2 px-4">
                Fitness is not for Corgi, so please do not them get lazy right away! Exercise and play!
              </p>
              <button className="mt-6 text-base font-semibold text-gray-900 hover:text-orange-500">
                LEARN MORE →
              </button>
            </div>

            {IconComponents.map((Icon, index) => {
              const rotationDegree = (360 / 8) * index;
              return (
                <div
                  key={index}
                  className="absolute transform transition-transform duration-300"
                  style={{ transform: `rotate(${rotationDegree}deg) translate(13rem) translateY(-8rem) rotate(-${rotationDegree}deg)` }}
                >
                  <div className="cursor-pointer group relative w-23 h-23 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
                    <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 z-0"></div>
                    <Icon className="relative z-10 text-6xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
