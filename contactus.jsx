import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";
import Layout from "../components/Layout";

const contactus = () => {
  return (
    <Layout>
      <div className="w-full pt-28 ">
        <div className="w-5/6 m-auto">
          <h1 className="item-center text-2lg font-bold">Contact</h1>
          <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] md:grid-cols-[1fr_2fr] sm:grid-cols-1 sm:gap-1 gap-5 items-center self-start mb-10">
            <div>
              <div>
                <h3>🗺 ADDRESS</h3>
                <p className="leading-3 text-lg ">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div>
                <h3>💌 EMAIL</h3>
                <p className="leading-2 text-lg ">nc.example@example.com</p>
              </div>
              <div className="selection:">
                <h3>☎ PHONE</h3>
                <p>000-123-456-7890</p>
              </div>
              <div>
                <h3>🌏 SOCIALS</h3>
                <a href="#" className=" p-2 text-lg rounded-full">
                  <TiSocialFacebook />
                </a>
                <a href="#">
                  <TiSocialLinkedin />
                </a>
                <a href="#" className=" p-2 text-lg rounded-full">
                  <TiSocialInstagram />
                </a>
                <a href="#" className=" p-2 text-lg rounded-full">
                  <TiSocialYoutube />
                </a>
                <a href="#" className=" p-2 text-lg rounded-full">
                  <TiSocialTwitter />
                </a>
              </div>
            </div>

            <div>
              <form>
                <div className={formStyle.Form_box_input}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    placeholder="shoaib bhai"
                    className={formStyle.Form_box_input_userName}
                  />
                </div>
                <div className={formStyle.Form_box_input}>
                  <label htmlFor="email">Email</label>
                  <div className={formStyle.Form_box_input_box}>
                    <div className={formStyle.Form_box_input_box_icon}>
                      <HiOutlineMail />
                    </div>
                    <input type="text" placeholder="Email*" />
                  </div>
                </div>
                <div className={formStyle.Form_box_input}>
                  <label htmlFor="description">Message</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    placeholder="something about yourself in few words"
                  ></textarea>
                </div>
                <Button
                  btnName="Send Message"
                  handleClick={() => {}}
                  classStyle="mt-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contactus;
