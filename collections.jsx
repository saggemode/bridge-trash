import React from "react";

//INTERNAL IMPORT

import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";
import Layout from "../components/Layout";

const collection = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];
  return (
    <Layout className="pt-10">
      <div >
        <Banner bannerImage={images.creatorbackground1} />
        <CollectionProfile />
        <Filter />
        <NFTCardTwo NFTData={collectionArray} />

        <Slider />
        <Brand />
      </div>
    </Layout>
  );
};

export default collection;
