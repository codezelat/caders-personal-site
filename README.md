# Cader Rahmathulla — Personal Site

Purpose-built personal site for Cader Rahmathulla showcasing leadership highlights, venture portfolio, media features, gallery moments, and a contact workflow powered by Next.js 15 and React 19.

## Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/) with React 19 and TypeScript
- Tailwind CSS 3.4 with custom utility tokens, Next/Image and next/font optimizations
- Custom UI primitives (Button, Input, Textarea) composed with `tailwind-merge`
- Nodemailer API route for secure contact form delivery

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the local dev server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to preview the site.
3. **Lint before committing**
   ```bash
   npm run lint
   ```
4. **Create a production build**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables
Create a `.env.local` file with the following keys to enable the contact form:

```
EMAIL_USER=you@example.com
EMAIL_APP_PASSWORD=app-specific-password
EMAIL_TO=optional-recipient@example.com
```

- `EMAIL_USER`: Gmail address used by Nodemailer.
- `EMAIL_APP_PASSWORD`: Gmail app password (not your main password).
- `EMAIL_TO`: Optional override for the recipient; defaults to `EMAIL_USER`.

## Project Structure
```
app/
  Components/        → UI sections (Hero, Leadership, Media, Gallery, Contact, etc.)
    ui/              → Reusable controls (Button, Input, Textarea)
  api/contact/       → POST route for Nodemailer submissions
  data/              → Centralized content (hero text, nav links, leadership roles)
  globals.css        → Tailwind layers + shared animations
next.config.ts       → Typed Next.js configuration
public/images/       → Optimized static assets
```

## Content Editing
- `app/data/herodata.ts`: Hero copy, CTA label, and image reference.
- `app/data/navigation.ts`: Single source of truth for site section anchors (Header + Footer).
- `app/data/leadershipData.ts`: Logos, categories, and titles for the leadership timeline.
- `app/Components/media-page.tsx`: Array of media appearances with logos and summaries.

Updating those files automatically keeps both desktop and mobile layouts in sync.

## Deployment Notes
- Ensure environment variables are configured in the hosting provider.
- Run `npm run build` as part of your CI/CD pipeline to surface type and lint issues.
- The site enforces `reactStrictMode`, Next/Image optimization, and `next/font` with `display: swap` for fast LCP.

## Accessibility & Performance
- Section anchors (`#about`, `#leadership`, etc.) power skip navigation and internal links.
- Hero and gallery imagery use `priority` and lazy loading appropriately for LCP improvements.
- The gallery animation now relies on CSS keyframes, avoiding runtime DOM mutations.
- Contact form has clear error/success states and uses semantic inputs for assistive tech.

For questions or enhancements, open an issue or reach out via the contact form. Enjoy building!*** End Patch*** End Patch  (json) to=functions.apply_patch_RESP_CONTENTS
