"use client";

import * as React from "react";
import { Card } from "@avnir/ui";

export function TapperCard() {
  const [bpm, setBpm] = React.useState<number | null>(null);
  const [times, setTimes] = React.useState<number[]>([]);
  const tap = () => {
    const now = performance.now();
    setTimes((prev) => {
      const arr = [...prev, now].slice(-8);
      if (arr.length >= 2) {
        const intervals = arr.slice(1).map((t, i) => t - arr[i]);
        const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        setBpm(Math.round((60_000 / avg) * 10) / 10);
      }
      return arr;
    });
  };
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        tap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <Card className="p-6">
      <h3 className="h3">Tap Tempo</h3>
      <p className="mt-2 text-muted">Tape la barre espace pour mesurer le BPM</p>
      <button className="mt-4 bg-primary text-bg rounded-lg px-4 py-2" onClick={tap}>
        TAP
      </button>
      <div className="mt-4">
        BPM: <strong>{bpm ?? "—"}</strong>
      </div>
    </Card>
  );
}
