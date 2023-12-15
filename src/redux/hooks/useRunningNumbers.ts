import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  targetValue: number;
  steps: number;
}

export const useRunningNumbers = ({ targetValue, steps }: Props) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      const duration = 1000;

      const stepSize = targetValue / steps;
      let currentCount = 0;

      const intervalId = setInterval(() => {
        currentCount += stepSize;

        if (currentCount >= targetValue) {
          currentCount = targetValue;
          clearInterval(intervalId);
        }

        setCount(Math.round(currentCount));
      }, duration / steps);

      return () => clearInterval(intervalId);
    }
  }, [inView, targetValue, steps]);

  return { count, ref };
};
