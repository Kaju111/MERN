import React, { useState } from "react";
import Particle from "./Particle";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("yes");
    toast.error("You are registered successfully ");
  };

  return (
    <div>
      <Particle />

      <section className="mt-[170px]">
        <div className="">
          <section className="flex justify-center">
            <div className="h-[100px] w-[350px] absolute ">
              <h1 className="text-[35px] text-center  bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000]  text-white rounded-md py-[20px] font-primary border-[#969693] border-[0.2px]">
                Signin
              </h1>
            </div>
          </section>

          <section className="flex justify-center">
            <div className="h-[360px] w-[400px] bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000] mt-[35px] rounded-md border-[0.2px] border-[#969693]">
              <form onSubmit={handleRegister}>
                <h1 className="font-primary w-[320px] bg-white rounded-md m-auto border-[#969693] mt-24 border-[0.2px]">
                  <input
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    placeholder="Your email"
                    type="name"
                    className="p-[10px] rounded-md focus:outline-none"
                  />
                </h1>
                <h1 className="font-primary w-[320px] m-auto bg-white rounded-md my-12 border-[#969693] border-[0.2px]">
                  <input
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    placeholder="Your password"
                    type="name"
                    className="p-[10px] rounded-md focus:outline-none"
                  />
                </h1>
                <section className="flex justify-center mt-10">
                  <input
                    className="font-primary bg-white rounded-md text-gray-400 items-center py-[10px] px-[25px] border-[#969693] border-[0.2px]"
                    value="SIGNIN"
                    type="submit"
                  />
                </section>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Signin;
