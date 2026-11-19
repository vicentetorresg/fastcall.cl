# Handoff: FastCall — Landing page

## Overview
One-page marketing site for **FastCall**, an Android app that auto-dials CRM leads from each sales rep's phone. Audience: automotoras in Chile and companies that have leads to sell. Language: Spanish (Chile). Goal: get the visitor to contact Vicente Torres (WhatsApp / phone) to book a demo.

## About the Design Files
`FastCall Web.dc.html` is a **design reference built in HTML**. It shows the intended look and behavior. It is not production code. Rebuild it in the target stack. If there is no existing codebase, use **Next.js (App Router) + Tailwind CSS**, deployed as a static page. Open the HTML file in a browser to see it (`support.js` must sit next to it).

## Fidelity
**High-fidelity.** Colors, type, spacing, copy and layout are final. Recreate pixel-accurately. All copy is final Spanish text: use it verbatim.

## Global layout
- Page background `#0c0d0c`. Dark theme only.
- Content container: `max-width: 1240px; margin: 0 auto; padding-inline: 28px`.
- Alternate sections ("band" sections) use background `#0f110f` with `border-top/bottom: 1px solid #1f221e` and full-bleed width.
- Section vertical padding: 96–120px desktop. Reduce to ~64px under 640px.
- Fully fluid. Every multi-column block uses `grid-template-columns: repeat(auto-fit, minmax(min(100%, Xpx), 1fr))` so it stacks on mobile. Headlines use `clamp()`.
- Use `text-wrap: balance` on headlines, `text-wrap: pretty` on paragraphs.

## Sections (top to bottom)

### 1. Header / nav
- Flex row, space-between, padding 22px 28px, wraps on mobile.
- Logo: 26×26 square, radius 8, bg accent orange, with an 8px `#0c0d0c` dot centered. Wordmark "FastCall", 19px / 800 / letter-spacing -0.02em, `font-stretch:110%`.
- Links (14px, `#a3a69f`, gap 28px): "Cómo funciona" → `#como`, "Panel en vivo" → `#panel`, "Precio" → `#precio`.
- Button "Agendar demo": bg `#f1f0ec`, text `#0c0d0c`, padding 10px 18px, pill, 700 → `https://wa.me/56994366697`.

### 2. Hero
- Two-column grid (`minmax(min(100%,460px),1fr)`), gap 64px, padding 56px 28px 96px, items centered.
- **Left column:**
  - Pill badge: mono 12px uppercase, letter-spacing 0.08em, `#a3a69f`, border `1px solid #2a2d29`, padding 7px 12px, with a 7px green dot that pulses (see Animations). Text: "Especial para empresas que tienen leads para vender".
  - H1: `clamp(44px, 6.4vw, 84px)`, weight 850, line-height 0.95, letter-spacing -0.04em, margin-top 26px. Text: "Llama a cada lead en **30 segundos.** Sin tocar el teléfono." ("30 segundos." in orange).
  - Lead paragraph: 19px, line-height 1.55, `#b4b7b0`, max-width 520px: "Una app Android que llama sola a los leads que entran a tu CRM, desde el celular de cada vendedor. Él no elige, no marca, no busca. Solo habla."
  - CTAs (gap 12px, margin-top 36px): primary "Agendar demo" (orange bg, `#0c0d0c` text, 16px 26px, pill, 800) → WhatsApp. Secondary "Ver cómo funciona" (border `#33372f`, 600) → `#como`.
  - Stats (2-col grid, gap 28px, margin-top 48px, max-width 560px):
    - "+30%" (56px / 850 / -0.045em, green) + "de aumento en la tasa de contactibilidad real" (15px / 600 / `#d7d9d2`).
    - "+15%" (same, orange) + "de aumento en la venta".
  - Mono tag strip (12px uppercase, `#8d9089`, gap 12px 28px): "Implementación en 2 semanas", "Se integra a tu CRM", "Línea normal, no VoIP", "Solo Android".
- **Right column: phone mockup** (build in HTML/CSS, not an image)
  - Soft radial glow behind: 420px circle, `radial-gradient(circle, orange/18% , transparent 65%)`.
  - Frame: 310px wide, radius 44, bg `#1b1d1a`, padding 10, border `#2f322d`, shadow `0 40px 80px rgba(0,0,0,.5)`.
  - Screen: radius 35, bg `#0f110f`, padding 18px 18px 22px, min-height 600.
  - Contents: status bar (10:42 / notch / 4G, mono 11px), header row "FastCall" + "Cola: 7 leads", status label, 92px avatar circle "CR" (pulsing), name "Camila Rojas" 26px/800, masked phone "+56 9 8••• 4412", tags "Meta Ads" and "Toyota RAV4 2024", a "Lead recibido hace 00:0X" card with a live mono timer in orange, then "Siguientes en tu cola" with 3 rows (Matías Fuentes 1 min, Javiera Soto 3 min, Felipe Araya 6 min).

### 3. Problema (band section)
- Eyebrow "El problema" (mono 12px uppercase, `#8d9089`, letter-spacing 0.1em).
- H2 `clamp(36px,5vw,68px)` / 850 / lh 1, max-width 1000: "Todos hablan de IA conversacional. Nadie está resolviendo lo básico: que una persona real llame al lead en los primeros minutos." (middle sentence in `#6f726b`).
- Two cards (grid, min 360px, gap 16, margin-top 48): border `#2a2d29`, radius 20, padding 28, bg `#111311`. H3 24px/800 + body 16px `#a3a69f`:
  - "¿Sabes cuántos leads llaman al día tus ejecutivos?" / "Sin registro automático, no hay forma de saber quién llamó, a cuántos y cuándo."
  - "Se pierde tiempo digitando números." / "Muchas veces los ejecutivos demoran mucho en digitar los números de teléfono. Ese tiempo es venta perdida."
- Closing line 22px/600 `#f1f0ec`: "La IA no cierra ventas de autos. Una persona sí."

### 4. Comparación
- Two cards side by side (min 420px, gap 20), radius 24, padding 32.
  - **Left "Tu competencia · Chatbot"**: bg `#111311`, border `#232622`. Fake chat: user bubbles right (`#22251f`, radius 16 16 4 16), bot bubbles left (`#181a17` + border `#262926`, radius 16 16 16 4), 14px. Messages: "Hola, quiero cotizar la RAV4" / "¡Hola! Soy Valentina, tu asistente virtual. Para ayudarte mejor, selecciona una opción: 1) Autos nuevos 2) Usados 3) Servicio técnico" / "1" / "¡Genial! ¿Me indicas tu RUT para continuar?". Footer: "Resultado: el cliente sigue cotizando en otras 4 automotoras."
  - **Right "Tú · FastCall"**: bg `#14130f`, border orange at 45% alpha. Timeline rows (grid 64px / 1fr, mono timestamp in orange, divider `#22231d`): 00:00 Lead entra desde Meta Ads · 00:02 Llega al CRM y a la cola del vendedor · 00:04 La app marca sola desde su celular · 00:28 Camila contesta · 00:30 “Hola Camila, te llamo por la RAV4…”. Footer: "Resultado: una conversación real con alguien que quiere comprar."
- Quote centered below, `clamp(24px,2.8vw,36px)` / 600, max-width 980: "“Mientras tu competencia le manda un bot a un cliente que quiere comprar un auto de 15 millones, tú lo llamas en 30 segundos con una persona real.”" ("30 segundos" orange).

### 5. Cómo funciona (`#como`)
- Eyebrow + H2 "El vendedor solo habla." (`clamp(34px,4.4vw,56px)`).
- 3 steps in a joined grid: container border `#232622`, radius 24, 1px gaps showing `#232622`, each cell bg `#0f110f`, padding 36px 30px. Mono number in orange, H3 24px/800 margin-top 40px, body 16px `#a3a69f`.
  - 01 Entra el lead — Desde tu formulario web o Meta Ads llega al CRM, como siempre.
  - 02 La app marca sola — En segundos el celular del vendedor ya está llamando. Primero los más recientes.
  - 03 Contesta o pasa al siguiente — Si no contestan, sigue con el próximo. Si contestan, le da tiempo para gestionar.
- Feature grid (min 340px, gap 48px 40px, margin-top 80px). Each item: border-top `#2a2d29`, padding-top 22, title 19px/750, body 15px `#a3a69f`. Items (title — body):
  1. Marcado automático — Los leads nuevos se llaman solos, en orden de prioridad. Los más recientes primero.
  2. Velocidad de contacto — El lead llega del formulario web o Meta Ads y en segundos ya está sonando el teléfono.
  3. Sin intervención manual — El vendedor no elige a quién llamar, no marca números, no pierde tiempo.
  4. Detección inteligente — Si no contestan, pasa al siguiente automáticamente. Si contestan, le da tiempo para gestionar.
  5. Cola exclusiva por vendedor — Cada vendedor tiene sus propios leads. No se mezclan entre el equipo.
  6. Línea normal, no VoIP — Usa la línea telefónica del celular. Al cliente le llega una llamada normal, no suena raro.
  7. Configuración en vivo — Tiempos de espera, estados llamables y prioridades se ajustan desde la nube, sin tocar los teléfonos.
  8. Panel para el jefe comercial — Quién está llamando, cuántas contestadas, duración y rendimiento por vendedor, en tiempo real.
  9. Conectado a tu CRM — LeadFlash, Supabase o cualquier CRM vía API. Nosotros hacemos la integración.

### 6. Panel en vivo (`#panel`, band section)
- Header row: eyebrow "Para el jefe comercial" + H2 "Todo tu equipo, en vivo." on the left; paragraph (17px, max-width 420) on the right: "Quién está llamando, cuántas contestan, cuánto duran y cómo rinde cada vendedor. Tiempos, estados y prioridades se ajustan desde la nube, sin tocar los teléfonos."
- Dashboard mockup (HTML, not image): radius 20, border `#2a2d29`, bg `#121411`, shadow `0 40px 100px rgba(0,0,0,.45)`.
  - Title bar: 3 grey dots, "Panel en vivo · Sucursal Las Condes", right "EN VIVO" in green with a pulsing dot.
  - KPI row (4 cells, 1px dividers): Llamadas hoy 214 · Contestadas 61% · Tiempo a primer contacto 0:34 · Duración promedio 3:12. Label 12px `#8d9089`, value mono 30px/700.
  - Table (horizontal scroll under 720px). Columns `1.5fr 1.3fr 0.8fr 0.9fr 1.6fr 0.8fr`: Vendedor, Estado, Llamadas, Contest., Tasa de contacto (6px bar, orange fill), Duración. Rows:
    - Ignacio Pérez · En llamada · 52 · 34 · 65% · 3:40
    - Daniela Muñoz · En llamada · 47 · 30 · 64% · 3:05
    - Rodrigo Vargas · Marcando · 44 · 25 · 57% · 2:58
    - Catalina Reyes · Marcando · 39 · 24 · 62% · 3:21
    - Tomás Contreras · En pausa · 32 · 17 · 53% · 2:47
  - Status colors: En llamada = green, Marcando = orange, En pausa = `#8d9089`.

### 7. Integración
- Two-column grid (min 440px).
- Left: eyebrow "Integración", H2 "Nos integramos a tu CRM.", paragraph "No cambias de sistema ni de proceso. Nosotros hacemos la conexión: los leads siguen entrando donde siempre y la app los llama."
  - "2 semanas" (mono 34px/700 green) + "Es lo que demoramos en implementar, con integración, instalación y panel funcionando."
  - Requirement box (border `#2a2d29`, radius 14, bg `#111311`, padding 14px 16px): mono label "REQUISITO" in orange + "Los ejecutivos deben tener teléfonos Android. No está disponible para iPhone (iOS)."
- Right: chips (padding 18px 24px, radius 16, 18px/700): "LeadFlash", "Supabase", "Tu CRM vía API" (solid border `#2a2d29`); "Formulario web", "Meta Ads" (dashed border `#3a3e36`, text `#8d9089`).

### 8. Precio (`#precio`)
- Card: radius 28, border `#2a2d29`, bg `#111311`, padding `clamp(32px,5vw,64px)`, 3-column grid (min 300px), columns 2–3 separated by `border-left: 1px solid #2a2d29`.
  - Col 1: eyebrow "Precio", H2 "Simple. Funcionando en 2 semanas.", body "Incluye integración con tu CRM, instalación en los celulares del equipo y panel en vivo."
  - Col 2: "Implementación" → **50** (72px/850) "UF" "+ IVA" → "Pago único".
  - Col 3: "Mensual" + orange "PROMOCIÓN" pill → "10 UF + IVA" struck through (22px, `#6f726b`, `text-decoration: line-through`) → **7** (72px/850, orange) "UF" "+ IVA / mes".

### 9. CTA final (`#demo`) + footer
- Centered. H2 `clamp(40px,6vw,88px)`: "Tu próximo lead entra en minutos. ¿Quién lo va a llamar?" (second sentence orange).
- Buttons: "Agendar demo por WhatsApp" (orange primary) → `https://wa.me/56994366697`; "Llamar +56 9 9436 6697" (outline) → `tel:+56994366697`.
- Line below: "Vicente Torres · +56 9 9436 6697".
- Footer (border-top `#1f221e`, 13px `#6f726b`, space-between): "FastCall · Santiago, Chile · Vicente Torres +56 9 9436 6697" / "Marcador automático para equipos comerciales automotrices".

## Interactions & Behavior
- Anchor links scroll smoothly (`scroll-behavior: smooth`) to `#como`, `#panel`, `#precio`, `#demo`.
- Button hover: primary → slightly lighter orange; outline → border `#f1f0ec`. Links hover → `#f1f0ec`. Transition 150ms ease.
- **Pulse animation** (badge dot, avatar, EN VIVO dot): `@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(green,.55) } 100% { box-shadow: 0 0 0 14px rgba(green,0) } }`, 1.6s infinite.
- **Phone demo loop** (14 s cycle, 1 s tick):
  - Seconds 0–4: status "Marcando automáticamente…" (orange, mono uppercase).
  - Seconds 5–13: "En llamada · 00:SS" (green), call timer counts up from 00:00.
  - "Lead recibido hace" timer = 3 + cycle second, formatted 00:SS.
  - In the dashboard, Ignacio and Rodrigo swap between "Marcando" and "En llamada" in sync with the phone. "Llamadas hoy" increases by 1 every 7 s.
- Respect `prefers-reduced-motion`: stop pulse and the loop.

## State Management
A single client component for the hero phone and dashboard: `tick` (an integer, incremented by `setInterval` every 1000 ms, cleared on unmount). Everything else is static. No data fetching.

## Design Tokens
Colors:
- bg `#0c0d0c` · band `#0f110f` · card `#111311` · dashboard `#121411` · accent card `#14130f`
- borders `#1f221e`, `#232622`, `#2a2d29`, `#2f322d`, `#33372f`, dashed `#3a3e36`
- text `#f1f0ec` · secondary `#d7d9d2`, `#c9ccc4`, `#b4b7b0` · muted `#a3a69f` · subtle `#8d9089` · faint `#6f726b`
- **orange (primary accent)** `oklch(0.76 0.17 52)` ≈ `#f48a2e`
- **green (live/success)** `oklch(0.76 0.17 150)` ≈ `#4cc56a`

Typography:
- **Archivo** (Google Fonts, variable: `wdth 62..125`, `wght 400..900`). Used for all display and body text. Headlines 850, letter-spacing -0.035 to -0.045em, line-height 0.95–1.
- **JetBrains Mono** (400/500/700). Used for eyebrows, numbers, timers and tags. Eyebrows are 12px uppercase with letter-spacing 0.08–0.1em.

Radii: 8 (logo) · 10–14 (rows, small boxes) · 16–20 (cards) · 24–28 (big panels) · 44/35 (phone) · 999 (pills).
Shadows: phone `0 40px 80px rgba(0,0,0,.5)` · dashboard `0 40px 100px rgba(0,0,0,.45)`.

## Assets
No images. The logo, phone and dashboard are all HTML/CSS. Fonts load from Google Fonts. The names and metrics in the mockups are sample data.

## Contact data
- Vicente Torres — +56 9 9436 6697
- WhatsApp: `https://wa.me/56994366697` · Phone: `tel:+56994366697`

## SEO / meta (suggested)
- `lang="es-CL"`
- Title: "FastCall — Marcador automático para equipos comerciales"
- Description: "App Android que llama automáticamente a los leads de tu CRM en segundos. +30% contactabilidad, +15% ventas."

## Files
- `FastCall Web.dc.html`: the full design reference. Open it in a browser with `support.js` in the same folder.
