# Cyril Anto — Personal Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)

A clean, responsive personal portfolio website showcasing my work as an ML Engineer & AI Systems Builder. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step, just fast and lightweight.

**Live site:** [cyrilanto16.github.io/portfolio](https://cyrilanto16.github.io/portfolio)

---

## Features

- **Responsive design** — fully optimised for desktop, tablet, and mobile
- **Dark / Light theme** toggle with `localStorage` persistence
- **Typing animation** cycling through roles (AI Systems Builder, RAG Pipeline Engineer, etc.)
- **Scroll-reveal animations** powered by the Intersection Observer API
- **Sections:** Hero, About, Experience (timeline), Projects, Skills, Education & Certifications, Contact
- **Zero dependencies** — pure HTML/CSS/JS, no build toolchain required
- **GitHub Actions CI/CD** — auto-deploys to GitHub Pages on every push to `main`

---

## Project Structure

```
portfolio/
├── index.html          # Main HTML file (single-page layout)
├── styles.css          # All styles — design tokens, components, responsive
├── script.js           # Nav scroll, mobile menu, theme toggle, typing effect, scroll-reveal
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions — auto-deploy to GitHub Pages
├── LICENSE
└── README.md
```

---

## Getting Started

### View locally

No build step needed. Just open `index.html` in your browser:

```bash
git clone https://github.com/cyrilanto16/portfolio.git
cd portfolio
open index.html          # macOS
# or
start index.html         # Windows
# or
xdg-open index.html      # Linux
```

Or use any static file server:

```bash
# Python
python -m http.server 3000

# Node (if npx is available)
npx serve .
```

Then visit `http://localhost:3000`.

---

## Deployment

This project auto-deploys to **GitHub Pages** via GitHub Actions whenever you push to `main`.

### Manual setup (first time)

1. Push this repo to GitHub under `cyrilanto16/portfolio`
2. Go to **Settings → Pages**
3. Set **Source** to `GitHub Actions`
4. Push any commit to `main` — the workflow will build and publish automatically

The live URL will be: `https://cyrilanto16.github.io/portfolio`

---

## Customisation

All personal content lives directly in `index.html`. To update your portfolio:

- **Hero section** — edit name, tagline, and social links near the top of `index.html`
- **Typing roles** — update the `words` array in `script.js`
- **Colours / tokens** — all design tokens are CSS custom properties at the top of `styles.css`
- **Projects / Experience / Skills** — find the relevant `<section>` in `index.html` and edit in place

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Animations | CSS keyframes + Intersection Observer API |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as a template for your own portfolio. A credit back would be appreciated but isn't required.

---

*Built by [Cyril Anto](https://linkedin.com/in/reachcyrilanto) · [cyrilanto16@gmail.com](mailto:cyrilanto16@gmail.com)*
