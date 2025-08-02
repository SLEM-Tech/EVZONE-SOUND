"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "@node_modules/react-icons/io";
import { heroBanner, heroImage } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const HeroSection = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between max-w-[1256px] mx-auto px-4 sm:px-8">
      <section className="flex flex-col items-start justify-center gap-6 md:gap-10 py-8 w-full lg:max-w-[480px] order-2 lg:order-1">
        <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[100px]">
          Life of the Wild
        </h1>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.
        </p>
        <button
          onClick={() => router.push("/category")}
          className="capitalize border border-primaryColor-200 p-2 flex text-primary items-center gap-2 text-sm md:text-base">
          read more <IoIosArrowRoundForward className="text-primary " />
        </button>
      </section>
      <section className="order-1 lg:order-2 w-full lg:w-auto mt-6 lg:mt-0">
        <Picture
          src={heroBanner}
          alt="hero banner"
          className="w-full max-w-[395px] max-h-[572px] object-cover mx-auto"
        />
      </section>
    </main>
  );
};

export default HeroSection;
