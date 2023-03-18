'use client'
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {headerVariants, imageVariants} from "../animations/variants"
import Image from "next/image";
import Button from "./UI/Button";

function Landing() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="sticky flex h-screen w-full items-center justify-between px-8 top-0">
      {/* Screen size is 100vh   */}
      {/* Must put sticky and top-0 for the page down to scroll up. */}
      <div className="space-y-8">
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible" className="space-y-3 text-4xl sm:text-5xl font-semibold tracking-wide md:text-4xl lg:text-6xl xl:text-7xl">
          {/* Tracking-wide gives spacing between letters */}
          <motion.span variants={headerVariants} className="block bg-gradient-to-r from-[#C33764] to-[#1D2671] bg-clip-text text-transparent drop-shadow-xl">
            Embrace
          </motion.span>
          {/* bg-clip-text means background is attached to the text and for this to work text has to be transparent*/}
          <motion.span  variants={headerVariants} className="block drop-shadow-xl">The Power</motion.span>
          <motion.span  variants={headerVariants} className="block drop-shadow-xl">Of Technology</motion.span>
        </motion.h1>
        <motion.div variants={imageVariants} initial="hidden" animate="visible" className="space-x-8">
          <Button title="Go Shopping" onClick={handleClickScroll}/>
          <Link href="/about" className="link hidden xsm:inline">Learn More</Link>
        </motion.div>
      </div>

      <motion.div variants={imageVariants} initial="hidden" animate="visible" className="relative hidden h-[350px] w-[350px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[500px] xl:h-[650px] xl:w-[600px] justify-center items-center">
        <Image  src="/iphone3.png" layout="fill" objectFit="contain" alt="my_iphone_picture" /> 
        {/* INSIDE PUBLIC */}
      </motion.div>
    </section>
  );
}

export default Landing;
