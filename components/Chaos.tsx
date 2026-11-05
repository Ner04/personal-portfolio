"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type ChaosState = "ok" | "degraded" | "recovered";

const ChaosContext = createContext<{ state: ChaosState; run: () => void }>({
  state: "ok",
  run: () => {},
});

/** Shared "chaos experiment" state: the terminal starts it, the status bar and terminal react to it. */
export function ChaosProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ChaosState>("ok");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = useCallback(() => {
    if (state === "degraded") return;
    timers.current.forEach(clearTimeout);
    setState("degraded");
    timers.current = [
      setTimeout(() => setState("recovered"), 3300),
      setTimeout(() => setState("ok"), 7000),
    ];
  }, [state]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return <ChaosContext.Provider value={{ state, run }}>{children}</ChaosContext.Provider>;
}

export const useChaos = () => useContext(ChaosContext);
