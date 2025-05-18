"use client";
import StyledWrapper2 from "@/components/homepagebutton2";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Deluxe = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full h-screen md:h-[110vh] transition-smooth">
      <Image
        src="/executive-deluxe-room.jpg"
        alt=""
        width={1000}
        height={1000}
        className="object-cover md:w-full w-auto h-full"
      />
      <div className="absolute inset-0 bg-amber-200/20">
        <div className="flex flex-row justify-center items-center overflow-x-hidden h-full w-full">
          <div className="flex h-full md:w-[70%]"></div>
          <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",delay: 0.4 }}
          className="flex flex-col justify-center items-center border-l border-amber-900 md:h-full h-auto md:pt-40 py-10 p-2 text-left gap-y-5 bg-amber-100/80 md:w-[30%]">
            <motion.p
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",delay: 0.5 }}
            className="font-serif text-amber-900 text-center text-3xl font-semibold">
              Executive Deluxe Room
            </motion.p>
            <motion.p
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",delay: 0.6 }}
            className="text-amber-900 text-xl font-serif">
              Relax in Style & Comfort
            </motion.p>
            <motion.p 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",delay: 0.7 }}
            className="text-amber-900 text-lg text-left font-serif md:mx-10 mx-5">
              Enjoy a sophisticated stay in our Executive Deluxe Room, featuring
              a plush king-size bed, high-speed Wi-Fi, smart TV, and a modern
              en-suite bathroom. Perfect for both business and leisure.
            </motion.p>
            <StyledWrapper2>
              <Link href="https://www.tripadvisor.in/Hotel_Review-g659792-d735428-Reviews-Pondicherry_Executive_Inn-Pondicherry_Union_Territory_of_Pondicherry.html" target="_blank">
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "linear",delay: 0.8}}
              className="btn border-2 border-amber-900 bg-amber-900 text-amber-900 text-lg font-serif transition-smooth">
                Book Now
              </motion.div>
              </Link>
            </StyledWrapper2>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Deluxe;
