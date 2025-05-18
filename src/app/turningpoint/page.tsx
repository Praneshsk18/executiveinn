"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
const TurningPoint = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex relative min-h-[110vh] h-screen w-full"
    >
      <Image
        src="/turning-point.jpg"
        alt="Turning Point"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 h-full bg-gradient-to-bl from-amber-200/20 to-amber-100/20">
        <div className="flex flex-row h-full w-full overflow-y-hidden">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col font-serif text-amber-900 gap-y-3 px-[5%] lg:justify-center lg:pt-0 pt-30 md:w-[50%] w-full h-full md:bg-amber-100/80 bg-amber-100/60 md:border-r border-amber-900"
          >
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-4xl"
            >
              Turning Point
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="text-2xl"
            >
              Make Every Occasion Unforgettable
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              Our elegant Event Hall is the perfect setting for weddings,
              conferences, banquets, and special gatherings. With spacious
              interiors, customizable seating, and state-of-the-art facilities,
              we provide a refined backdrop for events of all sizes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              Designed with style and functionality in mind, the hall features:
            </motion.p>
            <div className="flex flex-col gap-y-2">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Modern audio-visual equipment
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.15 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Flexible stage and lighting setups
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                On-site event planning and catering services
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.25 }}
                className="flex flex-row"
              >
                <Dot className="shrink-0"/>
                Ideal for weddings, corporate meetings, parties & exhibitions
              </motion.div>
            </div>
            <motion.p
            initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.35 }}
            >
              Let Executive Inn turn your vision into a memorable celebration.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default TurningPoint;
