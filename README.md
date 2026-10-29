# FLoRes 2027

The workshop website for **Efficient NLP for Low-Resource Languages**, co-located with COLING 2027. A responsive, buildless static site for GitHub Pages, with light/dark mode and no framework, package installation, external fonts, or third-party JavaScript.

## Update photos and personal webpages

**Edit `assets/js/people.js`.** This file contains all eight organizers and the two agreed invited speakers from the proposal. The supplied profile links and direct photo URLs are configured there.

Each person has these fields:

```js
{
  name: "Jezabel R. Garcia",
  affiliation: "Multiverse Computing",
  initials: "JG",
  image: "assets/images/person-placeholder.svg", // Replace with a direct image URL or local path.
  url: "", // Replace with the person's full https:// webpage URL.
  color: "coral"
}
```

1. Prefer a direct remote photo URL and set the person's `image` to that URL. A webpage such as a LinkedIn profile is not an image URL.
2. Alternatively, put photos in `assets/images/people/` (create that folder when needed) and set `image` to the relative path. A square image at least 600 × 600 px works well.
3. Set `url` to their full personal webpage URL, for example `https://example.org/`.

The shared placeholder is **`assets/images/person-placeholder.svg`**. The page overlays each person's initials on it. Real photos automatically hide those initials. Empty URLs show “Webpage forthcoming”; entering a URL makes both the person's name and photo link to their webpage in a new tab. Broken photo URLs gracefully fall back to the placeholder. `color` can be `teal`, `blue`, `purple`, `coral`, or `gold`.

Remote photos are loaded from the supplied URLs, without a local copy. Changes appear automatically only when the image at that same URL is replaced (subject to browser/server caching); the site does not track changes to a person's profile page. Signed LinkedIn image URLs can expire and may need replacing. Helen Yannakoudakis retains the original photo and webpage placeholders.

For a tall portrait, add `imagePosition: "center top"` to keep the person's face in the crop. Jezabel's portrait uses this setting; other photos are centered by default.

## Update the workshop

| What | Where |
| --- | --- |
| Abstract and description | `index.html`, section `id="about"` |
| Research topics | `index.html`, section `id="topics"` |
| Submission guidelines and deadlines | `index.html`, section `id="participate"` |
| Schedule | `index.html`, section `id="program"` |
| People and their image/URL placeholders | `assets/js/people.js` |
| Venue and conference dates | `index.html`, section `id="venue"` and `.event-strip` |
| Colors, layout, responsive rules | `assets/css/styles.css` |
| Theme, mobile navigation, profile rendering | `assets/js/site.js` |
| Logo artwork | `logos/flores-logo-color.png` |
| Venue photograph | `assets/images/Galaxy.jpg` |

All workshop dates, deadlines, schedule details, talk titles, and talk abstracts are **TBD**. Update the workshop date in both the event strip and the venue section when confirmed, as well as the description metadata in `<head>`. The conference dates are separate from the workshop date.

The page uses the supplied color logo in both themes. In dark mode, CSS recolors only the lettering to white and preserves the flower's original colors. The hero flower is a cropped SVG viewport of the original color logo; the source PNGs are unchanged. The venue card uses the supplied `assets/images/Galaxy.jpg` photograph.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000>. No build step is required. Core workshop content is also available without JavaScript, with a plain-text fallback for the people lists.

## GitHub Pages

Publish this repository from **Settings → Pages → Deploy from a branch**, selecting the branch containing the site and **`/ (root)`**. `.nojekyll` keeps deployment as plain static files. The intended website address is <https://flores-workshop.github.io/>. Creating these files does not by itself publish the site.

## Content sources

- Supplied workshop proposal: `EffLoRes__Workshop_on_Efficient_NLP_for_Low_Resource_Languages-2.pdf`. The abstract, tagline, research topics, submission policy, programme description, and speaker topics use the proposal's wording. The workshop name and conference were updated to FLoRes and COLING 2027 per the brief. The participation and programme headings were retained at the user's request; other headings use descriptive labels.
- [COLING 2027](https://2027.coling-iccl.org/): Macau, China, May 9–14, 2027.
- [COLING participant information](https://2027.coling-iccl.org/participants-info/): Galaxy International Convention Center, Galaxy Macau, Cotai, Macau.
- [CONDA 2024](https://conda-workshop.github.io/): reference for workshop content structure.

Conference information checked on October 29, 2026. Only the two speakers marked “Agreed” in the proposal are displayed. Tentative invitees, pending committee invitations, funding arrangements, and provisional submission rules are not presented as confirmed public commitments.
