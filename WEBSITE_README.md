# TapClash Website

A modern, professional HTML/CSS website for the TapClash mobile application with Terms & Conditions and Privacy Policy pages.

## 📁 File Structure

```
tapclash/
├── index.html          # Main landing page
├── terms.html          # Terms & Conditions page
├── privacy.html        # Privacy Policy page
├── styles.css          # Global CSS styling
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Features

### Home Page (`index.html`)
- **Hero Section**: Eye-catching landing section with app showcase
- **Features**: 6 key features with icons
- **Gameplay Guide**: 4-step guide on how to play
- **Game Modes**: Local, Online, and Daily Challenge modes
- **Technical Highlights**: Performance and security details
- **Download Buttons**: Links to App Store and Google Play
- **Navigation**: Sticky navigation bar with smooth scrolling
- **Footer**: Comprehensive footer with links and contact info

### Terms & Conditions (`terms.html`)
- 20 comprehensive sections covering:
  - Acceptance of terms
  - License and use restrictions
  - User accounts and authentication
  - Fair play and anti-cheating policies
  - Online multiplayer rules
  - Leaderboard regulations
  - Content and conduct guidelines
  - Intellectual property rights
  - Third-party services disclaimer
  - Liability limitations
  - Dispute resolution
  - And more...

### Privacy Policy (`privacy.html`)
- 20 detailed sections including:
  - Information collection practices
  - Data usage purposes
  - Information sharing policies
  - Security measures
  - Data retention policies
  - User privacy rights
  - GDPR compliance (EU)
  - CCPA compliance (California)
  - Data breach notification
  - Contact information
  - And more...

## 🎯 Design Highlights

### Color Scheme
- **Primary Blue**: `#00B4FF` (Player 1 color)
- **Primary Red**: `#FF3D5A` (Player 2 color)
- **Dark Background**: `#0A0A0F`
- **Turbo Gold**: `#FFD700` (Accent)
- **Text**: White on dark background

### Typography
- **Display Font**: Orbitron (sci-fi/arcade style)
- **Body Font**: Inter (clean, readable)

### Responsive Design
- Mobile-first approach
- Breakpoints at 1024px, 768px, and 480px
- Optimized for all screen sizes
- Touch-friendly interactive elements

## 🚀 Getting Started

### Basic Setup
1. Extract all files to your web server
2. Ensure all files are in the same directory
3. Open `index.html` in a browser

### Local Testing
1. Open terminal in the project directory
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if live-server is installed)
   live-server
   ```
3. Visit `http://localhost:8000` in your browser

### Deployment
1. Upload all files to your web hosting provider
2. Ensure the server supports static HTML/CSS/JS
3. Configure DNS and SSL if needed
4. Test all links and functionality

## 📱 Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Update Company Links
Edit the following in all HTML files:
- `support@tapclash.com` → Your support email
- `privacy@tapclash.com` → Your privacy contact
- `www.tapclash.com` → Your website URL
- App Store and Google Play links

### Modify Colors
Edit variables in `styles.css`:
```css
:root {
    --primary-blue: #00B4FF;
    --primary-red: #FF3D5A;
    /* ... other variables ... */
}
```

### Add Analytics
Insert tracking code in `<head>` of all HTML files:
```html
<!-- Google Analytics example -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Update Copyright Year
- Edit the year in footer `<p>` tags
- Or let `script.js` auto-update it

## 📄 Legal Document Updates

### Terms & Conditions
Update Section 19 with your contact information:
- Email address
- Support hours
- Business address (if applicable)

### Privacy Policy
Update Section 18 with:
- Contact information
- Data protection officer details
- International offices (if applicable)

## ✨ Interactive Features

### JavaScript Functionality
- **Smooth scrolling** between sections
- **Scroll animations** for cards and elements
- **Counter animations** in the hero section
- **Parallax effects** on scroll
- **Responsive navigation** for mobile devices
- **Keyboard shortcuts**:
  - Press 'H' to go to home
  - Press 'F' to jump to features

### CSS Animations
- Hover effects on buttons and cards
- Glow animations on interactive elements
- Fade-in animations on page load
- Gradient text effects

## 🔒 Security Best Practices

1. **HTTPS Only**: Always use HTTPS in production
2. **Content Security Policy**: Consider adding CSP headers
3. **No Sensitive Data**: Never include API keys or secrets
4. **Form Validation**: Validate all user inputs on submission
5. **Keep Updated**: Regularly update links and policies

## 📞 Support

### Links to Update
- Help/Support page (create new page if needed)
- Contact form (create new page if needed)
- Social media links in footer
- Community forum links

## 📈 SEO Optimization

### Meta Tags
- Already include relevant meta descriptions
- Add keywords if needed
- Consider adding Open Graph tags for social sharing

### Performance
- CSS and JS are minified-ready
- Images should be optimized separately
- Consider lazy loading for future images

### Accessibility
- Semantic HTML structure
- Color contrast meets WCAG standards
- Keyboard navigation support
- Alt text for interactive elements (add as needed)

## 🐛 Troubleshooting

### Links Not Working
- Ensure all HTML files are in the same directory
- Check file names match exactly (case-sensitive on Linux/Mac)
- Verify href attributes point to correct files

### Styling Issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that styles.css is in the same directory
- Verify CSS file link is correct: `<link rel="stylesheet" href="styles.css">`

### Font Not Loading
- Check Google Fonts API connection
- Verify font names in CSS match Google Fonts
- Consider using system fonts as fallback

## 📦 Deployment Checklist

- [ ] Update all contact emails
- [ ] Update all website URLs
- [ ] Update app store links
- [ ] Review legal documents for accuracy
- [ ] Test all links and forms
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Verify analytics tracking (if added)
- [ ] Enable HTTPS
- [ ] Set up SSL certificate
- [ ] Configure DNS records
- [ ] Test from multiple devices

## 📝 License

This website template is provided as-is for the TapClash application. Modify and use as needed for your application.

## 🎉 Additional Resources

- **Flutter Development**: https://flutter.dev
- **Flame Game Engine**: https://flame-engine.org
- **Firebase**: https://firebase.google.com
- **Supabase**: https://supabase.com
- **Cloudflare**: https://www.cloudflare.com

---

**Version**: 1.0  
**Last Updated**: March 5, 2026  
**Created for**: TapClash Mobile Application
