"use client";
import React, { useState } from "react";
import StyledWrapper2 from "@/components/homepagebutton2";
import Image from "next/image";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Bookyourstay = () => {
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());
  const [selectedRoom, setSelectedRoom] = useState("1 Room");
  const [selectedAdults, setSelectedAdults] = useState("1 Person");
  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPhoneno, setSelectedPhoneno] = useState("");
  const [roomPreference, setRoomPreference] = useState("Preferred Room Type");
  const [textArea, settextArea] = useState("");
  const submitBooking = async () => {
    const bookingData = {
      name: selectedName,
      email: selectedEmail,
      roompref: roomPreference,
      phoneno: selectedPhoneno,
      checkInDate: checkInDate.toISOString().split("T")[0],
      checkOutDate: checkOutDate.toISOString().split("T")[0],
      room: selectedRoom,
      adults: selectedAdults,
      textarea: textArea,
    };
    if (
      selectedName === "" ||
      selectedPhoneno === "" ||
      selectedRoom === "Preferred Room Type" ||
      selectedAdults === ""
    ) {
      toast.error("Please fill all required fields!");
      console.log("Validation failed");
      return;
    }

    try {
      const response = await axios.post(
        "https://executiveinn-server.onrender.com/api/sendemail",
        bookingData
      );
      console.log("Booking response:", response.data);
      toast.success("Details Shared Successfully")
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };
  return (
    <div className="min-h-[110vh] bg-amber-50 w-full flex flex-col items-center">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-90 flex bg-amber-50"
      >
        <Image
          src="/carousal3.jpg"
          alt=""
          className="w-full"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        style={{ transformOrigin: "Top" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col relative bg-white overflow-hidden md:w-[80%] w-[98%] min-h-100 p-8 -top-40"
      >
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-serif text-amber-900 text-[80px]"
          >
            Book Your Stay
          </motion.p>
        </div>
        <div className="flex flex-row py-3">
          <motion.input
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            type="text"
            className="bg-gray-300/60 font-serif w-full h-14 p-3 focus:outline-none"
            placeholder="Guest name"
            value={selectedName}
            onChange={(e) => {
              setSelectedName(e.target.value);
              console.log(e.target.value);
            }}
          ></motion.input>
        </div>
        <div className="flex md:flex-row flex-col py-3 gap-x-8 gap-y-6">
          <motion.input
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            type="number"
            max={10}
            className="md:w-[50%] md:py-0 bg-gray-300/60 font-serif w-full h-14 p-3 focus:outline-none"
            placeholder="Mobile Number"
            value={selectedPhoneno}
            onChange={(e) => {
              setSelectedPhoneno(e.target.value);
              console.log(e.target.value);
            }}
          />
          <motion.input
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            type="email"
            className="md:w-[50%] md:py-0 bg-gray-300/60 font-serif w-full h-14 p-3 focus:outline-none"
            placeholder="Email Address"
            value={selectedEmail}
            onChange={(e) => {
              setSelectedEmail(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="flex md:flex-row justify-center flex-col py-3 gap-x-8 gap-y-6 w-full">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date ?? new Date());
                console.log(date);
              }}
              dateFormat="dd-MM-yyyy"
              selectsStart
              placeholderText="Choose a date"
              popperPlacement="top-start"
              minDate={new Date()}
              selectsEnd
              className="w-full bg-gray-300/60 text-gray-500 h-14 p-3 focus:outline-none"
              wrapperClassName="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
          >
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date ?? new Date());
                console.log(date);
              }}
              dateFormat="dd-MM-yyyy"
              selectsStart
              startDate={checkInDate}
              placeholderText="Choose a date"
              popperPlacement="top-start"
              minDate={checkInDate}
              selectsEnd
              className="w-full bg-gray-300/60 text-gray-500 h-14 p-3 focus:outline-none"
              wrapperClassName="w-full"
            />
          </motion.div>
        </div>
        <div className="">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative w-full text-gray-700 py-3"
          >
            <select
              name="room type"
              id="rooms"
              value={roomPreference}
              onChange={(e) => setRoomPreference(e.target.value)}
              className="w-full h-14 bg-gray-300/60 px-4 pr-10 font-serif focus:outline-none text-gray-500 appearance-none"
              accessKey="none"
            >
              <option value="">Preferred Room Type</option>
              <option value="Executive suite">Executive Suite</option>
              <option value="Executive Deluxe">Executive Deluxe</option>
              <option value="Executive Room">Executive Room</option>
            </select>
            <ChevronDown
              size={20}
              className="absolute top-1/2 right-3 pointer-events-none -translate-y-1/2"
            />
          </motion.div>
        </div>
        <div className="flex md:flex-row flex-col py-3 gap-x-8 gap-y-6">
          <motion.input
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            type="number"
            max={10}
            className="md:w-[50%] md:py-0 bg-gray-300/60 font-serif w-full h-14 p-3 focus:outline-none"
            placeholder="No. of Rooms"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          />
          <motion.input
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            type="number"
            className="md:w-[50%] md:py-0 bg-gray-300/60 font-serif w-full h-14 p-3 focus:outline-none"
            placeholder="No. of Guests"
            value={selectedAdults}
            onChange={(e) => {
              setSelectedAdults(e.target.value);
            }}
          />
        </div>
        <div className=" py-3">
          <motion.textarea
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "Left" }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full font-serif bg-gray-300/60 focus:outline-none p-3 rounded resize-none"
            rows={5}
            placeholder="Type your message here..."
            value={textArea}
            onChange={(e) => {
              settextArea(e.target.value);
            }}
          />{" "}
        </div>
        <div className="w-full flex justify-center ">
          <StyledWrapper2>
            <button
              onClick={submitBooking}
              className="btn font-semibold text-sm md:text-base px-6 py-3 bg-amber-900"
            >
              Enquire Now
            </button>
          </StyledWrapper2>
        </div>
      </motion.div>
      <div className="flex">
        <Image
          src="/carousal3.jpg"
          alt=""
          width={1000}
          height={1000}
          className="relative -top-20"
        />
      </div>
    </div>
  );
};
export default Bookyourstay;
