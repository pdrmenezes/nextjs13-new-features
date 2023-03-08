"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchComponent() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        placeholder="Enter search term"
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="false"
      />
      <button type="submit" className="bg-sky-800 text-white font-bold py-2 px-4 rounded-md">
        Search
      </button>
    </form>
  );
}
