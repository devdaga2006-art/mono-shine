import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
