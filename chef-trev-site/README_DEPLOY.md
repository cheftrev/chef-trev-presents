# Chef Trev Presents — Deploy Guide (off Manus)

This is your website, fully decoupled from Manus. It's a static site (React + Vite)
with the contact form handled by **Netlify Forms** — no database, no server, nothing
to maintain. Netlify builds and hosts it; GoDaddy points your domain at it.

## What changed vs. the Manus export
- Removed Manus-only build plugins and the debug/analytics scripts.
- Contact form now posts to **Netlify Forms** (emails you on every inquiry).
- Added `netlify.toml` (build command + single-page-app routing).
- Everything else (design, pages, copy) is untouched.

## ONE thing to do before deploying: add the photos
The site needs 36 photos that Manus streamed from storage. They are NOT in this
export. Put the matching image files into:

    client/public/manus-storage/

The exact filenames the site expects are listed in:

    client/public/manus-storage/_REQUIRED_IMAGES.txt

Each file must match that name exactly (they come from your Google Drive "Manus" folder).

## Deploy (Netlify)
1. Put this folder in a GitHub repo (or drag-deploy — see below).
2. Netlify → Add new site → Import from GitHub → pick the repo.
3. Build settings are auto-read from `netlify.toml`:
   - Build command: `npx vite build`
   - Publish directory: `dist/public`
4. Deploy. Netlify installs packages and builds in the cloud.

## Contact form email
- Netlify → Site → Forms → set a notification email to trevor@cheftrevpresents.com.
- Every inquiry (name, email, event type, guests, location, budget, date, message)
  lands in Netlify Forms and emails you.

## Point cheftrevpresents.com (GoDaddy)
1. Netlify → Domain management → Add domain → cheftrevpresents.com.
2. Netlify shows the exact DNS records. Typically:
   - Apex `cheftrevpresents.com` → A record to Netlify's load balancer (or use Netlify DNS).
   - `www` → CNAME to your-site.netlify.app
3. GoDaddy → your domain → DNS → replace the current records (pointing at Manus)
   with the ones Netlify gives you.
4. Netlify auto-issues a free SSL certificate. Give DNS up to a few hours.

## After it's live
- Confirm the site loads on cheftrevpresents.com with the padlock (SSL).
- Send yourself a test inquiry.
- Then you can safely turn off / stop paying Manus.

## Editing going forward
Tell me what to change; I edit these files and redeploy. That's your "control through Claude."
