import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <Typography ref={ref} variant="h3" fontWeight={700}>
      {count}
      {suffix}
    </Typography>
  );
}
