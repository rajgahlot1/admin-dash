import React, { useContext, useState } from "react";
import img from "./img/photo.jpeg";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { FiChevronLeft } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { TbDashboard } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";
import {  AiOutlineUsergroupAdd } from "react-icons/ai"; //AiFillEnvironment,
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbFileUpload } from "react-icons/tb";
import { BiMessageAltAdd } from "react-icons/bi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdSwapHoriz } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import SvgImg from "./Svgs";


//
const Dash = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [show,setshow]= useState(false)
  const Navdata = [
    { icon: <TbDashboard />, name: "Dashboard" },
    { icon: <VscGraphLine />, name: "Analytics" },
    { icon: <FiMessageSquare />, name: "Messages" },
    { icon: <AiOutlineUsergroupAdd />, name: "Followers" }, //dddddd
    { icon: <MdOutlineNotificationsActive />, name: "Notifications" },
    { icon: <RiAccountCircleLine />, name: "Following" },
    { icon: <AiOutlineDollarCircle />, name: "Earning" },
    { icon: <TbFileUpload />, name: "Posts" },
    { icon: <BiMessageAltAdd />, name: "Message Request" },
    { icon: <AiOutlineUserSwitch />, name: "Change Account" }, //dsdd
    { icon: <MdSwapHoriz />, name: theme==="light"? "Switch to dark theme": "Switch to light theme" },
    { icon: <BiDotsHorizontalRounded />, name: "Mode details" },
  ];
    return (
    <div
      className="position-relative"
      style={{
        top: "0",
        height: "",
        minWidth:"60px",
        width: show ? "7%" : "20%",
        background: "linear-gradient(10deg,#810551,#05454d)",
        overflow:"hidden"
      }}
    >
        <SvgImg/>
      <div
        className="mt-0  m-2 d-flex flex-column align-items-center p-2 justify-content-center position-relative"
        style={{ top: "6px", borderRadius: "10px" }}
      >
        <div onClick={()=>setshow(!show)} className=" end-0 text-white  fs-5" style={{position:show? "relative" :"absolute" ,top:"-3px", transform: show ? "rotate(180deg)": ""}}>
          <FiChevronLeft />
        </div>
        <div>
          <img
            src={img}
            alt=""
            className="rounded-circle p-2"
            style={{ backgroundSize: "cover", height: "60px", width: "60px" }}
          />
        </div>
        <div className={`text-white p-2 ${show ? "d-none" : ""}`}>raj gahlot</div>
      </div>
      <div className="p-2 icons">
        {Navdata.map((val, ind) => {
          return (
            <div
              style={{ borderRadius: "10px" }}
              className={`d-flex mb-2 mt-0 p-2 flex-row ${show ? "align-items-center justify-content-center" : ""} text-white icon position-relative  `}
            onClick={ind===10 ? toggleTheme: null}
            >
              <div className="fs-4 d-flex align-items-center justify-content-center">{val.icon}</div>
              <div className={`ms-2 d-flex align-items-center justify-content-center ${show ? "d-none" : ""} ${
                ind === 3 || ind === 9 ? "underlines" : ""
              }`}>
                {val.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dash;
