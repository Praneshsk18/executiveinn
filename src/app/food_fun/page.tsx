"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";

const Foodfun = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-[111vh] w-full"
    >
      <Image
        src="/food-fun.jpg"
        alt="Food Fun"
        width={1000}
        height={1000}
        className="object-cover w-full min-h-screen h-full"
      />
      <div className="absolute inset-0 bg-amber-300/20">
        <div className="flex flex-row h-full w-full overflow-y-hidden">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col font-serif text-amber-900 lg:mt-20 gap-y-3 px-[5%] lg:pt-44 pt-30 md:w-[50%] w-full md:h-full h-auto md:bg-amber-100/80 bg-amber-100/60 md:border-r border-amber-900"
          >
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-4xl"
            >
              Food & Fun
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="text-2xl"
            >
              Where Taste Meets Entertainment
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              Step into our vibrant in-house restaurant where delicious flavors
              and lively ambiance come together. Whether you’re indulging in a
              gourmet meal, enjoying a family dinner, or celebrating a special
              moment, Food & Fun is the perfect spot to relax and savor.
            </motion.p>
            <div className="flex flex-col gap-y-2">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Multi-cuisine menu featuring local and international favorites
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.15 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Elegant indoor seating and open-air dining options
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Live music and weekend entertainment nights
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.25 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Curated beverages and chef’s specials
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Warm, inviting atmosphere perfect for all occasions
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            >
              Let every bite be a celebration at HillTown Resort’s Food & Fun —
              where good food meets great memories.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Foodfun;
