# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌓 Dark/Light mode support
- ⚡ Fast performance
- 🎭 Smooth animations
- 📝 Contact form
- 🛠️ Built with Next.js 14

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build & Deploy

1. Build for production:
```bash
npm run build
```

2. Start the production server locally:
```bash
npm run start
```

3. Optional: set a GitHub token to avoid API rate limits when fetching repositories. Create an environment variable named `NEXT_PUBLIC_GITHUB_TOKEN` with a personal access token that has `public_repo` scope.

Example (PowerShell):
```powershell
$env:NEXT_PUBLIC_GITHUB_TOKEN = "ghp_XXXX"
npm run dev
```

## Additional Notes
- Place your avatar at `public/images/avatar.png` for the header and favicon.
- Place your about Lottie at `public/animations/about_me.json` (the app already falls back to `embedded-systems.json`).
- Static sitemap and robots are in `public/sitemap.xml` and `public/robots.txt`.

## Customization

1. Update the content in `app/page.tsx` with your personal information
2. Modify the styling in `app/globals.css` and `tailwind.config.js`
3. Add your projects and skills in the respective sections
4. Customize the color scheme in `tailwind.config.js`

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer

## License

MIT 