## Implementation Log — Hero, Navbar & Animations

**Summary:**
- Polished the homepage hero (image + left content) for size, placement, and cinematic animations.
- Updated the top navigation to match the reference layout and wired links to real routes.
- Kept most edits local to component JSX and used existing CSS variables in `index.css` for color consistency.
- Added Flaticon icon attribution in footer for compliance with Magnific's licensing.

**Files Changed**
- `frontend/src/pages/Home.jsx` — hero layout, image sizing, animation keyframes, entrance timing, and footer attribution. See [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
- `frontend/src/components/Navbar.jsx` — updated menu items and CTA buttons with app palette. See [frontend/src/components/Navbar.jsx](frontend/src/components/Navbar.jsx)
- `frontend/src/index.css` — referenced color variables and button classes (no destructive edits). See [frontend/src/index.css](frontend/src/index.css)

**Detailed Changes**

### `frontend/src/pages/Home.jsx`

- Added new style constants at top of file:

```js
const heroImageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'block',
  animation: 'heroFloat 8s cubic-bezier(.25,.46,.45,.94) infinite, heroPulse 10s ease-in-out infinite',
  transformOrigin: 'center center',
  willChange: 'transform,opacity',
  transition: 'transform 600ms cubic-bezier(.22,.9,.32,1)',
};

const heroHeadingStyle = {
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'heroSlideIn 0.9s ease-out forwards',
};

const heroTextStyle = {
  opacity: 0,
  transform: 'translateY(12px)',
  animation: 'heroFadeIn 1s ease-out 0.15s forwards',
};
```

- Inserted inline `<style>` keyframes for component-scoped animations: `heroFloat`, `heroPulse`, `heroSlideIn`, `heroFadeIn`. These create a flowing, cinematic motion for the hero image and coordinated entrance for heading and paragraph text.

- Adjusted layout and placement:
  - Reduced hero top padding from `1.8rem` to `1.2rem`.
  - Removed the small “Verified Talent, Fast Match” badge on request.
  - Tuned the right-side image container to sit higher (`alignSelf: 'start', marginTop: '-2.4rem'`).
  - Ensured the hero image uses the provided illustration (`codingSvg`) with `style={heroImageStyle}`.
  - Increased hero contact badge icons for `Phone` and `MapPin` to improve visual prominence while leaving card text unchanged.
  - Balanced the hero by switching to equal `1fr 1fr` columns, enlarging the illustration, and adding a soft yellow glow behind the right-side image.
  - Added a second yellow glow accent to the upper-left of the hero illustration for stronger visual balance.
  - Added a third yellow glow accent to the bottom-middle of the hero illustration for richer depth.
  - Increased the button float motion to make the CTA animation more visible and lively.
  - Replaced the Why Choose Us section image collage with the new `Codereview-cuate` asset.
  - Updated the ticker to show new continuous phrases and added a smooth leftward scroll animation while preserving the original yellow banner design.
  - Increased ticker text size and reduced the space between items for a tighter, more readable marquee.
  - Increased the “Why choose Jongo Hub Skill Bank” headline size by 10% for stronger section hierarchy.
  - Raised the section headline a second time, bumping the font-size to 3.63rem for added visual prominence.
  - Tightened the `Why choose us` section spacing by reducing the top section margin from `3.2rem` to `3.04rem`.
  - Updated the Why Choose Us carousel so the full black slide card now fades in/out together, with a smoother image float while visible.
  - Removed the extra image container so the carousel image sits directly on the card surface with the glow behind it.
  - Brightened the carousel glow and strengthened the image glow shadow to match the hero visual style.
  - Unified the two feature cards under the same gold accent style using `#fcbf05` highlights.
- Corrected the hero heading text and uppercased it to match the refined branding tone.
- Styled the hero `Join as Developer` button with a yellow border and soft glow.
- Restored the yellow glow overlays behind the hero illustration after they were accidentally removed.

### `frontend/src/components/Navbar.jsx`

- Replaced the previous role selector and extra buttons with the screenshot-style top menu:
  - Left: brand logo and title retained.
  - Center: `Home`, `Job Marketplace`, `Talent Directory`, `Verify Credential` (wired to existing routes).
  - Right: `Login`, `Request demo`, `Get started` buttons styled with the app's yellow/black palette.

### `frontend/src/index.css`

- No destructive edits performed. This file provides the variable definitions used by the component inline styles (`--pms-yellow`, `--pms-black`, `.btn-yellow`, `.btn-black`, etc.). The Hero and Navbar reference these variables.

**How to preview locally**

Open terminal in the `frontend` folder and run dev server:

```bash
cd "C:\Users\user pro\Desktop\SKILL BANK\frontend"
npm install    # only if dependencies are missing
npm run dev
```

If assets or Vite cache appear stale, stop and restart the dev server and reload the VS Code window (`Developer: Reload Window`).

**Notes & next steps**
- Animations are implemented inline in `Home.jsx` for fast iteration; they can be moved to `index.css` or a module for reuse.
- Optional follow-ups you asked about:
  - Increase final zoom scale (we currently end `heroPulse` at `scale(1.045)` — easy to increase).
  - Add slow background blur during final zoom for more cinematic depth.
  - Animate CTAs (subtle lift + glow).

If you want any of the above, tell me which option and I will apply it and update this document.

---

## Engineering Tracks, GIF asset mapping, and layout refinements

**Summary:**
- Documented the recent work on the Engineering Tracks section, GIF icon replacement, card styling, and header image placement.

**Files changed**
- `frontend/src/pages/Home.jsx` — Engineering Tracks header, track cards, GIF imports, new Cyber Security track, and section layout.
- `frontend/src/index.css` — floating-card animation and keyframes.

**Detailed Changes**

### `frontend/src/pages/Home.jsx`
- Added `At-the-office-cuate.svg` into the `ENGINEERING TRACKS` header area and removed the adjacent button that previously left empty space.
- Added a new Cyber Security track card with matching floating styling, dark/yellow accent, and a `Hire Security Talent` CTA.
- Updated Engineering Track card visuals to use GIF icons instead of static icon components:
  - `software.gif` for Full Stack Web
  - `cybersecurity.gif` for Systems
  - `database.gif` for Cloud & DevOps
  - `artificial-intelligence.gif` for Mobile Engineering
  - `graphic-designer.gif` for Graphic Design
- Corrected asset import names so Vite resolves the GIF source files successfully.
- Increased the track cards' accent styling to a thicker top border and larger corner radius.
- Applied the reusable `.floating-card` CSS animation class to the track cards for a subtle floating effect.

### `frontend/src/index.css`
- Added `.floating-card` class and `@keyframes float-card`.
- Ensured floating cards animate smoothly with transform transitions and `will-change: transform`.

---
Generated on 2026-08-01 by your development assistant.

---

## Issue Log — Why Choose Jongo Hub Skill Bank slide image not displaying

**Problem:**
- The floating image card in the “Why Choose Jongo Hub Skill Bank” section rendered as a blank area instead of showing the expected illustration.
- The carousel area itself was present, but the active slide image did not appear distinctly inside the dark showcase card.

**Root cause:**
- The slide `motion.img` element was being constrained by the showcase container without a reliable block-fill display mode.
- The image styling used `objectFit: 'cover'` with an auto height, which can crop or hide the asset visually inside a card area whose dimensions were being driven by the parent layout.
- The result was an empty-looking card even though the image source and carousel logic were still present.

**Fix applied:**
- Set the image element to render as a block element with `display: 'block'`.
- Changed the slide image sizing to `height: '100%'` and `objectFit: 'contain'` so the imported illustration fills the frame without clipping away the visible artwork.
- Kept the existing Framer Motion slide animation and glow styling in place so the image continues to float smoothly while remaining visible.

**Files involved:**
- `frontend/src/pages/Home.jsx` — updated the floating card image styling in the “Why Choose” carousel block.

---

## Animated SVG Illustration Swap — Business Plan Asset

**Summary:**
- Replaced the How it works visual with the new business-plan SVG asset.
- Integrated the SVG as raw markup inside the homepage so its internal Freepik groups can be animated by CSS.

**Files changed**
- [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)

**Implementation flow**
1. The SVG was imported as raw content at the top of the component:

```jsx
import contentSvg from '../assets/business-plan-not-css.svg?raw';
```

2. The imported SVG string was rendered into the right-side illustration slot in the How it works section:

```jsx
<div
  dangerouslySetInnerHTML={{ __html: contentSvg }}
  style={{ width: '100%', maxWidth: '420px', borderRadius: '2rem', overflow: 'hidden' }}
/>
```

3. The matching animation selectors and keyframes were added to the same component’s inline style block:

```css
svg#freepik_stories-business-plan:not(.animated) .animable { opacity: 0; }
svg#freepik_stories-business-plan.animated #freepik--background-complete--inject-20 { animation: 1.5s infinite linear heartbeat; }
svg#freepik_stories-business-plan.animated #freepik--character-2--inject-20 { animation: 1.5s infinite linear wind; }
svg#freepik_stories-business-plan.animated #freepik--speech-bubble--inject-20 { animation: 1.5s infinite linear shake; }
```

**Why it works**
- The SVG already contains the group IDs needed for animation.
- `?raw` turns the file into a string that React can inject directly.
- Once the SVG is rendered into the DOM, the CSS selectors can target the internal groups and animate them.

**Hand-off note**
- This is the only component that needs the SVG hookup.
- If the illustration needs to change again, the import path and the SVG selector IDs are the two places to update.

---

## Typography System Update — Body Font Rollout and Heading Preservation

**Summary:**
- Switched the app’s global body text to the new Figtree/Raleway font family.
- Preserved the original heading look by keeping the heading typography stack on Oswald.
- Updated the FAQ question labels to use the body font family while keeping them bold.
- Documented the issue that occurred when the heading font stack drifted after the font import was altered, and the fix that restored headings cleanly.

**Files changed**
- `frontend/src/index.css` — global font import and body/heading variable split.
- `frontend/src/pages/Home.jsx` — FAQ question label font treatment.

**Detailed Changes**

### `frontend/src/index.css`
- Added the new Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Figtree:ital,wght@0,300..900;1,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
```

- Updated the body font variable so the site’s paragraph and support text now use the new body-family stack:

```css
--font-body: 'Figtree', 'Raleway', sans-serif;
```

- Kept the heading variable scoped to the original Oswald-based system so the page headers continue to use the established display style.

### `frontend/src/pages/Home.jsx`
- Applied the body font family to the FAQ question labels:

```jsx
<span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--pms-black)', fontFamily: 'var(--font-body)' }}>{faq.q}</span>
```

- Kept the FAQ question text bold so the questions read as body-style emphasis without affecting heading typography.

**Problem encountered**
- During the font rollout, the heading typography began to drift because the heading font import was not consistently preserved in the shared CSS setup.
- That caused the global heading stack to fall back unpredictably instead of staying on the intended Oswald-driven look.

**Solution used**
- Reintroduced the Oswald import into the shared CSS font import list.
- Kept the heading variables unchanged in the design system.
- Restricted the new font family only to body-level copy, which prevented headings from being overwritten accidentally.

**Outcome**
- Body-facing text now uses the new typed look across the page.
- Heading text remains visually consistent with the original brand style.
- FAQ questions now inherit the body font while staying bold and readable.


---

## Homepage Continuity and Visual Polish Pass

**Summary:**
- Connected the homepage sections so they read as one smoother flow instead of separate detached blocks.
- Standardized the yellow glow treatment across page sections using consistent blur values.
- Replaced the previous right-side visual in the “How it works” area with the static SVG illustration from the Content asset.
- Removed the shadow from the 450+ graduates stat badge to keep it flatter and cleaner.
- Removed the remaining gray divider-like seams between adjacent content blocks for a more seamless visual presentation.

**Files changed**
- `frontend/src/pages/Home.jsx` — section spacing normalization, glow consistency, SVG replacement, badge cleanup, and seam removal.

**Detailed Changes**

### `frontend/src/pages/Home.jsx`
- Introduced a shared section spacing pattern so the page feels like a continuous landing page with cleaner vertical rhythm.
- Standardized the warm yellow background glow style across multiple white sections, keeping the blur effect consistent throughout the page.
- Using the same glow parameters on repeated sections to keep the visual treatment unified.
- Replaced the old animated/incorrect visual placement in the “How it works” header area with the existing `Content.svg` illustration.
- Removed the extra shadow behind the overlay badge that reads: “450+ Verified Jongo Hub Reactor Graduates”.
- Removed the remaining visible gray border/line artifacts between cards and sections so the layout appears more seamless and polished.
- Preserved the FAQ section as the only grey background block, while keeping the header and footer outside of the glow treatment scope.

**Status:**
- Page layout feel improved for continuity and visual coherence.
- Previous render-stability issues were already resolved earlier in the homepage work.
- The final polish pass focused on section continuity, glow consistency, and cleaner card separation.

---

## Responsive Navbar Mobile Drawer & Dual-Yellow Design System Update

**Summary:**
- Built full Mobile Responsiveness for `Navbar.jsx` with a responsive hamburger toggle and collapsible navigation drawer.
- Integrated `hublog.jpg` image as the official brand logo with custom size scaling and scroll-to-top clickability.
- Established a two-tier **Dual-Yellow Design Token System**:
  - `--pms-yellow` (`#F5D000`): Pure logo-matched yellow used for dark background accents, buttons, and brand badges.
  - `--pms-yellow-text` (`#ffbc17`): Warm amber yellow used exclusively for heading text on white/light backgrounds for optimal visual contrast and readability.
- Documented changes and implementation techniques directly in `CHANGELOG.md`.

**Files Changed**
- `frontend/src/components/Navbar.jsx` — added mobile menu drawer state (`mobileOpen`), automatic route-change closing effect, `Lucide` `Menu`/`X` hamburger toggle button, mobile drawer overlay, responsive logo/typography styling, and smooth scroll-to-top handler on logo click. See [Navbar.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/components/Navbar.jsx)
- `frontend/src/index.css` — added `@media (max-width: 900px)` rules for hiding desktop navigation/CTAs, displaying mobile hamburger button, auto-scaling logo dimensions from 100px down to 55px on phones, scaling text, and defining `--pms-yellow-text: #ffbc17`. See [index.css](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/index.css)
- `frontend/src/components/home/WhyChooseUs.jsx`, `HowItWorks.jsx`, `Testimonials.jsx`, `FaqSection.jsx`, `EngineeringTracks.jsx` — updated heading text color spans to consume `var(--pms-yellow-text)`.

**Detailed Technical Implementation**

### 1. Mobile Drawer Navigation (`Navbar.jsx`)
- Introduced React state: `const [mobileOpen, setMobileOpen] = useState(false)`.
- Added a `useEffect` hook listening to `location.pathname` to ensure the mobile drawer automatically collapses whenever a user taps a link or navigates to a new page.
- Replaced static layout with responsive conditional classes: `.navbar-desktop-nav`, `.navbar-desktop-ctas`, and `.navbar-mobile-toggle`.
- Added Lucide `Menu` (hamburger) and `X` (close) icons inside a styled mobile button (`rgba(0,0,0,0.05)` background, `border-radius: 12px`).
- Built the drop-down mobile drawer (`.navbar-mobile-drawer`) rendered conditionally when `mobileOpen === true`, displaying vertical navigation links and full-width CTA buttons (`Login`, `Get started`) with `fadeIn` keyframe animation.

### 2. Responsive CSS Breakpoint Rules (`index.css`)
- Defined `@media (max-width: 900px)` media query:
  - `.navbar-desktop-nav, .navbar-desktop-ctas { display: none !important; }`
  - `.navbar-mobile-toggle { display: flex !important; }`
  - Logo image auto-scales from `100px` desktop down to `55px` mobile.
  - Brand heading auto-scales from `1.85rem` desktop down to `1.35rem` mobile to prevent horizontal overflow on smaller screens (360px - 412px).

### 3. Dual-Yellow Color Architecture
- Added `--pms-yellow-text: #ffbc17;` to CSS `:root` variables.
- Maintained `#F5D000` for `hublog.jpg` logo branding, dark section accents, and primary action buttons.
- Applied `var(--pms-yellow-text)` to light background heading spans across all homepage components for high visual contrast and legibility.

**Outcome**
- The header now renders seamlessly across Mobile, Tablet, and Desktop viewports without horizontal scroll or content clipping.
- Tap targets are touch-friendly on mobile devices (999px rounded full-width CTAs in mobile menu).
- Brand color rules adhere strictly to visual accessibility standards across light and dark contexts.

---

## Navbar Phosphor Icons & Compact Mobile Drawer Sizing Pass

**Summary:**
- Replaced the default Lucide toggle icons in `Navbar.jsx` with **Phosphor Icons** (`List` & `X` from `@phosphor-icons/react`).
- Reduced the hamburger icon size from `28px` down to **`22px`** for a sleeker, more refined header accent.
- Compacted the mobile drawer padding, gaps, link sizes, and CTA button heights to keep the drawer compact and non-intrusive on mobile viewports.
- Updated `CHANGELOG.md` with complete technical implementation details.

**Files Changed**
- `frontend/src/components/Navbar.jsx` — imported `List` & `X` from `@phosphor-icons/react`, updated toggle icon rendering (`size={22}`, `weight="bold"`), updated toggle button container padding (`0.45rem 0.55rem`), and tuned mobile drawer container padding (`0.85rem 1.25rem 1.15rem`), gap (`0.85rem`), link sizes (`0.98rem`), and CTA padding (`0.6rem 1rem`). See [Navbar.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/components/Navbar.jsx)

**Detailed Technical Implementation**

### 1. Icon Library Migration (`@phosphor-icons/react`)
- Switched icon import from `lucide-react` to `@phosphor-icons/react`:
  ```js
  import { List, X } from '@phosphor-icons/react';
  ```
- Replaced `<Menu size={28} />` with `<List size={22} weight="bold" />` and `<X size={28} />` with `<X size={22} weight="bold" />`.
- Styled the toggle button container with a subtle `rgba(0,0,0,0.04)` background, `1px solid #E5E7EB` border, `10px` border-radius, and tight `0.45rem 0.55rem` padding.

### 2. Mobile Drawer Sizing & Spacing Reduction
- Reduced drawer top/bottom padding from `1.25rem 1.5rem 1.75rem` down to `0.85rem 1.25rem 1.15rem`.
- Reduced vertical gap between nav links and action buttons from `1.25rem` to `0.85rem`.
- Reduced nav link font sizes from `1.15rem` to `0.98rem` and padding to `0.35rem 0`.
- Reduced mobile action buttons (`Login` & `Get started`) padding from `0.85rem` to `0.6rem 1rem` and font size to `0.9rem`.
- Lightened mobile drawer shadow to `0 8px 20px rgba(0,0,0,0.06)` for a cleaner drop overlay.

**Outcome**
- The mobile header toggle uses Phosphor's crisp `List` icon at a proportional `22px` scale.
- The mobile drawer occupies significantly less screen height, making navigation fast and compact on phone screens.

---

## Navbar Custom Menu Asset (`menu.png`) & Compact Mobile Drawer CTAs

**Summary:**
- Integrated custom asset `menu.png` as the official mobile hamburger toggle icon in `Navbar.jsx`.
- Reduced the size of `Login` and `Get started` buttons inside the mobile dropdown drawer (`fontSize: 0.82rem`, `padding: 0.45rem 0.85rem`).
- Documented changes and implementation techniques directly in `CHANGELOG.md`.

**Files Changed**
- `frontend/src/components/Navbar.jsx` — imported `menuIcon` from `../assets/menu.png`, updated toggle button to render `<img src={menuIcon} />` when closed, and tuned mobile drawer CTA buttons to be compact and scaled down. See [Navbar.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/components/Navbar.jsx)

**Detailed Technical Implementation**

### 1. Custom Asset Integration (`menu.png`)
- Imported `menu.png` from assets directory:
  ```js
  import menuIcon from '../assets/menu.png';
  ```
- Rendered `<img src={menuIcon} alt="Menu" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />` inside the toggle button container when `mobileOpen === false`.

### 2. Compact Mobile Drawer CTA Sizing
- Reduced mobile drawer CTA buttons (`Login` & `Get started`) padding from `0.6rem 1rem` to `0.45rem 0.85rem`.
- Reduced CTA button font size from `0.9rem` down to `0.82rem`.
- Softened button drop shadows (`0 4px 14px rgba(252, 191, 5, 0.18)`).
- Reduced link font sizes to `0.92rem` for an ultra-clean mobile drawer footprint.

**Outcome**
- The mobile header displays the custom `menu.png` icon when collapsed.
- The dropdown menu is compact and well-proportioned, taking minimal vertical space on mobile devices.

---

## App.jsx CertificateVerify Route & Import Removal

**Summary:**
- Completely removed `CertificateVerify` import and its associated `<Route path="/verify/:code">` from `App.jsx` per user specification.
- Cleaned up routing so React renders smoothly without unhandled component references.
- Documented changes directly in `CHANGELOG.md`.

**Files Changed**
- `frontend/src/App.jsx` — removed `import CertificateVerify from './pages/CertificateVerify';` and `<Route path="/verify/:code" element={<CertificateVerify />} />`. See [App.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/App.jsx)

**Outcome**
- The screen and route are removed from the router without causing runtime ReferenceErrors or empty screens.

---

## Desktop Navbar Quick Action Buttons Sizing Pass

**Summary:**
- Reduced horizontal padding and font sizes of the desktop `Login` and `Get started` quick action buttons in `Navbar.jsx`.
- Decreased button font size from `1rem` down to `0.88rem` and tightened padding from `0.75rem 1.35rem` to `0.45rem 0.95rem` for a cleaner, less bulky desktop header profile.
- Documented changes directly in `CHANGELOG.md`.

**Files Changed**
- `frontend/src/components/Navbar.jsx` — updated `Login` and `Get started` CTA button styles (`fontSize: 0.88rem`, `padding: 0.45rem 0.85rem` / `0.45rem 0.95rem`, `gap: 0.5rem`). See [Navbar.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/components/Navbar.jsx)

**Outcome**
- Desktop navigation CTA buttons feature a sleek, compact width and clean visual hierarchy.

---

## Mobile Drawer Button Width Fix (`fit-content`)

**Summary:**
- Changed mobile drawer action buttons (`Login` & `Get started`) from 100% full-width stretched blocks to inline `fit-content` elements.
- Switched CTA button container layout from vertical column to horizontal inline row (`display: flex, flex-direction: row, gap: 0.65rem`), allowing the buttons to shrink to their text dimensions.
- Documented changes directly in `CHANGELOG.md`.

**Files Changed**
- `frontend/src/components/Navbar.jsx` — set `width: 'fit-content'` and `display: 'inline-block'` on mobile drawer `Login` and `Get started` CTA buttons. See [Navbar.jsx](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/frontend/src/components/Navbar.jsx)

**Outcome**
- The buttons inside the mobile dropdown menu no longer stretch full-width; they render as compact, pill-shaped buttons aligned to content width.








