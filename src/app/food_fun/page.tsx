"use client";
import Image from "next/image";

const Deluxe = () => {
  return (
    <div className="flex relative flex-col items-center w-full min-h-[110vh] bg-amber-50">
      <div className="absolute w-full h-[80vh] overflow-hidden">
        <Image
          src="/food-fun-1.jpg"
          alt="Executive Deluxe Room"
          width={2000}
          height={1333}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex relative lg:top-100 top-60 lg:mb-130 mb-75 flex-col relative md:w-[80%] w-[95%] bg-white min-h-200 gap-y-4 md:p-8 p-3">
        <p className="font-serif text-amber-800 md:text-[90px] text-5xl tracking-wider md:py-10 py-4">
          Food Fun
        </p>
        <div className="flex flex-col w-full font-serif md:flex-row w-full h-auto">
          <div className="flex flex-col md:w-[50%] w-full md:gap-y-8 gap-y-4">
            <p className="text-gray-700 md:text-base text-sm">
              Food Fun has been a part of our guests’ stay at Pondicherry
              Executive Inn through its exceptional meals for years, and dining
              with us has always been a crowd favourite.
            </p>
            <p className="text-gray-700 md:text-base text-sm">
              Look forward to a breakfast buffet with a different spread every
              day. At our restaurant, we serve a variety of cuisines and unique
              dishes that are both hygienic and satisfying. Food Fun is one of
              the reasons that have kept our guests coming back year after year
              for more!
            </p>
            <p className="text-gray-700 md:text-base text-sm">
              Share your tastes with us and we will try our best to make you
              happy.
            </p>
            <p className="text-gray-700 font-bold">Room service</p>
            <p className="text-gray-700 md:text-base text-sm">
              If staying in is your preference, you can enjoy a hearty meal in
              your room with your loved ones via our room service, too (a
              popular choice amongst our guests to unwind together after a day
              out).
            </p>
          </div>
          <div className="flex flex-col md:w-[50%] md:p-10 p-4 md:gap-y-4 gap-y-6">
            <Image
              src="/food-fun.jpg"
              alt=""
              width={1000}
              height={1000}
              className=""
            />
            <Image
              src="/food-fun-1.jpg"
              alt=""
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deluxe;
