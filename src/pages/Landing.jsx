import React from "react";
import Logo from "../components/Logo";

import { MdLogin } from "react-icons/md";

const styles = {
  input: "p-2 bg-transparent border-b border-slate-800 focus:outline-none",
};

const Landing = () => {
  return (
    <section className="bg-slate-950 h-screen text-white p-6 flex items-center justify-center flex-col">
      <Logo />
      <div className="bg-slate-800 bg-opacity-40 shadow-md border border-slate-800 ">
        <form action="" className="flex flex-col gap-6 p-10">
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />

          <div>
            <button className="bg-cyan-500 py-2 px-7 uppercase flex items-center gap-1">
              <span>login</span>
              <MdLogin />
            </button>
          </div>
          <small>If you have any issues logging in contact admin.</small>
        </form>
      </div>
    </section>
  );
};

export default Landing;
