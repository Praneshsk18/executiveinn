"use client";
import React, { useState } from "react";
import StyledWrapper2 from "@/components/homepagebutton2";
import Image from "next/image";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import axios from "axios";

const Bookyourstay = () => {
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());
  const [selectedRoom, setSelectedRoom] = useState("1 Room");
  const [selectedAdults, setSelectedAdults] = useState("1 Person");
  const [selectedName, setSelectedName] = useState("");
  const [selectedPhoneno, setSelectedPhoneno] = useState("");
  const [showToast, setShowToast] = useState(false);
  const submitBooking = async () => {
    const bookingData = {
      name: selectedName,
      phoneno: selectedPhoneno,
      checkInDate: checkInDate.toISOString().split("T")[0],
      checkOutDate: checkOutDate.toISOString().split("T")[0],
      room: selectedRoom,
      adults: selectedAdults,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/sendemail",
        bookingData
      );
      console.log("Booking response:", response.data);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full bg-amber-50">
      {showToast && (
        <div className="fixed top-5 right-5 z-50 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded shadow-lg">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline ml-2">Booking submitted successfully.</span>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex relative w-full h-[110vh]"
      >
        <Image
          src="/bookyourstay.jpg"
          width={1920}
          height={1080}
          alt="Desktop background"
          className="hidden md:block w-full h-full  object-cover"
        />
        <Image
          src="/carousal1.jpg"
          width={768}
          height={1024}
          alt="Mobile background"
          className="block md:hidden w-full h-full object-cover"
        />
        <div className="flex flex-col absolute inset-0 bg-gradient-to-t from-black/50 to-amber-200/50 md:pt-40 pt-28 justify-center">
          <div className="flex flex-col md:flex-row w-full md:pt-10 h-[40%]">
            <div className="flex flex-col md:w-[75%] w-full p-5 md:px-[10%] justify-center md:pb-20 h-full text-amber-100 md:text-[48px] text-[20px] font-serif">
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="font-bold"
              >
                LIVE THE {""}
                <span className="text-amber-100">WONDEROUS </span>LIFE
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="md:text-base text-sm"
              >
                From ₹1,921 / day
              </motion.p>
            </div>
            <div className="flex flex-col md:w-[30%] w-full h-full md:justify-center md:pb-26 p-3 md:items-start items-center pb-8  transition-smooth">
              <StyledWrapper2>
                <Link href="/about">
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn font-semibold bg-amber-50/20 text-sm md:text-base px-6 py-3"
                  >
                    Explore
                  </motion.button>
                </Link>
              </StyledWrapper2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col w-full min-h-[50%] md:min-h-[40%] lg:min-h-[30%] bg-gray-100/30 items-center overflow-none"
          >
            <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-y-3 grid-cols-2 gap-x-5 md:pt-6 py-3 text-center justify-center items-center w-full max-w-7xl px-4">
              <div className="flex flex-col items-start space-y-1 w-full max-w-sm">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Name
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  className="w-full"
                >
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={selectedName}
                    onChange={(e) => {
                      setSelectedName(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none bg-amber-900 text-amber-50"
                  ></input>
                </motion.div>
              </div>
              <div className="flex flex-col items-start space-y-1 w-full max-w-sm">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Phone Number
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                  className="w-full"
                >
                  <input
                    type="text"
                    value={selectedPhoneno}
                    placeholder="Enter your number"
                    maxLength={10}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setSelectedPhoneno(value);
                        console.log(value);
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none bg-amber-900 text-amber-50"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col items-start space-y-1 w-full">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                  htmlFor="checkin"
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Check-in Date
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2}}
                >
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => {
                      setCheckInDate(date);
                      console.log(date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Choose a date"
                    popperPlacement="top-end"
                    minDate={new Date()}
                    className="w-full px-3 py-2 border border-amber-100 bg-amber-900 text-amber-50 focus:outline-none"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-start space-y-1 md:w-full w-auto max-w-sm">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                  htmlFor="checkout"
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Check-out Date
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
                >
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => {
                      setCheckOutDate(date);
                      console.log(date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    selectsStart
                    startDate={checkInDate}
                    placeholderText="Choose a date"
                    popperPlacement="top-start"
                    minDate={checkInDate}
                    selectsEnd
                    className="w-full px-3 py-2 border border-amber-100 bg-amber-900 text-amber-50 focus:outline-none"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-start space-y-1 w-full max-w-sm">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Room
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                  className="w-full"
                >
                  <select
                    value={selectedRoom}
                    onChange={(e) => {
                      setSelectedRoom(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="w-full px-3 py-2 border text-amber-50 bg-amber-900 border-amber-100 focus:outline-none"
                  >
                    <option className="bg-amber-100 text-amber-900">
                      1 Room
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      2 Rooms
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      3 Rooms
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      4 Rooms
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      5 Rooms
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      6 Rooms
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      7 Rooms
                    </option>
                  </select>
                </motion.div>
              </div>
              <div className="flex flex-col items-start space-y-1 w-full max-w-sm">
                <motion.label
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
                  className="text-base font-serif font-semibold text-amber-50"
                >
                  Person
                </motion.label>
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                  className="w-full"
                >
                  <select
                    value={selectedAdults}
                    onChange={(e) => {
                      setSelectedAdults(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-amber-100 focus:outline-none bg-amber-900 text-amber-50"
                  >
                    <option className="bg-amber-100 text-amber-900">
                      1 Person
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      2 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      3 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      4 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      5 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      6 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      7 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      8 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      9 Persons
                    </option>
                    <option className="bg-amber-100 text-amber-900">
                      10 Persons
                    </option>
                  </select>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <motion.button
                onClick={submitBooking}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-900 text-amber-100 font-semibold px-6 py-3 shadow-md hover:bg-amber-200 hover:text-amber-900 hover:cursor-pointer transition-smooth"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Bookyourstay;
