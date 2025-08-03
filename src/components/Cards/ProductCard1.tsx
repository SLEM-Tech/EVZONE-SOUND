"use client";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { convertToSlug } from "@constants";
import Picture from "../picture/Picture";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";

interface ProductCardProps {
  product: {
    id: string | number;
    name: string;
    price: string;
    regular_price?: string;
    images: Array<{ src: string }>;
  };
}

const ProductCard1 = ({ product }: ProductCardProps) => {
  const { addItem, removeItem, updateItem, getItem } = useCart();
  const slugDesc = convertToSlug(product.name);
  const cartItem = getItem(product.id.toString());
  const cartItemCount = cartItem?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price),
      quantity: 1,
      image: product.images[0]?.src,
    });
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateItem(product.id.toString(), { quantity: cartItemCount + 1 });
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItemCount === 1) {
      removeItem(product.id.toString());
    } else {
      updateItem(product.id.toString(), { quantity: cartItemCount - 1 });
    }
  };

  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow bg-white">
      {/* Image Section */}
      <Link
        href={`/home-item/product/${slugDesc}-${product.id}`}
        className="relative block pt-[100%] bg-gray-50">
        <Picture
          src={product.images?.[0]?.src || "/placeholder-product.jpg"}
          alt={`${product.name}-image`}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
          loading="lazy"
        />
      </Link>

      {/* Content Section */}
      <div className="p-3 flex flex-col flex-grow">
        <Link
          href={`/home-item/product/${slugDesc}-${product.id}`}
          className="block mb-2">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mb-3">
            {product.regular_price && (
              <span className="text-xs text-gray-500 line-through">
                NGN{product.regular_price}
              </span>
            )}
            <span className="text-sm font-bold text-primary">
              NGN{product.price}
            </span>
          </div>

          {cartItemCount > 0 ? (
            <div className="flex items-center justify-between bg-gray-100 rounded-full px-3 py-1">
              <button
                onClick={handleDecrease}
                className="text-primary hover:bg-gray-200 rounded-full p-1"
                aria-label="Decrease quantity">
                <AiOutlineMinus className="text-xs" />
              </button>
              <span className="text-sm font-medium mx-2 min-w-[20px] text-center">
                {cartItemCount}
              </span>
              <button
                onClick={handleIncrease}
                className="text-primary hover:bg-gray-200 rounded-full p-1"
                aria-label="Increase quantity">
                <AiOutlinePlus className="text-xs" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full text-xs bg-primary hover:bg-primary-dark text-white py-2 px-3 rounded-full flex items-center justify-center gap-1 transition-colors"
              aria-label="Add to cart">
              <BsFillBagPlusFill className="text-sm" />
              <span>Add to cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard1;
