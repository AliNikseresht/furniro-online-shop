import HeadOfPages from "../components/ui/HeadOfPages";
import CheckoutItems from "./_components/CheckoutItems";

const CheckoutPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Checkout" PreviousPage="Home" />
      <CheckoutItems />
    </div>
  );
};

export default CheckoutPage;
