import React from "react";
import Input from "./forms/Input";
import SearchIcon from "../icons/searchIcon";
import { useForm } from "react-hook-form";

interface SearchFormValues {
  query: string;
}

const SearchBox = () => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  const onSearchSubmit = (data: SearchFormValues) => {
    console.log("Search Query:", data.query);
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md p-4">
      <form
        onSubmit={handleSubmit(onSearchSubmit)}
        className="flex w-full justify-between items-center gap-2"
      >
        <Input
          name="query"
          register={register}
          placeholder="Grifo, Lolito, Muggo, Pingky..."
          className="w-full"
        />
        <button type="submit" className="px-2 py-2">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
