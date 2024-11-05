import React from "react";
import bannerImg from "../../assets/bannerImg.png";
export default function Banner() {
  return (
    <div className="">
      <div className="hero bg-primaryBg text-white pb-72">
        <div className="hero-content text-center z-10">
          <div className="max-w-6xl">
            <h1 className="text-6xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 max-w-3xl mx-auto font-normal text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-primaryBg font-bold text-xl rounded-full ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 w-3/4 mx-auto rounded-3xl border-2 -mt-60 bg-white/20  bg-opacity-10  border-white">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="rounded-3xl w-full h-full"
        />
      </div>
    </div>
  );
}
