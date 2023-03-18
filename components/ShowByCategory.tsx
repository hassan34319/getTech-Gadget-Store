'use client'
import React from "react";
import { GetServerSideProps } from "next";
import { Tab } from "@headlessui/react";
import ProductItem from "./UI/ProductItem";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Provider } from "react-redux";
import store from ".././redux/store/store";
import { Toaster } from "react-hot-toast";
function ShowByCategories({
  vendors,
  products,
  Category_title,
}: getByCategoryProps) {
  console.log(products);

  const showProducts = (vendor: number) => {
    return products
      .filter((product) => product.vendor._ref == vendors[vendor]._id)
      .map((product) => <ProductItem product={product} key={product._id} />);
  }; // filter products by category
  return (
    <Provider store={store}>
    <Toaster/>
    <div className="relative mt-0 min-h-screen space-y-10 bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]">
      <h1 className="flex justify-center space-y-3 text-4xl font-semibold tracking-wide md:text-5xl xl:text-6xl">
        {/* Tracking-wide gives spacing between letters */}
        <span className="drop-shadow-xl">{Category_title[0].title.toUpperCase()}</span>
      </h1>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {vendors.map((vendor) => (
            <Tab
              key={vendor._id}
              id={vendor._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                }`
              }
            >
              <div className="relative h-[50px] w-[50px]">
                <Image
                  src={urlFor(vendor.image).url()}
                  alt={vendor.title}
                  fill
                  objectFit="contain"
                ></Image>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
          <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
          <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
          <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
          <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </Provider>
  );
}

export default ShowByCategories;
