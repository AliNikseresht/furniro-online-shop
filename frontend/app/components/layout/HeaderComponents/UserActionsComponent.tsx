"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { getIconElement } from "@/functions/getIconElement ";
import Modal from "../../ui/modal/Modal";
import SearchBox from "../../ui/SearchBox";
import FavoriteModalContent from "../../ui/FavoriteModalContent";

const UserActionsComponent = () => {
  const static_actions_data = useAppSelector((state) => state.dataReducer);
  const favoriteModalRef = useRef<HTMLDialogElement>(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const favoriteCount = useAppSelector((state) => state.favorites.items.length);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleSearchSection = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const openFavoriteModal = () => {
    if (favoriteModalRef.current) {
      favoriteModalRef.current.showModal();
    }
  };

  const closeFavoriteModal = () => {
    if (favoriteModalRef.current) {
      favoriteModalRef.current.close();
    }
  };

  return (
    <div>
      <ul className="hidden md:flex items-center gap-3 lg:gap-7 justify-between">
        {static_actions_data.layoutData.userActions.map((item, index) => (
          <li
            className="cursor-pointer flex justify-center items-center"
            key={index}
          >
            {item.modal ? (
              <div className="relative flex justify-center items-center">
                <button
                  onClick={() => {
                    if (item.modal?.type === "search") {
                      toggleSearchSection();
                    } else if (item.modal?.type === "favorite") {
                      openFavoriteModal();
                    }
                  }}
                >
                  {getIconElement(item.icon)}
                  {item.modal?.type === "favorite" && favoriteCount > 0 && (
                    <span className="absolute -top-0.5 -right-1.5 bg-[#E97171] text-[#fff] text-center text-xs rounded-[50%] px-1.5 py-0.5">
                      {favoriteCount}
                    </span>
                  )}
                </button>
              </div>
            ) : (
              item.links &&
              item.links.length > 0 && (
                <Link href={item.links[0].href} className="relative">
                  {getIconElement(item.icon)}
                  {item.links[0].href === "/cart" && cartCount > 0 && (
                    <span className="absolute top-0 -right-3 bg-[#E97171] text-[#fff]  text-xs rounded-[50%] px-1.5 py-0.5">
                      {cartCount}
                    </span>
                  )}
                </Link>
              )
            )}
          </li>
        ))}
        <Modal
          modalsRef={favoriteModalRef}
          className="bg-[#fff]"
          title="Favorite List"
        >
          <FavoriteModalContent onShopClick={closeFavoriteModal} />
        </Modal>
      </ul>
      {isSearchVisible && <SearchBox />}
    </div>
  );
};

export default UserActionsComponent;
