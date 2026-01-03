"use client";

import FrameworkRevolver from "./FrameworkRevolver";
import { myProfile } from "./yourInformation";

export default function MyCard() {
  // Configure two selected items to display when hovered/clicked here
  const trueLabel = "Vue/Nuxt";
  const maskLabel = "React/Next";

  return (
    <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {myProfile.author}
      </h1>

      <p className="text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {/* You may rewrite the bio below as you wish */}
        cs student, junior frontend developer,{" "}
        <FrameworkRevolver maskLabel={maskLabel} trueLabel={trueLabel} />
        enthusiast
      </p>
    </div>
  );
}
