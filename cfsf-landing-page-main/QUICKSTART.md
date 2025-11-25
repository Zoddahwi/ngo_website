# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React and React DOM
- SASS compiler
- Tailwind CSS
- npm-run-all (for parallel script execution)

### Step 2: Start Development Server
```bash
npm start
```

This command will:
- Compile SCSS to CSS
- Watch for SCSS changes
- Start the React development server
- Open your browser at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## 📋 What's New?

### ✨ Donation Feature
Navigate to the **Donate** tab in the header or click any "Donate Now" button to access the new donation form. Features include:
- One-time or monthly donation options
- Quick amount selection
- Contact information collection
- Responsive design

### 🎨 Modern UI
- Smooth animations and transitions
- Hover effects on cards and buttons
- Sticky navigation header
- Mobile-friendly menu

### 📱 Fully Responsive
The site now works perfectly on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1020px+)
- Large screens (1440px+)

---

## 🛠️ Development Tips

### Watch SCSS Changes
If you're only working on styles:
```bash
npm run watch:css
```

### Build CSS Only
To compile SCSS without starting the server:
```bash
npm run build:css
```

### Project Structure
```
src/
├── Components/          # React components
│   ├── header.js       # Navigation
│   ├── Intro.js        # Hero section
│   ├── Service.js      # About/Services
│   ├── Donation.js     # NEW: Donation form
│   └── Article.js      # News/Blog
├── Sass/               # SCSS styles
│   ├── _donation.scss  # NEW: Donation styles
│   └── ...
└── App.js              # Main app
```

---

## 🎯 Key Features to Test

1. **Navigation**
   - Click navigation links to smooth scroll to sections
   - Test mobile menu (hamburger icon on small screens)
   - Verify sticky header stays visible when scrolling

2. **Donation Form**
   - Try selecting different donation types
   - Use quick amount buttons
   - Submit the form (currently logs to console)

3. **Responsive Design**
   - Resize browser window
   - Test on different devices
   - Check mobile menu functionality

4. **Hover Effects**
   - Hover over cards in Services and Articles sections
   - Hover over buttons to see animations
   - Check navigation link hover states

---

## 🔧 Customization

### Change Colors
Edit `src/Sass/_general.scss`:
```scss
$Dark_Blue: hsl(233, 26%, 24%);
$Lime_Green: hsl(136, 65%, 51%);
```

### Modify Donation Form
Edit `src/Components/Donation.js` to:
- Add more form fields
- Integrate payment gateway
- Change donation amounts
- Customize messaging

### Update Content
- **Hero Text**: `src/Components/Intro.js`
- **Services**: `src/Components/Service.js`
- **Articles**: `src/Components/Article.js`
- **Footer**: `src/Footer.js`

---

## 🐛 Troubleshooting

### SCSS Not Compiling?
```bash
npm install -g sass
npm run build:css
```

### Port 3000 Already in Use?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
PORT=3001 npm start
```

### Dependencies Not Installing?
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Need Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review [CHANGELOG.md](./CHANGELOG.md) for recent changes
- Inspect browser console for errors
- Verify Node.js version (v14+)

---

## 🎉 You're Ready!

The Chance for Souls Foundation website is now modernized with:
- ✅ Modern React code
- ✅ Responsive design
- ✅ Donation functionality
- ✅ Smooth animations
- ✅ Accessible markup

Happy coding! 💚
