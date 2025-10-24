"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "@node_modules/react-icons/io";
import { heroBanner, heroImage } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";
import { TiStar } from "@node_modules/react-icons/ti";

const HeroSection = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden sm:mt-[100px] lg:mt-[-100px] ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primaryColor-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primaryColor-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primaryColor-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-8 md:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content Section */}
          <section className="flex flex-col items-start justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex sm: mt-[20px] md:mt-[-20px] items-center gap-2 px-4 py-2 rounded-full bg-primaryColor-100/20 border border-primaryColor-200 backdrop-blur-sm">
              <TiStar className="text-primary text-lg" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                New Collection 2025
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.15em]">
                Special Season
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Evezone Fashion
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primaryColor-200 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              Discover the art of modern elegance. Our curated collection
              features premium clothing and accessories that blend contemporary
              design with timeless sophistication. Express your unique style
              with pieces crafted for the discerning fashion enthusiast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => router.push("/category")}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primaryColor-200 text-white rounded-xl font-semibold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop Collection
                  <IoIosArrowRoundForward className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primaryColor-200 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </section>

          {/* Right Image Section */}
          <section className="relative h-[500px] md:h-[650px] lg:h-[600px]">
            {/* Floating background decorations */}
            <div className="absolute -top-12 -right-8 w-48 h-64 bg-gradient-to-br from-primary to-primaryColor-200 rounded-2xl opacity-70 blur-2xl animate-float"></div>

            <div className="absolute -bottom-20 -left-12 w-40 h-40 bg-gradient-to-tr from-primaryColor-100 to-primary rounded-full opacity-40 blur-3xl"></div>

            {/* Main Image Container */}
            <div className="relative h-[90%] flex items-center justify-center">
              <div className="relative w-full h-full max-w-[450px] mx-auto">
                {/* Image Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500">
                  <Picture
                    src="/images/hero banner.jpg"
                    alt="Premium Fashion Collection"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 flex flex-col gap-3">
                  <div className="text-4xl text-primary font-light opacity-60">
                    ×
                  </div>
                  <div className="text-4xl text-primary font-light opacity-60">
                    ×
                  </div>
                  <div className="text-4xl text-primary font-light opacity-60">
                    ×
                  </div>
                </div>

                <div className="absolute -bottom-8 right-12 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-primaryColor-200 animate-pulse delay-100"></div>
                  <div className="w-3 h-3 rounded-full bg-primaryColor-100 animate-pulse delay-200"></div>
                </div>

                {/* Floating info card */}
                <div className="absolute -bottom-16 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 backdrop-blur-sm max-w-xs hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">★</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Trending Now</p>
                      <p className="text-xs text-gray-600">Summer Collection</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Limited time offer on exclusive pieces
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-4000 {
          animation-delay: 4s;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </main>
  );
};

export default HeroSection;
