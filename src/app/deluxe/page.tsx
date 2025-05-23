"use client";
import Image from "next/image";
import {
  Car,
  Flame,
  IceCream,
  Snowflake,
  TvMinimal,
  UtensilsCrossed,
  WashingMachine,
  Wifi,
} from "lucide-react";
import Link from "next/link";

const Deluxe = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -120;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="flex relative flex-col items-center w-full min-h-[110vh] bg-amber-50">
      <div className="absolute w-full h-[80vh] overflow-hidden">
        <Image
          src="/deluxe-1.jpg"
          alt="Executive Deluxe Room"
          width={2000}
          height={1333}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex relative top-100 mb-130 flex-col relative md:w-[80%] w-[95%] bg-white min-h-200 gap-y-4 md:p-8 p-3">
        <p className="font-serif text-amber-700 tracking-widest md:text-lg font-semibold">
          PREMIUM ACCOMMODATION
        </p>
        <p className="font-serif text-amber-800 md:text-[90px] text-4xl tracking-wider">
          Executive Deluxe Room
        </p>
        <p className="font-serif text-gray-700 px-2 md:text-base text-sm">
          Relax in our smart and self-sufficient bedrooms with large balconies
          and all amenities. Situated in the main block, all our executive
          deluxe rooms are accessible by elevator.
        </p>
        <div className="flex md:flex-row flex-col gap-y-5 justify-around items-center md:py-10 py-2 font-serif">
          <div className="flex flex-col text-center">
            <p className="text-amber-700 font-semibold">AREA</p>
            <p className="text-sm">175 sqft</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-amber-700 font-semibold">CAPACITY</p>
            <p className="text-sm">2 guests</p>
          </div>
          <div className="flex flex-col">
            <button className="bg-amber-800 text-amber-50 p-4 hover:cursor-pointer hover:text-amber-700 hover:bg-amber-50 transition-all duration:400 ease-in-out">
              Reserve an Executive Deluxe Room
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:min-h-20 min-h-50 shadow-lg font-serif">
          <div className="flex flex-row justify-center w-auto bg-white items-center text-amber-700 font-semibold">
            <button
              onClick={() => scrollToSection("info")}
              className="flex md:min-w-40 w-full justify-center min-h-30 h-full items-center hover:cursor-pointer shadow-lg hover:shadow-amber-700 duration-400"
            >
              <p>INFO</p>
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="flex md:min-w-40 w-full min-h-30 justify-center h-full items-center hover:cursor-pointer shadow-lg hover:shadow-amber-700 duration-400"
            >
              <p>AMENITIES</p>
            </button>
          </div>
          <p className="pr-10 my-auto italic p-4">
            Tariff starting at INR 4,000 + GST per night
          </p>
        </div>
        <section id="info">
          <div className="flex md:flex-row flex-col w-full min-h-50 h-auto">
            <div className="flex flex-col md:w-[50%] h-full gap-6">
              <Image src="/deluxe1.jpg" alt="" width={1000} height={1000} />
              <Image
                src="/executive-suite.jpg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex flex-col h-full min-h-150 md:w-[50%] py-6 items-start md:p-15 justify-center gap-y-4">
              <p className="font-serif text-5xl text-amber-800 text-center">
                About the Room
              </p>
              <p className="font-serif tracking-wider text-gray-700 text-center">
                Leave your worries outside and choose one or more of our four
                executive deluxe rooms at our property. Large and comfortable,
                you can enjoy your evenings relaxing on the balconies or quietly
                working at your study desk. If not, you can simply stay in and
                enjoy a hot meal via room service.
              </p>
              <p className="font-serif tracking-wider text-gray-700 text-center">
                Take a look at the specifications below and reserve an executive
                deluxe room if you are looking for unmatched comfort.
              </p>
              <p className="font-serif tracking-wider text-gray-700 italic text-center">
                For queries and personal requests, do give us a call and we will
                be happy to help.
              </p>
              <button className="text-center font-serif w-full mx-auto bg-amber-800 text-amber-50 p-4 hover:cursor-pointer hover:text-amber-800 hover:bg-amber-50 transition-all duration:400 ease-in-out">
                Reserve an Executive Deluxe Room
              </button>
            </div>
          </div>
        </section>
        <section id="amenities">
          <div className="flex flex-col min-h-50 w-full">
            <p className="flex my-10 font-serif text-5xl text-amber-800">
              Amenities
            </p>
            <div className="flex flex-col h-full min-h-70 mb-10">
              <div className="flex md:flex-row flex-col items-center justify-around">
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <IceCream className="shrink-0 text-amber-800 size-10 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    REFRIGERATOR
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    In every suite for your convenience
                  </p>
                </div>
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <Snowflake className="size-10 text-amber-800 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    AIR CONDITIONING
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    For a comportable stay
                  </p>
                </div>
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <TvMinimal className="size-10 text-amber-800 shrink-0 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    LED TV
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    With Satellite Channel
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-around">
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <Flame className="shrunk-0 size-10 text-amber-800 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    GEYSER
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    For your use round the clock
                  </p>
                </div>
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <Wifi className="text-amber-800 size-10 shrunk-0 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    FREE WI-FI
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    For your writing needs
                  </p>
                </div>
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <WashingMachine className="shrunk-0 size-10 text-amber-800 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide text-center group-hover:text-amber-700 transition duration-400">
                    LAUNDRY
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    24 hr service
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-around">
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <UtensilsCrossed className="shrunk-0 size-10 text-amber-800 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide group-hover:text-amber-700 transition duration-400">
                    BREAKFAST
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    Complimentary buffet breakfast at our multicuisine
                    restaurent
                  </p>
                </div>
                <div className="flex flex-col w-auto h-auto gap-y-2 items-center py-4 group hover:cursor-pointer">
                  <Car className="size-10 text-amber-800 group-hover:text-amber-600 transition duration-400" />
                  <p className="font-serif text-amber-800 tracking-wide group-hover:text-amber-700 transition duration-400">
                    CAR PARKING
                  </p>
                  <p className="font-serif text-gray-700 text-center group-hover:text-gray-600 transition duration-400">
                    Parking spots available in front of our property with 24 hr
                    security
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col h-auto w-full justify-around my-10">
                <div className="flex relative md:min-w-[48%] min-w-full min-h-50 my-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/suite-living.jpg" alt="" fill />
                  </div>
                  <div className="flex flex-col justify-center gap-y-6 items-center h-full w-full bg-gradient-to-t to-amber-900/30 z-10">
                    <div className=""></div>
                    <div className="font-serif text-white text-4xl">
                      Executive Suite
                    </div>
                    <Link href="/suite" className="p-4 px-5 bg-amber-800/90 text-amber-100 font-serif hover:bg-amber-100/90 hover:cursor-pointer hover:text-amber-900 transition duration-300">
                      Explore Rooms
                    </Link>
                  </div>
                </div>
                <div className="flex relative md:min-w-[48%] min-w-full min-h-50 my-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/exec-room-1.jpg" alt="" fill />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-6 h-full w-full bg-gradient-to-t to-amber-900/30 z-10">
                    <div className=""></div>
                    <div className="font-serif text-white text-4xl">
                      Executive Room
                    </div>
                    <Link href="/executive" className="p-4 px-5 bg-amber-800/90 text-amber-100 font-serif hover:bg-amber-100/90 hover:cursor-pointer hover:text-amber-900 transition duration-300">
                      Explore Rooms
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col h-auto w-full justify-center gap-x-4">
                <div className="relative w-full md:w-1/2 aspect-[4/3] min-h-150 my-3 overflow-hidden group hover:cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src="/meat.jpg"
                      alt="Restaurant dining"
                      width={1000}
                      height={750}
                      className="w-full h-full object-cover group-hover:scale-110 duration-400"
                    />
                  </div>
                  <div className="relative flex flex-col justify-center items-center h-full w-full gap-y-4 md:gap-y-6 py-4 bg-gradient-to-t from-black/50 via-black/10 to-black/50 z-10">
                    <p className="font-serif font-semibold text-white tracking-widest text-sm md:text-base">
                      DINE WITH US
                    </p>
                    <p className="font-serif text-white text-center tracking-widest text-6xl lg:text-[85px] leading-tight">
                      Food Fun
                    </p>
                    <p className="font-serif text-white/90 text-center px-4 md:px-10 text-sm md:text-base tracking-wider max-w-[600px]">
                      Our multicuisine restaurant has always complemented our
                      guests&apso; stay at Pondicherry Executive Inn with its
                      exceptional food. Our homecooked, delicious meals have
                      kept our guests coming back year after year.
                    </p>
                  </div>
                </div>
                <div className="relative w-full md:w-1/2 aspect-[4/3] min-h-[300px] my-3 overflow-hidden group hover:cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src="/paradise-beach.jpg"
                      alt="Paradise Beach in Pondicherry"
                      width={1000}
                      height={750}
                      className="w-full h-full object-cover group-hover:scale-110 duration-400"
                    />
                  </div>
                  <div className="relative flex flex-col justify-center items-center h-full w-full gap-y-4 md:gap-y-6 py-4 bg-gradient-to-t from-black/50 via-black/20 to-white/90 z-10">
                    <p className="font-serif font-semibold text-amber-700/90 tracking-widest text-sm md:text-base">
                      DISCOVER PONDICHERRY
                    </p>
                    <p className="font-serif text-white tracking-wide text-5xl lg:text-[75px] leading-tight text-center">
                      Local Excursions
                    </p>
                    <p className="font-serif text-white/90 text-center px-4 md:px-10 text-sm md:text-base tracking-wider max-w-[600px]">
                      Reside in the heart of Pondicherry, surrounded by a
                      variety of attractions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Deluxe;
