"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StyledWrapper } from "@/components/homepagebutton";
import { MapPinned, MessagesSquare } from "lucide-react";
import StyledWrapper2 from "@/components/homepagebutton2";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

const attractions = [
  {
    name: "Pondicherry Beach",
    details:
      "Also known as Promenade Beach, this is a popular spot for locals and tourists alike, offering stunning sunrise views and a lively atmosphere with street food vendors.",
    image: "/pondicherry-beach.jpg",
  },
  {
    name: "Paradise Beach",
    details:
      "A neat and clean beach across the Chunnambar river with serene views and white sand, Paradise beach is perfect for morning and evening walks. Open from 9am to 5pm, closed on Thursdays. Distance: 13.5 km",
    image: "/paradise-beach.jpg",
  },
  {
    name: "Eden Beach",
    details:
      "A Blue Flag certified beach known for its eco-friendly environment, clean sands, and calm waters, ideal for swimming and relaxation.",
    image: "/eden-beach.jpg",
  },
  {
    name: "Pondy Marina Beach",
    details:
      "A quieter beach with golden sands, perfect for a peaceful escape and enjoying the sound of waves.",
    image: "/pondy-marina.jpg",
  },
  {
    name: "Sri Aurobindo Ashram",
    details:
      "A spiritual community founded in 1926, offering a serene space for meditation and reflection.",
    image: "/aurobindo-ashram.jpg",
  },
  {
    name: "Navavihan Handicraft Shop",
    details:
      "A local shop offering handmade crafts, textiles, and souvenirs, showcasing Pondicherry's rich artisanal heritage.",
    image: "/navavihan-handicrafts.jpg",
  },
  {
    name: "Manakula Vinayagar Temple",
    details:
      "A historic Hindu temple dedicated to Lord Ganesha, known for its beautiful architecture and resident elephant, Lakshmi, who blesses visitors.",
    image: "/manakula-vinayagar-temple.jpg",
  },
  {
    name: "The Pondicherry Museum",
    details:
      "A museum showcasing artifacts from the Chola and Pallava dynasties, French colonial history, and local culture.",
    image: "/puducherry-museum.jpg",
  },
  {
    name: "Bharathi Park",
    details:
      "A lush green park in the heart of White Town, perfect for a leisurely stroll or picnic, surrounded by colonial buildings.",
    image: "/bharathi-park.jpg",
  },
  {
    name: "Immaculate Cathedral",
    details:
      "A stunning 18th-century cathedral with Portuguese-style architecture, known for its peaceful ambiance and historical significance.",
    image: "/immaculate-cathedral.jpg",
  },
  {
    name: "Sacred Heart Churches",
    details:
      "A Gothic-style church with beautiful stained glass windows, offering a tranquil space for prayer and reflection.",
    image: "/sacred-heart.jpg",
  },
  {
    name: "The Botanical Gardens",
    details:
      "A 22-acre garden established in 1826, featuring exotic plants, a toy train, and a serene environment for nature lovers.",
    image: "/botanical-garden.jpg",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const lastRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const attractionsRef = useRef(null);

  const isLastInView = useInView(lastRef, { once: true, margin: "-100px" });
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const isAttractionsInView = useInView(attractionsRef, {
    once: true,
    margin: "-100px",
  });

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-full h-full bg-amber-50 overflow-hidden">
      <div
        className="flex flex-col relative h-full w-screen overflow-x-hidden"
        ref={heroRef}
      >
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          ssr={false}
          autoPlay
          infinite
          autoPlaySpeed={4000}
          keyBoardControl
          customTransition="all 1s ease-in-out"
          transitionDuration={1000}
          removeArrowOnDeviceType={["desktop"]}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              className="relative w-screen min-h-screen flex overflow-hidden"
            >
              <Image
                src={`/carousal${item}.jpg`}
                alt={`Pondicherry Executive Inn - Slide ${item}`}
                sizes="100vw"
                fill
                className="object-cover h-full"
                priority={item === 1}
              />
            </motion.div>
          ))}
        </Carousel>

        <div className="absolute inset-0 h-full z-10 flex flex-col items-center pt-28 md:pt-40 bg-gradient-to-b from-amber-50/100 to-amber-900/30">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col items-center justify-end w-full h-[20vh] md:h-[25vh] text-amber-900 text-center px-4"
          >
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="tracking-widest font-serif text-xs md:text-base mb-2"
            >
              PONDICHERRY
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="tracking-widest font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Executive Inn
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-row w-full max-w-md items-center justify-around my-8 md:my-12"
          >
            <StyledWrapper>
              <Link href="/suite">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn font-semibold text-sm md:text-base px-6 py-3 text-amber-800"
                >
                  <p className="text-amber-800">Explore Rooms</p>
                </motion.button>
              </Link>
            </StyledWrapper>
            <StyledWrapper>
              <Link href="/bookyourstay">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn font-semibold text-sm md:text-base px-6 py-3 text-amber-800"
                >
                  <p className="text-amber-800">Book Your Stay</p>
                </motion.button>
              </Link>
            </StyledWrapper>
          </motion.div>

          <motion.div ref={featuresRef} className="w-full md:w-[90%] px-2 my-4">
            <motion.div
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="grid grid-cols-2 md:grid-cols-4 px-4 py-4 lg:px-0"
            >
              {[
                { icon: "/bed.png", text: "Stay", link: "/executive" },
                { icon: "/dining-table.png", text: "Dine", link: "/food_fun" },
                {
                  icon: "/cheers.png",
                  text: "Host Events",
                  link: "/turningpoint",
                },
                {
                  icon: "/tc.gif",
                  text: "Pondicherry",
                  text2: "rated by Tripadvisor",
                  link: "https://www.tripadvisor.in/Tourism-g659792-Pondicherry_Union_Territory_of_Pondicherry-Vacations.html",
                },
              ].map((item, index) => (
                <Link href={item.link} key={index}>
                  <motion.div
                    variants={fadeInUp}
                    className={`flex flex-col items-center justify-center p-6 h-full min-h-[180px] group cursor-pointer transition-all duration-300 ease-in-out relative ${
                      index === 3
                        ? "bg-green-400/70 hover:bg-amber-100/90"
                        : "bg-amber-50/70 hover:bg-amber-100/90"
                    }`}
                  >
                    <motion.div
                      className="flex relative w-16 h-16 md:w-20 md:h-20 mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.text}
                        fill
                        className="object-contain group-hover:scale-120 transition-all duration-500 ease-in-out"
                      />
                    </motion.div>
                    <p className="text-amber-900 font-medium">{item.text}</p>
                    {item.text2 && (
                      <p className="text-xs text-center">{item.text2}</p>
                    )}
                    <div className="absolute bottom-0 left-0 w-0 h-[8px] bg-amber-900/90 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={aboutRef}
        className="flex md:flex-row flex-col w-full md:h-200 bg-amber-50 px-[8%] lg:pt-30 py-8"
      >
        <motion.div
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col md:w-[50%] w-full h-full mr-[10%]"
        >
          <motion.p
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="md:text-5xl font-serif text-3xl text-amber-900 tracking-wide"
          >
            A Blend Of elegance and simplicity.
          </motion.p>

          {[
            "Welcome to The Executive Inn. At our 23 room boutique hotel, we promise you an extremely comfortable retreat nestled in the historic White Town of Pondicherry. With the convenience of the rocky beach, Sri Aurobindo ashram, our favourite shops and the choicest restaurants just a stone’s throw away, it is undoubtedly the best location in Pondicherry.",
            "The moment we welcome you through our doors, you are assured unparalleled hospitality and prompt service.",
            "Neatly tucked into the French Colony of Pondicherry, you can take leisurely morning walks down to the beach or evening strolls among the well-lit streets surrounding our inn. Safety is a given, and rejuvenation follows effortlessly.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className="md:text-[16px] text-gray-800 mt-5 text-sm font-serif"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          className="flex flex-col items-start md:w-[50%] w-auto items-center h-auto mb-6 "
        >
          <motion.div
            variants={scaleUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/executive-inn-lobby.jpg"
              alt="Executive Inn lobby"
              width={1000}
              height={1000}
              className="md:mt-0 mt-8 h-full"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col lg:flex-row w-full items-start mt-5 gap-6"
          >
            <ContactInfo
              icon={
                <MapPinned
                  className="h-6 w-6 text-amber-900 mr-4 shrink-0"
                  strokeWidth={1.4}
                />
              }
              title="Pondicherry Executive Inn"
              details={[
                "1-A, Perumal Kovil St,",
                "White Town,",
                "Puducherry - 605001",
              ]}
            />

            <ContactInfo
              icon={
                <MessagesSquare
                  className="h-6 w-6 text-amber-900 mr-4 shrink-0"
                  strokeWidth={1.4}
                />
              }
              title="Talk To Us"
              details={[
                "0413 - 2224422",
                "2970782",
                "2225824",
                "+91 - 8270512260",
                "sumersureka@gmail.com",
              ]}
              isPhone={true}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <ImageCardsSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full h-auto bg-amber-50 pb-10 gap-y-4"
      >
        <motion.p className="text-center font-serif italic text-3xl text-amber-900 px-5">
          “Look no further. The most satisfying place to be in Pondicherry”
        </motion.p>
        <motion.p className="text-center font-sans text-xl">
          <span className="font-bold">Beena Sureka,</span> Director
        </motion.p>
      </motion.div>
      <RestaurantHeroSection />
      <section id="tour">
        <motion.div
          ref={attractionsRef}
          initial="hidden"
          animate={isAttractionsInView ? "visible" : "hidden"}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full relative"
        >
          <motion.div className="absolute inset-0 overflow-hidden">
            <Image
              src="/carousal1.jpg"
              alt="Pondicherry attractions"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div
            ref={lastRef}
            className="relative flex lg:justify-end justify-center items-center min-h-[70vh] py-16"
          >
            <motion.div
              className="w-full max-w-full lg:max-w-[60%] py-10 px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isLastInView ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="bg-amber-100/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-2xl lg:text-4xl font-serif text-amber-900 mb-4">
                    Not just a place to stay.
                  </h2>
                  <p className="font-serif text-gray-800 text-base lg:text-xl mb-8">
                    Explore the surroundings of Pondicherry Executive Inn with
                    this guide.
                  </p>
                </motion.div>
                <motion.div
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {attractions.map((attraction, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="bg-amber-50 rounded-lg overflow-hidden border border-amber-200"
                    >
                      <motion.button
                        onClick={() => toggleExpand(index)}
                        className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left"
                        whileHover={{
                          backgroundColor: "rgba(180, 83, 9, 0.1)",
                          cursor: "pointer",
                        }}
                        whileTap={{ backgroundColor: "rgba(180, 83, 9, 0.2)" }}
                      >
                        <div className="flex items-center">
                          <motion.span
                            className="w-3 h-3 bg-amber-900 rounded-full mr-3"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          />
                          <h3 className="font-serif text-amber-900 text-base sm:text-lg">
                            {attraction.name}
                          </h3>
                        </div>
                        <motion.span
                          animate={{ rotate: expanded === index ? 45 : 0 }}
                          className="text-amber-900 text-xl font-bold"
                        >
                          +
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {expanded === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                              <p className="font-serif text-gray-800 text-sm sm:text-base mb-4">
                                {attraction.details}
                              </p>
                              {attraction.image && (
                                <div className="mt-3">
                                  <Image
                                    src={attraction.image}
                                    alt={attraction.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-auto rounded-lg shadow-md"
                                  />
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  isPhone?: boolean;
}

const ContactInfo = ({
  icon,
  title,
  details,
  isPhone = false,
}: ContactInfoProps) => (
  <div className="flex w-full md:w-1/2 font-serif">
    {icon}
    <div className="tracking-wider">
      <p className="text-amber-900 font-semibold text-left mb-3">{title}</p>
      {details.map((detail, i) => (
        <p key={i} className={`text-gray-800 ${isPhone ? "font-sans" : ""}`}>
          {detail}
        </p>
      ))}
    </div>
  </div>
);

const ImageCardsSection = () => {
  const cards = [
    {
      image: "/food-fun-1.jpg",
      title: "An Unforgettable stay at Pondicherry.",
      description:
        "Join us for an experience that will be nothing like anywhere you have stayed before.",
      buttonText: "About Us",
      link: "/about1",
    },
    {
      image: "/Pondicherry-Beach.jpg",
      title: "Local Excursions",
      description:
        "Reside in the heart of Pondicherry, surrounded by a variety of attractions.",
      buttonText: "Explore",
      link: "/#tour",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex lg:flex-row flex-col w-full h-auto py-10 pb-15 gap-y-8 px-[10%] gap-x-10 bg-amber-50"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`relative flex flex-col ${
            index === 0 ? "lg:w-[65%]" : "lg:w-[35%]"
          } h-120`}
        >
          <Image src={card.image} alt="" fill />
          <div className="flex absolute inset-0 w-full h-full p-8 items-end bg-gradient-to-b from-white/40 to-black/40">
            <div className="flex flex-col">
              <p className="font-serif mb-4 text-amber-50 lg:text-4xl text-3xl">
                {card.title}
              </p>
              <p
                className={`mb-6 text-white lg:text-lg text-base font-serif ${
                  index === 0 ? "w-[60%]" : "w-[80%]"
                }`}
              >
                {card.description}
              </p>
              <StyledWrapper2>
                <Link href={card.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn font-semibold bg-amber-100/30 text-sm md:text-base px-6 py-3"
                  >
                    {card.buttonText}
                  </motion.button>
                </Link>
              </StyledWrapper2>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const RestaurantHeroSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="relative w-full h-120"
  >
    <Image
      src="/mexican-tacos.jpg"
      alt="Executive Inn restaurant"
      width={1000}
      height={1000}
      className="h-full w-full object-cover"
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col gap-y-2 px-3 justify-center bg-gradient-to-t from-black/90 items-center absolute inset-0"
    >
      <motion.p className="text-amber-100 font-serif font-semibold tracking-wider lg:text-2xl text-lg">
        DINE WITH US
      </motion.p>
      <motion.p className="text-amber-100 font-semibold font-serif tracking-wider lg:text-[90px] text-5xl">
        Food Fun
      </motion.p>
      <motion.p className="text-amber-100 text-center font-serif tracking-wide">
        Our multicuisine restaurant complements our guests&apos; stay at
        Pondicherry Executive Inn.
      </motion.p>
      <StyledWrapper2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn font-semibold bg-amber-900/80 text-sm md:text-base px-6 py-3 mt-10"
        >
          <Link href="food_fun">Explore Our Restaurant</Link>
        </motion.button>
      </StyledWrapper2>
    </motion.div>
  </motion.div>
);
