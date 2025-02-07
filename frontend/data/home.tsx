import CustomerSupport from "@/app/components/icons/CustomerSupport";
import GuaranteeIcon from "@/app/components/icons/GuaranteeIcon";
import ShoppingIcon from "@/app/components/icons/ShoppingIcon";
import TrophyIcon from "@/app/components/icons/TrophyIcon";
import { THome } from "@/types/home";

export const homeData: THome = {
  HeaderCollectionBox: {
    title: "New Arrival",
    subTitle: "Discover Our New Collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    BuyButton: {
      name: "BUY NOW",
      link: "/shop",
    },
  },
  AboutSection: [
    {
      Icon: "TrophyIcon",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      Icon: "GuaranteeIcon",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      Icon: "ShoppingIcon",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      Icon: "CustomerSupport",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ],
};
