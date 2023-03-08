import React from "react";
import TodosList from "../components/TodosList";

export const metadata = {
  title: "Todos",
  description: "Testing Next.js 13's new features: Todos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex space-x-4 divide-x-2 divide-y-2 p-5">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1 pt-5 pl-5">{children}</div>
    </main>
  );
}
