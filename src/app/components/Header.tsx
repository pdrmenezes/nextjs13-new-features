import Link from "next/link";

export default function Header() {
  return (
    <div className="p-5 bg-sky-800 flex justify-between">
      <h1 className="text-zinc-200 font-bold">Logo</h1>
      <div>
        <Link href="/" className="px-2 py-1 bg-zinc-200 text-sky-800 rounded-tl-md border-r-4 border-r-sky-800">
          Home
        </Link>
        <Link href="/todos" className="px-2 py-1 bg-zinc-200 text-sky-800 border-r-4 border-r-sky-800">
          Todos
        </Link>
        <Link href="/search" className="px-2 py-1 bg-zinc-200 text-sky-800 rounded-tr-md">
          Search
        </Link>
      </div>
    </div>
  );
}
