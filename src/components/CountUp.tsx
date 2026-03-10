import { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
}

export function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const value = Math.min(Math.floor((progress / duration) * end), end);
      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
}
