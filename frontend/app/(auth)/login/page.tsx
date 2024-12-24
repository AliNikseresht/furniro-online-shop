"use client";

import React from "react";
import AuthForm from "../AuthForm";

const LoginPage = () => {
  const handleRegister = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Register data:", data);
  };

  return (
    <div className="min-h-screen">
      <AuthForm type="login" onSubmit={handleRegister} />
    </div>
  );
};

export default LoginPage;
