import React from "react";
import Banner from "../components/Home/Banner";
import Listing from "../components/Home/Listing";
import ImageWithText from "../components/Home/ImageWithText";
import EarlyImg from "../images/earlyAdoption.svg";
import ownershipImg from "../images/ownership.svg";
import popImg from "../images/pop.svg";

const earlyAdoption = {
  section: "earlyAdoption",
  image: EarlyImg,
  heading: "Early adoption made easy",
  description:
    "Be involved in the metaverse, gaming and  blockchain startups from the start. YOIU is the place where users can find innovative startups in their earliest stages. Adoption should be easy and fast therefore YOIU provides userd with a simple UI to be involved with just a few clicks.",
  buttonText: "Listing Items Q3/Q4",
};

const ownership = {
  section: "ownership",
  image: ownershipImg,
  heading: "We take the ownership to the next level",
  description:
    "Use your NFTs as a gateway to the metaverse, gaming & co. YOIU allows users to utilize verified NFTs to get access to exclusive listings. These NFTs will be available through airdrops on Twitter and on several NFT marketplaces. In case you own a Bored Ape, Crypto Punk, Azuki or other famous NFTs (NFT list will be realized in Q3) you will be airdropped with different TIER NFTs which you can use by yourself of handout to your friends and family!",
  buttonText: "Check It Out Q3",
};

const pop = {
  section: "pop",
  image: popImg,
  heading: "We take the ownership to the next level",
  description:
    "Use your NFTs as a gateway to the metaverse, gaming & co. YOIU allows users to utilize verified NFTs to get access to exclusive listings. These NFTs will be available through airdrops on Twitter and on several NFT marketplaces. In case you own a Bored Ape, Crypto Punk, Azuki or other famous NFTs (NFT list will be realized in Q3) you will be airdropped with different TIER NFTs which you can use by yourself of handout to your friends and family!",
  buttonText: "Check It Out Q3",
};

const Home = () => {
  return (
    <div>
      <Banner />
      <Listing />
      <ImageWithText data={earlyAdoption} />
      <ImageWithText data={ownership} />
      <ImageWithText data={pop} />
    </div>
  );
};

export default Home;
