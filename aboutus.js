import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import { Brand } from "../components/componentsindex";
import images from "../img";
import Layout from "../components/Layout";

const aboutus = () => {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      images: images.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Co-Founder, Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <Layout>
      <div className="w-full mb-20">
        <div className="w-90 m-auto md:w-90 ">
          <div className="grid md:grid-cols-2 md:gap-2 item-center ">
            <div className=''>
              <h1 className="text-4xl leading-2">👋 About Us.</h1>
              <p className="text-2xl leading-5">
                We’re impartial and independent, and every day we create
                distinctive, world-class programmes and content which inform,
                educate and entertain millions of people in the around the
                world.
              </p>
            </div>
            <div className=''>
              <Image src={images.hero2} alt="info"/>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-4xl leading-2">⛱ Founder</h2>
            <p className="text-2xl w-72 leading-5">
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content
            </p>
          </div>

          <div className="mt-5 mb-10 md:mt-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              {founderArray.map((el, i) => (
                <div className="rounded-md p-1" key={i}>
                  <Image
                    src={el.images}
                    alt={el.name}
                    width={500}
                    height={500}
                    className="rounded-md"
                  />
                  <h3 className="text-xl">{el.name}</h3>
                  <p className="text-lg">{el.position}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-5'>
            <h2 className="text-4xl leading-2">🚀 Fast Facts</h2>
            <p className="text-2xl leading-5">
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content
            </p>
          </div>

         
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 sm:grid-cols-2 mt-4'>
              {factsArray.map((el, i) => (
                <div className='p-2 rounded-md bg-slate-700' key={i}>
                  <h3 className="text-xl">{el.title}</h3>
                  <p>{el.info}</p>
                </div>
              ))}
            </div>
         
        </div>
        <Brand />
      </div>
    </Layout>
  );
};

export default aboutus;
