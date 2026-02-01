# Portfolio Website - Redel Gorobat

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
portfolio/
│
├── index.html              # Home page
├── about.html              # About Me page
├── skills.html             # Skills page
├── experience.html         # Experience page
├── projects.html           # Projects page
├── certificates.html       # Certificates page
├── contact.html            # Contact page
│
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
│
└── images/                 # Image directory
    ├── profile.jpg         # Your profile picture (350x350px recommended)
    │
    ├── projects/           # Project images
    │   ├── uiux/          # UI/UX Design projects (5 images)
    │   │   ├── project1.jpg
    │   │   ├── project2.jpg
    │   │   ├── project3.jpg
    │   │   ├── project4.jpg
    │   │   └── project5.jpg
    │   │
    │   ├── tshirt/        # T-shirt Design projects (2 images)
    │   │   ├── design1.jpg
    │   │   └── design2.jpg
    │   │
    │   ├── graphic/       # Graphic Design projects (1 image)
    │   │   └── design1.jpg
    │   │
    │   └── logo/          # Logo Design projects (3 images)
    │       ├── logo1.jpg
    │       ├── logo2.jpg
    │       └── logo3.jpg
    │
    └── certificates/       # Certificate images (organized by category)
        ├── technical/
        ├── design/
        ├── academic/
        ├── training/
        ├── work/
        └── other/
```

## 🚀 Getting Started

### 1. Setup Files
1. Extract all HTML, CSS, and JS files to your project folder
2. Create the `images` folder structure as shown above

### 2. Add Your Images

#### Profile Picture
- Add your profile photo as `images/profile.jpg`
- Recommended size: 350x350px (square)
- Format: JPG or PNG

#### Project Images
Place your project images in the respective folders:
- **UI/UX Designs**: 5 images in `images/projects/uiux/`
- **T-shirt Designs**: 2 images in `images/projects/tshirt/`
- **Graphic Designs**: 1 image in `images/projects/graphic/`
- **Logo Designs**: 3 images in `images/projects/logo/`

Recommended image specifications:
- Format: JPG or PNG
- Size: 1200x900px (4:3 ratio) for best display
- File size: Under 1MB each

#### Certificates
Add certificate images to `images/certificates/` in the appropriate category folders.

### 3. Customize Content

#### Update Project Titles
In `projects.html`, you can add titles to each project by typing in the input fields below each image.

#### Contact Form Integration
The contact form currently displays a success message locally. To make it functional:

**Option 1: EmailJS (Recommended)**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Uncomment and configure the EmailJS code in `script.js`
4. Add your service ID and template ID

**Option 2: Formspree**
1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Add `action="your-formspree-endpoint"` to the form in `contact.html`

**Option 3: Custom Backend**
Create your own backend API to handle form submissions.

### 4. Update Social Links
In `contact.html`, update the social media links with your actual profile URLs:
```html
<a href="YOUR_FACEBOOK_URL" class="social-btn facebook">
<a href="YOUR_INSTAGRAM_URL" class="social-btn instagram">
<a href="YOUR_TELEGRAM_URL" class="social-btn telegram">
<a href="YOUR_DISCORD_URL" class="social-btn discord">
```

### 5. Customize Colors (Optional)
You can customize the color scheme by editing the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #D97757;      /* Main brand color */
    --secondary-color: #2D4356;    /* Dark text color */
    --accent-color: #EAB464;       /* Accent highlights */
    /* ... more colors */
}
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and root folder
5. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be deployed instantly

### Option 3: Vercel (Free)
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository or upload files
3. Deploy with one click

### Option 4: Traditional Web Hosting
Upload all files to your web hosting via FTP.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Scroll-triggered animations for engaging UX
- **Modern UI**: Clean, professional design with warm color palette
- **Interactive Projects**: Gallery with category filtering
- **Contact Form**: Ready-to-integrate contact functionality
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript

## 🎨 Design Elements

- **Typography**: DM Serif Display (headings) + Manrope (body)
- **Color Palette**: Warm terracotta primary with professional dark secondary
- **Animations**: Fade-in, slide-up, and hover effects
- **Layout**: Grid-based responsive design
- **Components**: Cards, timelines, skill bars, image galleries

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization Tips

### Change Font
Replace the Google Fonts link in all HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

### Add More Projects
1. Add new folders to `images/projects/`
2. Update `projects.html` to include new categories
3. Add corresponding JavaScript in `script.js`

### Modify Skills
Edit the skills section in `skills.html` and adjust progress bars as needed.

## 📞 Support

For issues or questions:
- Email: redelgorobat@gmail.com
- Phone: +63 963 087 1724

## 📄 License

This portfolio template is free to use and modify for personal use.

---

**Built with ❤️ by Redel Gorobat**
