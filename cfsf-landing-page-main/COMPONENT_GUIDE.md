# Component Guide

## 📐 Component Architecture

```
App.js (Root Component)
│
├── Header (Navigation)
│   ├── Logo
│   ├── Navigation Menu
│   │   ├── Home Link (#home)
│   │   ├── About Link (#about)
│   │   ├── Donate Link (#donation)
│   │   ├── Blog Link (#blog)
│   │   └── Contact Link (#contact)
│   ├── Donate Button (Desktop)
│   └── Hamburger Menu (Mobile)
│
├── Intro (Hero Section) #home
│   ├── Text Content
│   │   ├── Main Heading
│   │   ├── Description
│   │   └── Donate Button
│   └── Background Image
│
├── Service (About Section) #about
│   ├── Section Header
│   └── Service Grid (2x2)
│       ├── Partnerships Card
│       ├── Awareness Card
│       ├── Counselling Card
│       └── Support Card
│
├── Donation (NEW) #donation
│   ├── Section Header
│   └── Two-Column Layout
│       ├── Information Column
│       │   ├── Why Donate Card
│       │   ├── Our Impact Card
│       │   └── Tax Benefits Card
│       └── Form Column
│           ├── Donation Type (Radio)
│           ├── Name Input
│           ├── Email Input
│           ├── Amount Input
│           ├── Quick Amount Buttons
│           ├── Message Textarea
│           └── Submit Button
│
├── Article (Blog Section) #blog
│   ├── Section Header
│   └── Article Grid (4 columns)
│       ├── Video Article
│       ├── Article Card 1
│       ├── Article Card 2
│       └── Article Card 3
│
└── Footer #contact
    ├── Footer Content
    │   ├── Logo & Social Icons
    │   ├── Navigation Links
    │   └── Additional Links
    └── Footer Actions
        ├── Donate Button
        ├── Copyright
        └── Attribution
```

---

## 🔄 Data Flow & State Management

### Header Component
```javascript
State:
- isMenuOpen: boolean (mobile menu visibility)
- activeLink: string (current active navigation item)

Functions:
- handleNavClick(linkName) → Updates activeLink, closes mobile menu
- scrollToDonation() → Smooth scrolls to donation section
```

### Donation Component
```javascript
State:
- formData: object
  {
    name: string,
    email: string,
    amount: string,
    message: string,
    donationType: 'one-time' | 'monthly'
  }

Functions:
- handleChange(e) → Updates form field values
- handleSubmit(e) → Processes form submission
- Quick amount buttons → Set predefined amounts
```

### Intro Component
```javascript
Functions:
- scrollToDonation() → Smooth scrolls to donation section
```

### Footer Component
```javascript
Functions:
- scrollToDonation() → Smooth scrolls to donation section
```

---

## 🎨 Component Styling

### Header
**File**: `src/Sass/_header.scss`

**Key Features**:
- Sticky positioning (stays at top)
- Responsive navigation (hamburger on mobile)
- Smooth transitions
- Active link highlighting

**Classes**:
- `.container` - Main header container
- `.navbar` - Navigation wrapper
- `.nav-items` - Navigation list
- `.nav-item` - Individual nav item
- `.nav-btn` - Donate button
- `.burger` - Mobile menu toggle

### Intro
**File**: `src/Sass/_intro.scss`

**Key Features**:
- Two-column layout (text + image)
- Background SVG image
- Responsive stacking on mobile

**Classes**:
- `.intro` - Section wrapper
- `.contain` - Content container
- `.intro-text` - Text content
- `.intro-btn` - CTA button
- `.intro-img` - Image container

### Service
**File**: `src/Sass/_service.scss`

**Key Features**:
- Grid layout (2x2)
- Card hover effects
- Responsive columns

**Classes**:
- `.service` - Section wrapper
- `.container-sec` - Content container
- `.sec-intro` - Section header
- `.sec-items` - Grid container
- `.sec-item` - Individual card

### Donation (NEW)
**File**: `src/Sass/_donation.scss`

**Key Features**:
- Two-column layout
- Form styling
- Info cards
- Gradient background

**Classes**:
- `.donation` - Section wrapper
- `.donation-container` - Content container
- `.donation-header` - Section header
- `.donation-content` - Two-column grid
- `.donation-info` - Info cards column
- `.info-card` - Individual info card
- `.donation-form-wrapper` - Form container
- `.donation-form` - Form element
- `.form-group` - Form field wrapper
- `.radio-group` - Radio button group
- `.amount-suggestions` - Quick amount buttons
- `.submit-btn` - Submit button

### Article
**File**: `src/Sass/_article.scss`

**Key Features**:
- 4-column grid
- Card hover effects
- Video support

**Classes**:
- `article` - Section wrapper
- `.art-container` - Content container
- `.article` - Grid container
- `.art-item` - Individual article card
- `.a-item` - Article content

### Footer
**File**: `src/Sass/_footer.scss`

**Key Features**:
- Dark background
- Multi-column layout
- Social icons

**Classes**:
- `footer` - Section wrapper
- `.footer` - Content container
- `.foot-item` - Footer columns
- `.foot-icon` - Logo and social icons
- `.foot` - Navigation links
- `.foot-invite` - CTA section
- `.foot-btn` - Donate button

---

## 🎯 Navigation Flow

### User Journey: Making a Donation

1. **Entry Points** (3 ways):
   - Click "Donate" in header navigation
   - Click "Donate Now" button in header
   - Click "Donate Now" button in Intro section
   - Click "Donate Now" button in Footer

2. **Smooth Scroll**:
   - `scrollToDonation()` function triggered
   - Smooth scroll to `#donation` section
   - Mobile menu closes (if open)

3. **Form Interaction**:
   - User selects donation type (one-time/monthly)
   - User enters name and email
   - User enters amount or clicks quick button
   - User optionally adds message
   - User submits form

4. **Form Submission**:
   - Form validation checks
   - Console log (for now)
   - Success alert shown
   - Form resets

### Navigation Links

```javascript
#home → Intro Section (Hero)
#about → Service Section (About/Services)
#donation → Donation Section (NEW)
#blog → Article Section (News/Events)
#contact → Footer Section (Contact Info)
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- **Header**: Hamburger menu, hidden donate button
- **Intro**: Stacked layout (image on top)
- **Service**: Single column grid
- **Donation**: Stacked layout (info cards → form)
- **Article**: Single column grid
- **Footer**: Stacked layout

### Tablet (768px - 1019px)
- **Header**: Full navigation visible
- **Intro**: Two-column layout
- **Service**: 2-column grid
- **Donation**: Stacked or 2-column (depends on content)
- **Article**: 2-column grid
- **Footer**: Multi-column layout

### Desktop (1020px+)
- **Header**: Full navigation with donate button
- **Intro**: Two-column layout (optimized)
- **Service**: 2-column grid (larger cards)
- **Donation**: 2-column layout (side-by-side)
- **Article**: 4-column grid
- **Footer**: Full multi-column layout

---

## 🔧 Customization Guide

### Adding a New Section

1. **Create Component**:
```javascript
// src/Components/NewSection.js
import React from "react";

const NewSection = () => {
  return (
    <section className="new-section" id="new-section">
      <div className="container">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Create Styles**:
```scss
// src/Sass/_new-section.scss
.new-section {
  width: 100%;
  padding: 4rem 1rem;
  
  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

3. **Import in main.scss**:
```scss
@import "new-section";
```

4. **Add to App.js**:
```javascript
import NewSection from "./Components/NewSection";

// In return statement
<NewSection />
```

5. **Add Navigation Link**:
```javascript
// In Header component
<li className="nav-item">
  <a href="#new-section">New Section</a>
</li>
```

### Modifying Colors

Edit `src/Sass/_general.scss`:
```scss
$Dark_Blue: hsl(233, 26%, 24%);    // Main text color
$Lime_Green: hsl(136, 65%, 51%);   // Accent color
$Grayish_Blue: hsl(233, 8%, 62%);  // Secondary text
```

### Changing Button Gradient

Find and replace in SCSS files:
```scss
background-image: linear-gradient(to right, #62cd13, #1d8805);
```

---

## 🐛 Common Issues & Solutions

### Issue: Styles Not Applying
**Solution**: 
```bash
npm run build:css
# or restart dev server
npm start
```

### Issue: Mobile Menu Not Closing
**Solution**: Check `isMenuOpen` state is being set to `false` in click handlers

### Issue: Smooth Scroll Not Working
**Solution**: Verify `scroll-behavior: smooth` in `_general.scss` and section IDs match href values

### Issue: Form Not Submitting
**Solution**: Check console for validation errors, ensure all required fields have values

---

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Load**: Implement lazy loading for images/videos
3. **Code Splitting**: Use React.lazy() for route-based splitting
4. **Memoization**: Use React.memo() for expensive components
5. **CSS Optimization**: Remove unused styles, minimize CSS

---

## ✅ Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Smooth scroll functions properly
- [ ] Mobile menu opens/closes
- [ ] Donation form validates input
- [ ] Form submission works
- [ ] Quick amount buttons set values

### Responsive Design
- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1019px)
- [ ] Test on desktop (1020px+)
- [ ] Test landscape orientation
- [ ] Check all breakpoints

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] ARIA labels present
- [ ] Focus states visible
- [ ] Color contrast sufficient

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

**Component Guide Complete** ✨

For more information, see:
- [README.md](./README.md) - Full documentation
- [QUICKSTART.md](./QUICKSTART.md) - Getting started
- [CHANGELOG.md](./CHANGELOG.md) - What's changed
- [IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md) - All improvements
