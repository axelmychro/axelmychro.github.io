"use client";
import MyCard from "./MyCard";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 sm:px-16 bg-white dark:bg-black sm:items-start">
        <MyCard />

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          {/* buttons unchanged */}
        </div>
      </main>
    </div>
  );
}
