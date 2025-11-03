# 🚀 Hosting Your React Portfolio

## Quick Deploy Guide

Your React portfolio is ready to deploy! Here are the best options:

---

## Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (Fastest - 2 minutes)

1. **Go to [netlify.com](https://netlify.com)** and sign up (free account)
2. Click **"Add new site"** → **"Deploy manually"**
3. **Drag the entire `react` folder** to the drop zone
4. Wait ~30 seconds for deployment
5. You'll get a URL like: `amazing-portfolio-123.netlify.app`
6. **Done!** Your site is live 🎉

### Method B: GitHub Integration (Best for Updates)

1. **Push to GitHub:**
   ```bash
   cd react
   git init
   git add .
   git commit -m "Initial React portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **In Netlify:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect GitHub and select your repo
   - **Important:** Set these build settings:
     - **Base directory:** `react` (if repo root is parent folder) OR leave blank if `react` folder IS the repo
     - **Publish directory:** `.` (current directory)
     - **Build command:** Leave empty (no build needed)
   - Click **"Deploy site"**

3. **Future updates:** Just push to GitHub and Netlify auto-deploys!

---

## Option 2: Vercel (Great Alternative)

### Quick Deploy

1. **Go to [vercel.com](https://vercel.com)** and sign up
2. Click **"Add New Project"**
3. **Option A:** Import from GitHub (connect repo)
   - **Important:** Set root directory to `react` if needed
4. **Option B:** Drag & drop the `react` folder
5. Click **"Deploy"**
6. Done! You'll get a URL like `portfolio-xyz.vercel.app`

---

## Option 3: GitHub Pages (Free)

1. **Push to GitHub** (same steps as above)
2. Go to your repo → **Settings** → **Pages**
3. **Source:** `main` branch
4. **Folder:** `/ (root)` or `/react` depending on your repo structure
5. Your site: `username.github.io/repo-name`

**Note:** For GitHub Pages, you may need to update asset paths (resume.pdf, etc.) to use relative paths.

---

## Adding a Custom Domain

### Step 1: Buy a Domain
- **Namecheap** (~$10-15/year for .com)
- **Cloudflare** (~$8-10/year for .com)
- **Google Domains** (~$12/year)

Good options: `kelzo.com`, `kelzo.dev`, `jameskelly.dev`

### Step 2: Add to Netlify/Vercel

**Netlify:**
1. Site dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `kelzo.com`)
4. Follow DNS instructions (add A/CNAME records)
5. Wait 24-48 hours for DNS propagation
6. HTTPS is automatic and free!

**Vercel:**
1. Project → **Settings** → **Domains**
2. Add your domain
3. Follow DNS setup instructions
4. Wait for DNS propagation

---

## File Structure for Deployment

Make sure your `react` folder contains:
```
react/
├── index.html          (main entry point)
├── main.jsx            (React app)
├── styles-react.css     (custom styles)
├── assets/
│   └── resume.pdf      (your resume)
└── netlify.toml        (optional, for Netlify)
```

---

## Important Notes

### Resume PDF Path
Your resume is at `./assets/resume.pdf` relative to `index.html`. This should work automatically when deployed.

### No Build Step Required
Since you're using in-browser Babel transformation, no build step is needed! Just deploy the static files.

### HTTPS
Both Netlify and Vercel provide free SSL certificates automatically.

---

## Quick Checklist

- [ ] Choose hosting platform (Netlify recommended)
- [ ] Deploy using drag & drop or GitHub
- [ ] Test your site at the provided URL
- [ ] (Optional) Buy custom domain
- [ ] (Optional) Add custom domain to hosting platform
- [ ] (Optional) Configure DNS records
- [ ] Share your portfolio! 🎉

---

## Troubleshooting

### Resume not downloading?
- Check that `assets/resume.pdf` exists in the deployed folder
- Verify the path in `main.jsx` is `./assets/resume.pdf`

### Styling looks broken?
- Make sure `styles-react.css` is in the same folder as `index.html`
- Check that the CSS path in `index.html` is correct

### 404 errors?
- Check that `netlify.toml` redirects are configured
- On GitHub Pages, ensure paths are relative

---

**Your React portfolio is ready to go live!** 🚀

