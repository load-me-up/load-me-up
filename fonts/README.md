# Fonts

Four families, all WOFF. Web use is allowed. `robots.txt` still disallows `/fonts/`.

Jannon Text is the reading face. The family name is "Jannon Text". Body text, the nav, the footer, and the "Anon." strapline.

- `JannonText.woff`, regular, weight 400
- `JannonText-Italic.woff`, italic, weight 400
- `JannonText-Medium.woff`, medium, weight 500
- `JannonText-MediumItalic.woff`, medium italic, weight 500
- `JannonText-Bold.woff`, bold, weight 700
- `JannonText-BoldItalic.woff`, bold italic, weight 700

Running text is 400, with old-style figures. Strong is 700. The medium files are declared and not used. `.dlig` adds discretionary and historical ligatures.

Jannon Antiqua is the display face. The family name is "Jannon Antiqua". The wordmark, every heading, and the essay and poem titles.

- `JannonAntiquaPro.woff`, regular, weight 400
- `JannonAntiquaPro-Italic.woff`, italic, weight 400

`.smallcaps` uses this face, with real small caps (`smcp` and `c2sc`).

Jannon Sans Book is the quiet face. The family name is "Jannon Sans". Dates under titles, and the Evidence captions, in the secondary grey, slightly smaller than the body. Nowhere else.

- `JannonSans-Book.woff`, book, weight 400
- `JannonSans-BookItalic.woff`, book italic, weight 400

Jannon Ornaments. The family name is "Jannon Ornaments". Glyphs are mapped to plain ASCII.

- `JannonOrnaments.woff`, weight 400

`(` is the right-pointing hand on Nobody. `S` is the fleuron on the home page. `U` and `V` were tried: they are horizontal leaves with the weight to one side, so `S`, the upright one, is the one that sits on the centre. The rule uses `font-display: block`. The `.orn` spans stay hidden until the file has loaded.

Text, Antiqua and Sans use `format("woff")` and `font-display: swap`. `font-synthesis` is none, so a missing weight or style is never faked.
