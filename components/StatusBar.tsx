"use client";

import { useEffect, useState } from "react";
import { useChaos } from "./Chaos";

const LABELS = {
  ok: "ALL SYSTEMS OPERATIONAL · open to new roles",
  degraded: "DEGRADED · chaos test running · retrying with backoff",
  recovered: "RECOVERED · 0 requests lost",
};

function istTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
}

export default function StatusBar() {
  const { state } = useChaos();
  const [clock, setClock] = useState("");

  useEffect(() => {
    setClock(istTime());
    const id = setInterval(() => setClock(istTime()), 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`status ${state === "degraded" ? "degraded" : ""}`} role="status">
      <div className="container status-inner">
        <span>
          <span className="dot" aria-hidden="true" />
          {LABELS[state]}
        </span>
        <span>BENGALURU · IST {clock}</span>
      </div>
    </div>
  );
}
