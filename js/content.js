/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PORTFOLIO CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This is the ONLY file you need to edit to customize your portfolio.
 * 
 * ✏️  Edit Instructions:
 *    - Replace placeholder values with your actual information
 *    - All text fields accept plain text or simple HTML
 *    - Image paths are relative to the portfolio root folder
 *    - Font Awesome icons: browse at https://fontawesome.com/icons
 * 
 * 📦 JSON Format:
 *    - This file is structured as JSON for easy editing
 *    - All keys are in quotes: "key": "value"
 *    - Arrays use [brackets], objects use {braces}
 *    - No trailing commas on last items
 * 
 * 🚀 Getting Started:
 *    1. Add your profile photo to `images/profile.jpg`
 *    2. Update the profile section below with your details
 *    3. Customize projects, skills, and experience sections
 *    4. Open `index.html` in a browser to preview
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

window.PORTFOLIO_DATA = {
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROFILE — Your personal information and introduction
   * ─────────────────────────────────────────────────────────────────────────
   */
  "profile": {
    "name": "Mahesh Jadhav",
    "role": "Python · AWS · Automation",
    "affiliation": null,
    "location": "India",
    
    // Profile photo: Add your image to images/ folder, then update path below
    // Recommended size: 400x400px square
    "photoUrl": "images/profile.jpg",
    // Example: "photoUrl": "images/profile.jpg",
    
    "address": [
      "Pune, India",
    ],
    
    // Social links — Edit URLs and add/remove as needed
    "social": [
      { "label": "GitHub",   "url": "#",                         "icon": "fa-brands fa-github" },
      { "label": "LinkedIn", "url": "#",                         "icon": "fa-brands fa-linkedin-in" },
      { "label": "Medium",   "url": "#",                         "icon": "fa-brands fa-medium" },
      { "label": "Email",    "url": "mailto:mahesh@example.com", "icon": "fa-solid fa-envelope" },
      { "label": "Instagram", "url": "#",                        "icon": "fa-brands fa-instagram" }
    ],
    
    // Medium RSS feed URL — Set to your Medium profile feed to auto-fetch articles
    // Format: "https://YOUR-USERNAME.medium.com/feed"
    // Set to null to disable live fetch
    "mediumFeedUrl": "https://ursmaheshj.medium.com/feed",
    
    // About section — Your introduction (displayed on homepage)
    "about": "I sit at the intersection of engineering execution and information design. I enjoy building systems that eliminate manual effort, structuring messy inputs into reliable pipelines, and turning technical work into something operators and stakeholders can actually understand and trust.",
    
    // Signature points — 3 key statements about your work philosophy
    "signaturePoints": [
      "Solving operational problems with code instead of repeated manual steps.",
      "Valuing clear UI and storytelling even when the underlying work is highly technical.",
      "Keeping tools maintainable, data-driven, and easy to extend over time."
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * NAVIGATION — Site navigation links (typically no need to change)
   * ─────────────────────────────────────────────────────────────────────────
   */
  "navigation": [
    { "label": "About",        "href": "index.html",        "faIcon": "fa-solid fa-user" },
    { "label": "Blog",         "href": "blog.html",         "faIcon": "fa-solid fa-pen-nib" },
    { "label": "Projects",     "href": "projects.html",     "faIcon": "fa-solid fa-code" },
    { "label": "Certificates", "href": "certificates.html", "faIcon": "fa-solid fa-award" },
    { "label": "CV",           "href": "cv.html",           "faIcon": "fa-solid fa-file-lines" },
    { "label": "Contact",      "href": "contact.html",      "faIcon": "fa-solid fa-envelope" }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * SKILLS — Your technical and professional capabilities
   * ─────────────────────────────────────────────────────────────────────────
   */
  "skills": [
    {
      "title": "Languages",
      "faIcon": "fa-solid fa-code",
      "summary": "Tools I reach for when building scripts, services, and polished interfaces.",
      "items": ["Python", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      "title": "Automation",
      "faIcon": "fa-solid fa-robot",
      "summary": "Work that removes repetition and makes processes reliable.",
      "items": ["Scripting", "Batch Processing", "Data Transformation", "File Pipelines", "Workflow Design"]
    },
    {
      "title": "Data and Search",
      "faIcon": "fa-solid fa-database",
      "summary": "Handling structured and semi-structured content with traceability.",
      "items": ["CSV Processing", "XML Parsing", "OpenSearch", "Content Extraction", "Validation"]
    },
    {
      "title": "Cloud and Platforms",
      "faIcon": "fa-solid fa-cloud",
      "summary": "Services and deployment environments used in practical production work.",
      "items": ["AWS", "S3", "Rekognition", "REST APIs", "Static Site Deployment"]
    },
    {
      "title": "Frontend",
      "faIcon": "fa-solid fa-layer-group",
      "summary": "Interfaces that feel deliberate instead of template-driven.",
      "items": ["Responsive Design", "Interaction Design", "Vanilla JS", "Accessible UI", "Visual Systems"]
    },
    {
      "title": "Professional Strengths",
      "faIcon": "fa-solid fa-star",
      "summary": "How I operate inside projects and teams.",
      "items": ["Problem Framing", "Debugging", "Documentation", "Ownership", "Continuous Learning"]
    }
  ],
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROJECTS — Your portfolio projects
   * ─────────────────────────────────────────────────────────────────────────
   * Optional fields: thumbnail, impact
   * stack are used for filtering on projects page
   */
  "projects": [
    {
      "title": "Student Management System",
      "year": "2026",
      "summary": "A workflow for extracting structured information from PDF and catalog-style content, reducing manual effort for downstream processing.",
      "stack": ["Python", "PDF Processing", "CSV", "AWS Rekognition"],
      "image": "images/projects/studentmanagement.jpg",
      "links": [
        { "label": "Case Study", "url": "#" },
        { "label": "Source", "url": "#" }
      ]
    },
    {
      "title": "Search and Content Audit Toolkit",
      "year": "2025",
      "summary": "A collection of utilities for querying indexes, validating document presence, and surfacing content gaps across large datasets.",
      "stack": ["Python", "OpenSearch", "JSON", "Validation Scripts"],
      "image": "images/projects/audit-toolkit.jpg",
      "links": [
        { "label": "Workflow Notes", "url": "#" }
      ]
    },
    {
      "title": "Image Conversion and Upload Workflow",
      "year": "2025",
      "summary": "A process for converting image assets, organizing outputs, and preparing them for upload into larger content systems.",
      "stack": ["Python", "Image Processing", "File IO", "CSV"],
      "image": "images/projects/image-conversion.jpg",
      "links": [
        { "label": "Process Overview", "url": "#" }
      ]
    },
    {
      "title": "Interactive Portfolio System",
      "year": "2026",
      "summary": "A personal site designed as a living resume with project filtering, writing aggregation, and editable structured content.",
      "stack": ["HTML", "CSS", "JavaScript", "Content-Driven UI"],
      "image": "images/projects/portfolio-system.jpg",
      "links": [
        { "label": "Live Preview", "url": "#top" }
      ]
    }
  ],
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * BLOGS — Static blog entries (fallback if Medium RSS is disabled)
   * ─────────────────────────────────────────────────────────────────────────
   * If mediumFeedUrl is set, these entries are merged with live Medium posts
   * Platform options: "Medium", "Hashnode", "dev.to", "LinkedIn", "Personal"
   */
  "blogs": [
    // { 
    //   "title": "What Automation Should Really Remove From Your Day",
    //   "platform": "Medium",
    //   "date": "Mar 2026",
    //   "excerpt": "A practical look at choosing automation targets based on pain, repetition, and business value.",
    //   "url": "#"
    // },
    {
      "title": "What is Normalization?",
      "platform": "LinkedIn",
      "date": "Mar 2025",
      "excerpt": "Normalization is the process of effectively designing a #database to organize data in a manner that avoids data #redundancy and improves data integrity by structuring tables and relationships according to specific rules.",
      "url": "https://www.linkedin.com/posts/ursmaheshj_normalization-database-redundancy-activity-7309930746884849665-pt-E?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfx-YABh76TRm3vHrX-5pS-iW38bENlP88"
    },
    {
      "title": "Internet cookies",
      "platform": "LinkedIn",
      "date": "Feb 2025",
      "excerpt": "After world wide web boom internet rapidly got a fame which led more and more businesses to transfer onto internet including financial organization,",
      "url": "https://www.linkedin.com/pulse/internet-cookies-mahesh-jadhav-nqsif"
    },
    {
      "title": "Exploring Most Popular Regression Metrics in Data Science",
      "platform": "LinkedIn",
      "date": "June 2023",
      "excerpt": "While applying regression on real-world data it is necessary to make sure our model is optimized to predict correct output and make fewer errors. ",
      "url": "https://www.linkedin.com/pulse/most-popular-regression-metrics-mahesh-jadhav/"
    },
    {
      "title": "BLOODnegative - A Dynamic Website for Blood Donation",
      "platform": "GitHub Pages",
      "date": "Jul 2022",
      "excerpt": "my very first college project where I developed a fully functional dynamic website and deployed over internet using InfinityFree.",
      "url": "https://ursmaheshj.github.io/BLOODnegative/"
    }
    
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CERTIFICATES — Professional certifications and achievements
   * ─────────────────────────────────────────────────────────────────────────
   * Display certificates using third-party URLs (Coursera, Udemy, LinkedIn, etc.)
   * Keywords are used for filtering on the certificates page
   */
  "certificates": [
    {
      "title": "2021 Complete Python Bootcamp From Zero to Hero in Python",
      "issuer": "Udemy",
      "date": "2021",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b.jpg",
      "credentialId": "UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b",
      "keywords": ["Python", "HTML", "CSS"]
    },
    {
      "title": "2021 Complete Python Bootcamp From Zero to Hero in Python",
      "issuer": "Udemy",
      "date": "2021",
      "credentialUrl": "https://www.udemy.com/certificate/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b.jpg",
      "credentialId": "UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b",
      "keywords": ["Python", "HTML", "CSS"]
    },
    {
      "title": "2021 Complete Python Bootcamp From Zero to Hero in Python",
      "issuer": "Udemy",
      "date": "2021",
      "credentialUrl": "https://www.udemy.com/certificate/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b.jpg",
      "credentialId": "UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b",
      "keywords": ["Python", "HTML", "CSS"]
    },
    {
      "title": "Build Responsive Real World Websites with HTML5 and CSS3",
      "issuer": "Udemy",
      "date": "2020",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-your-certificate-id.jpg",
      "credentialId": null,
      "keywords": ["Web Development"]
    },
    {
      "title": "DevOps, CI/CD (Continuous Integration/Delivery) for Beginners",
      "issuer": "Udemy",
      "date": "2021",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-your-certificate-id.jpg",
      "credentialId": null,
      "keywords": ["DevOps", "Cloud"]
    },
    {
      "title": "AWS Certified Solutions Architect - Associate",
      "issuer": "Amazon Web Services",
      "date": "2022",
      "credentialUrl": "https://www.credly.com/badges/your-badge-id",
      "imageUrl": "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      "credentialId": "AWS-ASA-12345",
      "keywords": ["AWS", "Cloud"]
    },
    {
      "title": "Microsoft Certified: Azure Fundamentals",
      "issuer": "Microsoft",
      "date": "2022",
      "credentialUrl": "https://www.credly.com/badges/your-badge-id",
      "imageUrl": "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
      "credentialId": "AZ-900-12345",
      "keywords": ["Azure", "Cloud"]
    },
    {
      "title": "Java from Beginner to Expert",
      "issuer": "Udemy",
      "date": "2020",
      "credentialUrl": "https://www.udemy.com/certificate/UC-your-certificate-id/",
      "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-your-certificate-id.jpg",
      "credentialId": null,
      "keywords": ["Java"]
    },
    {
      "title": "JavaScript Essential Training",
      "issuer": "LinkedIn Learning",
      "date": "2021",
      "credentialUrl": "https://www.linkedin.com/learning/certificates/your-certificate-id",
      "imageUrl": "https://media.licdn.com/dms/image/sync/your-image-id/learning-public-crop_675_1200/0/your-timestamp",
      "credentialId": null,
      "keywords": ["Web Development"]
    },
    {
      "title": "UI/UX Design Fundamentals",
      "issuer": "Coursera",
      "date": "2021",
      "credentialUrl": "https://www.coursera.org/account/accomplishments/certificate/your-certificate-id",
      "imageUrl": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~your-id/CERTIFICATE_LANDING_PAGE~your-id.jpeg",
      "credentialId": "COURSERA-12345",
      "keywords": ["UI/UX"]
    },
    {
      "title": "Managing Virtual Teams",
      "issuer": "LinkedIn Learning",
      "date": "2022",
      "credentialUrl": "https://www.linkedin.com/learning/certificates/your-certificate-id",
      "imageUrl": "https://media.licdn.com/dms/image/sync/your-image-id/learning-public-crop_675_1200/0/your-timestamp",
      "credentialId": null,
      "keywords": ["Soft skills"]
    }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * EXPERIENCE — Work history and education
   * ─────────────────────────────────────────────────────────────────────────
   * type: "work" or "education"
   * These render in separate sections on the CV page
   */
  "experience": [
    {
      "type": "work",
      "period": "2024 – Present",
      "role": "Software Engineer",
      "company": "Deere & Company",
      "summary": "Building automation, content workflows, and tooling that improve operational efficiency at scale.",
      "highlights": [
        "Built utilities for extracting, validating, and organizing complex content assets.",
        "Improved repeatability of document and media processing tasks.",
        "Collaborated on tooling supporting content and platform workflows."
      ]
    },
    {
      "type": "work",
      "period": "2022 – 2024",
      "role": "Engineer / Analyst",
      "company": "Previous Organization",
      "summary": "Focused on scripting, data handling, and support for high-volume operational processes.",
      "highlights": [
        "Created utility scripts to reduce manual intervention.",
        "Structured inconsistent data into reliable workflows.",
        "Documented internal processes for easier onboarding."
      ]
    },
    {
      "type": "education",
      "period": "Your graduation year",
      "role": "Bachelor of Engineering",
      "company": "Your University",
      "summary": "Replace with your actual degree, university, and graduation year.",
      "highlights": [
        "Key specialization or subject focus",
        "Notable academic project or achievement",
        "Any relevant certifications"
      ]
    },
    {
      "type": "education",
      "period": "Ongoing",
      "role": "Self-directed Learning",
      "company": "Online Platforms",
      "summary": "Continuously building on core skills through practical projects and curated courses.",
      "highlights": [
        "AWS and cloud fundamentals",
        "OpenSearch and search system design",
        "Frontend engineering and interaction design"
      ]
    }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CONTACT — Contact page information
   * ─────────────────────────────────────────────────────────────────────────
   */
  "contact": {
    "copy": "I am interested in software engineering roles, meaningful collaborations, and conversations around automation, data systems, and well-crafted tooling.",
    "resumeUrl": "#",
    "links": [
      { "label": "Email",    "faIcon": "fa-solid fa-envelope",     "value": "mj241199@gmail.com",          "url": "mailto:mj241199@gmail.com" },
      { "label": "LinkedIn", "faIcon": "fa-brands fa-linkedin-in", "value": "linkedin.com/in/ursmaheshj", "url": "#" },
      { "label": "GitHub",   "faIcon": "fa-brands fa-github",      "value": "github.com/ursmaheshj",      "url": "#" },
      { "label": "Writing",  "faIcon": "fa-brands fa-medium",      "value": "Read all articles",           "url": "blog.html" }
    ]
  }
};