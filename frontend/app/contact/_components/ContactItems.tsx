"use client";

import Input from "@/app/components/ui/forms/Input";
import { getIconElement } from "@/functions/getIconElement ";
import { useAppSelector } from "@/store/store";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const ContactItems = () => {
  const static_contact_data = useAppSelector((state) => state.dataReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="text-lg md:text-2xl font-bold mt-[2em]">
        {static_contact_data.contactData.title}
      </h2>
      <p className="text-xs mt-2 md:text-sm md:w-[33rem] text-[#696969] text-center">
        {static_contact_data.contactData.description}
      </p>
      <div className="flex flex-col md:flex-row mt-6 justify-between p-4 md:w-[55rem]">
        <div className="flex flex-col mt-6 gap-4">
          {static_contact_data.contactData.informations.map((item, index) => (
            <div key={index} className="flex gap-2 justify-start">
              {getIconElement(item.icon)}
              <div className="flex flex-col items-start w-full">
                <h4 className="text-base text-[#000]">{item.name}</h4>
                <p className="text-xs text-[#212121]">{item.descriptions}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:w-[50%] mt-6"
        >
          <Input
            label="Your name"
            name="name"
            register={register}
            placeholder="Abc"
            required
            errorMessage={errors.name?.message}
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            register={register}
            placeholder="Abc@def.com"
            errorMessage={errors.email?.message}
          />
          <Input
            label="Subject"
            name="subject"
            register={register}
            placeholder="This is an optional"
            required
            errorMessage={errors.name?.message}
          />
          <Input
            label="Message"
            name="message"
            register={register}
            as="textarea"
            rows={4}
            placeholder="Hi! i’d like to ask about"
          />

          <button
            type="submit"
            className="px-4 w-28 py-2 bg-[#b88e2f] text-white rounded-md hover:bg-[#9a7828] duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactItems;
