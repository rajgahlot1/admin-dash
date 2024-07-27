import React, { useContext, useState } from "react";
import Analytics1 from "./Analytics/Analytics1";
import Analytics2 from "./Analytics/Analytics2";
import Analytics3 from "./Analytics/Analytics3";
import Analytics4 from "./Analytics/Analytics4";
import { RiToolsLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
// import SvgImg from "./Svgs";
import { AiOutlineEdit } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import "./App.css";
import { RiChat1Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import img from "./img/photo.jpeg";
import { FiSettings } from "react-icons/fi";
// import {ToolImg} from './Svgs'
import { AiOutlineUser } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { RiFileSettingsLine, RiFolderSettingsFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { RiMailSettingsLine } from "react-icons/ri";
import { RiListSettingsLine } from "react-icons/ri";
import { ThemeContext } from "./ThemeContext";
// import { ImRocket } from "react-icons/im";
const Dash2 = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-100 `}
      style={{ backgroundColor: theme === "dark" ? "#111" : "#e4e4e4" }}
    >
      <Header />
      <Bottom />
      <Overview />
      <AnalyticTool />
    </div>
  );
};
const Header = () => {
  const ToolsArr = [
    { icon: <AiOutlineUser className="icon" /> },
    { icon: <TbMessage className="icon" /> },
    { icon: <IoAnalytics className="icon" /> },
    { icon: <HiOutlineMoon className="icon" /> },
    { icon: <RiSettingsLine className="icon" /> },
    { icon: <HiOutlineLogout className="icon" /> },
  ];
  return (
    <div className="mt-2 d-flex align-items-center justify-content-between header">
      <div className="position-relative">
        {" "}
        <div
          className="position-absolute end-0 fs-4 me-1"
          style={{ color: "#525252" }}
        >
          <BiSearch />
        </div>{" "}
        <input
          type="text"
          placeholder="Search..."
          className="rounded-pill p-2 ms-1 ms-sm-3"
          style={{
            outline: "none",
            border: "1px solid #525252",
            background: "transparent",
          }}
        />
      </div>
      <div className="d-flex fs-4">
        {ToolsArr.map((val, ind) => {
          return (
            <div
              key={ind}
              className={`pe-3 ps-3 headIcon ${
                ind === 1 || ind === 5 ? "line" : ""
              }`}
            >
              {val.icon}
            </div>
          );
        })}
        <div>
          <img
            src={img}
            className="ms-3 me-3 rounded-circle"
            alt=""
            style={{ height: "30px", width: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};
const Bottom = () => {
  return (
    <div className="mt-2  d-flex flex-wrap align-items-center  justify-content-evenly">
      <div
        className="p-0  d-flex align-items-center flex-column rounded text-white position-relative headerBottom"
        style={{
          height: "100px",
          width: "47%",
          background: "linear-gradient(40deg,#00464e,#810551)",
        }}
      >
        <div className="text-center fw-lighter">
          <span className="position-absolute start-0 top-0 ms-1">
            <FiSettings />
          </span>
          <span className="p-2" style={{ borderBottom: "1px solid white" }}>
            Current Notifications
          </span>
        </div>
        <div
          className="  mt-4 m-2 rounded-pill d-flex gap-3 fs-4 ps-2 pe-2"
          style={{ color: "white", backgroundColor: "rgba(255,255,255,0.24)" }}
        >
          {" "}
          <div className="">
            <RiChat1Line />
          </div>
          <div className="">
            <RiChat1Line />
          </div>
          <div className="">
            <RiChat1Line />
          </div>
          <div className="">
            <RiChat1Line />
          </div>
        </div>
      </div>
      {/* <span className='position-absolute top-0 backSvg' style={{left:"0"}}><SvgImg/></span> */}
      <div
        className="p-0  text-white rounded text-white d-flex flex-row align-items-center justify-content-evenly headerBottom"
        style={{
          height: "100px",
          width: "47%",
          background: "linear-gradient(40deg,#00464e,#810551)",
        }}
      >
        <div
          className="text-center pe-2 pe-sm-3 pe-md-4"
          style={{ borderRight: "1px solid white" }}
        >
          <div>
            <AiOutlineUser />
          </div>
          <div>Followers</div>
          <div className="text-success fw-normal">none</div>
        </div>
        <div
          className="text-center pe-2 pe-sm-3 pe-md-4"
          style={{ borderRight: "1px solid white" }}
        >
          <div>
            <TbMessage />
          </div>
          <div>Message</div>
          <div className="text-success fw-normal">+</div>
        </div>
        <div
          className="text-center pe-2 pe-sm-3 pe-md-4"
          style={{ borderRight: "px solid white" }}
        >
          <div>
            <AiOutlineLike />
          </div>
          <div>Like</div>
          <div className="text-success fw-normal">+1</div>
        </div>
        <div className="text-center">
          <div>
            <IoCashOutline />
          </div>
          <div>Earning</div>
          <div className="text-success fw-normal">$</div>
        </div>
      </div>
      {/* <span className='position-absolute top-0 backSvg' style={{left:"0"}}><SvgImg/></span> */}
    </div>
  );
};

const Overview = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-2 ms-2 ">
      <div style={{ color: "#797979" }}>Brief Overview</div>
      <div className=" mt-2 d-flex align-align-items-center justify-content-around">
        <div className="hellos" style={{ width: "23%", height: "240px" }}>
          <div
            className="rounded w-100 h-100"
            style={{ backgroundColor: theme === "dark" ? "#111" : "#e4e4e4" }}
          >
            <Analytics1 />
          </div>
        </div>
        <div className="hellos" style={{ width: "23%", height: "240px" }}>
          <div
            className="rounded w-100 h-100 "
            style={{ backgroundColor: theme === "dark" ? "#111" : "#e4e4e4" }}
          >
            <Analytics2 />
          </div>
        </div>
        <div className="hellos" style={{ width: "23%", height: "240px" }}>
          <div
            className="rounded w-100 h-100 "
            style={{ backgroundColor: theme === "dark" ? "#111" : "#e4e4e4" }}
          >
            <Analytics3 />
          </div>
        </div>
        <div className="hellos" style={{ width: "23%", height: "240px" }}>
          <div
            className="rounded w-100 h-100 "
            style={{ backgroundColor: theme === "dark" ? "#111" : "#e4e4e4" }}
          >
            <Analytics4 />
          </div>
        </div>
      </div>
    </div>
  );
};
const AnalyticTool = () => {
  // const { style } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  const data = [
    { icon: <FaWhatsapp /> },
    { icon: <FaInstagram /> },
    { icon: <RiTwitterLine /> },
    { icon: <FaDribbble /> },
  ];
  const data_second = [
    { icon: <IoSettingsOutline size={27} /> },
    { icon: <RiToolsLine size={27} /> },
    { icon: <AiOutlineUsergroupAdd size={27} /> },
    { icon: <RiToolsLine size={27} /> },
    { icon: <AiOutlineUsergroupAdd size={27} /> },
    { icon: <RiListSettingsLine size={27} /> },
    { icon: <RiToolsLine size={27} /> },
    { icon: <AiOutlineUserSwitch size={27} /> },
    { icon: <RiMailSettingsLine size={27} /> },
  ];
  const data_third=[
    {icon:<RiFolderSettingsFill size={27} />},
    {icon:<RiFileSettingsLine size={27} />},
    {icon:<IoSettingsOutline size={27} />},
  ]
  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset] = useState(315 - (value_i / 100) * 315);
  const [value_i1] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset1] = useState(315 - (value_i1 / 100) * 315);
  const [value_i2] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset2] = useState(315 - (value_i2 / 100) * 315);
  return (
    <div className="mt-2 ms-2 mb-3 ">
      <div style={{ color: "#797979" }}>Analytic Tool</div>
      <div className="w-100 d-flex gap-2" style={{ height: "500px" }}>
        <div className="d-flex gap-2 w-50 h-100">
          <div
            className="w-50 rounded h-100"
            style={{ background: "linear-gradient(40deg,#00464e,#810551)" }}
          >
            <div className="p-2 text-white">Frequently Used</div>

          <div className="d-flex w-100 align-items-center justify-content-between p-2" >
              <div
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
                className="rounded "
              >
                <RiToolsLine size={35} />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
                className="rounded "
              >
                <RiToolsLine size={35} />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
                className="rounded "
              >
                <RiToolsLine size={35} />
              </div>
              <div
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
                className="rounded "
              >
                <RiToolsLine size={35} />
              </div>
            </div>

            <div className="d-flex w-100 align-items-center justify-content-between p-2 " >
              <div
                className="rounded d-flex align-items-center justify-content-center p-0"
                style={{
                  width: "40%",
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
              >
                <RiToolsLine size={35} />
              </div>
              <div
                className="rounded d-flex align-items-center justify-content-center p-0"
                style={{
                  width: "40%",
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                }}
              >
                <RiToolsLine size={35} />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <hr className="m-0 m-1" style={{width:"90%" , background:"white", height:"2px", opacity:"1"}}/>
            </div>
            <div className="p-2 text-white">More Tools</div>
            <div className="w-100 row-cols-4 d-flex align-items-center justify-content-around flex-wrap p-0">
             {data_second.map((val,ind)=>{
              return(
                <div key={ind}
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                  height:"50px",
                  width:"50px"
                }}
                className="rounded  d-flex align-items-center justify-content-center m-1"
              >
                {val.icon}
              </div>
              )
             })}
             </div>
             <div className="d-flex align-items-center justify-content-center">
            <hr className="m-0 m-1" style={{width:"90%" , background:"white", height:"2px", opacity:"1"}}/>
            </div>
            <div className="p-2 text-white">More Tools</div>
            <div className="w-100 d-flex align-items-center justify-content-around flex-wrap p-0">
             {data_third.map((val,ind)=>{
              return(
                <div key={ind}
                style={{
                  backgroundColor: "rgba(522 ,32 ,66 ,0.3)",
                  color: "white",
                  height:"50px",
                  width:"50px"
                }}
                className="rounded  d-flex align-items-center justify-content-center m-1"
              >
                {val.icon}
              </div>
              )
             })}
             </div>
          </div>
          <div
            className="w-50 rounded h-100  text-white"
            style={{ background: "linear-gradient(40deg,#00464e,#810551)" }}
          >
            <div className="position-relative">
              <span className="">
                <AiOutlineEdit className="p-2" size={35} />
              </span>
              <span className="position-absolute end-0">
                <GiSettingsKnobs className="p-2" size={35} />
                <RiChat3Line className="p-2" size={35} />{" "}
                <AiOutlineUserSwitch className="p-2" size={35} />
              </span>
            </div>
            <div
              className="d-flex flex-column align-items-center justify-content-center position-relative gap-3"
              style={{ top: "100px" }}
            >
              <img
                className="rounded-circle"
                style={{
                  height: "110px",
                  width: "110px",
                  border: "2px solid rgba(255,255,255,0.671)",
                }}
                src={img}
                alt=""
              />
              <h4>raj__gahlot</h4>
              <p style={{ fontSize: "11px" }}>
                Web developer and full stack developer
              </p>
              <div className="d-flex align-items-center justify-content-evenly w-100">
                {data.map((val, ind) => {
                  return (
                    <div
                      key={ind}
                      className="fs-4 p-2 rounded d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "rgba(0,0,0,0.171)" }}
                    >
                      {val.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 w-50 h-100">
          <div
            className="text-white w-100 d-flex flex-row align-items-center justify-content-evenly rounded"
            style={{
              height: "33%",
              background: "linear-gradient(40deg,#00464e,#810551)",
            }}
          >
            <div className="position-relative">
              <div
                className="fs-2 position-absolute"
                style={{ top: "50px", left: "33px" }}
              >
                {value_i}%
              </div>{" "}
              <svg
                style={{
                  width: "120px",
                  height: "120px",
                  translate: "3px -4px",
                  rotate: "-90deg",
                  marginTop: "12px",
                }}
              >
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_first DAlJu"
                  style={{
                    strokeWidth: "5",
                    fill: "transparent",
                    stroke: theme === "light" ? "#111" : "#e4e4e4",
                  }}
                />
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_second DAlJu"
                  style={{
                    stroke: "#00464e",
                    strokeWidth: "5",
                    fill: "transparent",
                    strokeLinecap: "round",
                    strokeDasharray: "315",
                    strokeDashoffset: "315",
                    animation: "load 1s ease 1s forwards",
                    color: "#00464e",
                    "--p": value_i_offset,
                  }}
                />
              </svg>
            </div>
            <div>
              <h4 className="text-center">Performance</h4>
              <div className="text-center">
                They use various programming languages and technologies to
                create user-friendly, efficient, and visually appealing digital
                experiences.
              </div>
            </div>
          </div>
          <div
            className="text-white w-100 d-flex flex-row align-items-center justify-content-evenly rounded"
            style={{
              height: "33%",
              background: "linear-gradient(40deg,#00464e,#810551)",
            }}
          >
            <div className="position-relative">
              <div
                className="fs-2 position-absolute"
                style={{ top: "50px", left: "33px" }}
              >
                {value_i1}%
              </div>{" "}
              <svg
                style={{
                  width: "120px",
                  height: "120px",
                  translate: "3px -4px",
                  rotate: "-90deg",
                  marginTop: "12px",
                }}
              >
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_first DAlJu"
                  style={{
                    strokeWidth: "5",
                    fill: "transparent",
                    stroke: theme === "light" ? "#111" : "#e4e4e4",
                  }}
                />
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_second DAlJu"
                  style={{
                    stroke: "#00464e",
                    strokeWidth: "5",
                    fill: "transparent",
                    strokeLinecap: "round",
                    strokeDasharray: "315",
                    strokeDashoffset: "315",
                    animation: "load 1s ease 1s forwards",
                    color: "#00464e",
                    "--p": value_i_offset1,
                  }}
                />
              </svg>
            </div>
            <div>
              <h4 className="text-center">Account Reached</h4>
              <div className="text-center">
                They use various programming languages and technologies to
                create user-friendly, efficient, and visually appealing digital
                experiences.
              </div>
            </div>
          </div>{" "}
          <div
            className="text-white w-100 d-flex flex-row align-items-center justify-content-evenly rounded"
            style={{
              height: "33%",
              background: "linear-gradient(40deg,#00464e,#810551)",
            }}
          >
            <div className="position-relative">
              <div
                className="fs-2 position-absolute"
                style={{ top: "50px", left: "33px" }}
              >
                {value_i2}%
              </div>{" "}
              <svg
                style={{
                  width: "120px",
                  height: "120px",
                  translate: "3px -4px",
                  rotate: "-90deg",
                  marginTop: "12px",
                }}
              >
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_first DAlJu"
                  style={{
                    strokeWidth: "5",
                    fill: "transparent",
                    stroke: theme === "light" ? "#111" : "#e4e4e4",
                  }}
                />
                <circle
                  cx="55"
                  cy="55 "
                  r="50"
                  className="svg-circle_second DAlJu"
                  style={{
                    stroke: "#00464e",
                    strokeWidth: "5",
                    fill: "transparent",
                    strokeLinecap: "round",
                    strokeDasharray: "315",
                    strokeDashoffset: "315",
                    animation: "load 1s ease 1s forwards",
                    color: "#00464e",
                    "--p": value_i_offset2,
                  }}
                />
              </svg>
            </div>
            <div>
              <h4 className="text-center">Detailed Analysis</h4>
              <div className="text-center">
                They use various programming languages and technologies to
                create user-friendly, efficient, and visually appealing digital
                experiences.
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Dash2;
