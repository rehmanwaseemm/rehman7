# Rehman ❤ Malaika – Our 14 Feb Confession & Beyond

This repository contains a fully‑static, hand‑crafted website that tells the
love story of Rehman and Malaika. The site is meant to feel like a love
letter and memory museum, built from snippets of our real WhatsApp chat.

## Structure

```
love-website/
├── index.html   # Main page with all sections
├── style.css    # Styling including pastel gradients, glass cards and timeline
├── script.js    # Interactivity such as smooth scrolling, memory jar and music toggle
├── assets/
│   └── images/
│       └── hero.png   # Romantic hero illustration (generated)
│   └── music/
│       └── placeholder.mp3   # Optional background music placeholder
└── README.md   # You’re reading it
```

## Local development

The site is completely static. To preview it locally, simply open
`index.html` in your browser. You can also serve it using a simple HTTP
server:

```bash
python -m http.server --directory love-website 8000
```

Then navigate to <http://localhost:8000>.

## Customize

- **Add your own music**: Replace `assets/music/placeholder.mp3` with a
  royalty‑free instrumental or a song that means something to you both.
- **Change images**: Replace `assets/images/hero.png` with another
  illustration or photo. Maintain the same filename or update the
  `<img>` tag in `index.html`.
- **Update the timeline or memories**: Edit `index.html` and adjust the
  timeline entries or the memory jar notes to reflect new memories or
  milestones.
- **Deploying updates**: After making changes, commit and push your
  modifications to GitHub. GitHub Pages will automatically rebuild the site
  if you have enabled Pages from the `main` branch.

## GitHub Pages

To publish the site via GitHub Pages:

1. Go to the repository settings on GitHub.
2. Click **Pages** in the left sidebar.
3. Under **Source**, choose the `main` branch and `/` (root) folder.
4. Save. After a minute or two your site will be live at
   `https://<your‑username>.github.io/<repository‑name>/`.

## Credits

This website was built with love by Rehman for Malaika. It uses
Google Fonts and a hand‑drawn illustration generated just for this project.
