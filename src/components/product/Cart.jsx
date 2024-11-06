import React, { useContext } from "react";
import { cartContext } from "../../context";

export default function Cart() {
  const { carts } = useContext(cartContext);
  const totalSum = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <div className="bg-seconderyBg pt-10">
      <section className="container mx-auto px-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl text-primaryText">Cart</h1>
          <div className="flex gap-4 items-center justify-center">
            <h2 className="font-bold text-2xl text-primaryText">
              Total Cost: {totalSum}
            </h2>
            <button className="btn rounded-full bg-white border-[1.5px] border-t-primaryBg border-b-pink-500 border-x-primaryBg text-primaryBg text-lg font-semibold hover:bg-primaryBg hover:text-white flex w-fit justify-center items-center">
              Sort By Price{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </button>
            <button className="btn rounded-full bg-gradient-to-tr border-[1.5px] to-primaryBg from-pink-400  text-white text-lg font-semibold hover:bg-primaryBg">
              Purchase
            </button>
          </div>
        </div>
        <div>
          {carts.map((product) => {
            "parvej"
          })}
        </div>
      </section>
    </div>
  );
}
