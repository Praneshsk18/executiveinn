"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const About = () => {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const aboutRef3 = useRef(null);
  const aboutRef4 = useRef(null);
  const aboutRef5 = useRef(null);
  const aboutRef6 = useRef(null);
  const aboutRef7 = useRef(null);
  const aboutRef8 = useRef(null);
  const aboutRef9 = useRef(null);
  const aboutRef10 = useRef(null);
  const aboutRef11 = useRef(null);
  const aboutRef12 = useRef(null);
  const aboutRef13 = useRef(null);
  const aboutRef14 = useRef(null);
  const isInView1 = useInView(aboutRef1, { once: true });
  const isInView2 = useInView(aboutRef2, { once: true });
  const isInView3 = useInView(aboutRef3, { once: true });
  const isInView4 = useInView(aboutRef4, { once: true });
  const isInView5 = useInView(aboutRef5, { once: true });
  const isInView6 = useInView(aboutRef6, { once: true });
  const isInView7 = useInView(aboutRef7, { once: true });
  const isInView8 = useInView(aboutRef8, { once: true });
  const isInView9 = useInView(aboutRef9, { once: true });
  const isInView10 = useInView(aboutRef10, { once: true });
  const isInView11 = useInView(aboutRef11, { once: true });
  const isInView12 = useInView(aboutRef12, { once: true });
  const isInView13 = useInView(aboutRef13, { once: true });
  const isInView14 = useInView(aboutRef14, { once: true });
  return (
    <div className="flex flex-col h-auto pb-20 bg-amber-100/30 md:pt-40 pt-30">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef1}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/carousal4.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
        <motion.div
          ref={aboutRef2}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[32px] font-bold md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              DISCOVER EXECUTIVE INN
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-2 md:pl-5 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              OUR NARRATIVE
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              In the heart of Pondicherry, a culinary haven was born – Executive
              Inn. Our tale is one woven with a passion for extraordinary
              gastronomy and a commitment to providing an unforgettable dining
              experience.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <motion.div
          ref={aboutRef3}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-5 xl:pl-26 md:pl-6 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              THE ARTISTRY IN EVERY DISH
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 xl:pl-26 md:pl-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Executive Inn is where culinary craftsmanship meets innovation.
              Under the guidance of our Culinary Director, our kitchen is a
              canvas where flavors collide to create symphonies on your plate.
              Each dish is a testament to our dedication to pushing boundaries
              and redefining traditional dining.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef4}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/mexican-tacos.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef5}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView5 ? 1 : 0, x: isInView5 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/room.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-full h-full"
            />
          </motion.div>
        </div>
        <motion.div
          ref={aboutRef6}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView6 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView6 ? 1 : 0, x: isInView6 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[32px] font-bold md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              GUIDING PRINCIPLES
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView6 ? 1 : 0, x: isInView6 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-2 md:pl-5 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              PERSONALIZED HOSPITALITY
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView6 ? 1 : 0, x: isInView6 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Our doors open to welcome not just patrons, but cherished guests.
              The essence of Executive Inn lies in personalized hospitality – an
              experience that transcends the ordinary, where every guest is a
              unique chapter in our story. Responsible Dining
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <motion.div
          ref={aboutRef7}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView7 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView7 ? 1 : 0, x: isInView7 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-5 xl:pl-26 md:pl-6 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              RESPONSIBLE DINING
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView7 ? 1 : 0, x: isInView7 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 xl:pl-26 md:pl-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Beyond the joy of eating, we embrace responsibility. We
              meticulously source ingredients from local artisans and farmers,
              ensuring that your meal is not just a feast for your senses but
              also a conscious choice towards sustainability.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef8}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView8 ? 1 : 0, x: isInView8 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/food-fun-1.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef9}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView9 ? 1 : 0, x: isInView9 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/carousal3.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
        <motion.div
          ref={aboutRef10}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-5 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView10 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView10 ? 1 : 0, x: isInView10 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-5 md:pl-5 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              ATMOSPHERE & AMBIANCE
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView10 ? 1 : 0, x: isInView10 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Step into Executive Inn and be transported into an atmosphere that
              resonates with sophistication and warmth. Our carefully designed
              space is a fusion of contemporary elegance and timeless comfort,
              providing the perfect setting for intimate dinners, celebrations,
              and memorable moments.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <motion.div
          ref={aboutRef11}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView11 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView11 ? 1 : 0, x: isInView11 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-5 xl:pl-26 md:pl-6 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              COMMUNITY & CONNECTION
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView11 ? 1 : 0, x: isInView11 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 xl:pl-26 md:pl-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Embedded in the spirit of Pondicherry, Executive Inn is more than
              just a place to dine – it’s a thread woven into the community
              fabric. We actively engage in community events, support local
              initiatives, and strive to be a positive force in the lives of
              those who make our existence possible.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef12}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView12 ? 1 : 0, x: isInView12 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/community.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="flex w-full md:w-[50%] h-auto justify-center items-center md:p-10 p-4 ">
          <motion.div
            ref={aboutRef13}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isInView13 ? 1 : 0, x: isInView13 ? 0 : -300 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center items-center w-auto h-70"
          >
            <Image
              src="/carousal2.jpg"
              width={1000}
              height={1000}
              alt=""
              className="w-auto h-full"
            />
          </motion.div>
        </div>
        <motion.div
          ref={aboutRef14}
          className="flex flex-row md:w-[50%] w-[90%] h-full md:p-3 md:pr-9 pr-2"
        >
          <motion.div
            initial="hidden"
            animate={isInView14 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView14 ? 1 : 0, x: isInView14 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-[18px] pt-2 md:pl-5 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              YOUR JOURNEY, OUR INSPIRATION
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView14 ? 1 : 0, x: isInView14 ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-amber-900 font-serif text-base pt-2 pl-2 md:pl-5"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              At Executive Inn, we thrive on feedback. Your
              experiences, your stories, and your suggestions are the catalysts
              for our continuous evolution. Join us in shaping the narrative as
              we embark on a culinary journey together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
