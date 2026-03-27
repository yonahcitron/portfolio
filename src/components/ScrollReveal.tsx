import React, { useEffect, useRef, useState, PropsWithChildren } from "react";

interface Props {
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className, delay = 0 }: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}
