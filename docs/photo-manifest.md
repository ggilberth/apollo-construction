# Apollo project photo manifest

Status: **Working manifest — owner assumptions confirmed**

The project groupings, before/after relationships, and permission to publish are treated as confirmed for the current website draft. Project descriptions are intentionally generic and can be replaced with location- or client-specific details later.

No source photographs have been moved, renamed, edited, or deleted. The proposed names below describe future optimized copies only.

## Recommended presentation

- Organize the portfolio by project rather than by service category.
- Use service categories as tags: `Landscaping`, `Paving`, `Paths`, `Groundworks`, and `Outdoor structures`.
- Give each project one strong completed cover image, one clearly labelled before/after comparison where available, and two or three supporting images.
- Use side-by-side before/after panels. Avoid sliders unless both photographs were taken from effectively the same position.
- Keep reserve images out of the initial site but retain them for future case studies or social content.
- Never delete omitted originals as part of the website workflow.

## Optimization specification

- Proposed destination: `public/projects/<project-slug>/`.
- Export selected images as WebP at quality 74.
- Limit the long edge to 1400px for gallery images; do not upscale smaller originals.
- Preserve the complete image for expanded views. Apply consistent crops only to cards and thumbnails through `next/image` styling.
- Strip metadata during export. The supplied files currently contain no detectable EXIF or GPS metadata.
- Write final alt text after project names and details have been confirmed.

## Decision key

- **Include**: selected for the initial website.
- **Reserve**: useful but repetitive, weaker, or not needed in the first release.
- **Omit duplicate**: exact duplicate; do not create another web copy.

## Project 1 — Compass patio, brick path and pergola

Proposed tags: `Paving`, `Landscaping`, `Paths`, `Outdoor structures`

Generic description: A multi-area garden improvement combining a distinctive compass patio, traditional brick paths and a pergola-covered outdoor area. The project creates clear routes through the garden while adding practical spaces for seating and relaxation.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 01 | `PHOTO-2026-07-03-18-28-14.jpg` | After | Reserve — alternate path view | `compass-garden-brick-path-after.webp` | Finished brick garden path beneath timber arches |
| 02 | `PHOTO-2026-07-03-18-28-15 2.jpg` | After | Include — pergola detail | `compass-garden-pergola-after.webp` | Pergola-covered outdoor area on a newly paved garden base |
| 03 | `PHOTO-2026-07-03-18-28-15.jpg` | After | Include — project cover | `compass-garden-path-pergola.webp` | Finished brick path leading through the landscaped garden to a pergola |
| 04 | `PHOTO-2026-07-03-18-28-16 2.jpg` | After | Include — comparison after | `compass-patio-after.webp` | Completed circular compass patio set into the lawn |
| 05 | `PHOTO-2026-07-03-18-28-16 3.jpg` | Before | Include — comparison before | `compass-patio-before.webp` | Lawn marked out before construction of the circular patio |
| 06 | `PHOTO-2026-07-03-18-28-16.jpg` | After | Include — lifestyle/detail | `compass-patio-seating-after.webp` | Circular compass patio furnished as an outdoor seating area |
| 09 | `PHOTO-2026-07-03-18-28-17 4.jpg` | Process | Reserve — pergola groundwork | `compass-garden-pergola-process.webp` | Ground preparation around the garden pergola |
| 10 | `PHOTO-2026-07-03-18-28-17 5.jpg` | Process | Reserve — patio edging | `compass-patio-edging-process.webp` | Circular compass patio during edging and ground preparation |
| 11 | `PHOTO-2026-07-03-18-28-17 6.jpg` | Process | Reserve — patio base | `compass-patio-base-process.webp` | Base preparation surrounding the compass patio feature |

## Project 2 — Formal garden path

Proposed tags: `Paths`, `Groundworks`, `Landscaping`

Generic description: A new pathway installed through an established garden, with careful excavation and base preparation to create a clean, durable route between mature planting and hedges.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 07 | `PHOTO-2026-07-03-18-28-17 2.jpg` | Process | Include — path base | `formal-garden-path-base.webp` | Straight garden path base installed between established planting |
| 08 | `PHOTO-2026-07-03-18-28-17 3.jpg` | Before/process | Include — comparison before | `formal-garden-path-before.webp` | Excavated route through the garden before the path was installed |
| 12 | `PHOTO-2026-07-03-18-28-17.jpg` | After | Include — comparison after and cover | `formal-garden-path-after.webp` | Completed straight garden path running between established hedges |
| 20 | `PHOTO-2026-07-03-18-28-18 9.jpg` | Process | Reserve — excavation detail | `formal-garden-path-excavation.webp` | Narrow garden path excavation beside mature hedging |

## Project 3 — Garden border and retaining wall

Proposed tags: `Landscaping`, `Groundworks`

Generic description: A garden border improvement using a low retaining wall to define the planting area, tidy the lawn edge and create a more structured finish around established trees and shrubs.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 13 | `PHOTO-2026-07-03-18-28-18 2.jpg` | After | Include — comparison after and cover | `garden-border-wall-after.webp` | Finished low retaining wall defining a planted garden border |
| 14 | `PHOTO-2026-07-03-18-28-18 3.jpg` | Before | Include — comparison before | `garden-border-wall-before.webp` | Garden border before construction of the retaining wall |

## Project 4 — Gravel paths, landscaping and pergola

Proposed tags: `Landscaping`, `Paths`, `Outdoor structures`

Generic description: A practical garden refresh combining edged gravel paths, improved lawn areas and a timber pergola for outdoor seating. The finished layout creates low-maintenance access around the garden while retaining its established features.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 15 | `PHOTO-2026-07-03-18-28-18 4.jpg` | After | Include — path detail | `gravel-garden-side-path-after.webp` | Finished gravel side path with dark edging beside an outbuilding |
| 16 | `PHOTO-2026-07-03-18-28-18 5.jpg` | After | Include — project cover | `gravel-garden-landscaping-after.webp` | Landscaped back garden with gravel paths and a retained feature tree |
| 17 | `PHOTO-2026-07-03-18-28-18 6.jpg` | After | Reserve — alternate path view | `gravel-garden-border-after.webp` | Finished gravel path running along the garden boundary |
| 18 | `PHOTO-2026-07-03-18-28-18 7.jpg` | Before | Include — comparison before | `gravel-garden-before.webp` | Back garden before the landscaping and path work began |
| 19 | `PHOTO-2026-07-03-18-28-18 8.jpg` | After | Include — pergola detail/comparison after | `gravel-garden-pergola-after.webp` | Finished lawn and timber pergola seating area |

## Project 5 — Sunken fire pit

Proposed tags: `Paving`, `Groundworks`

Generic description: A precisely constructed sunken fire pit finished with large-format tiles and integrated into the surrounding patio. The stepped design creates a sheltered outdoor gathering space while providing a strong focal point within the garden.

There is no obvious before photograph for this project. Use it as a service-page feature or supporting portfolio item unless more images are available.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 23 | `PHOTO-2026-07-03-18-28-18 12.jpg` | After | Include — service-page feature | `sunken-fire-pit-landscape.webp` | Completed tiled sunken fire pit viewed across the surrounding patio |
| 24 | `PHOTO-2026-07-03-18-28-18 13.jpg` | After | Reserve — portrait alternate | `sunken-fire-pit-portrait.webp` | Tiled sunken fire pit viewed from one corner |

## Project 6 — New-build garden transformation

Proposed tags: `Landscaping`, `Paving`, `Paths`, `Outdoor structures`

Generic description: A complete new-build garden transformation incorporating a paved patio, new lawn, curved gravel paths, raised timber features and a pergola-covered seating area. The design turns an open lawn into a practical garden with distinct spaces for access, planting and relaxation.

| Ref | Source file | Phase | Decision / role | Proposed web filename | Draft alt text |
|---:|---|---|---|---|---|
| 21 | `PHOTO-2026-07-03-18-28-18 10.jpg` | After | Include — comparison after and project cover | `new-build-garden-overview-after.webp` | Completed new-build garden with paved patio, lawn and curved gravel path |
| 22 | `PHOTO-2026-07-03-18-28-18 11.jpg` | After | Include — second comparison after | `new-build-garden-path-after.webp` | Finished curved gravel path leading across the landscaped garden |
| 25 | `PHOTO-2026-07-03-18-28-18.jpg` | After | Reserve — alternate overview | `new-build-garden-overview-alternate.webp` | Landscaped garden with new lawn, curved path and raised timber area |
| 26 | `PHOTO-2026-07-03-18-28-48 2.jpg` | After | Include — pergola detail | `new-build-garden-pergola-after.webp` | Pergola-covered patio and stepping-stone path in the finished garden |
| 27 | `PHOTO-2026-07-03-18-28-48 3.jpg` | Process | Include — construction detail | `new-build-garden-construction-process.webp` | Raised timber area, path and ground preparation during construction |
| 28 | `PHOTO-2026-07-03-18-28-48 4.jpg` | Process | Reserve — border excavation | `new-build-garden-border-process.webp` | Curved garden border excavated beside the new path |
| 29 | `PHOTO-2026-07-03-18-28-48 5.jpg` | Before | Include — comparison before | `new-build-garden-overview-before.webp` | New-build back garden before landscaping work began |
| 30 | `PHOTO-2026-07-03-18-28-48 6.jpg` | Process | Reserve — raised area | `new-build-garden-raised-area-process.webp` | Raised timber garden area during construction |
| 31 | `PHOTO-2026-07-03-18-28-48 7.jpg` | Process | Reserve — ground preparation | `new-build-garden-groundwork-process.webp` | Garden border and path preparation during the landscaping work |
| 32 | `PHOTO-2026-07-03-18-28-48 8.jpg` | Before | Include — second comparison before | `new-build-garden-path-before.webp` | Lawn marked out before construction of the curved garden path |
| 33 | `PHOTO-2026-07-03-18-28-48.jpg` | After | Reserve — portrait pergola view | `new-build-garden-pergola-portrait.webp` | Garden pergola and path photographed at dusk |
| 34 | `PHOTO-2026-07-03-18-28-49 2.jpg` | After | Omit duplicate of ref 22 | — | — |
| 35 | `PHOTO-2026-07-03-18-28-49 3.jpg` | After | Include — lifestyle/detail | `new-build-garden-patio-seating-after.webp` | Finished paved seating area overlooking the landscaped garden |
| 36 | `PHOTO-2026-07-03-18-28-49 4.jpg` | After | Omit duplicate of ref 21 | — | — |
| 37 | `PHOTO-2026-07-03-18-28-49.jpg` | After | Omit duplicate of ref 21 | — | — |

## Initial selected set

The proposed first release contains 22 images:

- Project 1: refs 02–06
- Project 2: refs 07, 08, 12
- Project 3: refs 13, 14
- Project 4: refs 15, 16, 18, 19
- Project 5: ref 23
- Project 6: refs 21, 22, 26, 27, 29, 32, 35

## Working assumptions

- Each visual project group represents one real job.
- The identified before and after pairings are correct.
- Permission has been granted to publish the selected property photographs.
- Mixed outdoor structures will be described generically as pergolas for now.
- Locations and client-specific details will be omitted until confirmed copy is available.
