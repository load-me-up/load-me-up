# Fonts

Jannon Text is the body face. These six WOFF files are the ones the site loads. WOFF keeps the extra OpenType features.

- `JannonText.woff`, regular, weight 400, normal
- `JannonText-Italic.woff`, italic, weight 400
- `JannonText-Medium.woff`, medium, weight 500, normal
- `JannonText-MediumItalic.woff`, medium italic, weight 500
- `JannonText-Bold.woff`, bold, weight 700, normal
- `JannonText-BoldItalic.woff`, bold italic, weight 700

`style.css` declares each file in an `@font-face` rule for the family name `Body`, with `format("woff")` and `font-display: swap`.
