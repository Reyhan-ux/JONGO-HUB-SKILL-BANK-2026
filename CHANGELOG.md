## Implementation Log — Hero, Navbar & Animations

**Summary:**
- Polished the homepage hero (image + left content) for size, placement, and cinematic animations.
- Updated the top navigation to match the reference layout and wired links to real routes.
- Kept most edits local to component JSX and used existing CSS variables in `index.css` for color consistency.

**Files Changed**
- `frontend/src/pages/Home.jsx` — hero layout, image sizing, animation keyframes, and entrance timing. See [frontend/src/pages/Home.jsx](frontend/src/pages/Home.jsx)
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

