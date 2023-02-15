import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <div className="container">
      <section id="education" className="education">
        <h2 className="section-title">Education</h2>
        <div className="education-wrapper">
          <VerticalTimeline lineColor={"#cc6600"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#231e1a",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #231e1a",
              }}
              date="2014 - 2016"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<IoSchoolSharp />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Environmental Science
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Professional Master`s Degree in Environmental Planning
              </h4>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Specialist in Environmental Management
              </h4>
              <p>University of Daugavpils</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#231e1a",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #231e1a",
              }}
              date="2011 - 2014"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<IoSchoolSharp />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Environmental Science
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Bachelor of Natural Sciences in Environmental Science
              </h4>
              <p>University of Daugavpils</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
            />
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default Education;
