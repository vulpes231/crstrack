/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookMessenger,
  FaSnapchatGhost,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdHome, MdLogout, MdSms } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { Mail, Fbchat, Instachat, Sms, Snap, Xchat } from "../components";
import {
  fbb,
  gmail,
  insta,
  snapchat,
  text,
  twitter,
  whatsapp,
} from "../assets";

const navLinks = [
  {
    id: "dashboard",
    name: "Dashboard",
  },
  {
    id: "twitter",
    name: "Twitter Logs",
  },
  {
    id: "facebook",
    name: "Facebook Logs",
  },
  {
    id: "instagram",
    name: "Instagram Logs",
  },
  {
    id: "sms",
    name: "SMS Logs",
  },
  {
    id: "snap",
    name: "Snapchat Logs",
  },
  {
    id: "call",
    name: "Gmail Logs",
  },
];

const Dash = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <section className="h-screen w-full flex flex-col md:flex-row  overflow-hidden bg-slate-100">
      <aside className="hidden md:flex md:w-[320px] lg:w-[280px] flex-col max-h-screen bg-black text-slate-100">
        <h3 className="p-4 text-black bg-white">Communication logs</h3>
        <hr />
        <ul className=" flex flex-col gap-2">
          {navLinks.map((link) => {
            const icons =
              link.id === "twitter" ? (
                <BsTwitterX />
              ) : link.id === "facebook" ? (
                <FaFacebookMessenger />
              ) : link.id === "instagram" ? (
                <FaInstagramSquare />
              ) : link.id === "sms" ? (
                <MdSms />
              ) : link.id === "snap" ? (
                <FaSnapchatGhost />
              ) : link.id === "call" ? (
                <IoCallSharp />
              ) : (
                <MdHome />
              );
            return (
              <li
                key={link.id}
                onClick={() => setActive(link.id)}
                className={`${
                  active === link.id ? "text-cyan-600" : ""
                } flex items-center gap-2 border-b py-2 px-4 cursor-pointer hover:text-cyan-500`}
              >
                <span>{icons}</span>
                <span>{link.name}</span>
              </li>
            );
          })}
          <li
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="flex items-center gap-2 border-b p-2 cursor-pointer hover:text-cyan-500 py-2 px-4"
          >
            <MdLogout />
            <span>Logout</span>
          </li>
        </ul>
      </aside>
      <div className="bg-slate-100 w-full p-6">
        {active === "dashboard" ? (
          <div className="">
            <p>
              Welcome to your dashboard{" "}
              <span className="font-bold">{user.email}</span>
            </p>
          </div>
        ) : active === "twitter" ? (
          <Xchat />
        ) : active === "facebook" ? (
          <Fbchat />
        ) : active === "instagram" ? (
          <Instachat />
        ) : active === "sms" ? (
          <Sms />
        ) : active === "snap" ? (
          <Snap />
        ) : active === "call" ? (
          <Mail />
        ) : null}
      </div>
      <aside className="sm:hidden w-full absolute bottom-0 mb-1">
        <h3 className="p-2 bg-black text-white font-bold">My Apps</h3>
        <ul className=" grid grid-cols-3 w-full gap-4 border border-slate-300">
          {navLinks.map((link) => {
            const icons =
              link.id === "twitter" ? (
                <img src={twitter} alt="" className="w-[40px]" />
              ) : link.id === "facebook" ? (
                <img src={fbb} alt="" className="w-[40px]" />
              ) : link.id === "instagram" ? (
                <img src={insta} alt="" className="w-[40px]" />
              ) : link.id === "sms" ? (
                <img src={text} alt="" className="w-[40px]" />
              ) : link.id === "snap" ? (
                <img src={snapchat} alt="" className="w-[40px]" />
              ) : link.id === "call" ? (
                <img src={gmail} alt="" className="w-[40px]" />
              ) : (
                <img src={whatsapp} alt="" className="w-[40px]" />
              );
            return (
              <li
                key={link.id}
                onClick={() => setActive(link.id)}
                className={`${
                  active === link.id ? "bg-slate-300 " : ""
                } flex border border-slate-300 items-center justify-center cursor-pointer hover:text-cyan-500 text-xs w-full p-3`}
              >
                <span>{icons}</span>
                {/* <span>{link.name.split(" ")[0]}</span> */}
              </li>
            );
          })}
          <li
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="flex items-center gap-2 p-3 cursor-pointer py-2 px-4 text-xs border justify-center"
          >
            <MdLogout className="text-[40px]" />
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Dash;
