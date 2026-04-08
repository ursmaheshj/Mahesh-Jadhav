# Portfolio Images

Place your portfolio-related images in this folder:

## Structure

```
images/
├── profile.jpg          # Your profile photo (recommended: 400x400px)
├── projects/           # Project screenshots and thumbnails
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── ...
└── README.md           # This file
```

## Image Guidelines

- **Profile Photo**: Square aspect ratio (400x400px or similar), professional headshot
- **Project Images**: 16:9 or 4:3 aspect ratio recommended, optimized for web (< 500KB)
- **Format**: JPG for photos, PNG for screenshots with transparency
- **Naming**: Use lowercase with hyphens (e.g., `document-pipeline.jpg`)

## Usage

Reference images in `content.js` using relative paths:
```js
"photoUrl": "images/profile.jpg",
"thumbnail": "images/projects/project-name.jpg"
```
