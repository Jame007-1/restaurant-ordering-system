# Saffron Table — Digital Restaurant Menu

A responsive, scrollable restaurant menu built with HTML, CSS and vanilla JavaScript.

## Run it
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. For local development, you can also open the folder in VS Code and use the Live Server extension.

## Customize your menu
Open `script.js` and edit the `dishes` array near the top.
Each dish has:
- `name`
- `category`
- `price`
- `short` (card description)
- `description` (detail popup description)
- `image` (image URL)
- `tags`
- `spice`

Add more objects to the array to add more dishes. Categories are generated automatically from the dish data.

## Customize restaurant details
Edit the restaurant name, tagline, address, opening hours and map link in `index.html`.
Change the colours and fonts at the top of `styles.css` in the `:root` variables.

## Images
The sample uses remotely hosted Unsplash images. Replace each `image` URL in `script.js` with your own dish photo URLs for the real restaurant. Internet access is required to load these sample images and Google Fonts.

## Notes
This is a front-end menu template. It does not include online ordering, payment, or an admin dashboard.
