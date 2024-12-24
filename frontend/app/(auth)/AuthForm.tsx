import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/ui/forms/Input";
import Link from "next/link";

interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  validation: {
    name: FieldValidation;
    email: FieldValidation;
    password: FieldValidation;
  };
}

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    if (type === "register" && data.password !== data.validation.password) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {type === "login" ? "Login" : "Register"}
        </h2>
        <Input
          label="Name"
          name="name"
          register={register}
          errorMessage={errors.name?.message as string | undefined}
        />
        <Input
          label="Email"
          name="email"
          register={register}
          errorMessage={errors.email?.message as string | undefined}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          errorMessage={errors.password?.message as string | undefined}
        />
        {type === "register" && (
          <div>
            <Input
              label="Confirm Password"
              name="validation.password"
              type="password"
              register={register}
              errorMessage={
                errors.validation?.password?.message as string | undefined
              }
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-[#B88E2F] hover:bg-[#9b7928] py-1.5 rounded-lg text-[#fff] w-full duration-200"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
        <div className="text-center mt-4">
          {type === "login" ? (
            <>
              <span>Don&apos;t have an account?</span>
              <Link href="/register" className="text-[#B88E2F]">
                Register here
              </Link>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <Link href="/login" className="text-[#B88E2F]">
                Login here
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
