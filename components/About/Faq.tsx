"use client"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FaqText() {
  return (
    <div className="md:flex md:justify-between">
      <div className="w-full px-4 pt-16 md:w-[50%]">
        <div className="mx-auto w-full max-w-md space-y-5 rounded-2xl bg-transparent p-2">
          <h1 className="flex justify-center space-y-3 text-5xl font-semibold tracking-wide md:justify-start md:text-4xl lg:text-6xl xl:text-7xl">
            {/* Tracking-wide gives spacing between letters */}
            <span className="drop-shadow-xl">MISSION</span>
          </h1>
          <p>
            Welcome to our ecommerce store, where we are passionate about
            providing the latest and greatest gadgets to our customers. Our team
            is made up of technology enthusiasts who love to stay up to date
            with the latest advancements in the industry.
             We believe that
            gadgets are not just tools, but an essential part of modern life,
            whether you're a professional, a student, or simply someone who
            loves to explore new technology. That's why we have curated a
            collection of gadgets that are innovative, high-quality, and fun to
            use. Our mission is to provide our customers with an exceptional
            shopping experience, from the moment they browse our website to the
            moment their gadgets arrive at their doorstep. We understand that
            shopping for gadgets online can be overwhelming, which is why we've
            made our website easy to navigate and our customer support team
            available to answer any questions or concerns.
          </p>
        </div>
      </div>
      <div className="w-full px-4 pt-16 md:w-[50%]">
        <div className="mx-auto w-full max-w-md space-y-10 rounded-2xl bg-transparent p-2">
          <h1 className="flex justify-center space-y-3 text-5xl font-semibold tracking-wide md:justify-start md:text-4xl lg:text-6xl xl:text-7xl">
            {/* Tracking-wide gives spacing between letters */}
            <span className="drop-shadow-xl">FAQS</span>
          </h1>
          <div className="space-y-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How can I place an order?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    You can place an order on our website by selecting the items
                    you want to purchase and adding them to your cart. Once
                    you've finished shopping, simply proceed to checkout, and
                    follow the prompts to complete your purchase.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What payment methods do you accept?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    We accept major credit cards, including Visa, Mastercard,
                    American Express, and Discover. We also offer the option to
                    pay with PayPal for added convenience.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What if my item arrives damaged or defective?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    We take quality control very seriously, but in the rare
                    event that your item arrives damaged or defective, please
                    contact our customer support team immediately. We will work
                    with you to resolve the issue and ensure that you are
                    satisfied with your purchase.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer international shipping?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Yes, we offer international shipping to most countries.
                    Please note that international shipping may be subject to
                    additional fees and customs charges, which are the
                    responsibility of the buyer.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is your return policy?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    We offer a 30-day return policy for most items. If you are
                    not satisfied with your purchase, you can return it for a
                    full refund or exchange within 30 days of receiving your
                    order. Please note that some items may be subject to a
                    restocking fee.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>How long will it take for my order to arrive?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Shipping times vary depending on your location and the
                    shipping method you choose at checkout. We typically ship
                    within 1-2 business days, and standard shipping within the
                    US usually takes 3-5 business days. International shipping
                    can take up to 2-3 weeks.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      </div>
  );
}
