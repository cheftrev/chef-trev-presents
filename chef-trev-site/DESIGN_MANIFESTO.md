# Chef Trev Presents — Design Manifesto
**The permanent creative source of truth.** Supersedes nothing that came before it — it's the merge of `CREATIVE_AUDIT.md`, `IMPLEMENTATION_PLAN.md`, and `SIGNATURE_MOMENTS.md` into one standing reference. Those three documents remain useful as the historical record of *how* this document was arrived at; this one is what gets consulted before any future page, section, or component is built.

A short note on how this merge resolved a few small tensions between the source documents — flagged here once, not re-litigated below:
- The grain rule (audit 3.4) turns out to already be correctly followed on Home and About — no code change was actually needed there, only the formal rule below, so future pages apply it by design rather than by accident.
- Signature Moment #3 (the Guestbook) touches Home's existing "What Guests Say" section, which the audit didn't originally flag for rework and the implementation plan didn't rank. It's treated here as a small, explicitly added scope item, not retrofitted into the original ranking — see the implementation order at the bottom.
- Signature Moments #1, #2, #4, and #5 all attach cleanly to work the implementation plan already scheduled (Contact's rebuild, Menu's rebuild, Gallery's rebuild) — they raise those tasks' definition of "done," not the ranking or sequence.

---

## 1. Brand Philosophy

One sentence governs every decision below: **a candlelit garden at dusk, and someone just pulled out a chair for you.**

Chef Trev Presents exists because Trevor Brown believes the world is lonely right now and a shared table is a real, working answer to that — not a metaphor for one. The mission is not "immersive dining experiences." It's: **to make the world less lonely, around the table.** Every guest should leave feeling seen, heard, and loved. That's the whole company.

It is also a **small** company — one chef, a sous chef, a head of experience, forty-five dinners so far — and the site should never pretend otherwise. The benchmark below is borrowed for its restraint, never its scale: copy or design that makes three people sound like an institution is costume, and costume is the opposite of "come as you are." The smallness is the trust.

The benchmark for craft is Aesop, Flamingo Estate, Apple, Kinfolk, Noma — not their look, their **level**: restraint, clarity, distinctiveness, editorial judgment. Confident enough to leave white space empty. Grounded enough to show a real hand chopping a real carrot. The site should feel like the dinners do: intimate, a little cinematic, unmistakably human.

**Anti-goals, stated plainly, because they're load-bearing:** no luxury-hospitality gloss, no stock-photo perfection, no AI-generated imagery anywhere, no wall-of-text sections. Perfect reads as suspicious here. Leave the cracks in.

---

## 2. Visual Philosophy

The palette is a specific point of view, not a template dark theme, and it should never drift back toward one:

- **Green-black**, not generic near-black — `--color-warm-black`, oklch(0.17 0.014 152). Bamboo at night, not "elegant restaurant dark mode."
- **Ember-brass gold**, not champagne — `--color-gold`, oklch(0.72 0.086 72). Used only for CTAs, rules, and small-caps labels. If gold is everywhere, it's nowhere.
- **Candlelit cream** — `--color-cream`, oklch(0.94 0.018 80) — is not just a color, it's a **register: cream is what printed physical objects look like on this site.** The Menu's black-on-cream pages and the Place Card confirmation (Signature Moment #1) belong to the same object family — paper from the actual dinner — and share one visual DNA: warm-black text, `.eyebrow` small caps, hairline rules, no shadows, no rounded UI chrome. Reserve cream for moments that represent something a guest could hold at the table; that's what keeps the site's step into daylight feeling like walking from the garden into lamplight rather than a theme toggle.
- **Muted bamboo** — `--color-bamboo`, oklch(0.52 0.045 140) — hover states and fine details only. It ties the Oasis into the system without turning the site into a plant shop.

Confidence is a visual choice, not just a tone one: real, imperfect photography beats flawless fake photography every time; empty space is a decision, not an oversight; nothing on this site should look like it's trying to prove it has a design budget.

---

## 3. Typography Rules

- **Playfair Display** is the candlelight serif — headlines only. Push it bigger and braver than instinct suggests: **hero display sizes should reach 96–120px on desktop.** As of this writing every hero on the site undershoots this ceiling (Home's largest is 88px; every other page caps at 72px with no larger step) — closing that gap is standing work, not a one-time fix, and every new hero should be built against the 96–120px ceiling from the start rather than inheriting whatever the last page happened to use.
- **Instrument Sans** is the body voice — generous line-height, warmer and narrower than the Inter it replaced.
- **Small-caps, letter-spaced labels** (11–12px, +8% tracking, the `.eyebrow` utility) are the third voice: section eyebrows, farm attributions, menu course labels. This is the "printed menu" DNA and it must be applied the same way everywhere it appears — Menu's course labels, Gallery's farm captions once they exist, About's section eyebrows — not as one-off decoration on a single page. Consistency here is what makes "we name our sources" a believable claim instead of a nice sentence said once.
- One `<h1>` per page. Occasional italic for human asides ("come as you are"), used sparingly.
- Tight leading on display type; generous leading on body copy. The contrast between the two is deliberate.

---

## 4. Motion Philosophy

**Candlelight, not fireworks.** This is the whole rule, and everything else is detail:

- `revealUp` (fade + 32px rise, ~700ms, custom ease-out, staggered by index via `custom`) is the **one** reveal pattern on the site. `viewportOnce` (never re-trigger on scroll-back) is standard on every use. Do not introduce a second motion vocabulary for future pages — extend this one instead.
- The **one sanctioned extension** to this system is the Menu's course-transition behavior (Signature Moment #4): as a new course enters view, the previous course's content dims and recedes rather than vanishing or sitting at full presence — echoing a course being *cleared*, not just scrolled away from. This is still built from `revealUp`'s primitives (opacity + position tied to viewport), not a new interaction paradigm, and it's the only place on the site where a reveal should carry this much intentional meaning. Nowhere else needs it.
- Count-up numbers count once, ease out, and respect `prefers-reduced-motion` completely — the existing Home implementation is the reference version, don't rebuild this pattern elsewhere without checking it first.
- Hero parallax, where used, stays subtle (background drifts slower than foreground, e.g. `[0,300]→[0,80]`) and never becomes scroll-jacking — the visitor's own scroll input is never hijacked, slowed, or snapped.
- Micro-interactions: CTAs warm ~10% on hover (ember-brass brightens, like blowing on a coal), images scale to a maximum of 1.02, cursor stays default. Nothing moves faster than roughly 250–300ms. Nothing loops except an intentional flame/count-up moment.

---

## 5. Performance Philosophy

**This website should feel impossibly fast.** Not "fast for a marketing site with a lot of photography" — fast in the way the rest of this manifesto asks for restraint: as a deliberate choice, not a caveat. Speed is not in tension with the brand's warmth; a slow site reads as careless, and nothing here is careless.

- **Largest Contentful Paint should feel instantaneous.** The LCP element on almost every page is a hero image — it must never be lazy-loaded, must be sized and compressed appropriately, and should carry a priority hint so the browser fetches it first, not whenever it gets around to it. `loading="lazy"` is for below-the-fold content only (Gallery's grid already does this correctly — that's the reference pattern, not the exception).
- **Images should always load progressively.** No image should pop from blank space to fully-loaded with nothing in between. Reserve real space for every image ahead of time (the site's existing `aspect-[...]` box pattern already prevents layout shift — keep using it on every new image, no exceptions) and let images resolve in as they arrive rather than appearing all at once from nothing.
- **Motion should never delay interaction.** An entrance animation may stagger what a visitor *sees* arrive, but it must never delay what a visitor can *do*. A button fading in via `revealUp` must still be clickable the instant it exists in the DOM, even mid-transition — opacity and transform are cosmetic, not gates. No animation should block scroll, gate a route change, or require its own completion before the next action is possible.
- **Every animation should enhance performance perception, not reduce it.** Motion here exists to make necessary waiting feel intentional (a staggered reveal reads as content arriving with care, not as a loading delay) — never to add artificial waiting on top of content that's already ready. If a transition makes a page feel slower than it actually is, that transition is wrong, regardless of how it looks in isolation.
- **The tie-breaker: if a design decision conflicts with speed, speed wins** — unless the interaction is genuinely essential to the story being told. The Menu's course-clearing transition (§4, Signature Moment #4) is the one motion pattern on the site that might justify the exception, because the pacing itself *is* the storytelling. It still doesn't get an automatic pass — it gets evaluated against this rule like everything else, not exempted from it.

---

## 6. Photography Principles

- Real hands, mid-service, candid faces — Trevor plating and running the fire, Adam at the gate, a farmer at the market. Depth of field like sitting at the table: one thing sharp, the rest glowing.
- **No stock photography, no AI-generated imagery, no over-retouching**, ever. A slightly imperfect real photo beats a flawless fake one.
- **The grain rule:** `.grain` applies to full-bleed/background photography — heroes, full-bleed section backgrounds — and *not* to contained or framed photo blocks (grid images, portrait-in-a-box two-column layouts). This is already followed correctly on Home and About; treat it as the standing rule for every future page rather than a per-builder judgment call.
- **Crop with intent, always verify at real render size.** The About hero and team-photo crops both shipped with bad default crops (`object-top`, naive aspect ratios) that cut off faces until they were checked against the actual live render and adjusted by eye. Never trust a crop until you've seen it rendered — code alone doesn't reveal a bad crop.
- **Test every hero and every text-over-image moment at 390px width before calling it done.** Home's hero contrast failure and About's better-than-expected mobile crop were both only visible by loading the actual page at mobile width — this is now a required step, not an optional check.

---

## 7. Spacing Principles

Padding is a pacing device, not a default. The brief's own language — "arrival → the table → the food → the people → the invitation" — implies peaks and rests, not a metronome.

- Reserve the largest vertical rhythm (`py-32`+) for true quiet-moment beats: Mission-style single statements, closing CTAs, anywhere the page wants a visitor to stop and sit with one idea.
- Tighten padding on denser, multi-paragraph sections — they don't need the same air as a two-sentence mission statement, and giving them the same weight flattens the rhythm.
- Uniform `py-24 sm:py-32` everywhere, applied without thought, is the fastest way a restrained site starts to feel like a template of itself. About's Mission section (two sentences, generous air, nothing else) is the reference standard every other quiet moment should be measured against.

---

## 8. Page-Specific Identities

**One page, one shape.** Structural identity should differ page to page — not just copy inside a repeated scaffold.

- **Home + About** are allowed to rhyme with each other — both are narrative pages, and the eyebrow → serif headline → paragraph → CTA pattern is appropriate for both. They should not, however, become the default shape every other page reaches for.
- **Menu** must look and feel structurally unlike every other page: cream, black-on-cream, restrained, printed-menu register, one course revealing at a time. This is the brief's most specific art direction and currently the site's biggest gap between ambition and implementation — the highest-leverage page on the site precisely because of that gap.
- **Experiences** must become one consistent shape — five full-width alternating horizontal bands (Chef's Table, Home Dinners, Milestones, Brand Collaborations, Destination) — not a numbered "how it works" card grid stitched to two different two-column sections, which is what exists today. One caution: alternating bands are themselves a familiar pattern, so the structure alone doesn't make this page ownable — what does is what each band carries: its own photograph and its own genuinely distinct narrative (§12's five-stories rule), and on the Chef's Table band specifically, the explicit welcome to the solo guest (§11). Five bands sharing one register of reworded copy would be the old template with extra steps.
- **Gallery** stays masonry, uneven, candid — already the closest page to its brief-specified shape. Don't over-engineer it; it mostly needs its copy/captions brought current.
- **Contact** stays a simple, restrained progressive form — "a conversation, not a form" is a tone note about voice, not an invitation to build an exotic multi-step UI. The underlined-field styling already in place is correct; don't replace it with something fancier for its own sake.
- **NotFound** carries the same on-voice restraint as every other page. A 404 is not license to fall back into concierge-gloss or generic template language.

---

## 9. Signature Moments

Five ownable ideas, each borrowed from an actual dinner-party ritual rather than a UI pattern. Full rationale for each lives in `SIGNATURE_MOMENTS.md`; the summary and their real attachment points on the site:

1. **The Place Card, not a Confirmation Screen** — Contact's post-submit state shows the guest's own first name on a still, printed-style place card — set in the cream printed-object register (§2), the same paper family as the Menu — instead of a checkmark/confetti pattern. *Attaches to:* Contact's rebuild — this is now that task's definition of "done" for the confirmation screen, not a separate project.
2. **The Menu Has a Date On It** — **amended from the original spec: the date must be real, not computed.** A render-time "week of [today]" stamp over a sample menu whose dishes are hardcoded manufactures freshness the content doesn't have — exactly the kind of plausible-sounding invention §11 exists to prevent. The honest version is a hand-set line stating when Trevor actually last set the menu ("SET DOWN MARCH 2026," in the `.eyebrow` voice), updated by hand when the dishes change and never before. A date that's occasionally a few months old is evidence of a real practice; a date that's always today is a trick. *Attaches to:* Menu's rebuild.
3. **The Guestbook, Not the Testimonial Carousel** — Home's "What Guests Say" section becomes a static, dated guestbook entry (or entries, as more arrive) instead of a rotating quote block. The "first entry in the book" framing is the spec, not the fallback: launch with exactly as many real dated entries as exist — one is enough, and a page confident enough to show a single entry says more about forty-five real dinners than a padded grid ever could. Never pad with reworded or invented quotes. *Attaches to:* Home — this is genuinely new scope not in the original implementation ranking; see the order below for where it's been slotted in.
4. **Courses Are Served, Not Scrolled Past** — the previous course dims and recedes as the next enters view, echoing real service pacing. *Attaches to:* Menu's rebuild (see Motion Philosophy, §4).
5. **Naming the Hands, Everywhere Food Appears** — the small-caps farm/source attribution convention applied consistently on Menu and (once real farm/market photography exists) Gallery, not just stated once on About. *Attaches to:* Menu's rebuild now; Gallery once the photography backlog item is resolved.

No signature moment introduces a new dependency, a new animation library, or a new visual register beyond what's already in the codebase (`revealUp`, `.eyebrow`, the existing type system). The craft is in restraint and consistency, not invention.

---

## 10. Interaction Principles

- Focus traps (Tab/Shift+Tab cycling, Escape to close, focus return to trigger) are the standard for any modal or overlay — Navigation's mobile menu and Gallery's lightbox are the reference implementations. Replicate this pattern exactly on any future overlay; don't reinvent it.
- **One CTA vocabulary**, drawn from the Fable copy pass — Request Your Seat / Plan Your Night / Start a Conversation / See the Experience, etc. Every page's primary action uses a label from this set. If a page needs a CTA the Fable pass didn't specify, that's a signal to extend the copy pass deliberately, not to freelance a new verb inside a component.
- Buttons do not change their label on hover — only the ember-brass gold brightens (~10%). A button that says something different on hover is a gimmick, not a detail.
- No gimmick cursors, ever.
- Every hardcoded color must be checked against the token system before a page ships. The Navigation color bug happened because a raw `oklch(...)` value was written outside the token system and never caught until someone actually scrolled the live page — code review alone won't catch this class of bug.

---

## 11. Copy Principles

- The test for every sentence on the site: **does this sound like Trevor, or like an AI imitating him?** Self-taught, direct, sincere, allergic to pretension, occasionally blunt ("Period." "That's it. That's the company.").
- No metaphor-stacking, no luxury-hospitality gloss, no agency-deck language ("at the intersection of," "into the realm of genuine experience," "crafting your experience").
- Nothing invented goes live. Bracketed placeholders (`[Farm Name]`, `[Ranch Name]`) stay bracketed until Trevor fills them with a real, checkable source — never fill a bracket with something plausible-sounding.
- Facts must agree with each other across the entire site: no alcohol is ever implied anywhere (there is no alcohol program — a "digestif" pairing is a live contradiction, not a style note), reply time is always "two business days" (never "48 hours"), guest/event counts always match the FAQ and JSON-LD.
- **The singular "Seat" is on purpose.** The mission's actual audience includes the person who would come alone — and no page currently says out loud that they can. Somewhere on the site — the Chef's Table narrative on Experiences, and the FAQ once built ("Can I come alone?") — it must be stated plainly that a single seat at a shared table is not the awkward edge case, it's the whole point. A site whose thesis is loneliness cannot address only hosts planning parties.
- One settled CTA vocabulary (see §10) — copy and interaction principles agree with each other here on purpose.

---

## 12. Content & Search Strategy

**Every page answers one clear search intent, and has one primary topic.** This isn't a new idea — it's what the original brief's SEO section already assigned page by page — but it needs to be stated as a standing rule, because it's the kind of discipline that erodes quietly if nobody names it:

| Page | Search intent | Primary topic |
|---|---|---|
| Home | "immersive private dining Los Angeles" — category discovery | The core offer and philosophy |
| About | "Chef Trevor Brown," "private chef Los Angeles" — trust research | Trevor, the team, the mission |
| Experiences | "chef's table LA," "private dinner party Los Angeles" — comparing offering types | The five ways to gather |
| Menu | "farm to table tasting menu LA" — what do they actually cook | Food philosophy + sample courses |
| Gallery | "what does it actually look like" — visual proof-seeking | Real photographic evidence |
| Contact | "book private chef Los Angeles" — transactional | The inquiry form (and the FAQ, once built) |

If two pages start competing for the same query, that's a signal one of them has drifted from its assigned topic — pull it back rather than letting both pages half-answer the same question. This is the topical companion to §8's "one page, one shape": §8 governs structure, this governs subject matter, and a page can fail this rule even while nailing its visual identity.

**Every page contains original photography.** §6 already bans stock and AI imagery outright — this adds a positive requirement on top of that negative one: each page should feature at least one photo that appears on no *other* page — Gallery excepted, since it deliberately shows the full library and would otherwise make the rule unsatisfiable for every page; the rule governs the five narrative pages. This is not automatic just because the source library is real. **Current gap, found while writing this section:** `people_laughing_chef.jpg` is used on both Home (the 3-photo grid) and About ("Not About the Plate") — the first concrete violation of this rule, worth fixing whenever either page is next touched. With only 36 photos in the library across six pages plus a Gallery that shows all of them, some tension between this rule and the current photography backlog (already flagged in the Creative Audit — no individual Adam portrait, no farm/market shots) is expected; treat new photography as the actual fix, not further shuffling of the existing 36 images between pages.

**Every page contains original stories.** Shared brand facts — the 45 events / 1,000+ guests stat, the "make the world less lonely" mission line — are fine to repeat across pages as anchoring proof points; the brief does this deliberately. What each page must *also* carry is at least one specific detail that exists nowhere else on the site: About has Trevor's personal origin story, Menu should have its specific dish/farm details, Experiences should have five genuinely distinct offering narratives rather than one narrative reworded five times. A page that only restates the brand mission in slightly different words has structure but no story — that's the difference between a page and a paragraph split across sections.

**Every page earns backlinks through usefulness, not tricks.** No keyword-stuffed alt text or copy that says more than the image or the sentence actually supports — the Fable pass's real, descriptive alt text is already the right standard; extend it, don't undercut it with SEO padding. No invisible text, no link schemes, no doorway pages. The clearest current opportunity here is also the clearest current gap: the handoff doc's visible FAQ (§6b) — real, specific answers to real questions (dietary restrictions, the no-alcohol policy, how sourcing works, how pricing works) — doesn't exist as visible content anywhere on the site yet, only as a plan. A genuinely useful FAQ is exactly the kind of page other sites and AI assistants actually cite; a vague "why choose us" page is not. Likewise, Menu's real, named farm attributions (Signature Moment #5) aren't just a voice choice — specific, checkable sourcing claims are inherently more linkable than generic "farm to table" marketing language, because they're the kind of detail a local food writer or a farm's own site might reference back.

---

## 13. Things We Should Never Do

A single consolidated list, drawn from the brief's original anti-goals and every constraint discovered since:

- No stock photography, no AI-generated imagery, no over-retouching.
- No luxury-hospitality gloss, no wall-of-text sections, no agency-deck language.
- No parallax-as-spectacle or scroll-jacking — the visitor's scroll input is never hijacked, slowed, or snapped.
- No glassmorphism.
- No confetti, checkmarks, or generic "success!" patterns at conversion moments — see Signature Moment #1 for what replaces this.
- No auto-advancing testimonial carousels — see Signature Moment #3 for what replaces this.
- No gimmick cursors.
- No hardcoded colors that bypass the `--color-*` token system.
- No second motion vocabulary alongside `revealUp` — extend it, don't replace or duplicate it.
- No inventing facts, farm names, or sources — bracket and wait for the real answer.
- No manufactured freshness — no computed dates, live-looking counters, or "updated" signals layered over content that doesn't actually change (see §9's amended date line: real dates, set by hand, or nothing).
- No doubled success-messaging (a toast *and* a confirmation screen is one too many).
- No per-page CTA invention outside the fixed vocabulary in §10.
- No section padding applied uniformly without considering the content's actual weight.
- No page defaulting to the eyebrow/headline/paragraph/CTA scaffold just because it's already built elsewhere — every page earns its own shape (Home and About excepted, per §8).
- No lazy-loading the LCP/hero image — lazy-loading is for below-the-fold content only.
- No animation that delays functional interactivity (clicking, tapping, typing) behind a decorative transition.
- No shipping an unoptimized or oversized image asset without checking its effect on load time first.
- No two pages competing for the same search intent — if it happens, pull one back to its assigned topic (§12).
- No reusing the same photo across two pages without checking §12's rule first.
- No keyword-stuffed alt text, copy, or structured data written to game search rather than to be true.

---

## 14. Order of Implementation

This is the one authoritative sequence — the original `IMPLEMENTATION_PLAN.md` ranking, corrected where the grain-rule finding turned out to need no code change, and with the Signature Moments folded into the tasks they attach to (plus one small added item, the Guestbook, which wasn't in the original ranking).

1. **Fix the Navigation/mobile-menu color bug.** Unconditional first step — it's currently visible on every page you'd review while doing everything else on this list.
2. **Fix Home's hero anchoring for mobile.** Highest-impact remaining bug, fully contained to one file.
3. **Swap Nav + Footer CTA and copy** to the approved vocabulary (batch together — same components, one review pass).
4. **Home + About polish batch:** hero type size bump toward the 96–120px ceiling, and tighten the 3-photo grid's mobile pacing. (No grain-rule change needed here — both pages already comply with §6's rule as written.)
5. **Add the Guestbook to Home** (Signature Moment #3) — new scope, small effort, best done in the same sitting as the polish batch above since it's also Home-page work.
6. **Rebuild NotFound.** Smallest page on the site, copy already written, clears it off the list entirely.
7. **Padding rhythm pass on Home + About** (§7) — the natural last word on "are these two pages actually done," done right after the polish work above while both pages are still fresh.
8. **Rebuild Contact**, now explicitly including the Place Card confirmation treatment (Signature Moment #1, set in the cream printed-object register per §2) **and the visible FAQ** as part of its definition of done. §12 calls the FAQ the site's clearest content opportunity, Contact is its assigned page, and until now it appeared nowhere in this sequence — the exact quiet erosion §12 warns about. The FAQ must include a plain "Can I come alone?" answer (§11). Contact stays ahead of Gallery because it fixes a live factual/trust issue (reply-time inconsistency, doubled success message) and because every other page's CTA points here.
9. **Rebuild Gallery** — caption and copy swap now; the farm-naming convention (Signature Moment #5) applies to Gallery once real farm/market photography exists, not before.
10. **Rebuild Menu** — the first Major Project, and the single highest-leverage page on the site. Now explicitly scoped to include: the cream/printed treatment, real dish names, the digestif fix, the hand-set date line (Signature Moment #2, as amended in §9 — a real date, never a computed one), the course-clearing motion refinement (Signature Moment #4), and the farm-footnote convention (Signature Moment #5, Menu portion).
11. **Rebuild Experiences** — last, once Menu has already established what "building a genuinely new page shape" looks like in this system. Five full-width alternating bands, one consistent structure, covering all five offerings.

Nothing here gets touched twice, both live bugs and the one factual error are resolved before either Major Project begins, and every remaining page gets built against a fully clean, fully consistent foundation. Every step above is also now a performance checkpoint, not just a visual one — confirm LCP, image-loading behavior, and interaction responsiveness (§5) before calling any of them done, the same way mobile width is already a required check (§6).
