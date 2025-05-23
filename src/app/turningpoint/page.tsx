"use client";
import Image from "next/image";

const Deluxe = () => {
  return (
    <div className="flex relative flex-col items-center w-full min-h-[110vh] bg-amber-50">
      <div className="absolute w-full h-[80vh] overflow-hidden">
        <Image
          src="/turning-point.jpg"
          alt="Executive Deluxe Room"
          width={2000}
          height={1333}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex relative lg:top-90 top-60 lg:mb-120 mb-80 flex-col relative md:w-[80%] w-[95%] bg-white min-h-200 gap-y-4 md:p-8 p-3">
        <p className="font-serif text-amber-800 md:text-[90px] text-5xl tracking-wider md:py-10 py-5">
          Turning Point
        </p>
        <div className="flex flex-col w-full font-serif w-full h-auto">
          <div className="flex flex-col w-full gap-y-8">
            <p className="text-gray-700 md:text-base text-sm">
              Host your events and manage your business meetings at our space.
              The Turning Point has been a popular haunt for small gatherings of
              up to 75 to 100 people right here on the property.
            </p>
            <p className="text-gray-700 md:text-base text-sm">
              You are ensured smooth sailing with an uninterrupted wi-fi
              connection and excellent in-house catering, to have you covered on
              all fronts.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:w-[50%] md:py-10 py-4 gap-y-5">
            <Image
              src="/turning-point1.jpg"
              alt=""
              width={1000}
              height={1000}
              className="px-5"
            />
            <Image
              src="/turning-point2.jpg"
              alt=""
              width={1000}
              height={1000}
              className="px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deluxe;
