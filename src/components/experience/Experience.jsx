import React from "react";
import "./experience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="container">
      <section id="experience" className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-wrapper">
          <VerticalTimeline lineColor={"#cc6600"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#231e1a",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #231e1a",
              }}
              date="2021 Dec - present"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<MdWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Software engineer in data warehouse
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Swedbank Group
              </h4>
              <p style={{ fontStyle: "italic", fontWeight: "300" }}>
                Oracle Data Integrator, Teradata Data Warehouse, Testing, SQL,
                Scaled Agile Framework, Git
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#231e1a",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #231e1a",
              }}
              date="2020 May - 2021 Dec"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<MdWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Senior cartographic engineer
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Latvian Geospatial Information Agency
              </h4>
              <p style={{ fontStyle: "italic", fontWeight: "300" }}>
                Google Earth, Python, SQL, Cartography, ArcGIS
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element-"
              contentStyle={{
                background: "#231e1a",
                color: "#fff",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #231e1a",
              }}
              date="2019 Feb - 2020 May"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<MdWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Cartographic engineer
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Latvian Geospatial Information Agency
              </h4>
              <p style={{ fontStyle: "italic", fontWeight: "300" }}>
                Adobe Photoshop, Cartography, ArcGIS, Adobe Illustrator
              </p>
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
              date="2017 Jul - 2019 Feb"
              dateClassName={"timeline-date"}
              iconStyle={{
                background: "#231e1a",
                color: "#cc6600",
                boxShadow: "0 0 0 4px #cc6600",
              }}
              icon={<MdWork />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#cc6600", fontWeight: "600" }}
              >
                Cartographer
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: "400" }}
              >
                Latvian Geospatial Information Agency
              </h4>
              <p style={{ fontStyle: "italic", fontWeight: "300" }}>
                Spatial Analysis, Cartography, ArcGIS, GIS
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default Experience;
