"use client";

import { useEffect, useState } from "react";

export default function ScrollHandler() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      isScrolling = true;

      const section1 = document.getElementById("section-1");
      const section2 = document.getElementById("section-2");

      if (e.deltaY > 0 && current === 0 && section2) {
        window.scrollTo({ top: section2.offsetTop - 80, behavior: "smooth" });
        setCurrent(1);
      } else if (e.deltaY < 0 && current === 1 && section1) {
        window.scrollTo({ top: section1.offsetTop - 80, behavior: "smooth" });
        setCurrent(0);
      }

      setTimeout(() => (isScrolling = false), 200);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [current]);

  return null;
}
