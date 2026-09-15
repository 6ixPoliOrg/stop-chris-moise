# Campaign website build

## What I’ll build
- Recreate the supplied single-page campaign site at `/`, following the mockups’ bold black, red, and yellow editorial style.
- Include the announcement bar, sticky wordmark/menu, full-screen photographic opening, campaign case, ten-item record, election callout, coalition form, and sources footer.
- Preserve the supplied wording and source placeholders from the HTML while making the structure easier to scan across desktop and mobile.
- Add polished, cohesive campaign imagery inspired by the mockups without embedding the screenshots themselves.

## Interactions and accessibility
- Build a keyboard-accessible full-screen menu with escape-to-close and scroll locking.
- Add smooth in-page navigation, clear focus states, reduced-motion support, and descriptive image text.
- Make the coalition form validate required fields and show success/error feedback locally; submissions will not persist because no data service was requested.

## Technical details
- Implement the page in the existing React app and define all typography, colors, spacing, and reusable visual treatments in the global design system.
- Load Big Shoulders Display and Source Serif 4 from the document head.
- Add page-specific search and social metadata.
- Verify the finished page at desktop and mobile sizes, including menu and form behavior.
