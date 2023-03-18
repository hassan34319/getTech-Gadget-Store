'use client'
import React from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
type Props =  {
    links_categories : {href : URL, label : String}[],
    links_vendors :  {href : URL, label : String}[]
}
import Link from "next/link"

function PopoverElement({links_vendors,links_categories} : Props) {
  return (
    <Popover className="relative w-1/5 md:hidden">
      <Popover.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Popover.Button>
      <Popover.Panel className="z-60 border-rounded -translate-x-1/6 absolute w-max rounded-xl bg-[#35383c] p-5 text-white">
        <div className="block space-y-4">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <Disclosure as="div" className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full space-x-2">
                  <span>Categories</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="">
                  <ul className="mt-4 space-y-4">
                    {links_categories.map((category) => {
                      return (
                        <li>
                          <Link href={category.href}>· {category.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full space-x-2">
                  <span>Brands</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" text-white">
                  <ul className="mt-4 space-y-4">
                    {links_vendors.map((brand) => {
                      return (
                        <li>
                          <Link href={brand.href}>· {brand.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default PopoverElement;
