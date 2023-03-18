"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import ProductItem from "./UI/ProductItem";
import CartIcon from "./UI/CartIcon";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { Toaster } from "react-hot-toast";
function NewPromos({ categories, products }: QueryProps) {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref == categories[category]._id)
      .map((product) => <ProductItem product={product} key={product._id} />);
  }; // filter products by category
  return (
    <Provider store={store}>
      <Toaster/>
      <CartIcon />
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-6xl ">
          Most Popular
        </h1>
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

export default NewPromos;
