"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion,AnimatePresence } from "framer-motion";
import Link from "next/link";
const items = [
  { name: "Home", href: "/" ,color:"border-amber-50"},
  { name: "About Us", href: "/about1" ,color:"border-amber-50"},
  { name: "Book your Stay", href: "/bookyourstay" ,color:"border-amber-50"},
  { name: "Executive Deluxe Room", href: "/deluxe" ,color:"border-amber-50"},
  { name: "Executive Room", href: "/executive" ,color:"border-amber-50"},
  { name: "Executive Suite", href: "/suite" ,color:"border-amber-50"},
  {name:"Turning Point-Banquet Hall",href:"/turningpoint",color:"border-amber-50"},
  {name:"Food Fun-Restaurent",href:"/food_fun",color:"border-amber-50"},
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFixed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={` flex flex-col z-30 lg:h-40 h-28 w-full bg-amber-50 items-center lg:border-0 border-b border-amber-900 ${
          isFixed ? "fixed top-0" : "absolute"
        }`}
      >
        <div className="flex flex-row h-28 w-[85%] gap-3 lg:justify-center justify-between items-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={1000}
            height={1000}
            className="h-[80%] md:w-auto w-[85%] object-contain"
            priority
          />
          <div className="flex w-auto h-auto lg:hidden justify-center items-center">
            <button
              className="relative group hover:cursor-pointer flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Menu toggle"
            >
              <div
                className={`
                  relative flex items-center justify-center rounded-full w-[50px] h-[50px] 
                  transform transition-all ring-0 text-amber-900 ring-gray-300 duration-200 
                `}
              >
                <div
                  className={`
                    flex flex-col justify-between w-[20px] h-[20px] transform transition-all 
                    duration-300 ${
                      isOpen ? "-rotate-[45deg]" : ""
                    } origin-center
                  `}
                >
                  <div
                    className={`
                      bg-amber-900 h-[2px] w-1/2 rounded transform transition-all duration-300 
                      ${
                        isOpen ? "-rotate-90 h-[1px] -translate-y-[1px]" : ""
                      } origin-right delay-75
                    `}
                  ></div>
                  <div className="bg-amber-900 h-[2px] rounded"></div>
                  <div
                    className={`
                      bg-amber-900 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 
                      ${
                        isOpen ? "-rotate-90 h-[1px] translate-y-[1px]" : ""
                      } origin-left delay-75
                    `}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <nav className="hidden lg:flex overflow-hidden justify-center items-center lg:gap-2 h-12 bg-amber-900 w-full font-serif">
          {items.map((item) => (
            <Link
              href={item.href}
              className={`hover:border-b-8 text-center hover:cursor-pointer p-3 ${item.color} transition-discrete duration-200 ease-in-out text-amber-50`}
              key={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "-100%" }}
            onClick={() => setIsOpen(false)}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col border-t-2 overflow-y-scroll  border-amber-900 absolute w-70 h-full min-h-screen top-full left-0 bg-amber-50 shadow-xl p-4"
          >
            <div className="p-1 space-y-1">
              {items.map((data, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-row items-center justify-start block w-full text-amber-900 font-semibold text-sm px-2 py-2 hover:bg-amber-800 hover:text-amber-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={data.href} className="flex flex-row items-center">
                  <span className="flex bg-amber-900 h-2 rounded-full w-2 mb-[1px] mr-3"></span>
                  <p className="text-[16px]">{data.name}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}</AnimatePresence>
      </motion.div>
    </>
  );
};

export default Header;
