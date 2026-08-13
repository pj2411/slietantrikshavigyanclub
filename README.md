# SLIET Antriksha Vigyan Club - Website Package & GoDaddy Deployment Guide

Official space & astronomy club website for Sant Longowal Institute of Engineering and Technology (SLIET), redesigned with a modern **Light Mode UI**, interactive starfield particle canvas, dynamic events, sky watch live alert widget, team filtering, and full responsive controls.

---

## 🚀 GoDaddy Deployment Instructions (Step-by-Step)

Follow these simple steps to deploy this website on your GoDaddy Web Hosting (cPanel / Linux Web Hosting):

### Method 1: Upload via GoDaddy cPanel File Manager (Recommended)

1. **Log in to your GoDaddy Account**:
   - Go to [https://www.godaddy.com](https://www.godaddy.com) and click **Sign In**.
   - Go to **My Products** → **Web Hosting** → Click **Manage** next to your hosting plan.
   - Click **cPanel Admin** to open the cPanel dashboard.

2. **Open File Manager**:
   - In cPanel, find and click on **File Manager**.
   - Navigate to the **`public_html`** root folder (or your domain's document root folder).

3. **Upload Files**:
   - Select all files in this project repository:
     - `index.html` (Main website file)
     - `.htaccess` (Server configuration & HTTPS redirect)
     - `favicon.svg` (Browser icon)
     - `manifest.json` (Web app manifest)
     - `robots.txt` (SEO search engine crawler instructions)
     - `sitemap.xml` (SEO Sitemap)
   - Click **Upload** in cPanel File Manager and drag all these files into `public_html`.
   - *Note: Ensure hidden files (like `.htaccess`) are visible by enabling "Show Hidden Files (dotfiles)" in cPanel Settings.*

4. **Verify Live Deployment**:
   - Open your GoDaddy domain name (e.g., `https://yourdomain.com`) in any web browser.
   - Your website will immediately load in high-aesthetic Light Mode with HTTPS security!

---

### Method 2: Upload via FTP / SFTP (FileZilla)

1. Open FileZilla (or any FTP client).
2. Connect using your GoDaddy FTP credentials:
   - **Host**: `ftp.yourdomain.com` or server IP address
   - **Username**: Your cPanel FTP username
   - **Password**: Your cPanel FTP password
   - **Port**: `21` (or `22` for SFTP)
3. Upload `index.html`, `.htaccess`, `favicon.svg`, `manifest.json`, `robots.txt`, and `sitemap.xml` into `/public_html/`.

---

## ✨ Built-in Features Included

- **Light Mode Aesthetic (Default)** with Sun/Moon Theme Switcher saved in `localStorage`.
- **Interactive Stargazing Starfield Canvas** with adaptive light/dark particles.
- **Live Astronomical Alert Widget** with auto-formatting date display.
- **Interactive Join Application Modal** with instant recruitment submission feedback & Google Form link.
- **Domain Wings Showcase** (Astronomy, Astrophysics, Tech, Satellite, Astrophotography).
- **Events Switcher** (Upcoming vs. Past Sessions).
- **Team Filter** (All, Faculty Leadership, Core Team, Domain Leads).
- **SEO & Social Media Meta Tags** (Open Graph, Twitter Cards, JSON-LD Schema).
- **HTTPS & Compression** pre-configured via `.htaccess`.
