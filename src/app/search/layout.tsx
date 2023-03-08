import React from "react";
import SearchComponent from "../components/Search";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search Layout</h1>
      </div>
      <div className="flex-1 pl-5">
        <SearchComponent />
        <div>{children}</div>
      </div>
    </main>
  );
}
