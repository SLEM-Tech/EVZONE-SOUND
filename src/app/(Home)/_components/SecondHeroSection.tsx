import {
  bookdoorIcon,
  bookstoreIcon,
  flapriseIcon,
  gradIcon,
  libraryIcon,
} from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const SecondHeroSection = () => {
  const heroIconData = [
    gradIcon,
    flapriseIcon,
    bookstoreIcon,
    bookdoorIcon,
    libraryIcon,
  ];

  return (
    <main className="bg-gray1-300 mt-10 md:mt-20 py-10 md:py-20">
      <section className="flex flex-wrap justify-center gap-3 sm:gap-5 px-4">
        {heroIconData?.map((item, i) => (
          <div key={i} className="w-[30%] sm:w-auto p-2 sm:p-0">
            <Picture
              src={item}
              alt={`icon ${i + 1}`}
              className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[167px] max-h-[60px] sm:max-h-[80px] md:max-h-[100px] lg:max-h-[112px] object-contain mx-auto"
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default SecondHeroSection;
