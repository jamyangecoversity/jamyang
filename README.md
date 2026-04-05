# Jamyang Ecoversity Website

A modern, responsive website for Jamyang Ecoversity - a living-learning center for regenerative education, ecological stewardship, and meaningful livelihoods.

## Project Overview

This website presents Jamyang Ecoversity as a comprehensive educational institution focused on:
- Regenerative education and ecological intelligence
- Cultural renewal and traditional knowledge
- Meaningful livelihoods and social enterprise
- Holistic wellbeing and community resilience
- Leadership development and purpose

## File Structure

```
JEcoversity/
├── index.html              # Home page with hero, pillars, and CTA sections
├── about.html              # About page with story, values, and educational approach
├── learning-areas.html     # Detailed learning areas page with 8 domains
├── programs.html          # Programs page with certificates and workshops
├── campus.html            # Campus/Model page with infrastructure and phases
├── impact.html            # Impact page with outcomes and monitoring
├── get-involved.html      # Get involved page with partnership opportunities
├── contact.html           # Contact page with form and information
├── styles.css             # Complete stylesheet with responsive design
├── script.js              # JavaScript for interactivity and animations
└── README.md              # This file
```

## Key Features

### Design & User Experience
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Modern Aesthetic**: Clean, minimal design with earthy colors (forest green, sage, sand, cream, clay, charcoal)
- **Smooth Animations**: Scroll reveal animations, hover effects, and smooth transitions
- **Accessibility**: Semantic HTML5, proper color contrast, and keyboard navigation support

### Interactive Elements
- **Sticky Navigation**: Fixed header with mobile hamburger menu
- **Smooth Scrolling**: Seamless navigation between sections
- **Form Validation**: Client-side validation for contact and involvement forms
- **Loading States**: Visual feedback for form submissions
- **Hover Effects**: Interactive cards and buttons with transform animations

### Content Structure
- **8 Complete Pages**: All requested pages with comprehensive content
- **SEO Optimized**: Proper meta titles, descriptions, and semantic structure
- **Well-Organized**: Clear hierarchy and intuitive navigation flow

## Customization Guide

### Easy Content Updates

#### Text Content
All text content is clearly organized in HTML files. To update:
1. Open the relevant HTML file
2. Find the section you want to modify
3. Update the text within the appropriate tags

#### Images
Image placeholders are marked with descriptive classes. To add actual images:
1. Replace placeholder divs with `<img>` tags
2. Add your images to an `images/` folder
3. Update src attributes accordingly

#### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:
```css
:root {
    --primary-green: #2d5016;
    --sage-green: #5a7247;
    --light-sage: #8fa580;
    --sand: #d4c5b0;
    --cream: #f8f5f0;
    --clay: #a67c52;
    --charcoal: #2c2c2c;
}
```

#### Contact Information
Update contact details in:
- `contact.html` - Contact information section
- Footer sections in all HTML files

### Navigation
The navigation menu is consistent across all pages. To add/remove pages:
1. Update the `<ul class="nav-menu">` in each HTML file
2. Ensure corresponding page files exist

## Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Mobile**: Optimized for iOS Safari, Chrome Mobile
- **Graceful Degradation**: Functional even with JavaScript disabled

## Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Lightweight JavaScript**: No external dependencies
- **Semantic HTML**: Better SEO and accessibility
- **Responsive Images**: Ready for image optimization

## Getting Started

1. **Download** all files to your local directory
2. **Open** `index.html` in your web browser to preview
3. **Customize** content, colors, and images as needed
4. **Deploy** to your web server or hosting platform

## Technical Details

### HTML5 Semantic Structure
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` tags
- Proper heading hierarchy (h1-h6)
- ARIA labels for accessibility

### CSS Features
- CSS Grid and Flexbox layouts
- Custom properties (CSS variables)
- Smooth transitions and animations
- Mobile-first responsive design
- Hover and focus states

### JavaScript Functionality
- Mobile navigation toggle
- Smooth scrolling
- Form validation
- Scroll reveal animations
- Interactive elements

## Support

This website is built with standard web technologies and should work with any modern web hosting service. No special server configuration is required.

## Future Enhancements

Consider adding:
- Contact form backend integration
- Image optimization and lazy loading
- Analytics tracking
- Blog/news section
- Multi-language support
- Enhanced animations with GSAP or similar library

---

**Built with ❤️ for Jamyang Ecoversity**
