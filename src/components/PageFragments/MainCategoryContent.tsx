"use client";
import React from "react";
import { useCategories } from "../lib/woocommerce";
import SubCategoryCard from "../Cards/SubCategoryCard";

const MainCategoryContent = () => {
  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  const Categories: CategoryType[] = categories;

  return (
    <>
      {categoryWpIsLoading && (
        <section className="mb-8">
          <div className="w-full h-[100px] sm:h-[270px] bg-gray-200 rounded-md animate-pulse" />
        </section>
      )}

      {Categories && (
        <div className="overflow-hidden container mx-auto">
          <h4 className="text-2xl mb-4 font-medium">All Categories</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Categories?.map((data) => (
              <SubCategoryCard
                key={data.id}
                name={data?.name}
                id={data?.id?.toString()}
                image={data?.image?.src}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MainCategoryContent;
