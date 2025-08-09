"use client";
import { logoImage } from "@public/images";
import Picture from "@src/components/picture/Picture";
import Link from "next/link";

interface LogoImageProps {
  className?: string;
}

export const LogoImage = ({ className }: LogoImageProps) => {
  return (
    <Link
      href="/"
      className="size-10 flex items-center flex-col justify-center">
      <Picture
        src={logoImage}
        alt="logo"
        priority
        loading="lazy"
        className={`w-full h-auto duration-300 hover:scale-105 transition-transform hover:animate-pulse ${className}`}
      />
      {/* <span
        className={`!w-[80px] lg:!w-[100px] h-[80px] lg:h-[100px] duration-300 hover:scale-105 transition-[.3] hover:animate-pulse font-bold md:text-2xl ${className}`}>
        Logo
      </span> */}
    </Link>
  );
};

export const extractCurrencySymbol = (html: string) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.match(/[\u20A6]/)?.[0] || "";
};
