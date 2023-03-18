"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
{
  /* Icons use an upper camel case naming convention and are always suffixed with the word Icon */
}
import MyMenu from "./UI/Menu";
import { Provider, useSelector } from "react-redux";
import { selectCartItems } from "../redux/slices/CartSlice";
import PopoverElement from "./UI/Popover";
import store from ".././redux/store/store";
import CheckoutIconHeader from "./checkoutIconHeader";
import { useSession, signIn, signOut } from "next-auth/react";
import { Popover, Transition } from "@headlessui/react";
import { FiLogOut } from "react-icons/fi"

// Type rfce to create component and export it with the same name as your page
// Image component imported by next/image can be used isntead of regular img html tag and is lazy loaded by default.
type Props = {
  links_categories: { href: URL; label: String }[];
  links_vendors: { href: URL; label: String }[];
};
function Header({ links_categories, links_vendors }: Props) {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]  p-4">
      {/* Z Index ( z-index ) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index. */}
      {/* bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB] */}
      <PopoverElement
        links_categories={links_categories}
        links_vendors={links_vendors}
      />
      <div className="items-center justify-center md:flex md:w-1/5">
        {/* So by default it is in center and when md screen comes ot goes to 20% width of the total width of page */}
        {/*Tailwind Styles are mobile first so whatever we style is for mobile and then we add breakpoints for changes for bigger screens like md means for screen sizes greater than md*/}
        <Link href="/">
          {/*Adds a Link to the apple tag to homepage */}
          <div className="relative h-5 w-40 cursor-pointer opacity-75 transition hover:opacity-100">
            {/* //Tailwind by default has no margins so content starts right from top left, h and w are height and width */}
            {/* //Relative must be added when using layout=fill for the image so that div is relative to the size of image.  */}
            <Image
              src="/my_logo.png"
              alt="company_logo"
              layout="fill"
              objectFit="contain"
            />
            {/* layout_fill surrounds the image with the parent div i.e container
       object fit helps mantain the aspect ratio of picture by displaying the image of its exact size. */}

            {/* //Must White List this domain by adding it to next config file. */}
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        {/* Flex 1 means you want this div to take as much space as possible so 80% space as 20% space is taken by above container as w=1/5 for that. Space x means apce between components horizontally */}

        {/* So initially these anchor tqgs are hidden but when medium screen is reached the flexbox properties we defined are activated and items are centered with space of 8 between them  */}
        <div>
          <Link href="/" className="headerLink">
            Home
          </Link>
        </div>
        <div>
          <Link href="/about" className="headerLink">
            About
          </Link>
        </div>
        <div className="headerLink">
          <MyMenu links={links_categories} title={"Categories"}></MyMenu>
        </div>
        <div className="headerLink">
          <MyMenu links={links_vendors} title={"Brands"}></MyMenu>
        </div>

        {/* You can also make a seperate class named headerLink and apply to all 4 links and then go to global.css and 
        @layer components : {
          .headerLink : {
            @apply cursor-pointer opacity-75 transition hover:opacity-100
          }
        }  */}
      </div>
      <div className="flex w-1/5 items-center justify-center gap-x-4 md:w-1/5 md:gap-x-6 ">
        {/* https://heroicons.com/ */}
        <MagnifyingGlassIcon className="headerIcon hidden md:flex" />
        {/* //See Global Css FIle Must Give height and width to the icons for them to be seen. */}
        <Provider store={store}>
          <CheckoutIconHeader />
        </Provider>
        {session ? (
          <div className="">
            <Popover className="">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <Image
                      src={
                        session?.user?.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      }
                      alt=""
                      className="cursor-pointer rounded-full"
                      width={34}
                      height={34}
                      // onClick={() => signOut()}
                    />
                  </Popover.Button>
                  <Popover.Panel className="absolute right-[5%] w-max">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative gap-8 bg-white p-7">
                        <div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <Image
                              src={
                                session?.user?.image ||
                                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                              }
                              alt=""
                              className="rounded-full"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="ml-auto">
                            <p className="text-sm font-medium text-gray-900">
                              {session?.user?.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {session?.user?.email}
                            </p>
                          </div>
                          <div   className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 cursor-pointer" onClick={() => signOut()} >
                              <FiLogOut />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()} />
        )}

        {/* {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="headerIcon"
             onClick={() => signIn()}
          />
        )} */}
      </div>
    </header>
  );
}

export default Header;
