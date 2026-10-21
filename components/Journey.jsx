"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";

const JourneyCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#953949",
        color: "#fff",
        boxShadow: "0 6px 25px rgba(0, 0, 0, 0.25)",
        borderRadius: "16px",
        padding: "24px",
      }}
      visible={true}
      contentArrowStyle={{ borderRight: "8px solid #953949" }}
      date={experience.date}
      dateClassName="text-white font-bold text-sm"
      iconStyle={{
        background: experience.iconBg || "#383E56",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-rose-100 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[40px] text-center drop-shadow">
          My Journey
        </h2>
        <p className="text-rose-100 text-center text-lg mt-2 font-medium">
          What I have engineered so far
        </p>

        <div className="mt-16 flex flex-col">
          <VerticalTimeline lineColor="#ffffff">
            {experiences.map((experience, index) => (
              <JourneyCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Journey;
