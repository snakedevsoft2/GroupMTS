---
name: Group MTS
description: Bilingual landing for a Puerto Rico marine upholstery workshop, styled as a yacht-club clubhouse.
colors:
  navy: "#0B1C2C"
  navy-2: "#0E2438"
  navy-3: "#14304A"
  deck: "#F6F8FA"
  deck-2: "#ECF1F5"
  card: "#FFFFFF"
  ink: "#10202E"
  ink-2: "#3D5164"
  muted: "#6E8093"
  muted-strong: "#57697C"
  foam: "#E9EFF4"
  foam-muted: "#9FB2C2"
  brass: "#C9A96A"
  brass-deep: "#A8874A"
  brass-soft: "rgba(201, 169, 106, .35)"
  course-deep: "#8D7038"
  burgee: "#7A1F2B"
  line: "rgba(16, 32, 46, .16)"
  line-2: "rgba(16, 32, 46, .30)"
  line-soft: "rgba(16, 32, 46, .09)"
  hairline-light: "rgba(233, 239, 244, .22)"
  accent: "#0A5BC4"
typography:
  display:
    fontFamily: "Libre Caslon Text, Caslon Fallback, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.3rem, 6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: ".01em"
  headline:
    fontFamily: "Libre Caslon Text, Caslon Fallback, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.8rem, 3.9vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: ".015em"
  title:
    fontFamily: "Libre Caslon Text, Caslon Fallback, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.12
  body:
    fontFamily: "Public Sans, Public Sans Fallback, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1rem, .96rem + .2vw, 1.05rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Public Sans, Public Sans Fallback, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: ".7rem"
    fontWeight: 600
    letterSpacing: ".16em"
rounded:
  s: "2px"
  m: "3px"
  l: "4px"
  pill: "999px"
spacing:
  pad: "clamp(1.25rem, 5vw, 5.5rem)"
  section: "clamp(5rem, 11vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "#14202C"
    rounded: "{rounded.s}"
    padding: ".95rem 1.7rem"
  button-primary-hover:
    backgroundColor: "#D6BA80"
  button-ghost-navy:
    backgroundColor: "transparent"
    textColor: "{colors.foam}"
    rounded: "{rounded.s}"
    padding: ".95rem 1.7rem"
  button-ghost-deck:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.s}"
    padding: ".95rem 1.7rem"
  filter-chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.s}"
    padding: ".6rem 1.2rem"
  filter-chip-active:
    backgroundColor: "{colors.brass-deep}"
    textColor: "#FDF6F1"
  plate-card:
    backgroundColor: "{colors.card}"
    rounded: "0"
    padding: "clamp(1.7rem, 2.6vw, 2.3rem)"
---

# Design System: Group MTS

## Overview

**Creative North Star: "El Club Náutico"**

The workshop as a yacht club: blazer navy, burgees, engraved brass. Belonging and tradition — where the ones who know bring their boat. The visitor walks into the clubhouse, sees the honors board and the real work hanging framed, and asks for a quote on WhatsApp like signing the club register. The direction contract (THESIS/OWN-WORLD/STORY/FIRST VIEWPORT, seed `6c623b64`) survives every build as the first HTML comment inside `<body>` — source: `src/layouts/BaseLayout.astro`. Product facts (audience, services, confirmed figures, brand constraints) live in `PRODUCT.md`; this file is strictly visual.

The system explicitly rejects the icon-grid card layout and the stock-photo hero, and PRODUCT.md rules out cartography. Quality bar: luxury yacht brokers (Fraser / N&J) — quiet luxury, thin lines.

**Key Characteristics:**
- Two grounds only: ceremonial navy bands and light "deck" sections.
- Brass as polished hardware: filetes (1px rules), underlines, numerals, italics, the primary button. Never large fills.
- Engraved-plate typography: Caslon at weight 400 with air; spaced uppercase versalitas in Public Sans.
- Near-square geometry (2–4px), double-outline plate frames, the workshop's own burgee pennant.
- Motion responds to the visitor (scroll reveal, hover); the counters are the one authored moment.

## Colors

A navy/brass two-ground palette; every token is defined once in `src/styles/tokens.css` (the frontmatter mirrors it — hex values there are normative). Compat aliases exist in the same file (`--paper`→`deck`, `--sea`→`navy-2`, `--sea-2`→`navy`, `--course`→`brass-deep`, `--land`→`brass`, `--c1..c4`); new code should prefer the primary names.

### Primary
- **Navy** (`navy`): the ceremonial ground — hero, pennant strip, video band, testimonials band, footer, drawer. `navy-2` is the panel/pennant-field tone on navy; `navy-3` the edge/elevation tone.

### Secondary
- **Brass** (`brass`): the only accent. Filetes, heading rules, nav underline and hover, roman numerals, counters, `em` text, primary button, progress bar, before/after handle. `brass-deep` is its pressed/hover/border partner and the focus-ring color; `brass-soft` the translucent filete on navy; `course-deep` the darkened brass for small text on light grounds (AA).

### Tertiary
- **Burgee burgundy** (`burgee`): appears only inside the Burgee pennant device. Not a UI color.
- **Logo blue** (`accent`): reserved for the client's logo raster. Never used as a UI accent.

### Neutral
- **Deck** (`deck` / `deck-2` / `card`): light section grounds and card surface. Sections alternate deck and deck-2 (`.section--tint`).
- **Ink** (`ink` headings, `ink-2` body, `muted` / `muted-strong` secondary text on light).
- **Foam** (`foam` text, `foam-muted` secondary text on navy).
- **Hairlines**: `line` / `line-2` / `line-soft` on light; `hairline-light` on navy.

**The Two-Grounds Rule.** Every section sits on navy or on deck; there is no third ground. Text on navy is foam, text on deck is ink — never mixed.

**The Brass-Is-Hardware Rule.** Brass is fittings, not paint: 1px lines, type accents, one button. If a brass area grows past a button, it's wrong.

**The AA Floor Rule.** Small secondary text on deck uses `muted-strong`, not `muted`. Text over video sits on veils of ≥.8 effective opacity and uses `foam`. Small brass-toned text on light grounds uses `course-deep`, never raw `brass`.

## Typography

**Display Font:** Libre Caslon Text 400/700 + 400 italic (fallback "Caslon Fallback" — local Georgia/Times with `size-adjust: 106%`, `ascent-override: 98%`, `descent-override: 27%`, in `src/styles/base.css`)
**Body Font:** Public Sans 400/600 (fallback "Public Sans Fallback" — local Segoe UI/Arial, `size-adjust: 103%`, `ascent-override: 92%`, `descent-override: 24%`)

**Character:** an engraved club plate — elegant serif with air, technical sans for everything functional. Five static self-hosted woff2 files (~107KB total, latin subset), inlined `@font-face` with `font-display: swap`; Caslon 400/700 and Public Sans 400 are preloaded (`BaseLayout.astro`).

### Hierarchy
- **Display** (h1): hero headline; hero variant clamps to `clamp(2.4rem, 5.4vw, 4.5rem)`, max-width 15ch, foam on navy.
- **Headline** (h2): section titles, each opening with a 1px brass filete (`.head h2 { border-top }`); `.head--light` swaps to foam text and `brass-soft` filete on navy bands.
- **Title** (h3): card/step titles.
- **Body**: `ink-2` on light, line-height 1.7; ledes max 56ch (46ch in hero).
- **Label**: spaced uppercase versalitas, Public Sans 600 — letter-spacing .28em (hero plate `.est`), .22em (pennants), .2em (frame caption, before/after tags), .16em (honors bar), .11em (nav links). Roman numerals (I–IV) set in Caslon for process acts; counters use `tabular-nums`.

**The Engraved-Plate Rule.** Headings are always weight 400 — hierarchy comes from size, the brass filete, and spacing, never from bold.

**The Brass-Italic Rule.** `em` is the voice of the club: italic Caslon colored `brass-deep` on light grounds, `brass` on navy. It is the only inline emphasis.

## Layout

Single-column document of full-width bands. Container `--maxw` 1240px (1380px ≥1600px, 1500px ≥2000px viewports) via `.wrap`; horizontal padding `spacing.pad`; vertical rhythm `spacing.section` via `.section`. Mobile-first (clients evaluate from a phone at the dock — PRODUCT.md).

- **Hero**: `min-height: 100svh`, two columns `1.15fr / .85fr` ≥980px (plate left, framed video right), honors bar pinned below; 2×2 grid ≤620px.
- **Section grids**: services 2-col ≥700px; process 4-col ≥900px; gallery 1/2/4 cols at 520px/1000px.
- **Nav**: inline links ≥1180px, burger + full-screen drawer below; social icons hide ≤1360px (footer keeps them); nav CTA hides ≤620px.
- Observed breakpoints: 360, 420, 520, 620, 640, 700, 768 (JS video gate), 900, 980, 1000, 1180, 1360, 1600, 2000; plus a landscape guard `(max-height: 560px)`.

## Elevation & Depth

Hairline-first, essentially flat. Structure is drawn with 1px lines (filetes, borders, dashed dividers), and depth comes from swapping grounds and from thin veils over video — not from stacked shadows. Three soft "studio" shadows exist for cards and the framed picture; the stuck nav and the drawer add `backdrop-filter: blur` over navy at .92/.98 alpha. A fractal-noise `.grain` overlay (opacity .28–.35) textures the video bands.

### Shadow Vocabulary
- **shadow-s** (`0 1px 2px rgba(11,28,44,.06), 0 2px 10px rgba(11,28,44,.05)`): resting cards, primary button.
- **shadow-m** (`0 2px 4px rgba(11,28,44,.05), 0 14px 34px -12px rgba(11,28,44,.18)`): hover lift.
- **shadow-l** (`0 4px 8px rgba(11,28,44,.06), 0 34px 70px -24px rgba(11,28,44,.35)`): the hero frame and before/after plate only.

**The Hairline-First Rule.** If a boundary can be a 1px line instead of a shadow, it is a line. Shadows are ambient softness, never structure.

## Shapes

Near-absolute straightness: radii `s` 2px (buttons, chips, tags), `m` 3px / `l` 4px (rarely), `pill` only for the WhatsApp FAB. Cards and frames have square corners (no radius at all). Circles are reserved for the burger button, the before/after knob, and the custom cursor.

The signature form is the **plate device**: a 1px border plus a second 1px `outline` offset 5–6px — a double frame with passe-partout. It appears as brass-on-navy (hero frame, landfall CTA) and line-on-white with `brass-soft` outer filete (service zones, before/after). The second recurring form is the **filete**: a lone 1px brass border-top opening headings and process acts. The third is the **burgee**: a triangular pennant, burgundy half over navy field with brass stroke.

## Components

### Buttons
- **Shape:** near-square (2px), padding `.95rem 1.7rem`, Public Sans 600 at .93rem, letter-spacing .04em.
- **Primary:** brass plate — `brass` bg, near-black text (#14202C), 1px `brass-deep` border, shadow-s. Hover lightens to #D6BA80 with shadow-m; active presses down 1px (`translateY(1px)`).
- **Ghost:** transparent with a 1px filete that matches the ground — foam-toned border/text on navy, `line-2`/ink on deck (scoped by `.section .btn--ghost`). Hover: faint ground-tint fill, border sharpens.
- **Landfall CTA overrides:** inside `.cta` the primary keeps brass but flips text to navy and deepens on hover (`Contact.astro`).
- CTAs carry `data-magnetic` (cursor-following translate on fine pointers).

### Navigation
Fixed transparent bar over the hero; `.is-stuck` gains navy glass (`rgba(11,28,44,.92)` + blur 16px), a `hairline-light` bottom border and tighter padding; hides on scroll down past 420px, returns on scroll up. Links are .8rem spaced uppercase in `foam-muted`, brass on hover/active, with two devices: the **letter relay** (`.roll` duplicate slides up on hover) and the **`.nav-pill` brass underline** (1px, follows the pointer, rests on the scrollspy-active link). Entrance: one-time `navDown` cascade (staggered .30–.90s delays). Language switcher is a bordered ES/EN chip, active language in brass.
- **Drawer** (≤1180px): full-screen `rgba(11,28,44,.98)` + blur; Caslon links with `hairline-light` separators, staggered rise-in; burger crosses to an X. Note: `drawer.css` resets `.burger { display: none }` and `nav.css` re-enables it with `.nav .burger { display: grid }` — the two-class selector wins on specificity, so keep that pairing intact.

### Burgee (signature)
`src/components/ui/Burgee.astro` — the workshop's own pennant: inline SVG triangle, `navy-2` field stroked 1.4 in brass, burgundy inner half with a brass seam. Decorative (`aria-hidden`), sized via prop (default 1.05rem). It marks: the hero plate label, service-zone corners, and every item of the pennant strip. It is the only place `burgee` burgundy appears.

### Plate cards (`.zone`, Services)
White plate on tinted deck: 1px `line-2` border + `brass-soft` outline offset 5px (the double frame), shadow-s. Header row = spaced "ZONA n" label in `course-deep` + a small burgee, under a 1px rule. Bullets are brass em-dashes ("—"), never colored dots. Hover: -5px lift, borders warm to brass, shadow-m.

### Honors bar (`.trust`, hero)
The palmarés: a full-width band framed by `brass-soft` above and `hairline-light` below, cells split by hairlines (2×2 on mobile). Figures in Caslon brass (`clamp(1.7rem, 3.2vw, 2.5rem)`, tabular-nums) over spaced uppercase `foam-muted` labels. **The authored moment:** numbers count up once (1600ms, cubic ease-out) when 40% visible; under reduced motion they render final values instantly. Only real, owner-confirmed figures (PRODUCT.md).

### Framed picture ("cuadro", hero)
The real shop video hung like clubhouse art: `navy-2` mat with .6rem padding, 1px brass frame + `brass-soft` outline offset 6px, shadow-l, spaced-caps caption below. A webp poster renders immediately; the video (`preload="none"`, muted loop) loads only on desktop (`matchMedia('(min-width: 768px)')`) without reduced motion, then cross-fades in over .8s (`video.on`).

### Video bands (`VideoBackdrop`)
Testimonials and VideoBand share the backdrop: lazy video (IntersectionObserver, 600px rootMargin, desktop-only gate as above, deferred poster) under a navy gradient veil (≥.8 effective opacity mid-band) and the grain layer, with slight scroll parallax (`data-parallax` -.10/-.12).

### Gallery
Filters are square ink-line chips; pressed state fills `brass-deep` with warm-white text (`aria-pressed`). Shots are white-plate figures with a permanently visible spaced-caps caption bar (a chart label, not a hover overlay); hover lifts -4px and zooms the image 1.06 over 1.1s; a zoom affordance fades in. Opens a lightbox.

### Testimonials (`.quote`)
Logbook entries on the sea band: flat translucent ink panels (`rgba(14,28,46,.58)`) with light 1px borders — no glass cards, no giant quotation marks. Brass stars, Caslon name over a dashed divider. Drag-scroll carousel with edge fade masks and square arrow buttons that fill brass on hover.

### Before / after
The comparator is a plate (line border + `brass-soft` outline, shadow-l) split by a 2px brass handle with a circular white knob; labels are square chart tags — "before" on paper, "after" filled `course-deep`. Driven by pointer drag plus a hidden but keyboard-focusable range input (`aria-valuetext`).

### FAQ
Hairline-divided `<details>` rows; Caslon summaries turning brass-deep when open, rotating chevron. First item open by default.

### Landfall CTA (`.cta`, Contact)
The closing navy panel: sea gradient inside a brass-soft double frame, centered; brass primary + ghost buttons, then a dashed-divider contact line with brass icons.

### Footer
Navy band opening with a `brass-soft` filete; centered logo, social, bordered mail chip (brass on hover), hairline-topped copyright.

### WhatsApp FAB
The one pill and the one off-palette color: brand green #25D366, fixed bottom-right, label unfolds on hover/focus. Brand exception, not a system color.

### Chrome & motion grammar
- **Progress bar**: 2px brass `scaleX` line fixed at the very top.
- **Custom cursor**: brass ring (eased follow) + `brass-deep` dot, fine pointers only, never under reduced motion; grows to a 60px tinted ring over interactive elements.
- **Reveal system** (`src/styles/motion.css` + `reveal.ts`): `.reveal` rises 26px/fades over .9s on intersection (threshold .14, -8% bottom margin), staggered via `data-d="1..4"` (.09s steps); `.mask` is a curtain wipe (cover slides down 1.25s) — the veil is a pseudo-element, not clip-path on the element, so the observer still fires. One-shot; elements unobserve after entering.
- **Easing**: everything rides `--ease` `cubic-bezier(.22, .61, .36, 1)`.
- **Hero**: content translates up to -50px and fades as you scroll away.
- **Reduced motion**: global kill (animation/transition ≈ 0), `.reveal` forced visible, `.mask` veil removed, smooth scroll off, parallax/cursor/counters/videos gated off. Content is never left hidden behind an entrance.
- **Deliberately absent:** shine sweeps (`@keyframes shine` sits unused in `nav.css`), pulsing rings, and the auto-scrolling marquee — `Marquee.astro` renders a *static* pennant strip on `navy-2`. Do not reintroduce them.

**The One-Authored-Moment Rule.** The palmarés count-up is the only animation that plays by itself. Everything else answers the visitor: scroll reveals, hover states, drag.

## Do's and Don'ts

### Do:
- **Do** keep every surface on one of the two grounds and pick text tokens from that ground's set (foam family on navy, ink family on deck).
- **Do** open sections with the filete: `.head h2` on deck, `.head--light` on navy.
- **Do** use the plate device (border + offset outline) for anything framed or featured, and the Burgee component as the section mark.
- **Do** hold the AA floor: `muted-strong` for small text on deck, `foam` over ≥.8 veils, `course-deep` for small brass text on light; keep the 2px `brass-deep` `:focus-visible` outline.
- **Do** keep media honest and cheap: real photos/videos only (PRODUCT.md), responsive webp/avif posters, `preload="none"` videos gated to desktop + no-reduced-motion, fonts self-hosted with swap + metric-adjusted fallbacks.
- **Do** follow `CLAUDE.md`: code files under 200 lines (split when they grow), commit messages in English.

### Don't:
- **Don't** introduce new accent colors, gradients as decoration, or UI use of logo blue / FAB green; don't let brass become a fill.
- **Don't** round corners past 4px (pill is the FAB's alone) or add icon-grid cards, stock imagery, colored dot bullets, glass cards, or giant quote marks.
- **Don't** reintroduce shine sweeps, pulsing rings, or an auto-scrolling marquee; no self-playing motion beyond the counters.
- **Don't** use bold headings or tighten Caslon — hierarchy is size + filete at weight 400.
- **Don't** add maps or cartographic motifs (PRODUCT.md exclusion), and don't remove the direction-contract comment from `BaseLayout.astro`.
