import { useEffect, useRef, useState } from "react";

export function useAparecer<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
        } else {
          setVisivel(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visivel };
}