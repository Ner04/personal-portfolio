"use client";

import { useState } from "react";
import { terminalCommands } from "@/lib/data";
import { useChaos } from "./Chaos";

type Entry = { cmd: string; lines: string[] };

export default function Terminal() {
  const { state, run } = useChaos();
  const [history, setHistory] = useState<Entry[]>([{ cmd: "whoami", lines: terminalCommands.whoami }]);

  const push = (e: Entry) => setHistory((h) => [...h, e].slice(-3));

  const chaos = () => {
    if (state === "degraded") return;
    push({ cmd: "gremlin attack --pods", lines: ["injecting latency + pod kills…", "retries engaged · failover ok · 0 lost"] });
    run();
  };

  return (
    <div className={`terminal ${state === "degraded" ? "shake" : ""}`}>
      <div className="term-bar">
        <i style={{ background: "#ff5f57" }} />
        <i style={{ background: "#febc2e" }} />
        <i style={{ background: "#28c840" }} />
        <span>shubham@prod — zsh</span>
      </div>
      <div className="term-screen" aria-live="polite">
        {history.map((h, i) => (
          <div key={`${h.cmd}-${i}-${history.length}`} className="rise">
            <div>
              <span className="prompt">➜</span> <span className="path">~</span> {h.cmd}
            </div>
            {h.lines.map((l) => (
              <div key={l} className="term-out">{l}</div>
            ))}
          </div>
        ))}
        <div>
          <span className="prompt">➜</span> <span className="path">~</span> <span className="caret" />
        </div>
      </div>
      <div className="term-keys">
        {Object.keys(terminalCommands).map((c) => (
          <button key={c} type="button" className="pop" onClick={() => push({ cmd: c, lines: terminalCommands[c] })}>
            {c}
          </button>
        ))}
        <button type="button" className="pop chaos" onClick={chaos}>
          ⚡ {state === "degraded" ? "chaos running…" : "run chaos"}
        </button>
      </div>
    </div>
  );
}
