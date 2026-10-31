# Golf GPS research and build decisions

Researched October 29, 2026. Product tiers and data services can change.

| App | Relevant free features | What Fairway takes from the pattern |
| --- | --- | --- |
| 18Birdies | Front/center/back, hazard and target distances, scorecard, basic stats, manual shots | Clear primary yardage, quick scoring, manual shot capture |
| Hole19 | Mobile scorecard and course previews; GPS and scoring features vary by platform and tier | A phone-first course map and straightforward scorecard |
| Golf Pad | Green distances, scoring, aerial view, shot tracker, unlimited course access | A usable core without a paid API or feature paywall |

Sources: [18Birdies official free/premium breakdown](https://help.18birdies.com/article/661-whats-included-with-18birdies-premium), [Hole19 official features](https://www.hole19golf.com/hole19/features/more-features), [Hole19 Wear OS differences](https://help.hole19golf.com/hc/en-us/articles/28931132989468-Using-Hole19-on-Wear-OS), [Golf Pad official free features](https://support.golfpadgps.com/support/solutions/articles/98-golf-pad-gps-is-free-is-it-a-trial-or-a-limited-functionality-lite-version-).

18Birdies already offers a substantial free core. Building a personal version primarily adds ownership, customization, and freedom from feature upsells; it does not automatically match a commercial app’s course coverage or mapping quality. This is a design inference from the features and data dependencies above.

## A practical free-data approach

OpenStreetMap represents `golf=hole` as a path from tee toward green, optionally with hole reference and par. Fairway imports that path’s endpoints as tee and estimated green center. It does **not** invent front/back points, exact cup positions, or green slopes. Missing par defaults to 4 and is flagged for verification. Missing hole data creates a blank 9-hole mapping template; manual courses can have 9 or 18 holes. See [OSM golf hole tagging](https://wiki.openstreetmap.org/wiki/Tag:golf%3Dhole).

For US imagery, NAIP is an official public-domain aerial imagery source distributed by USGS. The current USGS ImageryOnly service combines sources, with varying vintage and detail; its metadata also identifies regional licensing differences. Fairway displays the service with attribution instead of copying commercial golf app imagery. It does not promise world coverage or current survey-quality imagery. See [USGS NAIP archive](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-aerial-photography-national-agriculture-imagery-program-naip) and the [live imagery service metadata](https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer?f=pjson).

Standard OSM tile servers permit ordinary interactive viewing and prohibit bulk/prefetched offline maps. Fairway therefore caches its own app shell and local user data, not remote basemap tiles. A future full offline map feature would require permitted, locally hosted imagery or an explicitly offline-capable provider. See the [OSM tile usage policy](https://operations.osmfoundation.org/policies/tiles/).

## What GPS photos can actually supply

EXIF GPS records the camera’s position; distance to an object visible in the photo is a separate measurement problem. A photo of a green from the tee does not establish the green’s coordinates. Fairway lets the owner attach a JPEG at its GPS location, enter missing coordinates, mark map points, or align a north-up aerial by known bounds. Uploaded photos are resized locally and stored on the device.

A reliable automated course-mapping pipeline would additionally require orthorectified aerials, accurate georeferencing, feature extraction, and human verification. Green contour maps require much more detailed elevation data than a normal geotagged photo. Those capabilities are outside this first version.

## Cost and delivery

Buildless static PWA, vendored Leaflet, native browser geolocation, local data storage, OSM discovery, and USGS aerials avoid paid API keys and per-request AI costs. A browser app also avoids native app-store distribution work. There is no app subscription implemented. Long-term hosting terms, public-service capacity, network access, and phone GPS quality are dependencies rather than guarantees. [Browser geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) requires user permission and a secure context.
