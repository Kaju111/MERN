import React, { useState } from "react";
import Particle from "./Particle";
import { toast } from "react-toastify";

const Register = () => {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleRegister = (e) => {
      e.preventDefault();
      console.log("yes")
      toast("You are registered successfully ");
    };

  return (
    <div>
      <Particle />

      <section className="flex justify-center mt-[140px]">
        <div className="h-[100px] w-[350px] absolute ">
          <h1 className="text-[35px] text-center  bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000]  text-white rounded-md py-[20px] font-primary border-[#969693] border-[0.2px]">
            Register
          </h1>
        </div>
      </section>

      <section className=" flex justify-center ">
        <div className="main">
          <div className="h-[450px] w-[400px] bg-gradient-to-r from-[#323232] via-[#1F1E1E] to-[#000000] mt-[35px] rounded-md border-[0.2px] border-[#969693]">
            
            <form onSubmit={handleRegister}>

              <h1 className="font-primary w-[320px] bg-white rounded-md m-auto border-[#969693] mt-24 border-[0.2px]">
                <input
                  onChange={e=>setName(e.target.value)}
                  value={name}
                  placeholder="Your name"
                  type="text"
                  className="p-[10px] w-full rounded-md focus:outline-none"
                  required
                />
              </h1>
              <h1 className="font-primary w-[320px] m-auto bg-white rounded-md my-12 border-[#969693] border-[0.2px]">
                <input
                   onChange={e=>setEmail(e.target.value)}
                  value={email}
                  placeholder="Your email"
                  type="email"
                  className="p-[10px] w-full rounded-md focus:outline-none"
                  required
                />
              </h1>
              <h1 className="font-primary w-[320px] m-auto bg-white rounded-md border-[#969693] border-[0.2px]">
                <input
                   onChange={e=>setPassword(e.target.value)}
                  value={password}
                  placeholder="Your password"
                  type="password"
                  className="p-[10px]  w-full rounded-md focus:outline-none"
                  required
                />
              </h1>
              <section className="flex justify-center mt-10">
                <input
                  className="font-primary bg-white text-gray-400 cursor-pointer rounded-md items-center py-[10px] px-[25px] border-[#969693] border-[0.2px]"
                  value="REGISTER"
                  type="submit"
                />
              </section>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
