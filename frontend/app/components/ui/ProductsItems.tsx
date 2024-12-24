"use client";
import React, { useRef, useState } from "react";
import getHttp from "@/services/getHttp";
import { TProducts, TProductsItem } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { addFavorite, removeFavorite } from "@/store/slice/favoritesSlice";
import ShareIcon from "../icons/ShareIcon";
import CompareIcon from "../icons/CompareIcon";
import HeartIconWhite from "../icons/HeartIconWhite";
import Modal from "./modal/Modal";
import ShareModalContent from "./ShareModalContent";

type Props = {
  displayType: "limited" | "all";
  cols: number;
};

const ProductsItems = ({ displayType, cols }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [shareLink, setShareLink] = useState<string>("");

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const handleFavoriteToggle = (item: TProductsItem) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const openModal = (link: string) => {
    setShareLink(link);
    modalRef.current?.showModal();
  };

  const {
    data: productItems,
    isPending,
    error,
  } = getHttp<TProducts>({
    queryKey: ["products"],
    service: `/api/products?populate=*`,
  });

  if (isPending) return <div className="loading loading-ball"></div>;
  if (error) return <p>Error loading data...</p>;

  const productsToShow =
    displayType === "limited"
      ? productItems?.data.slice(0, 4)
      : productItems?.data;

  return (
    <div className="flex items-center justify-between h-full">
      {productItems && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-4 py-4 md:p-4`}
        >
          {productsToShow?.map((item: TProductsItem) => (
            <div
              key={item.id}
              className="group bg-[#f1f1f1] rounded-lg shadow-md relative overflow-hidden"
            >
              <Image
                width={700}
                height={700}
                priority
                src={item.Image?.url}
                alt={item.name}
                className="w-full h-[280px] object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col gap-2">
                <h4 className="font-bold text-lg text-[#000]">{item.name}</h4>
                <p className="text-sm text-[#898989]">{item.Description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Rp {item.price}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex-col bg-[#3A3A3A] bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/shop/${item.documentId}`}
                  className="bg-white text-[#B88E2F] px-8 py-2 hover:bg-gray-100 duration-200"
                >
                  Add to Cart
                </Link>
                <div className="flex items-center w-full gap-2 justify-center">
                  <button
                    onClick={() => handleFavoriteToggle(item)}
                    className={`p-2 flex items-center gap-0.5 ${
                      favorites.some((fav) => fav.id === item.id)
                        ? "text-red-600"
                        : "text-white"
                    }`}
                  >
                    <HeartIconWhite
                      color={
                        favorites.some((fav) => fav.id === item.id)
                          ? "red"
                          : "white"
                      }
                    />
                    Like
                  </button>
                  <button
                    onClick={() => openModal(`/shop/${item.documentId}`)}
                    className="text-[#fff] p-2 flex items-center gap-0.5 duration-200"
                  >
                    <ShareIcon />
                    Share
                  </button>
                  <button className="text-[#fff] p-2 flex items-center gap-0.5 duration-200">
                    <CompareIcon />
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share Modal */}
      <Modal modalsRef={modalRef} title="Share Product" className="bg-[#fff]">
        <ShareModalContent shareLink={shareLink} />
      </Modal>
    </div>
  );
};

export default ProductsItems;
