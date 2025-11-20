# Marbens Alexander — Portfolio

An award-winning, enterprise-grade portfolio website for graphic designer and photographer Marbens Alexander. This single-page portfolio combines elegant minimalism with immersive interactive elements to showcase creative work in the most compelling way.

## Features

### Design & UX
- **Hybrid Approach**: Invisible interface foundation with selective immersive moments
- **Sophisticated Animations**: Smooth scroll effects, intersection observers, and micro-interactions
- **Custom Cursor**: Desktop-optimized cursor with magnetic effects and hover states
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **Lightbox Gallery**: Click-to-expand project viewing with keyboard navigation

### Interactive Elements
- Smooth parallax scrolling
- Animated statistics counters
- Magnetic button effects
- Scroll progress indicator
- Staggered capability card animations
- Image lazy loading for performance

### Sections
1. **Hero** — Bold introduction with availability status
2. **Work** — 6 featured projects in an elegant responsive grid
3. **Capabilities** — Service offerings with hover effects
4. **About** — Biography with animated statistics
5. **Contact** — Clear CTAs with social links

## Getting Started

### Quick Start
1. Open `index.html` in your browser
2. No build process required — pure HTML, CSS, and JavaScript

### Customization Guide

#### Update Personal Information

**Navigation & Hero** (`index.html` lines 19-58):
```html
<div class="nav-logo">Marbens Alexander</div>
<div class="hero-eyebrow">Available for opportunities</div>
<h1 class="hero-title">Your tagline here</h1>
```

**Contact Details** (`index.html` lines 240-252):
```html
<a href="mailto:your-email@domain.com" class="contact-email">your-email@domain.com</a>
```

Update social media links with actual profiles:
- LinkedIn
- Behance
- Instagram
- Dribbble

#### Add Your Projects

Replace the 6 placeholder projects in the Work section (`index.html` lines 72-167):

```html
<div class="work-item" data-category="branding">
    <div class="work-item-image">
        <img src="your-image.jpg" alt="Project description">
        <div class="work-item-overlay">
            <span class="work-item-view">View Project</span>
        </div>
    </div>
    <div class="work-item-info">
        <h3 class="work-item-title">Your Project Name</h3>
        <p class="work-item-category">Category • Type</p>
    </div>
</div>
```

**Image Recommendations**:
- Format: JPG or WebP for best performance
- Aspect Ratio: 4:5 (portrait orientation)
- Size: 800x1000px minimum
- Optimize images before uploading (use tools like TinyPNG)

#### Update About Section

**Profile Photo** (`index.html` line 185):
```html
<img src="your-photo.jpg" alt="Your Name">
```

**Biography** (`index.html` lines 190-195):
Update the two paragraphs with your story, approach, and goals.

**Statistics** (`index.html` lines 197-212):
Customize the numbers to reflect your experience:
- Years of experience
- Projects completed
- Happy clients

#### Color Scheme

Edit the CSS variables in `style.css` (lines 5-12):

```css
:root {
    --color-primary: #0a0a0a;      /* Main dark color */
    --color-secondary: #ffffff;     /* Main light color */
    --color-accent: #2962ff;        /* Accent color (links, highlights) */
    --color-text: #1a1a1a;         /* Body text */
    --color-text-light: #666666;   /* Secondary text */
    --color-border: #e0e0e0;       /* Border color */
    --color-hover: #f5f5f5;        /* Hover backgrounds */
}
```

**Pro Tip**: Use a tool like [Coolors](https://coolors.co) to generate cohesive color palettes.

#### Typography

The portfolio uses:
- **Inter** for body text (clean, professional)
- **Playfair Display** for headings (elegant, sophisticated)

To change fonts, update the Google Fonts import in `index.html` (line 9) and CSS variables in `style.css`.

#### Resume Download

Add your resume PDF to the project folder and update the link (`index.html` line 215):
```html
<a href="/your-resume.pdf" class="btn btn-primary" download>Download Resume</a>
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Intersection Observer API for scroll animations
- Debounced scroll events
- CSS animations with GPU acceleration
- Minimal JavaScript dependencies (zero libraries)

## File Structure

```
portfolio-marbens/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Deployment

### Option 1: Netlify (Recommended)
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! Your site is live.

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios
- Responsive text sizing

## Tips for Maximum Impact

1. **Quality Over Quantity**: Show 4-6 of your absolute best projects
2. **Professional Photography**: Use high-quality images consistently
3. **Clear CTAs**: Make it obvious how to contact you
4. **Fast Loading**: Optimize all images before uploading
5. **Keep It Updated**: Refresh projects regularly
6. **Test Everywhere**: Check on different devices and browsers
7. **SEO**: Update meta description and page title in `index.html`

## Customization Ideas

- Add a blog section for thought leadership
- Include client testimonials
- Add a filterable project gallery
- Integrate with a CMS (Contentful, Sanity)
- Add Google Analytics for tracking
- Implement a contact form with Formspree or Netlify Forms

## Support

For questions or issues:
1. Check the code comments in each file
2. Review the customization guide above
3. Test in different browsers

## Credits

- Design & Development: Built for Marbens Alexander
- Fonts: [Google Fonts](https://fonts.google.com)
- Images: [Unsplash](https://unsplash.com) (placeholders)

## License

Free to use and modify for personal portfolio purposes.

---

**Good luck with your job search, Marbens!** 🚀
