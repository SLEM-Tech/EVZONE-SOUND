import React from "react";

const QuoteOfDay = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full px-4 sm:px-6 max-w-[576px] gap-y-4 md:gap-y-5 mt-10 md:mt-20">
      <h1 className="text-secondary-400 text-3xl sm:text-4xl md:text-5xl font-medium">
        Quote Of The Day
      </h1>
      <p className="text-gray1-400 text-lg sm:text-xl md:text-2xl text-center leading-normal sm:leading-[1.6] md:leading-[55px]">
        “The more that you read, the more things you will know. The more that
        you learn, the more places you’ll go.”
      </p>
      <h2 className="mt-6 md:mt-10 text-gray1-400 text-base md:text-lg">
        — odogwu baddo
      </h2>
    </div>
  );
};

export default QuoteOfDay;
