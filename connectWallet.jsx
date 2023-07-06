import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT

import images from "../img";
import Layout from "../components/Layout";

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];
  return (
    <Layout>
      <div className="pt-36 w-full md:w[90]">
        <div className="m-auto w-3/5">
          <h1 className="text-xl sm:text-lg">Connect your wallet</h1>
          <p className="text-2xl pb-2  border-b-4">
            Connect with one of our avaliabl wallet providers or create a new
            one
          </p>

          <div className="mt-2">
            {providerArray.map((el, i) => (
              <div
                className={`${"flex  items-center gap-2 rounded-2xl mt-10 border-0  p-1 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"} ${
                  activeBtn == i + 1 ? "border-4 border-sky-500" : ""
                }`}
                key={i + 1}
                onClick={() => setActiveBtn(i + 1)}
              >
                <Image
                  src={el.provider}
                  alt={el.provider}
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectWallet;
