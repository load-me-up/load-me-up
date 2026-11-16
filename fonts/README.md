# Fonts

Jannon Text is the reading face. The family name in `style.css` is "Jannon Text". These six WOFF files are the ones the site loads.

- `JannonText.woff`, regular, weight 400, normal
- `JannonText-Italic.woff`, italic, weight 400
- `JannonText-Medium.woff`, medium, weight 500, normal
- `JannonText-MediumItalic.woff`, medium italic, weight 500
- `JannonText-Bold.woff`, bold, weight 700, normal
- `JannonText-BoldItalic.woff`, bold italic, weight 700

Weight 400 is running text. Weight 500 is headings. Weight 700 is strong, and the bold italic file is used when strong text is also italic. Each file is declared with `format("woff")` and `font-display: swap`.

Jannon Ornaments is a separate family, `"Jannon Ornaments"`, in `JannonOrnaments.woff`. Its glyphs are mapped to plain ASCII. `(` is the right-pointing hand on Nobody. `S` is the fleuron on the home page: the upright ornament, which sits on the centre. `U` and `V` are horizontal leaves with their weight to one side. The rule uses `font-display: block`. The `.orn` spans stay hidden until the file has loaded.
