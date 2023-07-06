import React, { useState } from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { useForm } from "react-hook-form";
import { Button } from "../components/componentsindex.js";
import TextInput from "../components/TextInput";

const LoginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${'flex items-center gap-8 mt-6 p-5 rounded-lg text-xl cursor-pointer border-1 transition-all'} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className=''
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 relative ">OR</p>

        <div className="mt-3">
          <TextInput
            label={"Email"}
            fieldName="name"
            placeHolder="Enter valid Email"
            register={register}
          />

          <TextInput
            label={"Password"}
            fieldName="password"
            type="password"
            placeHolder="Enter Valid Password"
            register={register}
          />
        </div>

        <Button btnName="Continue" classStyle="w-full mt-3 flex justify-items-center text-xl" />
      </div>
    </div>
  );
};

export default LoginAndSignUp;
