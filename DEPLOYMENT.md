# 🚀 Free Hosting Guide for kelzo Domain

## Option 1: Netlify (Recommended - Easiest & Fastest)

### Step 1: Prepare Your Site
Your site is already ready! The files are in the root directory.

### Step 2: Deploy to Netlify

#### Method A: Drag & Drop (Fastest)
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag your entire `PortfolioKelzo` folder to the drop zone
4. Wait for deployment (usually 30 seconds)
5. You'll get a URL like: `random-name-123.netlify.app`

#### Method B: Git Integration (Better for Updates)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
2. In Netlify: **"Add new site"** → **"Import an existing project"**
3. Connect GitHub and select your repo
4. Build settings: Leave default (no build command needed)
5. Publish directory: `.` (root)
6. Click **"Deploy site"**

### Step 3: Get Your Domain

#### Option A: Buy Domain Through Netlify
1. In Netlify dashboard → **"Domain settings"**
2. Click **"Add custom domain"**
3. Click **"Purchase domain"** → Search for `kelzo.com` or `kelzo.dev`
4. Complete purchase (~$10-15/year for .com, ~$5-10/year for .dev)
5. Netlify automatically configures DNS

#### Option B: Buy Domain Elsewhere (Namecheap, GoDaddy, etc.)
1. Buy `kelzo.com` or `kelzo.dev` from:
   - [Namecheap](https://namecheap.com) (~$10-15/year)
   - [Google Domains](https://domains.google) (~$12/year)
   - [Cloudflare](https://cloudflare.com) (~$8-10/year)
2. In Netlify: **"Domain settings"** → **"Add custom domain"**
3. Enter your domain (e.g., `kelzo.com`)
4. Netlify will show you DNS records to add:
   - **Type A**: `75.2.60.5` (or similar)
   - **Type CNAME**: `your-site.netlify.app` (for www subdomain)
5. Go to your domain registrar's DNS settings
6. Add the records Netlify provides
7. Wait 24-48 hours for DNS propagation

### Step 4: Enable HTTPS (Automatic)
- Netlify automatically provides free SSL certificates
- Your site will be `https://kelzo.com` (secure)

---

## Option 2: Vercel (Alternative)

### Quick Deploy
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"Add New Project"**
3. Import from GitHub (or drag & drop)
4. Deploy!

### Add Domain
1. **Settings** → **Domains**
2. Add `kelzo.com` (or your purchased domain)
3. Follow DNS instructions

---

## Option 3: GitHub Pages (Free, but no custom domain easily)

1. Push to GitHub
2. Go to repo **Settings** → **Pages**
3. Source: `main` branch, folder: `/ (root)`
4. Your site: `username.github.io/repo-name`
5. For custom domain: Add `CNAME` file with your domain

---

## Domain Extensions Available

- **kelzo.com** - Most professional (~$10-15/year)
- **kelzo.dev** - Great for developers (~$5-10/year)
- **kelzo.io** - Modern, tech-focused (~$30-40/year)
- **kelzo.tech** - Tech industry (~$30-40/year)
- **kelzo.net** - Classic (~$10-15/year)

**Recommendation:** `.com` or `.dev` for best value and recognition.

---

## Quick Start Checklist

- [ ] Create Netlify account
- [ ] Deploy site (drag & drop or GitHub)
- [ ] Get temporary URL (e.g., `your-site.netlify.app`)
- [ ] Purchase domain (kelzo.com or kelzo.dev)
- [ ] Add domain to Netlify
- [ ] Configure DNS at registrar
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Site live at `https://kelzo.com` 🎉

---

## Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Domain Setup**: https://docs.netlify.com/domains-https/custom-domains/
- **Support**: Netlify has great community support

---

**Your portfolio is ready to deploy!** 🚀

