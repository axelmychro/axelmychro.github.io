"use client";
import { icons } from "lucide-react";
import MyCard from "./MyCard";
import { linkTree } from "./yourInformation";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col gap-16 py-32 sm:px-16 bg-white dark:bg-zinc-900 sm:mx-8">
        <div className=" lg:order-last flex not-sm:justify-center">
          <div className="flex flex-col gap-2">
            {linkTree.map((item) => {
              const Icon = item.icon ? icons[item.icon] : null;
              return (
                <a
                  className="text-2xl flex items-center gap-2 tracking-tight p-2 border-b-2"
                  key={item.link}
                  href={`https://${item.link}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`To new page: ${item.label}`}
                >
                  {Icon && <Icon className="inline size-6" />}
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <MyCard />
      </main>
    </div>
  );
}
