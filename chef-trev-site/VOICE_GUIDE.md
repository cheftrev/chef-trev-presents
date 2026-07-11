# Chef Trev Presents — Voice Guide

**Who this is for:** anyone (human or AI) writing new copy for this site who never met the brand. `DESIGN_MANIFESTO.md` §11 has the rules; this doc is the concrete layer underneath them — real sentences from the shipped site, the rhythms they use, and the failures to avoid. The deep source is `ABOUT ME - TREVOR BROWN.md` (the voice profile); read it if you're writing anything longer than a headline.

---

## 1. Who is talking

Trevor Brown — a self-taught chef from north of Boston who burned things, undercooked things, and kept going until it tasted right. No culinary school, no Michelin kitchen, and he says so before you can ask. He writes short, states facts as facts (45 events, 1,000+ guests, 14-hour brisket), names actual people and farms instead of gesturing at "quality," and closes with an invitation, not a pitch. He is direct to the point of blunt, sincere without being soft, and physically allergic to pretension — the whole company exists because "the world is really lonely right now," and he'd rather say that plainly than dress it up. The litmus test for every sentence: *does this sound like Trevor, or like an AI imitating him?*

---

## 2. Patterns we reach for

All examples below are shipped copy. Pull them up in context before writing anything new.

**The short-sentence hammer.** A longer sentence winds up; a fragment lands the punch. The period is the emphasis tool — not italics, not exclamation points.
- "To make the world less lonely, around the table. That's it. That's the company." *(About, Mission)*
- "Because the age of loneliness is here, and I'm sick of it. Period." *(About, opening)*
- "Trevor runs the fire. Adam runs the room. You just show up hungry." *(Home, Chef's Table)*
- "That's not an accident. That's the whole design." *(Home, The Table)*
- "The food has to be great. It is. But the food is the invitation, not the point." *(About)*

**Fragments as a rhythm section, used sparingly.** Triplet-ish stacks of fragments set a scene fast, then a full sentence resolves them:
- "Family style. Live music. Strangers on arrival, community by dessert." *(Home hero subhead)*
- "No culinary school. No Michelin kitchen. 45 events and 1,000+ guests later, I'll put our table up against anyone's." *(About)*
- "The birthdays that end in zero. The engagement. The send-off." *(Experiences, Milestones)*

One or two of these per page is the ceiling. Every section opening in fragments = self-parody.

**Facts stated plainly, never hyped.** Numbers and names do the flexing; adjectives don't.
- "14-Hour Slow-Cooked Brisket" — the number *is* the flex. Not "exquisitely tender."
- "We can name who grew the squash and who caught the fish — not 'organic' as a sticker, but a person we can call." *(Menu)*
- "Head Chef Trevor Brown and Head of Experience Adam Sanchez — the same two people you'll talk to when you book. No rotating roster, no strangers in your house." *(Experiences FAQ)*
- Reply time is always "two business days" — never "48 hours." No alcohol, ever, anywhere, even by implication.

**Honesty as a feature, including when it costs something.** The site says no out loud and admits limits:
- "Honest answer: no." *(FAQ, on whether guests will miss alcohol)*
- "If you need trays dropped off, we're the wrong call." *(Brand Collaborations FAQ)*
- "No — we're selective, and we'll tell you early." / "we'll pass with respect."
- "We read every message ourselves and reply within two business days. No call centers, no scripts. Just us." *(Contact)*
- Unfilled facts stay bracketed in the code — "Greens from [Farm Name], [City]" — and ship only when Trevor supplies the real name. Never fill a bracket with something plausible.

**The reframing question as an opener.** Pages open on a question that shifts the frame, or a hard-conviction line — never on throat-clearing:
- "What's the difference between eating a meal and experiencing one?" *(Home hero, the site's `<h1>`)*
- "Why a table?" *(About hero)*
- "We don't have a signature dish. We have a signature question: what's the best thing growing near Los Angeles *right now*?" *(Menu)*

**Concrete images over abstractions.** The camera is always at the table:
- "candles down the middle," "pass the plate to the person next to you," "brisket you could cut with a spoon," "the eight people you've been meaning to get in one room for two years," "You arrive as guests. You leave as a table."

**The settled CTA vocabulary.** Primary actions only use: **Request Your Seat** (default), **Plan Your Night**, **Start a Conversation**, **See the Experience**, **Mark the Moment**, **Tell Us Where**, **Send It** (form submit), **Back to the Table** / **Or pull up a chair** (returns). Don't invent new CTA verbs inside a component — if a new page genuinely needs one, extend this list deliberately.

**The invitation close.** Pages end with "See you at the table." (Home, About, Contact, Experiences, Footer). Trevor invites; he never instructs.

**Microcopy is on-voice too.** The smallest strings carry the same voice: placeholder "First and last is plenty," "A date, a month, a season — rough is fine," "City, venue, or 'your garden'"; error "That email doesn't look right — check it so we can actually reply"; 404 "This page isn't on the menu." If a label sounds like a SaaS form, rewrite it.

---

## 3. Patterns we avoid

The cardinal sin is AI slop. Specific offenders, with what the site does instead:

| Never write | Why | What shipped instead |
|---|---|---|
| "This isn't just a dinner — it's a journey of connection." | The "not just X, it's Y" setup is the most ChatGPT-coded construction there is. (Plain contrast is fine — "the food is the invitation, not the point" — the crime is the *escalating* version.) | "That's not an accident. That's the whole design." |
| "This is more than a meal. This is a remembrance." | The escalating two-line mic-drop: manufactured profundity, announcing depth instead of earning it. | "To make the world less lonely, around the table. That's it. That's the company." |
| "At the intersection of food and community…" / "crafting your bespoke culinary experience" | Agency-deck language. Also the foodie five-dollar words: *libation, repast, terroir, unctuous, epicurean, bespoke* — none would come out of Trevor's mouth. | "We bring the full experience — menu, music, table, team — to your home or your milestone. You bring the people worth gathering." |
| "An unforgettable, exquisite evening" | Hype adjectives are cheap; a real number is un-fakeable. | "45 events. 1,000+ guests." / "14-Hour Slow-Cooked Brisket." |
| "We hold space for intentional nourishment, sourced with love." | Woo. Even words Trevor likes (abundance, ancestors) die when stacked into ungrounded density. | "Seasonal, traceable, cooked over fire where fire makes it better." |
| "In today's fast-paced world…" / "Let's be honest…" | Dead-on-arrival openers. Get to the beat immediately. | "Our flagship. One candlelit table in a bamboo-lined garden…" |
| "We happily accommodate all dietary needs!" | Chirpy service-speak flattens a real conviction into a checkbox. | "Guests with dietary restrictions often feel like an afterthought at events; here they get the kitchen's best work… the menu is adapted, not downgraded." |
| Anything implying wine pairings, cocktails, a "digestif" | There is no alcohol program. This is a live factual error, not a style choice. | "No. The experiences are built around food, music, and connection — no alcohol program." |

Also banned: invented facts, farms, or quotes (guestbook entries are real and dated, never padded); "my heart is so full" fake gratitude; making three people sound like an institution ("our team of experts" — it's Trevor and Adam, say so).

---

## 4. Before / after

The difference, made concrete. Left column is the generic version a first draft produces; right is what actually shipped.

**Home hero subhead**
- ✗ "Indulge in an unforgettable culinary journey where every detail is thoughtfully curated to delight the senses and bring people together."
- ✓ "Immersive dinners in a candlelit bamboo garden in Los Angeles. Family style. Live music. Strangers on arrival, community by dessert."

**The mission**
- ✗ "Our mission transcends the plate — we craft transformative moments of genuine connection that nourish both body and soul."
- ✓ "To make the world less lonely, around the table. That's it. That's the company."

**"Can I come alone?" (FAQ)**
- ✗ "Absolutely! Solo diners are always welcome at our communal table experiences."
- ✓ "Yes — and honestly, coming alone might be the purest version of the whole idea. This company exists because the world is lonely, and one seat at a shared table is the answer, not the awkward exception… Request one seat the same way you'd request ten."

Notice what changes each time: the generic version describes feelings it hopes you'll have; the shipped version states facts, names the design, and lands on something you can picture or count.

---

## 5. Pre-ship checklist

Run every new piece of copy against this before it goes live:

1. **Read it aloud.** Trevor writes for the ear and the heart. If it sounds like a brand, not a person, rewrite it.
2. **Ctrl-F the tells:** "not just," "more than a," "journey," "curated," "elevate," "indulge," "bespoke," "crafted." Any hit is a rewrite until proven otherwise.
3. **Is anything invented?** Every fact must be real and checkable. Brackets (`[Farm Name]`) stay bracketed until Trevor fills them.
4. **Do the facts match the rest of the site?** 45 events, 1,000+ guests, two business days, no alcohol ever, Trevor + Adam. One contradiction breaks the trust the whole site is built on.
5. **Is the CTA from the settled vocabulary** (§2)? No freelanced verbs.
6. **Does it land on something concrete** — a table, a fire, a name, a number — rather than an abstraction?
7. **Would Trevor say this word out loud?** If it's "terroir," no. If it's "brisket," yes.
8. **Is there a shorter version?** There usually is. Ship that one.
