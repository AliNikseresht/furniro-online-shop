"use client";

import { useAppSelector } from "@/store/store";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface FavoriteModalContentProps {
  onShopClick: () => void;
}

const FavoriteModalContent: React.FC<FavoriteModalContentProps> = ({
  onShopClick,
}) => {
  const favorites = useAppSelector((state) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8">
        <p className="text-lg font-semibold">No items found</p>
        <Link
          href="/shop"
          className="mt-4 px-6 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={onShopClick}
        >
          Visit the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {favorites.map((item) => (
        <ul key={item.id} className="flex items-center gap-2.5 mt-2 relative">
          <Image
            width={700}
            height={700}
            priority
            src={
              item.Image?.url?.startsWith("http")
                ? item.Image.url
                : `https://devoted-beauty-69cb4a011e.strapiapp.com${item.Image?.url}`
            }
            alt={item.name}
            className="w-[80px] h-[80px] object-cover rounded-lg"
          />

          <li className="flex flex-col">
            <h2>{item.name}</h2>
            <p className="text-sm text-[#898989]">{item.Description}</p>
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold mt-2">Rp {item.price}</p>
              {item.DiscountedPrice && (
                <p className="text-xs line-through mt-2.5 text-[#898989]">
                  Rp {item.DiscountedPrice}
                </p>
              )}
            </div>
            {item.Discounted && (
              <p className="text-xs bg-[#E97171] rounded-[50%] py-[0.6em] px-[0.3em] text-[#fff] absolute top-3 right-3">
                {item.Discounted}%
              </p>
            )}
            {item.isNew && (
              <p className="text-xs bg-[#2EC1AC] rounded-full py-2 px-1 text-[#fff] absolute top-3 right-3">
                New
              </p>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FavoriteModalContent;
