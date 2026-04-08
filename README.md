# 🎨 Personal Portfolio Template

A clean, professional static portfolio site with a modern design inspired by [al-folio](https://github.com/alshedivat/al-folio). No build tools, no dependencies—just HTML, CSS, and vanilla JavaScript.

Perfect for developers, engineers, and technical professionals who want a beautiful online presence without the complexity.

---

## ✨ Features

- **📱 Fully Responsive** — Mobile-first design with hamburger navigation
- **🌗 Light/Dark Mode** — Automatic theme switching with user preference
- **📝 Live Medium Integration** — Auto-fetches your latest Medium articles via RSS
- **🎯 Easy Customization** — Single `content.js` file for all your data
- **⚡ Performance Optimized** — Static files, no build step, instant loading
- **🎨 Professional Design** — al-folio-inspired aesthetic with custom purple accent
- **♿ Accessible** — Semantic HTML, ARIA labels, keyboard navigation

### Pages Included

1. **About** (`index.html`) — Profile, bio, signature points, latest posts preview
2. **Blog** (`blog.html`) — Writing from Medium + other platforms with filtering
3. **Projects** (`projects.html`) — Portfolio projects with category filters
4. **Certificates** (`certificates.html`) — Professional certifications with keyword filtering
5. **CV** (`cv.html`) — Full resume with work history, education, skills
6. **Contact** (`contact.html`) — Contact information and social links

---

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Add Your Profile Photo

Place your profile photo in the `images/` folder:
```
images/profile.jpg  (recommended: 400x400px square)
```

### 3. Edit Your Information

Open [`content.js`](content.js) and update:

#### Essential Fields
- **`profile.name`** — Your full name
- **`profile.role`** — Your title/specialization
- **`profile.photoUrl`** — Set to `"images/profile.jpg"` after adding your photo
- **`profile.address`** — Location and email (displayed on homepage)
- **`profile.social`** — Update URLs for GitHub, LinkedIn, Medium, Email
- **`profile.mediumFeedUrl`** — Your Medium RSS feed (format: `https://username.medium.com/feed`)
- **`profile.about`** — Your introduction paragraph
- **`profile.signaturePoints`** — 3 key statements about your work philosophy

#### Content Sections
- **`skills`** — Update with your technical skills and capabilities
- **`projects`** — Replace with your actual projects
- **`experience`** — Add your work history and education
- **`contact`** — Update contact links and resume URL
- **`blogs`** (optional) — Static blog entries if not using Medium RSS

### 4. Preview Locally

Simply open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 5. Deploy

Deploy to any static hosting service:

- **GitHub Pages** — Push to `main` branch, enable Pages in settings
- **Netlify** — Drag and drop the folder
- **Vercel** — Import repository
- **AWS S3** — Upload to S3 bucket with static hosting enabled

No build step required! Just upload all files as-is.

---

## 📂 File Structure

```
portfolio/
├── index.html          # About page (homepage)
├── blog.html           # Blog/writing page
├── projects.html       # Projects showcase
├── certificates.html   # Certificates & achievements
├── cv.html            # Full CV/resume
├── contact.html       # Contact information
├── README.md          # This file
├── .gitignore         # Git ignore rules
├── css/               # 🎨 Stylesheets
│   └── styles.css     # All CSS styling
├── js/                # 📜 JavaScript
│   ├── content.js     # ✏️ YOUR DATA (edit this!)
│   ├── shared.js      # Utilities (theme, nav, hamburger)
│   └── script.js      # About page rendering
└── images/            # 📁 Your images
    ├── profile.jpg    # Your photo
    ├── projects/      # Project screenshots
    └── README.md      # Image guidelines
```

### File Organization

- **Root Level** — HTML pages only
- **`css/`** — All stylesheets in one place
- **`js/`** — All JavaScript organized by purpose
  - `content.js` — Your portfolio data (only file you need to edit)
  - `shared.js` — Shared utilities across all pages
  - `script.js` — About page-specific logic
- **`images/`** — All portfolio images and assets

---

## 🎨 Customization Guide

### Changing Colors

Edit CSS custom properties in `styles.css`:

```css
/* Light theme */
[data-theme="light"] {
  --accent: #7209b7;        /* Purple accent */
  --bg: #ffffff;            /* Background */
  --text: #1a1a1a;          /* Text color */
}

/* Dark theme */
[data-theme="dark"] {
  --accent: #bd93f9;        /* Purple accent */
  --bg: #0f0f0f;            /* Background */
  --text: #e8e8e8;          /* Text color */
}
```

### Adding Certificates

Certificates are displayed using third-party URLs (no need to download images):

1. **Get your certificate URL** from the issuing platform:
   - **Udemy**: Go to your certificate → Right-click image → Copy image address
   - **Coursera**: Certificate page → View certificate → Copy image URL  
   - **LinkedIn Learning**: Certificate → Share → Copy image URL
   - **Credly** (AWS, Microsoft, etc.): Badge page → Copy badge image URL

2. **Add to `js/content.js`** in the `certificates` array:
   ```js
   {
     "title": "Your Certificate Name",
     "issuer": "Udemy",              // Platform name
     "date": "2024",                  // Year received
     "credentialUrl": "https://...",  // Link to verify certificate
     "imageUrl": "https://...",       // Direct image URL from platform
     "credentialId": "ABC123",        // Optional: credential ID
     "keywords": ["Python", "DevOps"] // For filtering
   }
   ```

3. **Keywords** create filter pills — use categories like:
   - Programming: `Python`, `Java`, `JavaScript`
   - Cloud: `AWS`, `Azure`, `Cloud`, `DevOps`
   - Other: `Web Development`, `UI/UX`, `Soft skills`

### Adding Project Images

1. Add images to `images/projects/`:
   ```
   images/projects/my-project.jpg
   ```

2. Update project in `content.js`:
   ```js
   {
     "title": "My Project",
     "thumbnail": "images/projects/my-project.jpg",
     ...
   }
   ```

### Changing Fonts

Update Google Fonts imports in any HTML file's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update CSS variables in `styles.css`:
```css
--font-serif: 'Your Serif Font', serif;
--font-sans: 'Your Sans Font', sans-serif;
```

### Icons

This portfolio uses [Font Awesome 6.5.1](https://fontawesome.com/icons) for icons.

Browse icons and update `faIcon` fields in `content.js`:
```js
"faIcon": "fa-brands fa-github"  // Brand icons
"faIcon": "fa-solid fa-star"     // Solid icons
```

---

## 🛠️ Technical Details

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript ES6+ features used
- No polyfills required for current browsers

### Performance
- **Zero dependencies** — No npm packages, no build step
- **Lazy loading** — Images and content load on demand
- **CSS custom properties** — Efficient theme switching
- **Minimal HTTP requests** — Optimized asset loading

### Medium RSS Integration
The blog page auto-fetches your Medium articles via the RSS2JSON API:
- Works without CORS issues
- Falls back to static entries if fetch fails
- Merges Medium posts with other platform content

Set `mediumFeedUrl` to `null` in `content.js` to disable.

---

## 📝 Content.js Field Reference

### Profile Section
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | String | Your full name | `"Mahesh"` |
| `role` | String | Title/specialization | `"Python · Automation · Data"` |
| `affiliation` | String/null | Organization | `"Company Name"` or `null` |
| `location` | String | Location | `"India"` |
| `photoUrl` | String/null | Profile photo path | `"images/profile.jpg"` |
| `address` | Array | Location + email | `["India", "email@example.com"]` |
| `social` | Array | Social links | See structure below |
| `mediumFeedUrl` | String/null | Medium RSS URL | `"https://username.medium.com/feed"` |
| `about` | String | About paragraph | Your introduction |
| `signaturePoints` | Array | 3 key statements | Work philosophy |

### Social Links Structure
```js
{
  "label": "GitHub",
  "url": "https://github.com/username",
  "icon": "fa-brands fa-github"
}
```

### Projects Structure
```js
{
  "title": "Project Name",
  "category": "Automation",         // For filtering
  "year": "2026",
  "summary": "One-line description",
  "impact": "Business impact",      // Optional
  "thumbnail": "images/projects/...", // Optional
  "stack": ["Python", "AWS"],
  "details": ["Point 1", "Point 2"],
  "links": [
    { "label": "Demo", "url": "https://..." },
    { "label": "Source", "url": "https://..." }
  ]
}
```

### Experience Structure
```js
{
  "type": "work",                   // or "education"
  "period": "2024 – Present",
  "role": "Software Engineer",
  "company": "Company Name",
  "summary": "One-line summary",
  "highlights": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

---

## 🎯 Next Steps After Setup

1. ✅ Add your profile photo to `images/profile.jpg`
2. ✅ Update all `#` placeholder URLs in `content.js`
3. ✅ Replace sample projects with your actual work
4. ✅ Update experience section with your job history
5. ✅ Set your Medium RSS feed URL
6. ✅ Add project images to `images/projects/`
7. ✅ Upload your resume PDF and update `contact.resumeUrl`
8. ✅ Test on mobile devices
9. ✅ Deploy to your hosting service
10. ✅ Share your new portfolio! 🎉

---

## 💡 Tips

- **Keep it updated** — Portfolio sites work best when they reflect your current work
- **Real projects** — Focus on 3-5 strong projects rather than listing everything
- **Proofread** — First impressions matter; check spelling and grammar
- **Mobile first** — Most visitors will view on mobile; test thoroughly
- **Performance** — Keep images optimized (< 500KB each)
- **Consistency** — Use the same writing style across all sections

---

## 📄 License

This portfolio template is free to use for personal and commercial projects.

---

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to:
- Open an issue
- Submit a pull request
- Fork and customize for your needs

---

## 🙏 Acknowledgments

Design inspired by [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

Built with ❤️ using pure HTML, CSS, and JavaScript.

---

**Happy building! 🚀**