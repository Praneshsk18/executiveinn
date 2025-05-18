"use client";
import StyledWrapper2 from "@/components/homepagebutton2";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Executive = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-screen md:h-[110vh] transition-smooth"
    >
      <Image
        src="/executive-room.jpg"
        alt=""
        width={1000}
        height={1000}
        className="object-cover md:w-full w-auto h-full"
      />
      <div className="absolute inset-0 bg-amber-50/10">
        <div className="flex flex-row justify-center items-center h-full w-full overflow-x-hidden">
          <div className="flex h-full md:w-[70%]"></div>
          <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col justify-center items-center md:h-full h-auto md:pt-40 py-10 p-2 text-center border-l border-amber-900 gap-y-5 md:bg-amber-100/80 bg-amber-100/80 md:w-[30%]">
            <motion.p 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="font-serif text-amber-900 text-3xl font-semibold">
              Executive Room
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-amber-900 text-xl font-serif">
              Comfort with a Touch of Class
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-amber-900 text-lg text-left font-serif md:mx-10 mx-5">
              Stay in our elegantly designed Executive Room, complete with a
              cozy king-size bed, work-friendly desk, Wi-Fi, and a sleek modern
              bathroom. Ideal for business or weekend getaways.
            </motion.p>
            <StyledWrapper2>
              <Link href="https://www.tripadvisor.in/Hotel_Review-g659792-d735428-Reviews-Pondicherry_Executive_Inn-Pondicherry_Union_Territory_of_Pondicherry.html" target="_blank">
              <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "linear", delay: 0.8 }}
              className="btn border-2 border-amber-900 bg-amber-900 text-amber-900 text-lg font-serif">
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
export default Executive;
