import { PhoneDashboard } from "@/components/PhoneDashboard";

const WA = "https://wa.me/56994366697";
const TEL = "tel:+56994366697";

const features = [
  { title: "Marcado automático", body: "Los leads nuevos se llaman solos, en orden de prioridad. Los más recientes primero." },
  { title: "Velocidad de contacto", body: "El lead llega del formulario web o Meta Ads y en segundos ya está sonando el teléfono." },
  { title: "Sin intervención manual", body: "El vendedor no elige a quién llamar, no marca números, no pierde tiempo." },
  { title: "Detección inteligente", body: "Si no contestan, pasa al siguiente automáticamente. Si contestan, le da tiempo para gestionar." },
  { title: "Cola exclusiva por vendedor", body: "Cada vendedor tiene sus propios leads. No se mezclan entre el equipo." },
  { title: "Línea normal, no VoIP", body: "Usa la línea telefónica del celular. Al cliente le llega una llamada normal, no suena raro." },
  { title: "Configuración en vivo", body: "Tiempos de espera, estados llamables y prioridades se ajustan desde la nube, sin tocar los teléfonos." },
  { title: "Panel para el jefe comercial", body: "Quién está llamando, cuántas contestadas, duración y rendimiento por vendedor, en tiempo real." },
  { title: "Conectado a tu CRM", body: "LeadFlash, Supabase o cualquier CRM vía API. Nosotros hacemos la integración." },
];

const timeline = [
  { t: "00:00", label: "Lead entra desde Meta Ads" },
  { t: "00:02", label: "Llega al CRM y a la cola del vendedor" },
  { t: "00:04", label: "La app marca sola desde su celular" },
  { t: "00:28", label: "Camila contesta" },
  { t: "00:30", label: "\u201CHola Camila, te llamo por la RAV4\u2026\u201D" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ background: "var(--color-bg)" }}>
      {/* NAV */}
      <header className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-5" style={{ padding: "22px 28px" }}>
        <div className="flex items-center gap-2.5">
          <div className="grid h-[26px] w-[26px] place-items-center rounded-lg" style={{ background: "var(--color-orange)" }}>
            <div className="h-2 w-2 rounded-full" style={{ background: "var(--color-bg)" }} />
          </div>
          <span className="text-[19px] font-[800] tracking-[-0.02em]" style={{ fontStretch: "110%" }}>FastCall</span>
        </div>
        <nav className="flex flex-wrap items-center gap-7 text-sm" style={{ color: "var(--color-text-muted)" }}>
          <a href="#como" className="transition-colors duration-150 hover:text-[var(--color-text-primary)]" style={{ color: "var(--color-text-muted)" }}>Cómo funciona</a>
          <a href="#panel" className="transition-colors duration-150 hover:text-[var(--color-text-primary)]" style={{ color: "var(--color-text-muted)" }}>Panel en vivo</a>
          <a href="#precio" className="transition-colors duration-150 hover:text-[var(--color-text-primary)]" style={{ color: "var(--color-text-muted)" }}>Precio</a>
          <a href={WA} className="rounded-full px-[18px] py-2.5 font-bold transition-opacity duration-150 hover:opacity-90" style={{ background: "var(--color-text-primary)", color: "var(--color-bg)" }}>Agendar demo</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", padding: "56px 28px 96px" }}>
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border px-3 py-[7px] uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.08em", color: "var(--color-text-muted)", borderColor: "var(--color-border-3)" }}>
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: "var(--color-green)", animation: "pulse 1.6s infinite" }} />
            Especial para empresas que tienen leads para vender
          </div>
          <h1 className="mt-[26px]" style={{ fontSize: "clamp(44px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 850, fontStretch: "105%", textWrap: "balance" }}>
            Llama a cada lead en <span style={{ color: "var(--color-orange)" }}>30 segundos.</span> Sin tocar el teléfono.
          </h1>
          <p className="mt-[26px] max-w-[520px]" style={{ fontSize: 19, lineHeight: 1.55, color: "var(--color-text-body)" }}>
            Una app Android que llama sola a los leads que entran a tu CRM, desde el celular de cada vendedor. Él no elige, no marca, no busca. Solo habla.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={WA} className="rounded-full px-[26px] py-4 text-base font-[800] transition-opacity duration-150 hover:opacity-90" style={{ background: "var(--color-orange)", color: "var(--color-bg)" }}>Agendar demo</a>
            <a href="#como" className="rounded-full border px-[26px] py-4 text-base font-semibold transition-colors duration-150 hover:border-[var(--color-text-primary)]" style={{ borderColor: "var(--color-border-5)", color: "var(--color-text-primary)" }}>Ver cómo funciona</a>
          </div>
          <div className="mt-12 grid max-w-[560px] gap-7" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="flex flex-col gap-1.5">
              <span style={{ fontSize: 56, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1, color: "var(--color-green)" }}>+30%</span>
              <span className="text-[15px] font-semibold" style={{ lineHeight: 1.35, color: "var(--color-text-secondary)" }}>de aumento en la tasa de contactibilidad real</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span style={{ fontSize: 56, fontWeight: 850, letterSpacing: "-0.045em", lineHeight: 1, color: "var(--color-orange)" }}>+15%</span>
              <span className="text-[15px] font-semibold" style={{ lineHeight: 1.35, color: "var(--color-text-secondary)" }}>de aumento en la venta</span>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, color: "var(--color-text-subtle)", letterSpacing: "0.04em", gap: "12px 28px" }}>
            <span>Implementación en 2 semanas</span><span>Se integra a tu CRM</span><span>Línea normal, no VoIP</span><span>Solo Android</span>
          </div>
        </div>

        <PhoneDashboard />
      </section>

      {/* PROBLEMA */}
      <section style={{ borderTop: "1px solid var(--color-border-1)", borderBottom: "1px solid var(--color-border-1)", background: "var(--color-band)" }}>
        <div className="mx-auto max-w-[1240px]" style={{ padding: "96px 28px" }}>
          <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-text-subtle)" }}>El problema</div>
          <h2 className="mt-5 max-w-[1000px]" style={{ fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 850, textWrap: "balance" }}>
            Todos hablan de IA conversacional. <span style={{ color: "var(--color-text-faint)" }}>Nadie está resolviendo lo básico:</span> que una persona real llame al lead en los primeros minutos.
          </h2>
          <div className="mt-12 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))" }}>
            <div className="rounded-[20px] border p-7" style={{ borderColor: "var(--color-border-3)", background: "var(--color-card)" }}>
              <h3 className="text-2xl font-[800] leading-[1.15] tracking-[-0.02em]">¿Sabes cuántos leads llaman al día tus ejecutivos?</h3>
              <p className="mt-3 text-base leading-normal" style={{ color: "var(--color-text-muted)" }}>Sin registro automático, no hay forma de saber quién llamó, a cuántos y cuándo.</p>
            </div>
            <div className="rounded-[20px] border p-7" style={{ borderColor: "var(--color-border-3)", background: "var(--color-card)" }}>
              <h3 className="text-2xl font-[800] leading-[1.15] tracking-[-0.02em]">Se pierde tiempo digitando números.</h3>
              <p className="mt-3 text-base leading-normal" style={{ color: "var(--color-text-muted)" }}>Muchas veces los ejecutivos demoran mucho en digitar los números de teléfono. Ese tiempo es venta perdida.</p>
            </div>
          </div>
          <p className="mt-10 text-[22px] font-semibold" style={{ color: "var(--color-text-primary)" }}>La IA no cierra ventas de autos. Una persona sí.</p>
        </div>
      </section>

      {/* COMPARACION */}
      <section className="mx-auto max-w-[1240px]" style={{ padding: "110px 28px" }}>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>
          <div className="rounded-3xl border p-8" style={{ borderColor: "var(--color-border-2)", background: "var(--color-card)" }}>
            <div className="flex items-center justify-between uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.08em", color: "var(--color-text-subtle)" }}>
              <span>Tu competencia</span><span>Chatbot</span>
            </div>
            <div className="mt-7 flex flex-col gap-2.5">
              <div className="max-w-[80%] self-end rounded-[16px_16px_4px_16px] px-3.5 py-[11px] text-sm" style={{ background: "#22251f", color: "var(--color-text-secondary)" }}>Hola, quiero cotizar la RAV4</div>
              <div className="max-w-[85%] rounded-[16px_16px_16px_4px] border px-3.5 py-[11px] text-sm" style={{ background: "#181a17", borderColor: "#262926", color: "var(--color-text-muted)" }}>¡Hola! Soy Valentina, tu asistente virtual. Para ayudarte mejor, selecciona una opción: 1) Autos nuevos 2) Usados 3) Servicio técnico</div>
              <div className="max-w-[80%] self-end rounded-[16px_16px_4px_16px] px-3.5 py-[11px] text-sm" style={{ background: "#22251f", color: "var(--color-text-secondary)" }}>1</div>
              <div className="max-w-[85%] rounded-[16px_16px_16px_4px] border px-3.5 py-[11px] text-sm" style={{ background: "#181a17", borderColor: "#262926", color: "var(--color-text-muted)" }}>¡Genial! ¿Me indicas tu RUT para continuar?</div>
            </div>
            <div className="mt-7 border-t pt-5 text-[15px]" style={{ borderColor: "var(--color-border-2)", color: "var(--color-text-subtle)" }}>Resultado: el cliente sigue cotizando en otras 4 automotoras.</div>
          </div>
          <div className="rounded-3xl border p-8" style={{ borderColor: "oklch(0.76 0.17 52 / 0.45)", background: "var(--color-accent-card)" }}>
            <div className="flex items-center justify-between uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.08em", color: "var(--color-orange)" }}>
              <span>Tú</span><span>FastCall</span>
            </div>
            <div className="mt-7 flex flex-col">
              {timeline.map((s) => (
                <div key={s.t} className="grid gap-4 py-3" style={{ gridTemplateColumns: "64px 1fr", borderBottom: "1px solid #22231d" }}>
                  <span className="text-sm font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-orange)" }}>{s.t}</span>
                  <span className="text-[15px]" style={{ color: "var(--color-text-secondary)" }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-[15px]" style={{ color: "var(--color-text-primary)" }}>Resultado: una conversación real con alguien que quiere comprar.</div>
          </div>
        </div>
        <blockquote className="mx-auto mt-[72px] max-w-[980px] text-center font-semibold" style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: 1.25, letterSpacing: "-0.02em", textWrap: "balance", color: "var(--color-text-primary)" }}>
          &ldquo;Mientras tu competencia le manda un bot a un cliente que quiere comprar un auto de 15 millones, tú lo llamas en <span style={{ color: "var(--color-orange)" }}>30 segundos</span> con una persona real.&rdquo;
        </blockquote>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como" className="mx-auto max-w-[1240px]" style={{ padding: "40px 28px 110px" }}>
        <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-text-subtle)" }}>Cómo funciona</div>
        <h2 className="mt-[18px]" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 850 }}>El vendedor solo habla.</h2>
        <div className="mt-12 grid overflow-hidden rounded-3xl border" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 1, background: "var(--color-border-2)", borderColor: "var(--color-border-2)" }}>
          {[
            { n: "01", title: "Entra el lead", body: "Desde tu formulario web o Meta Ads llega al CRM, como siempre." },
            { n: "02", title: "La app marca sola", body: "En segundos el celular del vendedor ya está llamando. Primero los más recientes." },
            { n: "03", title: "Contesta o pasa al siguiente", body: "Si no contestan, sigue con el próximo. Si contestan, le da tiempo para gestionar." },
          ].map((s) => (
            <div key={s.n} className="px-[30px] py-9" style={{ background: "var(--color-band)" }}>
              <div className="text-[13px]" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-orange)" }}>{s.n}</div>
              <h3 className="mt-10 text-2xl font-[800] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-base leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-x-10 gap-y-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
          {features.map((f) => (
            <div key={f.title} className="border-t pt-[22px]" style={{ borderColor: "var(--color-border-3)" }}>
              <h4 className="text-[19px] font-[750] tracking-[-0.015em]">{f.title}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PANEL EN VIVO */}
      <section id="panel" style={{ background: "var(--color-band)", borderTop: "1px solid var(--color-border-1)", borderBottom: "1px solid var(--color-border-1)" }}>
        <div className="mx-auto max-w-[1240px]" style={{ padding: "110px 28px" }}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-text-subtle)" }}>Para el jefe comercial</div>
              <h2 className="mt-[18px] max-w-[640px]" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 850 }}>Todo tu equipo, en vivo.</h2>
            </div>
            <p className="max-w-[420px] text-[17px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>Quién está llamando, cuántas contestan, cuánto duran y cómo rinde cada vendedor. Tiempos, estados y prioridades se ajustan desde la nube, sin tocar los teléfonos.</p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* INTEGRACION */}
      <section className="mx-auto grid max-w-[1240px] items-center gap-14" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", padding: "110px 28px" }}>
        <div>
          <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-text-subtle)" }}>Integración</div>
          <h2 className="mt-[18px]" style={{ fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 850 }}>Nos integramos a tu CRM.</h2>
          <p className="mt-[22px] max-w-[480px] text-[17px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>No cambias de sistema ni de proceso. Nosotros hacemos la conexión: los leads siguen entrando donde siempre y la app los llama.</p>
          <div className="mt-8 flex flex-wrap items-center gap-[18px]">
            <span className="font-bold tracking-[-0.03em]" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 34, color: "var(--color-green)" }}>2 semanas</span>
            <span className="max-w-[300px] text-[15px] leading-[1.45]" style={{ color: "var(--color-text-tertiary)" }}>Es lo que demoramos en implementar, con integración, instalación y panel funcionando.</span>
          </div>
          <div className="mt-6 flex max-w-[480px] items-start gap-3 rounded-[14px] border" style={{ padding: "14px 16px", borderColor: "var(--color-border-3)", background: "var(--color-card)" }}>
            <span className="shrink-0 pt-0.5 uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, letterSpacing: "0.08em", color: "var(--color-orange)" }}>Requisito</span>
            <span className="text-sm leading-[1.45]" style={{ color: "var(--color-text-secondary)" }}>Los ejecutivos deben tener teléfonos Android. No está disponible para iPhone (iOS).</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {["LeadFlash", "Supabase", "Tu CRM vía API"].map((c) => (
            <span key={c} className="rounded-2xl border px-6 py-[18px] text-lg font-bold" style={{ borderColor: "var(--color-border-3)" }}>{c}</span>
          ))}
          {["Formulario web", "Meta Ads"].map((c) => (
            <span key={c} className="rounded-2xl border border-dashed px-6 py-[18px] text-lg font-semibold" style={{ borderColor: "var(--color-border-dashed)", color: "var(--color-text-subtle)" }}>{c}</span>
          ))}
        </div>
      </section>

      {/* PRECIO */}
      <section id="precio" className="mx-auto max-w-[1240px]" style={{ padding: "0 28px 110px" }}>
        <div className="grid gap-12 rounded-[28px] border" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", borderColor: "var(--color-border-3)", background: "var(--color-card)", padding: "clamp(32px, 5vw, 64px)" }}>
          <div>
            <div className="uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.1em", color: "var(--color-text-subtle)" }}>Precio</div>
            <h2 className="mt-[18px]" style={{ fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 850 }}>Simple. Funcionando en 2 semanas.</h2>
            <p className="mt-[18px] text-base leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>Incluye integración con tu CRM, instalación en los celulares del equipo y panel en vivo.</p>
          </div>
          <div style={{ borderLeft: "1px solid var(--color-border-3)", paddingLeft: "clamp(0px, 3vw, 40px)" }}>
            <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>Implementación</div>
            <div className="mt-3.5 flex items-baseline gap-2.5">
              <span style={{ fontSize: 72, fontWeight: 850, letterSpacing: "-0.04em", lineHeight: 1 }}>50</span>
              <span className="text-xl font-bold">UF</span>
              <span className="text-[15px]" style={{ color: "var(--color-text-subtle)" }}>+ IVA</span>
            </div>
            <div className="mt-2.5 text-[13px]" style={{ color: "var(--color-text-subtle)" }}>Pago único</div>
          </div>
          <div style={{ borderLeft: "1px solid var(--color-border-3)", paddingLeft: "clamp(0px, 3vw, 40px)" }}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Mensual</span>
              <span className="rounded-full px-[9px] py-1 text-[11px] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains)", letterSpacing: "0.08em", background: "var(--color-orange)", color: "var(--color-bg)" }}>Promoción</span>
            </div>
            <div className="mt-3.5 text-[22px] font-semibold line-through" style={{ color: "var(--color-text-faint)" }}>10 UF + IVA</div>
            <div className="mt-1 flex items-baseline gap-2.5">
              <span style={{ fontSize: 72, fontWeight: 850, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--color-orange)" }}>7</span>
              <span className="text-xl font-bold">UF</span>
              <span className="text-[15px]" style={{ color: "var(--color-text-subtle)" }}>+ IVA / mes</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="demo" style={{ borderTop: "1px solid var(--color-border-1)" }}>
        <div className="mx-auto max-w-[1240px] text-center" style={{ padding: "120px 28px" }}>
          <h2 className="mx-auto max-w-[1000px]" style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 850, textWrap: "balance" }}>
            Tu próximo lead entra en minutos. <span style={{ color: "var(--color-orange)" }}>¿Quién lo va a llamar?</span>
          </h2>
          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <a href={WA} className="rounded-full px-[30px] py-[18px] text-[17px] font-[800] transition-opacity duration-150 hover:opacity-90" style={{ background: "var(--color-orange)", color: "var(--color-bg)" }}>Agendar demo por WhatsApp</a>
            <a href={TEL} className="rounded-full border px-[30px] py-[18px] text-[17px] font-semibold transition-colors duration-150 hover:border-[var(--color-text-primary)]" style={{ borderColor: "var(--color-border-5)", color: "var(--color-text-primary)" }}>Llamar +56 9 9436 6697</a>
          </div>
          <div className="mt-7 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
            Vicente Torres · <a href={TEL} style={{ color: "var(--color-text-primary)" }}>+56 9 9436 6697</a>
          </div>
        </div>
        <footer className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 text-[13px]" style={{ padding: 28, borderTop: "1px solid var(--color-border-1)", color: "var(--color-text-faint)" }}>
          <span>FastCall · Santiago, Chile · Vicente Torres +56 9 9436 6697</span>
          <span>Marcador automático para equipos comerciales automotrices</span>
        </footer>
      </section>
    </div>
  );
}

function DashboardMockup() {
  const kpiLabels = ["Llamadas hoy", "Contestadas", "Tiempo a primer contacto", "Duración promedio"];
  const kpiValues = ["214", "61%", "0:34", "3:12"];
  const cols = ["Vendedor", "Estado", "Llamadas", "Contest.", "Tasa de contacto", "Duración"];
  const reps = [
    { name: "Ignacio Pérez", status: "En llamada", color: "var(--color-green)", calls: "52", answered: "34", pct: "65%", dur: "3:40" },
    { name: "Daniela Muñoz", status: "En llamada", color: "var(--color-green)", calls: "47", answered: "30", pct: "64%", dur: "3:05" },
    { name: "Rodrigo Vargas", status: "Marcando", color: "var(--color-orange)", calls: "44", answered: "25", pct: "57%", dur: "2:58" },
    { name: "Catalina Reyes", status: "Marcando", color: "var(--color-orange)", calls: "39", answered: "24", pct: "62%", dur: "3:21" },
    { name: "Tomás Contreras", status: "En pausa", color: "var(--color-text-subtle)", calls: "32", answered: "17", pct: "53%", dur: "2:47" },
  ];

  return (
    <div className="mt-14 overflow-hidden rounded-[20px] border" style={{ borderColor: "var(--color-border-3)", background: "var(--color-dashboard)", boxShadow: "0 40px 100px rgba(0,0,0,.45)" }}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b px-[22px] py-4" style={{ borderColor: "var(--color-border-2)" }}>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-border-4)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-border-4)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-border-4)" }} />
          <span className="ml-2.5 text-sm font-bold">Panel en vivo · Sucursal Las Condes</span>
        </div>
        <span className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-green)" }}>
          <span className="h-[7px] w-[7px] rounded-full" style={{ background: "var(--color-green)", animation: "pulse 1.6s infinite" }} />EN VIVO
        </span>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 1, background: "var(--color-border-2)" }}>
        {kpiLabels.map((l, i) => (
          <div key={l} className="p-[22px]" style={{ background: "var(--color-dashboard)" }}>
            <div className="text-xs" style={{ color: "var(--color-text-subtle)" }}>{l}</div>
            <div className="mt-2 tracking-[-0.02em]" style={{ fontFamily: "var(--font-jetbrains)", fontSize: 30, fontWeight: 700 }}>{kpiValues[i]}</div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <div style={{ minWidth: 720 }}>
          <div className="grid border-y px-[22px] py-3.5 uppercase" style={{ gridTemplateColumns: "1.5fr 1.3fr 0.8fr 0.9fr 1.6fr 0.8fr", fontFamily: "var(--font-jetbrains)", fontSize: 11, letterSpacing: "0.06em", color: "var(--color-text-faint)", borderColor: "var(--color-border-2)" }}>
            {cols.map((c) => <span key={c}>{c}</span>)}
          </div>
          {reps.map((r) => (
            <div key={r.name} className="grid items-center px-[22px] py-[15px] text-sm" style={{ gridTemplateColumns: "1.5fr 1.3fr 0.8fr 0.9fr 1.6fr 0.8fr", borderBottom: "1px solid #1c1f1b" }}>
              <span className="font-semibold">{r.name}</span>
              <span className="flex items-center gap-2 text-[13px]" style={{ color: r.color }}>
                <span className="h-[7px] w-[7px] rounded-full" style={{ background: r.color }} />{r.status}
              </span>
              <span style={{ fontFamily: "var(--font-jetbrains)" }}>{r.calls}</span>
              <span style={{ fontFamily: "var(--font-jetbrains)" }}>{r.answered}</span>
              <span className="flex items-center gap-2.5">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "#22251f" }}>
                  <span className="block h-full rounded-full" style={{ width: r.pct, background: "var(--color-orange)" }} />
                </span>
                <span className="w-9 text-xs" style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-text-muted)" }}>{r.pct}</span>
              </span>
              <span style={{ fontFamily: "var(--font-jetbrains)", color: "var(--color-text-muted)" }}>{r.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
