---
name: awesome-design-md
description: Library of 84 ready-made DESIGN.md design systems (tokens, colors, typography, components, rules) extracted from real websites like Stripe, Apple, Airbnb, Nike, Shopify, Spotify, Starbucks. Use when the user wants a page or site to look like a known brand, asks for a visual reference/design system, or wants to create a project DESIGN.md.
metadata:
  source: https://github.com/voltagent/awesome-design-md
---

# Awesome DESIGN.md

Each file in `designs/` (relative to this skill's folder) is a complete DESIGN.md: a YAML
frontmatter with design tokens (colors, typography, spacing, radii) followed by prose rules for
layout, components and tone. File names are the source site (`designs/stripe.md`, `designs/nike.md`).

## How to use

1. **Find candidates.** List `designs/` and read the `description:` line of each frontmatter
   (e.g. `grep -m1 "^description:" designs/*.md`) to match the mood the user wants.
2. **Read the chosen file whole** before writing any UI.
3. **Adopt it as the project's design system:** copy it (or a blend the user approves) to the
   project's `DESIGN.md` and adapt the brand-specific parts (name, logo, proprietary fonts →
   available alternatives such as Google Fonts) to the user's brand.
4. **Build against it:** use its tokens as CSS variables / Tailwind theme values and follow its
   component and layout rules on every page so all pages stay visually consistent.

These are inspired analyses, not official brand assets: never copy logos, trademarks or brand
names into the user's site.
