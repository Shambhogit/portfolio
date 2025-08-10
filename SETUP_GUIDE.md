# 🚀 Step-by-Step Guide: Run Your Portfolio on Your PC

## Method 1: Quick Setup (Recommended for Development)

### Prerequisites
- **Node.js** (version 16 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Download from [git-scm.com](https://git-scm.com/)
- **Code Editor** - VS Code recommended from [code.visualstudio.com](https://code.visualstudio.com/)

### Step 1: Clone/Download Your Project
```bash
# Option A: If you have Git URL (after exporting to GitHub)
git clone <YOUR_GITHUB_URL>
cd <YOUR_PROJECT_NAME>

# Option B: Download ZIP from Lovable and extract it
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
- Open your browser
- Go to `http://localhost:8080`
- Your portfolio will be live with hot reloading!

---

## Method 2: Production Build (For Final Deployment)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Method 3: Mobile Development (Optional)

If you want to run this as a mobile app:

### Install Capacitor Dependencies
```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
```

### Initialize Capacitor
```bash
npx cap init
```

### Add Mobile Platforms
```bash
# For Android
npx cap add android

# For iOS (Mac only)
npx cap add ios
```

### Build and Sync
```bash
npm run build
npx cap sync
```

### Run on Mobile
```bash
# Android (requires Android Studio)
npx cap run android

# iOS (requires Xcode on Mac)
npx cap run ios
```

---

## Troubleshooting

### Common Issues & Solutions

**Node.js not found:**
- Download and install Node.js from nodejs.org
- Restart your terminal/command prompt

**Port 8080 already in use:**
- The app will automatically find another port (like 8081)
- Or kill the process using port 8080

**Build errors:**
- Delete `node_modules` folder
- Run `npm install` again
- Clear browser cache

**Slow performance on mobile:**
- The app is optimized for all devices
- On older devices, some 3D effects may be reduced automatically

---

## File Structure
```
your-portfolio/
├── src/
│   ├── components/          # All React components
│   ├── pages/              # Main pages
│   ├── lib/                # Utilities
│   └── index.css           # Global styles & design system
├── public/                 # Static assets
├── package.json           # Dependencies
└── README.md              # This guide
```

---

## Customization Quick Start

### Update Personal Info
1. Open `src/components/Hero.tsx`
2. Change "Alex Johnson" to your name
3. Update the description and links

### Change Colors
1. Open `src/index.css`
2. Modify the CSS variables in the `:root` section
3. All components will automatically update

### Add Your Projects
1. Open `src/components/Projects.tsx`
2. Replace the placeholder projects with your own
3. Add your GitHub links and live demo URLs

### Update Skills
1. Open `src/components/Skills.tsx`
2. Modify the `skillCategories` array
3. Adjust skill levels and add/remove technologies

---

## Performance Tips

✅ **Already Optimized For:**
- Mobile devices (phones, tablets)
- Desktop computers
- Large screens (4K, TVs)
- Slow internet connections
- Touch and mouse interactions

✅ **Built-in Features:**
- Responsive text scaling
- Optimized 3D effects for mobile
- Lazy loading
- Smooth scrolling
- Cross-browser compatibility

---

## Need Help?

1. **Check the console** - Press F12 in your browser
2. **Clear cache** - Hard refresh with Ctrl+Shift+R
3. **Update dependencies** - Run `npm update`
4. **Restart dev server** - Stop with Ctrl+C, then `npm run dev` again

Your portfolio is now ready to impress! 🎯