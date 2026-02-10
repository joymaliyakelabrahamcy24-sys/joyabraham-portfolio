# Joy Maliyakel Abraham - Cybersecurity Portfolio Website

A professional, responsive portfolio website showcasing cybersecurity skills, certifications, and services. Built with modern web technologies with a clean, light grayish design.

## 📋 Features

- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Me** - Personal background, interests, and focus areas
- **Technical Skills** - 6 key cybersecurity competencies with icons
- **Certifications** - Display of acquired certifications with upload/download functionality
- **Services** - Professional services offered
- **Contact Section** - Multiple contact options and functional contact form
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Certificate Management** - Upload, download, and manage certificates locally

## 🎨 Design

- **Color Scheme**: Light grayish theme with soft grays (#f5f5f5, #e8e8e8) and dark gray accents
- **Responsive**: Mobile-first design that adapts to all screen sizes
- **Animations**: Smooth scroll animations and interactive hover effects
- **Modern UI**: Clean typography and professional spacing

## 📁 File Structure

```
JoyProj/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity and file management
├── README.md           # This file
└── assets/             # Directory for additional assets (images, etc.)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - works as a static website

### Running the Website

1. **Local Development**
   ```bash
   # Simply open the index.html file in your browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

2. **Using Live Server (VS Code)**
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

## 📋 Sections Overview

### Hero Section
- Name and title introduction
- Subtitle highlighting role as cybersecurity student
- CTA buttons linking to Contact and Services sections

### About Me
- Personal background and interests
- Education at Jyothi Engineering College, Thrissur
- Current focus areas in cybersecurity

### Technical Skills
- Network Security
- Systems & OS
- Web Security
- Threat Analysis
- Security Tools
- Scripting

### Certifications
- **Upload Function**: Add your own certificates (PDF, JPG, PNG, DOC, DOCX)
- **Download Function**: Download uploaded certificates anytime
- **Delete Function**: Remove certificates as needed
- **Pre-populated Certifications**: 
  - Google IT Support Professional
  - CompTIA Security+
  - Ethical Hacking Fundamentals
  - Web Security Academy
  - Network Security Essentials
  - Data Protection & Privacy

### Services Offered
- Security Auditing
- Security Training
- Threat Analysis
- System Hardening
- Policy Development
- Technical Support

### Contact Section
- **Email**: joymaliyakelabraham@gmail.com
- **Phone**: +91 9746858644
- **Education**: Jyothi Engineering College, Thrissur
- **LinkedIn**: [Joy Abraham](https://www.linkedin.com/in/joy-abraham-a45229299)
- **Contact Form**: Functional form that opens your email client

## 🔧 Certificate Upload & Download

### How to Upload
1. Scroll to the Certificates section
2. Click "Choose Files or Drag & Drop" to select certificates
3. Or drag and drop files directly into the upload area
4. Supported formats: PDF, JPG, PNG, DOC, DOCX
5. Maximum file size: 10MB per file

### How to Download
1. Find your uploaded certificate in the list
2. Click the "Download" button
3. File will be saved to your downloads folder

### How to Delete
1. Click the "Delete" button on the certificate
2. Confirm the deletion when prompted
3. File will be removed from storage

### Storage
- Certificates are stored locally in your browser (localStorage)
- Data persists even after closing and reopening the website
- Storage limit: ~5-10MB depending on browser
- **Note**: Clearing browser data/cache will delete stored certificates

## 📱 Responsive Breakpoints

- **Desktop** (1024px and above): Full layout with multi-column grids
- **Tablet** (768px - 1023px): Adjusted columns and spacing
- **Mobile** (Below 768px): Single-column layout with optimized touch targets

## ⌚ Navigation

- **Fixed Navigation Bar**: Always accessible at the top
- **Smooth Scrolling**: Click any nav link for smooth page transitions
- **Mobile Menu**: Hamburger menu on smaller screens
- **Active Link Indicator**: Shows which section you're viewing

## 🎯 Customization Guide

### Update Personal Information
Edit the following in `index.html`:
- Name and title in the Hero section
- Email and phone in the Contact section
- Social links and URLs
- College name and location
- Skills and certifications

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6b7280;      /* Main gray color */
    --secondary-color: #9ca3af;    /* Secondary gray */
    --accent-color: #5a6b7f;       /* Accent dark blue-gray */
    /* ... other colors ... */
}
```

### Modify Content
All section content is easily editable in `index.html`. Update:
- Section titles and descriptions
- Skill and service items
- Certificate listings
- Contact information

## 🌐 Deployment

### Deploy to GitHub Pages
```bash
1. Create a GitHub repository named "portfolio"
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at: https://username.github.io/portfolio
```

### Deploy to Netlify
```bash
1. Drag and drop the folder to Netlify.com
2. Get instant deployment with automatic updates
```

### Deploy to Vercel
```bash
1. Connect your GitHub repository
2. Vercel auto-deploys on every push
3. Custom domain support available
```

## 📧 Contact Form

The contact form uses mailto functionality:
- Clicking "Send Message" opens your default email client
- Pre-filled with sender's name, email, and message
- No server required

To integrate with email service (optional):
- Use services like Formspree, EmailJS, or SendGrid
- Update the form submission code in `script.js`

## 🔒 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Lightweight**: No heavy frameworks or libraries
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: Proper heading hierarchy and semantic elements

## 🐛 Troubleshooting

### Certificates not saving?
- Check browser storage settings
- Ensure localStorage is not disabled
- Try a different browser if issues persist

### Contact form not working?
- Check your default email client is configured
- Verify email address is correct in the HTML

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Check that styles.css is in the same folder
- Ensure all files are in the correct directory

## 📝 License

This portfolio website is created for Joy Maliyakel Abraham and is free to use and modify.

## 👤 About

**Name**: Joy Maliyakel Abraham  
**Education**: 2nd Year Cybersecurity Student at Jyothi Engineering College, Thrissur  
**Email**: joymaliyakelabraham@gmail.com  
**Phone**: +91 9746858644  
**LinkedIn**: [Joy Abraham](https://www.linkedin.com/in/joy-abraham-a45229299)

---

**Last Updated**: February 10, 2026  
**Version**: 1.0
