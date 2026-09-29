# Hema Duvvuru — Frontend Portfolio

Personal portfolio for UI / frontend / React / Next.js roles in Bengaluru. Content lives in one file so you can update copy without hunting through components.

## Run locally

Node.js 20+ is required. If `node` is missing, this machine has nvm at `~/.nvm`:

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
cd ~/hema-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Edit your details

Update **`content/site.ts`**. That file controls:

- Name, headline, about copy, location
- Email, phone, LinkedIn, GitHub
- Resume path
- Projects, experience, skills, SEO title and description

Leave `github` as `""` until you have a profile URL. The GitHub card will stay hidden.

## Resume PDF

The current resume is at:

`public/resume/Hema_Resume_React.pdf`

Replace that file (same name) or change `site.resumePath` in `content/site.ts`. Navigation **Resume** and **Download Resume** both use this path.

## Design notes

- Dark theme with gold accents
- CSS transitions only (no Framer Motion)
- `prefers-reduced-motion` is respected
- Work cards describe confidential enterprise UI. They do not invent live demos or screenshots.

## Suggested demonstration project (not claimed on the site)

If you want a public Work item later, build a small Next.js + Tailwind dashboard (tables, filters, forms, empty states) and add it to `projects` in `content/site.ts` with a real GitHub or live URL. Do not add it until it exists.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Sign in at [vercel.com](https://vercel.com) with GitHub.
3. Import the repository. Framework preset: Next.js. Build command: `next build`. Output: default.
4. Set the production domain if you want to keep `hema-duvvuru.vercel.app` (Project → Settings → Domains).

This project does not require extra environment variables.

```bash
git init  # already initialized
git add .
git commit -m "Add frontend portfolio"
git remote add origin git@github.com:<your-user>/<your-repo>.git
git push -u origin main
```

Do not publish until you have reviewed the site and approved deployment.
