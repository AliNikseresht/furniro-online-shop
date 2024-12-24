import React from "react";
import HeadOfPages from "../components/ui/HeadOfPages";
import ContactItems from "./_components/ContactItems";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Contact" PreviousPage="Home" />

      <ContactItems />
    </div>
  );
};

export default ContactPage;
