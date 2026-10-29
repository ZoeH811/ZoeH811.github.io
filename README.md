# Zoe Hewitt — Developer Portfolio

Personal portfolio for Zoe Hewitt, a Computer Science for Games Programming student at the University of Hull, showcasing software, games and interactive systems.

Portfolio address: [zoeh811.github.io](https://zoeh811.github.io/).

## Review and maintenance status

**This portfolio is under constant review and will be regularly maintained.** Project descriptions, completion dates, screenshots, videos, skills, education and the CV will be updated as work progresses. In-progress and planned projects are labelled accordingly; missing media and repository links show explanatory text.

Review the content before each publication and after project milestones. Check contact details, repository access, media playback and the CV regularly. The review below reflects the local files on **29 October 2026**; it does not confirm the current deployed site or GitHub Pages settings.

## Features and technology

- Responsive homepage with an introduction, featured work, skills, education, CV and contact links.
- Separate project library with status, project type and completion-year filters, plus status, date and name sorting.
- Expanded project dialogs with an overview, deliverables, individual contribution, technical highlights, media and optional repository links.
- Native video controls, image links, keyboard navigation, a skip link, reduced-motion styles and native modal dialogs.
- Plain HTML, CSS and JavaScript. No framework, package installation, backend or build step is required to run the site.

Project cards, filters, dialogs and the CV download depend on JavaScript. The pages include a short fallback message when JavaScript is disabled. Contact uses email links rather than a submission form.

## Repository structure

| Path                     | Purpose                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| index.html               | Homepage content, navigation and metadata.                                               |
| projects.html            | Project library and filter controls.                                                     |
| css/style.css            | Shared theme, page layouts, responsive rules and media/dialog styles.                    |
| js/projects.js           | Project data, expanded descriptions, rendering, filters, galleries and CV configuration. |
| js/script.js             | Mobile navigation and automatic footer year.                                             |
| assets/projects/         | Project screenshots and videos, grouped by project.                                      |
| assets/images/           | General portfolio images.                                                                |
| assets/Zoe-Hewitt-CV.pdf | Intended CV location; the PDF has not yet been added.                                    |
| .prettierrc.json         | Consistent source formatting settings.                                                   |
| .editorconfig            | Indentation, encoding and line-ending conventions.                                       |
| .vscode/settings.json    | Shared editor preferences.                                                               |

## Preview locally

Open the repository in VS Code and serve it with Live Server, then open index.html in an external browser. An equivalent local static HTTP server also works. Test both the homepage and projects.html over HTTP; embedded editor previews may handle videos differently.

The site runs without developer tooling. Prettier is optional for editing and uses the repository configuration. Format HTML, CSS, JavaScript, JSON and Markdown with Prettier when available. Keep source files as UTF-8 with two-space indentation and LF line endings. Binary assets such as images, videos and PDFs are not source-formatting targets.

## Update portfolio content

### Homepage and contact information

Edit index.html for the introduction, skills, education, contact address and page description. Update projects.html separately if its description or navigation changes. Keep student status, availability and dates accurate. The footer year is updated automatically; project dates are maintained manually.

### Project cards and featured work

Edit portfolio.projects in js/projects.js. Keep every project ID unique and match it to the corresponding key in projectDetails. Use category University or Personal and one of these status values:

- completed: finished work.
- progress: work currently in progress.
- future: planned work.

Set featured: true on the projects you want on the homepage. The current selection is the honours fitness application and Roblox game; the library currently contains ten projects.

Use completedDate for completed projects and estimatedCompletionDate for other statuses. Dates accept a year, month or full date, for example 2026, 2026-10 or 2026-10-29. Leave unknown dates as an empty string. The year filter is generated from these dates; undated projects sort last when sorting by date.

### Expanded project details

Edit projectDetails in js/projects.js. Each matching project key supports overview (an array of paragraphs), produced, role, highlights (an array), repository and media (an array). Describe your own contribution clearly for group work. Empty fields intentionally display explanatory text; an empty repository field does not create a link.

Keep card descriptions brief and place the fuller explanation in the dialog. Card previews use the first media item. Dialogs combine card media with additional detail media, so avoid repeating the same file in both arrays unless intentional.

### Screenshots and videos

Place media in the matching assets/projects/ subfolder. Paths are relative to the HTML page; both pages currently live at the repository root. Match filename capitalisation exactly.

Example media entries:

```js
media: [
  {
    type: 'image',
    src: 'assets/projects/example/overview.webp',
    alt: 'Workout planner showing the weekly training schedule',
    caption: 'Weekly planning screen',
  },
  {
    type: 'video',
    src: 'assets/projects/example/demo.mp4',
    poster: 'assets/projects/example/poster.webp',
    caption: 'Workout tracking walkthrough',
    captions: 'assets/projects/example/demo.vtt',
  },
];
```

These are illustrative paths; replace them with files you actually add. Videos use native controls, metadata preloading and no autoplay. Add WebVTT captions where audio conveys information and useful text descriptions for visual demonstrations. Use descriptive image alt text and posters for videos. Empty media arrays display a placeholder.

### Downloadable CV

1. Export the finished CV as a PDF and save it as assets/Zoe-Hewitt-CV.pdf.
2. In portfolio in js/projects.js, change cv: null to cv: "assets/Zoe-Hewitt-CV.pdf".
3. Preview the homepage, download the PDF and verify its contents and filename.

Until configured, the CV section displays “CV coming soon” and an email request link. Review personal details before making the PDF public and replace the file when updating the CV.

## Portfolio content checklist

See [TODO.md](TODO.md) for the project-by-project content audit and working checklist. Completed projects should aim for 3–4 screenshots and one main demonstration video. In-progress projects can focus on accurate descriptive details now, with representative media added at a suitable milestone.

## Before publishing again

### Current findings requiring attention

- **Compressed videos:** the VR and MR videos have been replaced with compressed versions, currently about 97.4 MiB and 67.2 MiB respectively. All current local media files are below 100 MiB. Check replacement sizes and playback before committing; the VR video remains close to the limit. See [GitHub's file limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).
- **Site size:** local assets now total approximately 475 MB (453 MiB), following video compression. Keep optimising media as new screenshots and videos are added. See [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
- **CV:** no PDF is present and cv remains null. Add the CV if you want the download available for this release, or retain the explicit coming-soon state.
- **Incomplete project details:** some projects still have empty deliverables, role descriptions, highlights, media or repository fields. Review these and decide which are ready to share.
- **Repository access:** several project URLs point to university-owned repositories. Test access while signed out and confirm permission to share coursework, group contributions and screenshots. Local source review cannot establish their public accessibility.
- **Uncommitted content:** the working tree contains modified and untracked site files and assets. Review git status and include all required files after resolving the media size issues.

### Release checklist

- [ ] Confirm project descriptions, results, grades, dates and current study/employment status.
- [ ] Check every image, video, repository, email and CV link, including exact path casing.
- [ ] Remove personal data, credentials or confidential material from screenshots, recordings, the CV and any shared code; credit third-party assets and collaborators where relevant.
- [ ] Check both pages on mobile and desktop, including narrow screens and browser zoom.
- [ ] Test keyboard navigation, visible focus, menu dismissal, all dialog closing methods and focus return.
- [ ] Exercise combined filters, all sorting options, reset and empty results.
- [ ] Play videos in the browsers you intend to support; check captions, posters and loading on a slower connection.
- [ ] Check browser console/network errors and run HTML/accessibility checks; fix material issues before release.
- [ ] Consider a favicon and social sharing metadata for a more complete presentation.
- [ ] Review the diff and ensure the intended files are tracked, then publish using the repository's configured Pages source.
- [ ] After deployment, revisit the public homepage and project library and repeat the link, media and CV checks.

## Publishing and ongoing maintenance

This repository is intended for GitHub Pages at the account-level portfolio address above. In the repository's Settings → Pages, confirm the actual publishing source and branch/folder or Actions workflow. No deployment workflow is included in this local checkout, so do not assume which method is configured remotely.

Commit and push reviewed changes to the configured source, wait for the deployment to succeed, and check the public site. Publishing is a separate step from local editing; these documentation and formatting changes do not deploy the site automatically.

For ongoing maintenance, update project status and evidence after milestones, review the CV and availability when circumstances change, and check external links and media regularly. Keep this README aligned with the implementation when features or deployment arrangements change.
