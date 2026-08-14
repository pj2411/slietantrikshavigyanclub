# 🚀 SLIET Antriksha Vigyan Society - Beginner Editing & Maintenance Guide

This simple guide will help any beginner, student executive, or web manager update the website text, Google Form links, team photos, events, and projects in under **2 minutes**.

---

## 🎨 1. How to Update the Website Logo & Favicon

All website graphics are stored in the **`images/`** folder:
- **`images/logo.png`**: Top-left navigation bar society logo.
- **`images/favicon.png`**: Small icon displayed in browser tabs and bookmarks.
- **`images/rk_mishra.png`**: Faculty Head photo.
- **`images/google_forms.svg`**: Icon used in modal dialogs.

### 🌟 Method A: Update Logo WITHOUT Changing Any Code (Recommended)
1. Save your new logo as a PNG image named **`logo.png`**.
2. Save a square (1:1 ratio) version of your logo named **`favicon.png`** (192x192 px recommended).
3. Upload both into the **`images/`** folder (overwriting the old `images/logo.png` and `images/favicon.png`).
4. Refresh your browser — the website logo and browser tab icon will automatically update!

### 🛠️ Method B: Update Logo if Using a New Filename or Format (e.g., `new_logo.svg`)
If your new logo is named differently (e.g., **`images/club_logo.png`** or **`images/logo.svg`**):
1. Upload the file into the **`images/`** folder.
2. Open **`index.html`** in any code editor.
3. Press `Ctrl + F` (or `Cmd + F`) and search for **`images/logo.png`**.
4. Replace `images/logo.png` with your new image path (e.g., `images/club_logo.png`):
   - **Navbar Logo** (around line 125):
     ```html
     <img src="images/club_logo.png" alt="SLIET Antriksha Vigyan Society Logo" class="...">
     ```
   - **SEO Metadata & Structured Data** (around line 20 and line 50):
     ```html
     <meta property="og:image" content="https://slietantriksha.ac.in/images/club_logo.png">
     ```
     ```json
     "logo": "https://slietantriksha.ac.in/images/club_logo.png"
     ```

---

## 📷 2. How to Update Faculty & Team Photos

### 🌟 Method A: Update Photo WITHOUT Changing Any Code
1. Take your new photo and name it **`rk_mishra.png`**.
2. Save/Upload it into the **`images/`** folder (overwriting the old `images/rk_mishra.png`).
3. Done! The website will automatically display the new picture without editing any code.

### 🛠️ Method B: Update Photo if the New Image Has a Different Name
If your new photo is named **`new_faculty.jpg`**:
1. Upload **`new_faculty.jpg`** into the **`images/`** folder (`images/new_faculty.jpg`).
2. Open **`index.html`** in any text editor.
3. Press `Ctrl + F` (or `Cmd + F`) and search for **`images/rk_mishra.png`**.
4. Replace `images/rk_mishra.png` with **`images/new_faculty.jpg`**:
   ```html
   <img src="images/new_faculty.jpg" alt="Dr. Ravi Kant Mishra" class="...">
   ```

---

## 📌 3. How to Update Google Form Links (Recruitment vs Events)

To prevent confusion and keep responses organized, the website uses **two separate Google Form links** in `config.js`:

1. Open the file **`config.js`** in any text editor.
2. Edit the form link you want to change:
   ```javascript
   window.CLUB_CONFIG = {
       // 🟢 1. Recruitment / Membership Google Form:
       joinUsFormUrl: "https://forms.gle/YourRecruitmentFormID",

       // 🔵 2. Specific Event Registration Google Form:
       eventFormUrl: "https://forms.gle/YourEventRegistrationFormID",
   };
   ```
3. Save the file! 
   - **`joinUsFormUrl`** automatically updates all **Join Us** buttons and popup modals.
   - **`eventFormUrl`** automatically updates the **Register via Event Form** buttons in the Events section.

---

## 📅 4. How to Edit & Add Events in Events & Workshops

All website events are managed inside **`index.html`** under `<section id="events">`.

### ✏️ Method A: How to Edit the Current Featured Flagship Event (e.g. National Space Day)
1. Open **`index.html`** in any code editor.
2. Press `Ctrl + F` (or `Cmd + F`) and search for `<section id="events">`.
3. Locate and edit the text fields directly:
   - **Event Title**: Edit `<h3 class="...">NATIONAL SPACE DAY 2026</h3>`.
   - **Theme Line**: Edit `<p class="...">Theme: “...”</p>`.
   - **Date, Time & Venue**: Update the values inside the date/time/venue pill tags:
     - Date: `17 August 2026`
     - Time: `5:00 PM Onwards`
     - Venue: `T&P Block, SLIET`
   - **Competitions & Tracks**: Update eligibility, team size, presentation rules, and topics inside the competition cards (`INNOVATION QUEST` and `QUIZ COMPETITION`).
   - **ISRO Certificate & Souvenir Perks**: Edit the perks banner at the bottom of the event card.

---

### ➕ Method B: How to Add a New Standard Workshop / Stargazing Event Card
To add a new event card under `<section id="events">`:
1. Open **`index.html`** under `<section id="events">`.
2. Copy and paste this clean Event Card snippet inside the events container:

```html
<!-- New Event Card Template -->
<div class="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-indigo-600 flex flex-col justify-between shadow-md">
    <div>
        <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-sky-300 text-xs font-mono font-bold uppercase">WORKSHOP / SESSION</span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400"><i class="fa-regular fa-calendar mr-1"></i> Date Here</span>
        </div>
        <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Event Title Here</h4>
        <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed font-mono">
            Write your event description, eligibility, and rules here.
        </p>
    </div>
    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400"><i class="fa-solid fa-location-dot text-indigo-600 dark:text-sky-400 mr-1"></i> Venue / Location</span>
        <button onclick="openJoinModal()" class="text-xs text-indigo-600 dark:text-sky-400 font-bold hover:underline">Register &rarr;</button>
    </div>
</div>
```

---

## 👥 5. How to Add & Edit Team Members (Leadership & Mentorship Network)

In **`index.html`**, under `<section id="team">`, team members are organized into 3 distinct tiers:

1. **Faculty & Founder** (`class="team-card faculty"`)
2. **Distinguished Alumni Scholars** (`class="team-card alumni"`) — Ph.D. Degree Awarded
3. **Current Ph.D. Research Scholars** (`class="team-card student"`) — Pursuing Ph.D. / CSIR & GATE Qualified

### 📸 Photos Folder
All cropped scholar photos are stored in the **`images/team/`** directory:
- `images/team/amritbir_singh.png`
- `images/team/arunesh_pandey.png`
- `images/team/chanchal_chawla.png`
- `images/team/avtar_chand.png`
- `images/team/heena_dua.png`
- `images/team/rahul_sharma.png`
- `images/team/navya_jain.png`

### ➕ Template: Adding a New Scholar Card
Copy and paste this card snippet inside the `alumni` grid or `student` grid under `<section id="team">`:

```html
<!-- New Scholar Card -->
<div class="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between">
    <div class="text-center">
        <img src="images/team/scholar_photo.png" alt="Name" class="w-20 h-20 mx-auto rounded-full object-cover border-2 border-purple-500/40 shadow-md mb-4">
        <h4 class="text-lg font-bold text-slate-900 dark:text-white">Dr. Scholar Name</h4>
        <p class="text-xs text-purple-600 dark:text-purple-400 font-mono font-bold uppercase mt-1">Designation / Role</p>
    </div>
    <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-center">
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400">Degree Awarded - 2026</span>
    </div>
</div>
```

---

## 🏷️ 7. How to Update / Rename the Society or Club Name

If you need to change or adjust the official name of the society (e.g. updating titles, branding, or suffixes), follow these exact steps to ensure all locations across the website and metadata are updated:

### 1. `index.html` (Main Page & Metadata)
Open **`index.html`** in a text editor and update the following lines:
- **Browser Tab Title** (around line 28):
  ```html
  <title>SLIET Antriksha Vigyan Society | Space & Astronomy</title>
  ```
- **SEO & Social Meta Tags** (lines 8–26):
  - `<meta name="description" content="...">`
  - `<meta name="keywords" content="...">`
  - `<meta name="author" content="...">`
  - `<meta property="og:title" content="...">`
  - `<meta property="og:description" content="...">`
  - `<meta name="twitter:title" content="...">`
  - `<meta name="twitter:description" content="...">`
- **JSON-LD Schema Markup** (around lines 50–54):
  ```json
  "name": "SLIET Antriksha Vigyan Society",
  "alternateName": "SLIET Space Society",
  "description": "Official Space, Astronomy, and Satellite Technology Student Society at..."
  ```
- **Navigation Bar Logo Text** (around line 131):
  ```html
  <span>SAVS</span>
  ```
- **Hero Section Headline & Badge** (around lines 213–218):
  - Badge: `Official Astronomy & Space Society of SLIET`
  - Main Heading: `SLIET Antriksha Vigyan Society`
- **About Us, Team & Faculty Roles** (lines 350, 381, 408, 563, 598):
  - Replace `Club` / `Society` references in the bio paragraphs and role titles (e.g., `Faculty Head & Society Mentor`).
- **Footer & Modals** (lines 713, 734, 753):
  - Footer copyright: `© 2026 SLIET Antriksha Vigyan Society. All rights reserved.`
  - Modal description text.

### 2. `manifest.json` (Mobile & Web App Manifest)
Open **`manifest.json`** and update:
```json
{
  "name": "SLIET Antriksha Vigyan Society",
  "short_name": "SAVS",
  "description": "Official Space & Astronomy Society of SLIET Longowal"
}
```

### 3. `config.js` (Configuration File)
Open **`config.js`** and update header comments, form comments, and `facultyHead.bio`:
```javascript
bio: "Founded the SLIET Antriksha Vigyan Society, leading student innovation..."
```

### 4. Project Documentation (`README.md`, `style.css`, `script.js`, `.htaccess`)
- **`README.md`**: Update `# SLIET Antriksha Vigyan Society` on line 1.
- Header comments in **`style.css`**, **`script.js`**, and **`.htaccess`**.

---

## 🌐 8. How to Upload Changes to Web Hosting (cPanel / Server)

1. Log into your **GoDaddy cPanel Account**.
2. Open **File Manager** -> **`public_html`**.
3. Upload the modified file (`index.html`, `config.js`, or new image files in `images/`).
4. Refresh your domain website (`https://yourdomain.com`).

---

✨ *Maintained by SLIET Antriksha Vigyan Society Tech Team.*
