"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

type FrameworkRevolverProps = {
  trueLabel: string;
  maskLabel: string;
};

export default function FrameworkRevolver({
  trueLabel,
  maskLabel,
}: FrameworkRevolverProps) {
  const frameworkLabelRef = useRef<HTMLButtonElement>(null);

  type Framework = typeof trueLabel | typeof maskLabel;
  const [frameworkLabel, setLabel] = useState<Framework>(maskLabel);

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
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "back.out(2)",
          },
        );
      },
    });
  };

  return (
    <button
      type="button"
      ref={frameworkLabelRef}
      onPointerEnter={revolveLabel}
      onClick={revolveLabel}
      className="inline-block font-medium cursor-pointer min-w-28 select-text"
    >
      {frameworkLabel}
    </button>
  );
}
