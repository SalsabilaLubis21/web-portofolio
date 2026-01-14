import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="flex justify-center lg:justify-start">
        <div className="flex  items-center mb-8 lg:absolute lg:top-16 lg:-right-32 lg:flex-col">
          <span className="bg-[#1a1443] w-fit text-white rotate-0 lg:rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="hidden lg:block h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg lg:text-justify">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-[280px] h-[280px] lg:w-[360px] lg:h-[360px]">
            <Image
              src={personalData.profile}
              fill
              alt="Salsa"
              className="rounded-lg object-cover transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
