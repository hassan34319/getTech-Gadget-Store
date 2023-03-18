'use client'
import React from "react";
import { GetServerSideProps } from "next";
import { Tab } from "@headlessui/react";
import ProductItem from "./UI/ProductItem";
import Image from "next/image";
import { urlFor } from "../sanity";
import CartIcon from "./UI/CartIcon";
import { Provider } from "react-redux";
import store from ".././redux/store/store";
import { Toaster } from "react-hot-toast";


function ShowByVendors({
  categories,
  products,
  vendor_image,
}: getByVendorProps) {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref == categories[category]._id)
      .map((product) => <ProductItem product={product} key={product._id} />);
  }; // filter products by category
  return (
    <Provider store={store}>
    <Toaster/>
    <div className=" mt-0 min-h-screen space-y-8 bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]">
      <div className="relative h-10 w-full md:h-15">
        <Image
          src={urlFor(vendor_image[0].image).url()}
          alt="vendor_image"
          fill
          objectFit="contain"
          className="object-center"
        ></Image>
        </div>
      {/* </h1> */}
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? "borderGradient bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
          <Tab.Panel className="tabPanel">
            {showProducts(0)}
          </Tab.Panel>
          <Tab.Panel className="tabPanel">
            {showProducts(1)}
          </Tab.Panel>
          <Tab.Panel className="tabPanel">
            {showProducts(2)}
          </Tab.Panel>
          <Tab.Panel className="tabPanel">
            {showProducts(3)}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </Provider>
  );
}

export default ShowByVendors;
