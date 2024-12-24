"use client";

import React from "react";
import AuthForm from "../AuthForm";

const RegisterPage = () => {
  const handleRegister = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Register data:", data);
  };

  return (
    <div className="min-h-screen">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
