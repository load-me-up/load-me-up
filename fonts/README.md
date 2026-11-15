# Fonts

Put the licensed font files in this folder. OTF is the format to use. It keeps the extra OpenType features.

- `body-regular.otf`
- `body-italic.otf`
- `body-bold.otf`

WOFF2 is optional. A commented line for it sits first inside each `src` in `style.css`. Uncomment that line if you add `body-regular.woff2`, `body-italic.woff2` and `body-bold.woff2`. A WOFF2 keeps every OpenType feature unless subsetting strips them.
