"use client";
import React, { useEffect, useRef, useState } from "react";
import Picture from "../picture/Picture";
import { useCategories, WooCommerce } from "../lib/woocommerce";
import HomeCard from "../Cards/HomeCard";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { useRouter } from "next/navigation";
import { categoryImg, categoryImg1, heroImage } from "@public/images";

const AllCategorySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const [categoryProductsMap, setCategoryProductsMap] = useState<{
    [key: string]: string | undefined;
  }>({});

  // WooCommerce API Category
  const {
    data: categories,
    isLoading: categoryWpIsLoading,
    isError: categoryIsError,
  } = useCategories("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setIsLoading(true);
        const filteredCategories = categories
          ?.filter((category: CategoryType) => category?.count > 0)
          ?.slice(0, 5);

        if (filteredCategories) {
          const productsPromises = filteredCategories.map(
            async (category: CategoryType) => {
              const response = await WooCommerce.get(
                `products?category=${category?.id}`
              );
              const firstProductImage =
                response?.data.length > 0
                  ? response?.data[0]?.images[0]?.src
                  : null;
              return {
                categoryId: category?.id,
                firstProductImage,
              };
            }
          );

          const productsResults = await Promise.all(productsPromises);
          const productsMap = productsResults.reduce(
            (acc: any, result: any) => ({
              ...acc,
              [result.categoryId]: result.firstProductImage,
            }),
            {}
          );
          setCategoryProductsMap(productsMap);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categories?.length) {
      fetchCategoryProducts();
    }
  }, [categories]);

  const handleCategoryClick = (category: CategoryType) => {
    const categorySlugId = `${convertToSlug(category.name)}-${category.id}`;
    dispatch(updateCategorySlugId({ categorySlugId }));
    router.push(`/category/${categorySlugId}`);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Loading State */}
      {categoryWpIsLoading && (
        <div className="space-y-8">
          <div className="w-full h-48 sm:h-64 bg-gray-100 rounded-xl animate-pulse" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-40 sm:h-48 bg-gray-100 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      )}

      {/* Categories Content */}
      {categories && (
        <div className="space-y-10">
          {/* Featured Category */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {categories[0] && (
              <Link
                href={`/category/${convertToSlug(categories[0].name)}-${
                  categories[0].id
                }`}
                onClick={() => handleCategoryClick(categories[0])}>
                <Picture
                  src={categories[0]?.image?.src || categoryImg1}
                  alt={categories[0]?.image?.alt || "Featured category"}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {categories[0].name}
                  </h2>
                </div>
              </Link>
            )}
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {categories?.slice(1, 5).map((category: any) => (
              <div
                key={category.id}
                className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <Link
                  href={`/category/${convertToSlug(category.name)}-${
                    category.id
                  }`}
                  onClick={() => handleCategoryClick(category)}>
                  <Picture
                    src={
                      category?.image?.src ||
                      categoryProductsMap[category.id] ||
                      heroImage
                    }
                    alt={category?.image?.alt || category.name}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* All Categories Carousel */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Browse All Categories
            </h3>
            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar">
              {categories?.map((category: any) => {
                const productImage = categoryProductsMap[category.id];
                if (!productImage) return null;

                return (
                  <div
                    key={category.id}
                    className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
                    onClick={() => handleCategoryClick(category)}
                    style={{ cursor: "pointer" }}>
                    <HomeCard
                      id={category.id.toString()}
                      image={productImage}
                      name={category.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllCategorySection;
