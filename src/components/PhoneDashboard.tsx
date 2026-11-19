"use client";

import { useEffect, useState } from "react";

const queue = [
  { name: "Matías Fuentes", age: "1 min" },
  { name: "Javiera Soto", age: "3 min" },
  { name: "Felipe Araya", age: "6 min" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function PhoneDashboard() {
  const [t, setT] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const iv = setInterval(() => setT((p) => p + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  const cyc = t % 14;
  const ringing = cyc < 5;
  const callTime = "00:" + pad(Math.max(0, cyc - 5));
  const leadAge = "00:" + pad(3 + cyc);

  return (
    <div className="flex justify-center" style={{ position: "relative" }}>
      {/* Glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.76 0.17 52 / 0.18), transparent 65%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }}
      />
      {/* Phone frame */}
      <div
        className="relative"
        style={{
          width: 310, borderRadius: 44, background: "#1b1d1a",
          padding: 10, border: "1px solid #2f322d",
          boxShadow: "0 40px 80px rgba(0,0,0,.5)",
        }}
      >
        <div
          className="flex flex-col overflow-hidden"
          style={{ borderRadius: 35, background: "#0f110f", padding: "18px 18px 22px", minHeight: 600 }}
        >
          {/* Status bar */}
          <div className="flex justify-between" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, color: "var(--color-text-subtle)" }}>
            <span>10:42</span>
            <span style={{ width: 70, height: 18, borderRadius: 999, background: "#000", marginTop: -4 }} />
            <span>4G</span>
          </div>

          {/* App header */}
          <div className="mt-[18px] flex items-center justify-between text-xs" style={{ color: "var(--color-text-muted)" }}>
            <span className="font-bold" style={{ color: "var(--color-text-primary)" }}>FastCall</span>
            <span style={{ fontFamily: "var(--font-jetbrains)" }}>Cola: 7 leads</span>
          </div>

          {/* Call status */}
          <div className="mt-[34px] text-center">
            {ringing ? (
              <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-orange)" }}>
                Marcando automáticamente…
              </div>
            ) : (
              <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-green)" }}>
                En llamada · {callTime}
              </div>
            )}

            {/* Avatar */}
            <div
              className="mx-auto mt-[22px] grid h-[92px] w-[92px] place-items-center rounded-full text-[30px] font-[800]"
              style={{
                background: "#20231f", border: "1px solid #33372f",
                animation: "pulse 1.6s infinite",
              }}
            >
              CR
            </div>

            <div className="mt-[18px] text-[26px] font-[800] tracking-[-0.02em]">Camila Rojas</div>
            <div className="mt-1.5 text-[13px]" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-text-subtle)" }}>+56 9 8••• 4412</div>

            {/* Tags */}
            <div className="mt-4 inline-flex flex-wrap justify-center gap-1.5">
              {["Meta Ads", "Toyota RAV4 2024"].map((tag) => (
                <span key={tag} className="rounded-full border px-[9px] py-[5px] text-[11px]" style={{ background: "#1d201c", borderColor: "#2f322d", color: "var(--color-text-tertiary)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Lead age card */}
          <div
            className="mt-[26px] flex items-center justify-between rounded-[14px] border"
            style={{ padding: "12px 14px", background: "#161815", borderColor: "#262926" }}
          >
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>Lead recibido hace</span>
            <span className="font-bold" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 16, color: "var(--color-orange)" }}>{leadAge}</span>
          </div>

          {/* Queue */}
          <div className="mt-5 uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10, letterSpacing: "0.1em", color: "var(--color-text-faint)" }}>
            Siguientes en tu cola
          </div>
          <div className="mt-2.5 flex flex-col gap-1.5">
            {queue.map((q) => (
              <div key={q.name} className="flex justify-between rounded-[10px] px-3 py-[9px] text-[13px]" style={{ background: "#141614" }}>
                <span style={{ color: "var(--color-text-secondary)" }}>{q.name}</span>
                <span className="text-[11px]" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-text-faint)" }}>{q.age}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
