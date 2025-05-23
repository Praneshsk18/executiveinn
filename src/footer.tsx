"use client";
import Image from "next/image";
import { Facebook, Instagram, MapPinned, MessagesSquare } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="md:h-170 h-full w-full bg-amber-900">
      <div className="mx-5 py-10 h-full">
        <div className="relative h-full">
          <div className="absolute flex flex-wrap justify-around items-center lg:px-20 px-1 lg:-top-30 md:-top-25 -top-20 left-1/2 rounded-full transform -translate-x-1/2 md:w-[80%] w-full lg:h-40 md:h-30 h-20 bg-amber-50">
            <div className="flex justify-center items-center h-full w-[20%] ">
              <div className="flex items-center h-[100%] w-[100%]">
                <Link
                  href="https://www.booking.com/hotel/in/pondicherry-executive-inn-pvt-ltd.en-gb.html?aid=2276381&label=msn-n_rHdCrJ%2AIcLUKuAJ%2A31NA-80127101751574%3Atikwd-80127288015208%3Aloc-90%3Aneo%3Amtb%3Alp150098%3Adec%3Aqsexecutive%20inn%20pondicherry%20hall%20booking&sid=6f171a8b800e881d367d2f6362be9237&dest_id=-2108165&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747369753&srpvid=f0811f121d530066&type=total&ucfs=1&"
                  target="_blank"
                >
                  <Image
                    src="/booking-com.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-[20%] ">
              <div className="flex items-center h-[100%] w-[100%]">
                <Link
                  href="https://hotels.travelguru.com/hotel-search/tgdom/details?source=BOOKING_ENGINE&tenant=TGB2C&city.name=Pondicherry&city.code=Pondicherry&locationName=Pondicherry&checkinDate=20/05/2025&checkoutDate=22/05/2025&appType=HOTEL&searchId=5a3ac0f0-1648-4dd3-9b15-15879b186f3c&roomRequests[0].id=1&roomRequests[0].noOfAdults=1&hotelId=00002516&htlSrchRank=1&htlFindMthd=hotel%20name%20click&viewType=list&chpFare=1644&propertySource=TGU&excludeHotelTax=true"
                  target="_blank"
                >
                  <Image
                    src="/travel-guru.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-[20%] ">
              <div className="flex items-center h-[100%] w-[100%]">
                <Link
                  href="https://www.goibibo.com/hotels/executive-inn-a-boutique-hotel-in-pondicherry-4812519226361150213/?hquery={%22ci%22:%2220250522%22,%22co%22:%2220250523%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=4812519226361150213&locusId=RGPUDD&locusType=region&cityCode=CTXPC&mmtId=201802011614261358&topHtlId=201802011614261358&FS=GSU&city=Pondicherry&sType=hotel"
                  target="_blank"
                >
                  <Image
                    src="/go-ibibo.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-[20%] ">
              <div className="flex items-center justify-center h-[100%] w-[100%]">
                <Link
                  href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=201802011614261358&_uCurrency=INR&checkin=06212025&checkout=06262025&city=CTXPC&country=IN&lat=11.93976&lng=79.83448&locusId=RGPUDD&locusType=region&rank=1&reference=hotel&rf=directSearch&roomStayQualifier=1e0e&rsc=1e1e0e&searchText=Executive+Inn+-+A+boutique+Hotel&topHtlId=201802011614261358&type=hotel&mtkeys=-7354292052934374288&isPropSearch=T"
                  target="_blank"
                >
                  <Image
                    src="/make-my-trip.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[70%] h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center pt-10">
            <div className="flex justify-center items-center my-8 font-serif text-[19px]">
              <Link href="/bookyourstay">
                <button className="border hover:scale-105 duration-300 relative cursor-pointer text-amber-100 group overflow-hidden h-16 w-64 rounded-md bg-amber-200 p-2 flex justify-center items-center font-extrabold">
                  <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-amber-800"></div>
                  <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-amber-700"></div>
                  <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-amber-600"></div>
                  <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-amber-500"></div>
                  <p className="z-10 text-amber-100">Book Your Stay</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col h-[70%] w-full">
            <div className="flex flex-col md:w-[50%] w-full md:ml-6">
              <p className="text-2xl font-semibold font-serif text-amber-100 mb-3">
                Follow us on
              </p>
              <div className="flex flex-row h-10 w-auto gap-3">
                <div
                  className="flex items-center justify-center w-10 h-full rounded-full bg-amber-100 p-[7px] text-amber-900 hover:cursor-pointer hover:bg-white/30 hover:text-amber-50 transition-all duration-400 ease-in-out"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/executiveinnpondicherry/",
                      "_blank"
                    )
                  }
                >
                  <Instagram strokeWidth={1.4} className="h-full w-auto" />
                </div>
                <div className="flex w-10 items-center justify-center h-full rounded-full bg-amber-100 p-[7px] text-amber-900 hover:cursor-pointer hover:bg-white/30 hover:text-amber-50 transition-all duration-400 ease-in-out">
                  <Facebook strokeWidth={1.4} className="h-full w-auto" />
                </div>
              </div>
              <p className="text-2xl font-semibold font-serif text-amber-100 mb-3 mt-9">
                Contact Us
              </p>
              <div className="flex flex-col md:flex-row w-full mt-1 gap-6">
                <div className="flex w-full md:w-1/2">
                  <MapPinned
                    className="h-6 w-6 text-amber-100 mr-4 shrink-0"
                    strokeWidth={1.4}
                  />
                  <div className="tracking-wider">
                    <p className="text-amber-100 font-semibold mb-3">
                      Pondicherry Executive Inn
                    </p>
                    <p className="text-gray-200">1-A, Perumal Kovil St,</p>
                    <p className="text-gray-200">White Town,</p>
                    <p className="text-gray-200">Puducherry - 605001</p>
                  </div>
                </div>
                <div className="flex w-full md:w-1/2">
                  <MessagesSquare
                    className="h-6 w-6 text-amber-100 mr-4 shrink-0"
                    strokeWidth={1.4}
                  />
                  <div className="tracking-wider">
                    <p className="text-amber-100 font-semibold mb-3">
                      Talk To Us
                    </p>
                    <p className="text-gray-200 font-sans">0413 - 2224422</p>
                    <p className="text-gray-200 font-sans">2970782</p>
                    <p className="text-gray-200 font-sans">2225824</p>
                    <p className="text-gray-200 font-sans">+91 - 8270512260</p>
                    <p className="text-ellipsis text-gray-200">
                      sumersureka@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100 md:w-[50%] w-full my-10 bg-amber-100 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.281104888977!2d79.83229531533418!3d11.939757991551487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5363d6c787b913%3A0x9d34815a0a25689c!2sExecutive%20Inn%201-A%2C%20Perumal%20Koil%20St%2C%20White%20Town%2C%20Puducherry%2C%20605001!5e0!3m2!1sen!2sin!4v1714458548742!5m2!1sen!2sin"
                frameBorder={2}
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
