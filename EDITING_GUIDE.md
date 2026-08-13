# 🚀 SLIET Antriksha Vigyan Club - Beginner Editing & Maintenance Guide

This simple guide will help any beginner, student executive, or web manager update the website text, Google Form links, team photos, events, and projects in under **2 minutes**.

---

## 📷 1. How Image Files Work & How to Update Photos

All website images are stored neatly inside the **`images/`** folder:
- **`images/logo.svg`**: Top-left navbar atomic club logo.
- **`images/favicon.svg`**: Browser tab icon.
- **`images/rk_mishra.png`**: Photo of Dr. Ravi Kant Mishra displayed on the website.

### 🌟 Method A: Update Photo WITHOUT Changing Any Code (Easiest!)
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

## 📌 2. How to Update Google Form Links (Recruitment vs Events)

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

## 📅 3. How to Add Active Events in Events & Workshops

The **Events & Workshops** section currently features a centered **Events Coming Soon!** banner. When an upcoming stargazing session or workshop is announced:

1. Open **`index.html`** and find `<section id="events">`.
2. Replace or add this active Event Card snippet inside:

```html
<!-- Active Event Card Template -->
<div class="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-indigo-600 flex flex-col justify-between">
    <div>
        <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold">NEXT SESSION</span>
            <span class="text-xs font-mono text-slate-500 dark:text-slate-400"><i class="fa-regular fa-calendar mr-1"></i> Upcoming</span>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Event Title Here</h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
            Write your event description and schedule details here.
        </p>
    </div>
    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs text-slate-500 dark:text-slate-400"><i class="fa-solid fa-location-dot text-indigo-600 dark:text-sky-400 mr-1"></i> Venue / Location</span>
        <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" class="event-form-link text-xs text-indigo-600 dark:text-sky-400 font-bold hover:underline">Register via Event Form &rarr;</a>
    </div>
</div>
```

---

## 🚀 4. How to Add & Showcase Projects in R&D Lab

To add a project card under `<section id="projects">`:
1. Open **`index.html`** and search for `<section id="projects">`.
2. Add this Project Card snippet inside:

```html
<!-- New Project Showcase Card -->
<div class="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-all text-left">
    <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-sky-400 text-xl mb-4">
        <i class="fa-solid fa-satellite"></i>
    </div>
    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Project Name (e.g. CanSat Prototype)</h3>
    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
        Short explanation of the project hardware, software stack, and research goals.
    </p>
    <a href="https://github.com" target="_blank" class="text-xs text-indigo-600 dark:text-sky-400 font-bold hover:underline">View Project Repo &rarr;</a>
</div>
```

---

## 👥 5. How to Add a New Team Member Card

In **`index.html`**, under `<section id="team">`:
Copy and paste this clean team member template block:

```html
<!-- New Team Member Card -->
<div class="team-card core glass-card rounded-2xl p-6 text-center">
    <img src="images/member_photo.jpg" alt="Name" class="w-24 h-24 mx-auto rounded-full object-cover mb-4">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Student Name</h3>
    <p class="text-xs text-indigo-600 dark:text-sky-400 font-mono uppercase mt-1">Role Title</p>
    <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Department / Year</p>
</div>
```

---

## 🌐 6. How to Upload Changes to GoDaddy

1. Log into your **GoDaddy cPanel Account**.
2. Open **File Manager** -> **`public_html`**.
3. Upload the modified file (`index.html`, `config.js`, or new image files in `images/`).
4. Refresh your domain website (`https://yourdomain.com`).

---

✨ *Maintained by SLIET Antriksha Vigyan Club Tech Team.*
