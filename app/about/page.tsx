import Head from "next/head";
import Contact5 from "../../components/About/contact";
import FaqText from "../../components/About/Faq";

// Welcome to our ecommerce store, where we are passionate about providing the latest and greatest gadgets to our customers. Our team is made up of technology enthusiasts who love to stay up to date with the latest advancements in the industry.

// We believe that gadgets are not just tools, but an essential part of modern life, whether you're a professional, a student, or simply someone who loves to explore new technology. That's why we have curated a collection of gadgets that are innovative, high-quality, and fun to use.

// Our mission is to provide our customers with an exceptional shopping experience, from the moment they browse our website to the moment their gadgets arrive at their doorstep. We understand that shopping for gadgets online can be overwhelming, which is why we've made our website easy to navigate and our customer support team available to answer any questions or concerns.

function About() {
  return (
    <>
      <div className="relative mt-0 min-h-screen space-y-8 bg-gradient-to-r from-[#A9F1DF] to-[#FFBBBB]">
        <FaqText></FaqText>
        <Contact5></Contact5>
      </div>
    </>
  );
}

export default About;