"use client";
import MyCard from "./MyCard";
import { linkTree } from "./yourInformation";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl not-lg:flex-col items-center justify-between py-32 sm:px-16 bg-white dark:bg-zinc-900">
        <MyCard />
        <div className="space-y-4 lg:order-first">
          {linkTree.map((item) => (
            <a
              className="text-4xl block"
              key={item.link}
              href={`https://${item.link}`}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`To new page`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
