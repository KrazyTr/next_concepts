import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href="/blog">
        <button className="bg-blue-400 p-6 rounded-lg text-3xl">
          Yooooo!!
        </button>
      </Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
