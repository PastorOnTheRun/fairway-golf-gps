# Fairway — Personal Golf GPS

A phone-friendly, installable web app for personal golf GPS, course mapping, scorekeeping, and manual shot tracking. No paid API keys, app subscription, account database, or AI calls. All saved user data is browser-local. Hosting and public data service availability are external dependencies; perpetual free hosting is not guaranteed.

## Use it

1. Find a course by name and city or use GPS to find courses within 25 km. OpenStreetMap coverage varies. Imported golf hole lines supply an **estimated green center**, not a surveyed pin position. Front/back are left blank until mapped.
2. In the course mapper, mark the tee, front, center, and back of each green; verify each par and add any hazards. Use the US aerial layer where available, or a permission-cleared north-up aerial with known bounds.
3. Enable phone GPS in the browser and keep the app open. It displays location uncertainty; fixes older than 30 seconds are not used for live yardages. Distances are straight-line horizontal estimates.
4. Record scores and putts. Start a shot at the ball, walk to the finish, stop, and choose a club. Shot tracking requires a current fix with accuracy of 30 m or better. Its uncertainty includes both endpoint GPS accuracies.
5. Export a JSON backup regularly; it includes courses, rounds, clubs, and photos. Import merges records by identifier. Browser data is separate on every device and can be erased by clearing site data.

Install using Safari → Share → Add to Home Screen on iPhone, or Chrome’s Install / Add to Home screen option on Android. GPS requires HTTPS or localhost. Foreground use only; no native watch integration or background location.

The fictional Cypress Practice Club demonstrates the interface. Its positions and yardages are **sample data**, and its rounds are labeled demo.

## Photos and offline behavior

JPEG EXIF GPS positions attach photos at the **camera position**. They do not reveal where a photographed green or hazard is. PNG/WebP or stripped JPEG metadata need manually entered coordinates. Aerial overlays need known bounds and a north-up, geometrically corrected image. An ordinary photo cannot supply accurate green contours or a hole map automatically.

The service worker caches only app files. Saved coordinates, scores, and uploaded images can be used without map tiles after a successful first load and shell cache. Course search, Overpass imports, and third-party basemaps require internet. The app never prefetches or bulk-downloads map tiles. Private host authentication and browser caching rules may affect offline launches; test on your phone before relying on it.

## Run locally

Node.js 20+; no installation step or dependencies:

```sh
node serve.mjs
node --test tests/core.test.mjs
```

Open http://127.0.0.1:4173. A phone cannot use a computer’s localhost URL; use the hosted HTTPS version. `dist/` is the complete static app. Leaflet 1.9.4 is vendored with its license.

## Scope

Includes GPS front/center/back, tapped target measurements, user-defined hazard points, OSM course discovery and hole imports, course point editing, camera-location photos, aerial image overlays, strokes/putts, partial rounds, round history, manual GPS shot tracking with clubs, editable carry distances, yards/meters, backups, and a home-screen manifest.

Does not include an official handicap, certified course database, green slope/putting maps, automatic shot detection, swing analysis, multiplayer, watch apps, or elevation/wind-adjusted yardages. Imported courses and GPS have not been surveyed or field-validated. There is no fee-generating API integration.

## Data and privacy

LocalStorage holds course points, rounds, settings, and club distances. IndexedDB holds resized photos, including manually entered or EXIF-derived coordinates. No automatic cloud sync. OSM/Nominatim receives search text; Overpass receives the chosen course or the location of a nearby-course search; basemap providers receive viewport tile requests. Your device’s GPS fix is otherwise processed locally.

Attribution: [OpenStreetMap contributors, ODbL](https://www.openstreetmap.org/copyright), [Nominatim](https://operations.osmfoundation.org/policies/nominatim/), [Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API), [USGS National Map](https://www.usgs.gov/the-national-map-data-delivery/gis-data-download), and [Leaflet](https://leafletjs.com/). Map usage follows the [OSM tile policy](https://operations.osmfoundation.org/policies/tiles/); no offline tile download is offered.
