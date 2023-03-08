import { Inter } from "next/font/google";
import { Suspense } from "react";
import TodosList from "./components/TodosList";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex space-x-10">
        <Suspense fallback={<p className="text-sky-800">Loading todos...</p>}>
          {/* @ts-ignore */}
          <TodosList />
        </Suspense>
        <Suspense fallback={<p className="text-fuchsia-800">Loading products...</p>}>
          {/* @ts-ignore */}
          <TodosList />
        </Suspense>
      </div>
    </main>
  );
}
