import { TLayoutData } from "@/types/layout";

export const layoutData: TLayoutData = {
  navbar: [
    {
      title: "Home",
      name: "Home",
      link: "/",
    },
    {
      title: "Shop",
      name: "Shop",
      link: "/shop",
    },
    {
      title: "Blog",
      name: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      name: "Contact",
      link: "/contact",
    },
  ],
  userActions: [
    {
      key: "user",
      icon: "UserIcon",
      links: [{ href: "/login" }],
    },
    {
      key: "search",
      icon: "SearchIcon",
      modal: {
        type: "search",
        buttons: [],
      },
      links: [{ href: "/search" }],
    },

    {
      key: "favorites",
      icon: "HearthIcon",
      modal: {
        type: "favorite",
        buttons: [],
      },
    },
    {
      key: "cart",
      icon: "ShopIcon",
      links: [{ href: "/cart" }],
    },
  ],
  brand: {
    name: "Funiro.",
    address: "400 University Drive Suite 200 Coral Gables,\nFL 33134 USA",
  },
  sections: [
    {
      title: "Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Payment Options", href: "/payment-options" },
        { name: "Returns", href: "/returns" },
        { name: "Privacy Policies", href: "/privacy-policies" },
      ],
    },
  ],
  newsletter: {
    placeholder: "Enter Your Email Address",
    buttonText: "SUBSCRIBE",
  },
  copyRight: "2023 Funiro. All rights reserved",
};
