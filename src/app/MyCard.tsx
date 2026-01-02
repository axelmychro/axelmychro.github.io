import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function MyCard() {
  const trueLabel = "Vue/Nuxt" as const;
  const maskLabel = "React/Next" as const;

  const frameworkLabelRef = useRef<HTMLButtonElement>(null);
  type Framework = typeof trueLabel | typeof maskLabel;

  const [frameworkLabel, setLabel] = useState<Framework>(trueLabel);

  const cooldown = useRef<NodeJS.Timeout | null>(null);

  const revolveLabel = () => {
    const frameworkLabelButton = frameworkLabelRef.current;
    if (!frameworkLabelButton) return;

    if (cooldown.current) return;

    cooldown.current = setTimeout(() => {
      cooldown.current = null;
    }, 300);

    gsap.to(frameworkLabelButton, {
      y: -8,
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setLabel((prev) => (prev === trueLabel ? maskLabel : trueLabel));

        gsap.fromTo(
          frameworkLabelButton,
          {
            y: 16,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "back.out(1.7)",
          },
        );
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Axel Ramadhan
      </h1>

      <p className=" text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        cs student, junior frontend developer,{" "}
        <button
          type="button"
          ref={frameworkLabelRef}
          onPointerEnter={revolveLabel}
          onClick={revolveLabel}
          className="inline-block font-medium cursor-pointer min-w-26 select-text"
        >
          {frameworkLabel}
        </button>{" "}
        enthusiast
      </p>
    </div>
  );
}
