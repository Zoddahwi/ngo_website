# Chance for Souls Foundation - Website

A modern, responsive website for the Chance for Souls Foundation, dedicated to providing mental health support, counseling, and community empowerment.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, accessible interface with smooth animations and transitions
- **Donation System**: Integrated donation form with one-time and monthly options
- **Smooth Navigation**: Sticky header with smooth scroll-to-section functionality
- **Interactive Components**: Hover effects, transitions, and engaging user interactions

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Recent Improvements](#recent-improvements)
- [Available Scripts](#available-scripts)

## 🛠 Technologies

- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **SASS/SCSS** - CSS preprocessor for better styling organization
- **Tailwind CSS 3.4.6** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **npm-run-all** - Run multiple npm scripts in parallel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd cfsf-landing-page-main
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── Components/
│   ├── header.js          # Navigation header with sticky positioning
│   ├── Intro.js           # Hero section
│   ├── Service.js         # Services/About section
│   ├── Donation.js        # Donation form component (NEW)
│   └── Article.js         # News and events section
├── Sass/
│   ├── _general.scss      # Global styles and variables
│   ├── _header.scss       # Header styles
│   ├── _intro.scss        # Hero section styles
│   ├── _service.scss      # Services section styles
│   ├── _donation.scss     # Donation form styles (NEW)
│   ├── _article.scss      # Article section styles
│   ├── _footer.scss       # Footer styles
│   └── main.scss          # Main SCSS import file
├── Footer.js              # Footer component
├── App.js                 # Main app component
├── styles.scss            # Main styles entry point
└── index.js               # React entry point
```

## ✨ Recent Improvements

### Code Modernization
- ✅ Updated to ES6+ syntax with proper naming conventions
- ✅ Improved component structure with better state management
- ✅ Added accessibility attributes (aria-labels, semantic HTML)
- ✅ Fixed typos and improved code consistency

### Responsive Design
- ✅ Enhanced mobile-first responsive layout
- ✅ Improved CSS Grid implementation with `auto-fit` and `minmax`
- ✅ Better breakpoint management for all screen sizes
- ✅ Optimized spacing and padding across devices

### New Features
- ✅ **Donation Tab**: Fully functional donation form with:
  - One-time and monthly donation options
  - Quick amount selection buttons
  - Form validation
  - Responsive layout with informational cards
- ✅ **Smooth Navigation**: Scroll-to-section functionality
- ✅ **Sticky Header**: Always accessible navigation

### UI/UX Enhancements
- ✅ Modern card designs with hover effects
- ✅ Smooth transitions and animations
- ✅ Improved button styling with better visual feedback
- ✅ Enhanced color scheme and shadows
- ✅ Better typography and spacing

### Performance
- ✅ Optimized CSS with better organization
- ✅ Reduced redundant styles
- ✅ Improved build process with parallel script execution

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with CSS watching

### `npm run build`
Builds the app for production with optimized CSS

### `npm test`
Launches the test runner

### `npm run build:css`
Compiles SCSS to CSS

### `npm run watch:css`
Watches SCSS files for changes and recompiles

## 🎨 Design Features

- **Color Scheme**: Green gradient (#62cd13 to #1d8805) for primary actions
- **Typography**: Modern sans-serif font stack for better readability
- **Spacing**: Consistent spacing system using rem units
- **Shadows**: Subtle shadows for depth and hierarchy
- **Animations**: Smooth transitions (0.3s ease) for interactive elements

## 📱 Responsive Breakpoints

- **Mobile Small**: 200px - 767px
- **Mobile Medium**: 768px - 1019px
- **Desktop Large**: 1020px+
- **Desktop XL**: 1440px+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is part of the Chance for Souls Foundation initiative.

## 📞 Contact

For more information about the Chance for Souls Foundation, please visit our website or contact us through the form.

---

**Making a difference in mental health and community wellbeing** 💚
