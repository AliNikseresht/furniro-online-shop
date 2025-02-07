"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/store/store";
import Input from "@/app/components/ui/forms/Input";

interface FormData {
  [key: string]: string;
}
const CheckoutItems = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal;

  //state
  const static_checkout_data = useAppSelector((state) => state.dataReducer);

  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //function
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 mt-8 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-2/3 flex flex-col gap-4"
      >
        <h2 className="text-xl md:text-4xl font-semibold">
          {static_checkout_data.checkoutData.formTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {static_checkout_data.checkoutData.inputFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              label={field.label}
              register={register}
              errorMessage={errors[field.name]?.message}
            />
          ))}
        </div>

        <Input
          key="additionalInfo"
          name="additionalInfo"
          label="Additional Information"
          as="textarea"
          rows={3}
          register={register}
          errorMessage={errors.additionalInfo?.message}
        />
      </form>

      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="font-bold text-xl md:text-2xl">
              {static_checkout_data.checkoutData.product}
            </span>
            <span className="font-bold text-xl md:text-2xl">
              {static_checkout_data.checkoutData.subtotal}
            </span>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm">x {item.quantity}</span>
              </div>
              <span className="text-[#212121] text-sm">
                Rs. {item.price * item.quantity}
              </span>
            </div>
          ))}
          <div className="flex justify-between">
            <span className="text-sm">Subtotal</span>
            <span className="text-[#212121] text-sm">Rs. {subtotal}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span className="text-sm">Total</span>
            <span className="text-[#b88e2f] text-lg md:text-xl font-bold">
              Rs. {total}
            </span>
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex flex-col gap-2">
              {static_checkout_data.checkoutData.paymentOptions.map(
                (option, index) => (
                  <div key={option.id} className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={index === 0}
                      />
                      {option.label}
                    </label>
                    {option.description && (
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="border-[#212121] border text-[#000] px-4 py-2 rounded-md hover:bg-[#ebebeb] w-40 self-center mt-4 duration-200"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutItems;
