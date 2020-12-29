import { useRef, useEffect } from "react";

// interface RefObject<T> {
//   readonly current: T | null;
// }

export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
