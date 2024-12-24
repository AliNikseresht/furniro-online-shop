import React from "react";
import ProductsItems from "@/app/components/ui/ProductsItems";
import Link from "next/link";
import ShopItems from "../_components/ShopItems";

const ProductPage = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <ShopItems />

      <div className="flex items-center flex-col w-full p-4 gap-2 border-t my-7">
        <h3 className="text-[#000] font-bold text-xl md:text-3xl">
          Related Products
        </h3>
        <ProductsItems cols={4} displayType="limited" />
        <Link
          href="/shop"
          className="mt-4 px-8 py-2 border border-[#B88E2F] text-[#B88E2F]"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
