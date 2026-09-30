# Tropical Breeze Taxis — GitHub Pages website

This download includes the HTML pages, styles, JavaScript, destination photos, vehicle images, logo and interactive destination map. No build step is required.

## Open on your computer

1. Extract the entire ZIP into a NEW folder.
2. Keep every folder and file together.
3. Open index.html in Chrome, Edge, Firefox or Safari.

Do not open index.html from inside the ZIP, and do not copy index.html by itself. The assets, vendor and page folders are required.

## Publish on GitHub Pages

1. Upload all extracted contents to your repository. index.html must sit at the repository root, next to assets, vendor, app.js and style.css.
2. In GitHub, open Settings → Pages.
3. Choose Deploy from a branch → main → /(root) → Save.
4. Open the website address shown by GitHub after publication finishes.

If replacing an older copy, replace the complete set of files and refresh the browser with Ctrl+F5.
Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Map fix

The Sri Lanka destination overview uses bundled Natural Earth geographic data and local Leaflet files. It makes no external map-tile requests, needs no API key or location permission, and works when index.html is opened directly. All 15 pins, search, zoom, Show all, selection and expanded view are available. It is a destination overview; the Directions link opens Google Maps for road navigation and needs an internet connection.

Map data: public-domain Natural Earth. Leaflet's license is included in vendor.

## Booking and contact

Customers choose Car, Flat Roof Van (6 passengers), or High Roof Van (9 passengers). Homepage selections and vehicle enquiry links carry the correct category into the booking form. Enquiries prepare a WhatsApp or Gmail message; the visitor reviews and sends it. Availability and fare are agreed directly.

Phone / WhatsApp: +94 71 201 8185
Gmail: pradeepdesilwa488@gmail.com
Instagram: https://www.instagram.com/tropical_breeze_holidays/

This is the static GitHub Pages edition. It has no customer accounts, booking database, admin dashboard or online payment processing. Existing live-site accounts are not transferred into this download. The live Sites website has not been changed by this export.

## SEO for your final address

Each public page includes its title and description. After choosing your actual GitHub Pages address or custom domain, optionally run:

python configure-seo.py https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/

Use your real address. This adds canonical links and creates sitemap.xml. Upload the updated files. The source does not contain a guessed canonical domain.

## Checks completed

Browser checks passed for direct file opening and a hosted repository subfolder, including maps with external requests blocked, destination filters and arrows, booking selection and prepared enquiries, contact enquiries, mobile navigation and layout. Local page and asset references were checked. See VALIDATION.txt for scope. The files have not been deployed to your GitHub account.
