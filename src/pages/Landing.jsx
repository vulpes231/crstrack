/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { MdLogin } from "react-icons/md";
import userData from "../data/users.json";
import { useNavigate } from "react-router-dom";

const styles = {
  input: "p-2 bg-transparent border-b border-slate-800 focus:outline-none",
};

const Landing = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const user = userData.find(
      (usr) => usr.email === form.email && usr.password === form.password
    );

    if (!user) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email: user.email }));

    setIsValid(true);
  };

  useEffect(() => {
    if (isValid) {
      setTimeout(() => {
        navigate("/dashboard");
        setIsValid(false);
        setLoading(false);
      }, 2000);
    }
  }, [isValid, navigate]);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <section className="bg-slate-100 h-screen text-slate-900 p-6 flex items-center justify-center flex-col gap-6">
      <Logo />
      <div className="bg-slate-300 bg-opacity-40 shadow-md border border-slate-300 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10">
          <h3 className="capitalize">customer login</h3>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleInput}
            required
          />
          {error && <small className="text-red-500 text-xs">{error}</small>}
          {isValid && (
            <small className="text-green-500 text-xs">Login success.</small>
          )}
          <div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-7 uppercase flex items-center gap-1"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>login</span>
                  <MdLogin />
                </>
              )}
            </button>
          </div>
          <small>If you have any issues logging in, contact admin.</small>
        </form>
      </div>
      <span>
        <small className="capitalize font-light text-xs text-slate-600">
          &copy; Cellphone Remote Access 2025, All Rights Reserved
        </small>
      </span>
    </section>
  );
};

export default Landing;
