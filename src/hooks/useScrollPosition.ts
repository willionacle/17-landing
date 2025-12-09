import { useEffect, useState } from "react";

export function useScrollTrigger(y: number) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setTriggered(window.scrollY > y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);

  return triggered;
}
