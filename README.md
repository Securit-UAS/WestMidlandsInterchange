# West Midlands Interchange — SecurIT Survey Portal

Public, browser-based visualisation of the November 2026 drone survey. The interactive site is designed to show a master overview plus 11 individual plots, with links to source project data in DroneDeploy and downloadable PDF maps.

## Status

Portal scaffold in progress. The optimised master GLB is held locally and will be uploaded in 20 MiB parts under `assets/models/master/`. Individual plots and links will be added as supplied.

**Important:** The browser model is an optimised *presentation* asset, not a survey-grade engineering deliverable. The water reconstruction in the master model has been visually repaired; do not use it for water-level or terrain measurements. The definitive datasets remain with the survey source.

## Structure

- `index.html` — interactive viewer and plot selection
- `assets/securit-logo.png` — official SecurIT artwork (to be uploaded)
- `assets/models/master/master.partaa` … — split GLB (to be uploaded)
- `maps/` — optional PDF plans

Hosted publicly on GitHub Pages after Pages is enabled in the repository settings.
