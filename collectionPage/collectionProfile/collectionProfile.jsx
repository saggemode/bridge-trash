import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import images from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className="w-full mt-20">
      <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr] md:grid-cols-[1fr] sm:grid-cols-[1fr] sm:p-4 sm:gap-4  rounded-2xl items-center my-0 mx-auto py-4 px-8 gap-12">
        <div className=''>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className="rounded-2xl"
          />

          <div className="flex gap-4 text-2xl items-center justify-center mt-1  bg-slate-500 rounded-2xl border-2 p-2 ease-in-out hover:bg-violet-600 shadow-slate-200">
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className='grid self-start'>
          <h1 className="text-2xl font-bold leading-none md:p-4">Awesome NFTs Collection</h1>
          <p className="leading-1 text-lg px-2 pt-2">
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3  md:grid-cols-[1fr]  mt-5'>
            {cardArray.slice(0, 3).map((el, i) => (
              <div
                className='shadow-slate-600 py-8 bg-slate-700 leading-none items-center rounded-full '
                key={i + 1}
              >
                <small className="block leading-3">Floor price</small>
                <p className="text-lg leading-none">${i + 1}95,4683</p>
                <span className="decoration-blue-900">+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;
