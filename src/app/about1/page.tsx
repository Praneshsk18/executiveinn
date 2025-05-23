"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryItem from "@/components/galleryitem";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const aboutRef1 = useRef(null);
  const aboutRef3 = useRef(null);
  const aboutRef4 = useRef(null);
  const aboutRef5 = useRef(null);
  const aboutRef6 = useRef(null);
  const aboutRef7 = useRef(null);
  const aboutRef8 = useRef(null);
  const aboutRef9 = useRef(null);
  const aboutRef10 = useRef(null);
  const aboutRef11 = useRef(null);
  const isInView1 = useInView(aboutRef1, { once: true });
  const isInView3 = useInView(aboutRef3, { once: true });
  const isInView4 = useInView(aboutRef4, { once: true });
  const isInView5 = useInView(aboutRef5, { once: true });
  const isInView6 = useInView(aboutRef6, { once: true });
  const isInView7 = useInView(aboutRef7, { once: true });
  const isInView8 = useInView(aboutRef8, { once: true });
  const isInView9 = useInView(aboutRef9, { once: true });
  const isInView10 = useInView(aboutRef10, { once: true });

  return (
    <div className="flex min-h-screen pt-28 w-full overflow-x-hidden">
      <div className="flex flex-col w-full">
        <div className="relative flex justify-center bg-amber-50 w-full">
          <motion.div
            ref={aboutRef1}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView1 ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-[30%] overflow-hidden"
          >
            <Image
              src="/bg-about.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="relative w-full max-w-[1200px] mt-48 bg-amber-50 min-h-screen px-4 sm:px-10 py-10">
            <motion.p
              ref={aboutRef3}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -100 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-serif text-amber-900 text-[60px] sm:text-[80px]"
            >
              About Us
            </motion.p>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1">
                <motion.p
                  ref={aboutRef4}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView4 ? 1 : 0,
                    x: isInView4 ? 0 : -100,
                  }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="font-serif text-amber-900 text-2xl py-2 italic"
                >
                  A one-of-a-kind stay at the best part of Pondicherry.
                </motion.p>
                <motion.p
                  ref={aboutRef5}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView5 ? 1 : 0,
                    x: isInView5 ? 0 : -100,
                  }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="py-3 font-serif text-[16px]"
                >
                  Pondicherry Executive Inn, incepted in 2000, has only become
                  better over the decades. We have a limited number of rooms at
                  our boutique hotel in order to be able to provide personalised
                  service like no other.
                </motion.p>
                <motion.p
                  ref={aboutRef6}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView6 ? 1 : 0,
                    x: isInView6 ? 0 : -100,
                  }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="py-3 font-serif text-[16px]"
                >
                  Leave your worries outside and allow us to make your stay with
                  us memorable. Our vigilant staff, our pristine property, and
                  our mouthwatering meals have kept our guests coming back year
                  after year for more!
                </motion.p>
                <motion.p
                  ref={aboutRef7}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView7 ? 1 : 0,
                    x: isInView7 ? 0 : -100,
                  }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="py-3 font-serif text-[16px]"
                >
                  We take pride in the handpicked decor and impeccable hygiene
                  that we maintain throughout the hotel. Our cozy abode is a
                  hidden gem that you will discover during your next stay in
                  Pondicherry.
                </motion.p>
                <motion.p
                  ref={aboutRef8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView8 ? 1 : 0,
                    x: isInView8 ? 0 : -100,
                  }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="py-3 font-serif text-[16px]"
                >
                  Our hotel has three categories of accommodation to choose
                  from, based on your preference and number of companions. Each
                  gives you a unique experience, be it family time in the
                  suites&apos; living rooms, or a relaxing evening on our deluxe
                  room&apos;s large balconies.
                </motion.p>
                <motion.p
                  ref={aboutRef9}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView9 ? 1 : 0,
                    x: isInView9 ? 0 : -100,
                  }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="py-3 font-serif text-[16px]"
                >
                  We look forward to having you stay with us.
                </motion.p>
              </div>
              <motion.div
                ref={aboutRef10}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: isInView10 ? 1 : 0,
                  scaleY: isInView10 ? 1 : 0,
                }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ transformOrigin: "top" }}
                className="flex-1"
              >
                <Image
                  src="/executive-inn-about.jpg"
                  alt="Executive Inn"
                  className="w-full h-auto"
                  width={1000}
                  height={1000}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full min-h-200 bg-amber-50 pb-24">
          <motion.p
            ref={aboutRef11}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: aboutRef11 ? 1 : 0, x: aboutRef11 ? 0 : -100 }}
            transition={{ duration: 1, delay: 1 }}
            className="py-5 text-amber-900 text-center font-serif text-[60px]"
          >
            Gallery
          </motion.p>
          <div className="w-full lg:px-20 md:px-6 px-3">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-20 md:gap-10 gap-8 w-full">
              {images.map((src, index) => (
                <GalleryItem
                  key={index}
                  src={src}
                  index={index}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                />
              ))}
            </div>
            <div className="flex min-h-50 items-center mx-auto my-10">
              <div className="grid lg:grid-cols-5 font-serif md:grid-cols-3 sm:grid-cols-2 w-full justify-items-center items-center grid-cols-1">
                <a
                  href="https://www.booking.com/searchresults.html?si=ai%2Cco%2Cci%2Cre%2Cla%2Cdi;dest_type=hotel;dest_id=11374519;ifl=1;aid=304142;label=gen173rf-1BCBcoggI46AdIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQGIAgGiAg9leGVjdXRpdmVpbm4uaW6oAgO4AtXVsMEGwAIB0gIkNjA4OGY0NTEtZDYzOC00NjUzLWI2NmQtMjlmMjc1ZWE4NTUy2AIF4AIB"
                  target="_blank"
                >
                  <div className="flex flex-col">
                    <Image
                      src="/booking-com.png"
                      alt=""
                      width={1000}
                      height={1000}
                      className="object-cover min-h-50 h-full w-auto"
                    />
                    <p className="text-center text-amber-900 text-xl py-1">
                      Rated 4.3/5
                    </p>
                    <p className="text-center text-sm text-gray-700">
                      on Booking.com
                    </p>
                  </div>
                </a>
                <a href="https://www.travelguru.com/hotels/hotels-in-pondicherry/executive-inn-a-boutique-hotel">
                  <div className="flex flex-col">
                    <Image
                      src="/travel-guru.png"
                      alt=""
                      width={1000}
                      height={1000}
                      className="object-cover min-h-50 h-full w-auto"
                    />
                    <p className="text-center text-amber-900 text-xl py-1">
                      Rated 4.3/5
                    </p>
                    <p className="text-center text-sm text-gray-700">
                      on TravelGuru
                    </p>
                  </div>
                </a>
                <a href="https://www.goibibo.com/hotels/executive-inn-a-boutique-hotel-in-pondicherry-4812519226361150213/">
                  <div className="flex flex-col">
                    <Image
                      src="/go-ibibo.png"
                      alt=""
                      width={1000}
                      height={1000}
                      className="object-cover min-h-50 h-full w-auto"
                    />
                    <p className="text-center text-amber-900 text-xl py-1">
                      Rated 4.4/5
                    </p>
                    <p className="text-center text-sm text-gray-700">
                      on GoIbibo
                    </p>
                  </div>
                </a>
                <a href="https://www.makemytrip.com/hotels/executive_inn_a_boutique_hotel-details-pondicherry.html">
                  <div className="flex flex-col">
                    <Image
                      src="/make-my-trip.png"
                      alt=""
                      width={1000}
                      height={1000}
                      className="object-cover min-h-50 h-full w-auto"
                    />
                    <p className="text-center text-amber-900 text-xl py-1">
                      Rated 4.5/5
                    </p>
                    <p className="text-center text-sm text-gray-700">
                      on MakeMyTrip
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.tripadvisor.in/Hotel_Review-g659792-d735428-Reviews-Pondicherry_Executive_Inn-Pondicherry_Union_Territory_of_Pondicherry.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col">
                    <Image
                      src="/Animation_TC_2022.gif"
                      alt="Pondicherry Executive Inn"
                      width={1000}
                      height={1000}
                      className="object-cover h-50 w-auto"
                    />
                    <p className="text-center text-amber-900 text-xl py-1">
                      Pondicherry
                    </p>
                    <p className="text-center text-sm text-gray-700">
                      rated by Tripadvisor
                    </p>
                  </div>
                </a>
              </div>
            </div>
            {isOpen && (
              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={images.map((src) => ({ src }))}
                index={photoIndex}
                controller={{
                  closeOnBackdropClick: true,
                  closeOnPullDown: true,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
