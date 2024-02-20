import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTimer = () => {
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (hasSubmitted) {
      const id = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);

      if (count === 0) {
        clearInterval(id);
        navigate("/");
      }
      return () => clearInterval(id);
    }
  }, [count, hasSubmitted, navigate]);

  return { setCount, count, navigate, setHasSubmitted, hasSubmitted };
};
