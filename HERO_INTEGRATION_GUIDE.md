# Hero Section Integration Guide

## Overview
This guide explains the scroll-expansion hero section integration for COZ COMFORT. The new hero section features an immersive scroll-to-expand video/image experience.

## What Was Done

### 1. Backup Created ✅
Your original hero section has been safely backed up to:
- **Location**: `src/components/Hero/Hero.backup.jsx`
- **Use**: Import this file if you want to switch back to the original hero

### 2. Dependencies Installed ✅
- **framer-motion**: Animation library for smooth transitions

### 3. New Component Structure ✅
```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx (NEW - uses ScrollExpandMedia)
│   │   └── Hero.backup.jsx (YOUR ORIGINAL)
│   └── ui/
│       └── scroll-expansion-hero.jsx (NEW)
```

### 4. Files Created
1. **`src/components/ui/scroll-expansion-hero.jsx`**
   - Main scroll expansion component
   - Handles scroll/touch interactions
   - Supports both video and image media types
   - Responsive design for mobile and desktop

2. **`src/components/Hero/Hero.jsx`** (UPDATED)
   - New hero implementation using ScrollExpandMedia
   - Uses existing media assets from your public folder
   - Includes custom content section

3. **`src/components/Hero/Hero.backup.jsx`** (BACKUP)
   - Your original hero section
   - Safe to restore at any time

## How the New Hero Works

### Features
- **Scroll-to-Expand**: As users scroll, a video/image expands from small to fullscreen
- **Interactive**: Supports mouse wheel and touch gestures
- **Smooth Animations**: Powered by framer-motion
- **Responsive**: Adapts to mobile and desktop screens
- **Content Section**: Reveals additional content after full expansion

### User Experience
1. Page loads with centered video in small size
2. User scrolls down → video expands progressively
3. At full expansion → additional content section appears
4. User can scroll back up → video shrinks back to small size

## Current Configuration

The new hero uses these assets from your `/public` folder:
- **Video**: `/video.mp4` (main hero video)
- **Poster**: `/wilhelm-gunkel-_rD1pJwWpbU-unsplash.jpg` (video placeholder)
- **Background**: `/chuttersnap-BNBA1h-NgdY-unsplash.jpg` (background image)

## Switching Back to Original Hero

If you want to restore your original hero section:

### Method 1: Simple Restore
```bash
# In your project directory
cd src/components/Hero
cp Hero.backup.jsx Hero.jsx
```

### Method 2: Manual Edit
Open `src/components/Hero/Hero.jsx` and replace its content with the content from `Hero.backup.jsx`

## Customization Options

### Change Media Type
In `src/components/Hero/Hero.jsx`, line 69:
```jsx
<ScrollExpandMedia
  mediaType='video'  // Change to 'image' for static images
  // ... other props
/>
```

### Change Media Assets
Update these props in the `<ScrollExpandMedia>` component:
```jsx
mediaSrc='/video.mp4'           // Your video or image path
posterSrc='/your-poster.jpg'    // Video poster image
bgImageSrc='/your-bg.jpg'       // Background image
```

### Change Title and Text
```jsx
title='Build Where You Grow'    // Main title (splits into two lines)
date='COZ COMFORT'              // Top text
scrollToExpand='Scroll to Explore'  // Bottom instruction text
```

### Enable Text Blend Mode
```jsx
textBlend={true}  // Makes text blend with background for unique effect
```

### Customize Content Section
Edit the `MediaContent` component in `src/components/Hero/Hero.jsx` (lines 4-57) to change what appears after the video expands.

## Available Props for ScrollExpandMedia

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mediaType` | `'video' \| 'image'` | `'video'` | Type of media to display |
| `mediaSrc` | `string` | required | Path to video/image file |
| `posterSrc` | `string` | optional | Video poster image |
| `bgImageSrc` | `string` | required | Background image |
| `title` | `string` | optional | Main title text |
| `date` | `string` | optional | Top subtitle text |
| `scrollToExpand` | `string` | optional | Scroll instruction text |
| `textBlend` | `boolean` | `false` | Enable mix-blend-difference for text |
| `children` | `ReactNode` | optional | Content to show after expansion |

## Testing

The development server is running at:
- **URL**: http://localhost:5174/

### What to Test
1. ✅ Scroll down → video should expand smoothly
2. ✅ Scroll up → video should shrink back
3. ✅ Full expansion → content section should appear
4. ✅ Mobile touch gestures → should work on touch devices
5. ✅ Video playback → should autoplay and loop

## Project Structure

```
coz_comfort_new/
├── public/
│   ├── video.mp4
│   ├── wilhelm-gunkel-_rD1pJwWpbU-unsplash.jpg
│   ├── chuttersnap-BNBA1h-NgdY-unsplash.jpg
│   └── ... (other assets)
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx (NEW)
│   │   │   └── Hero.backup.jsx (BACKUP)
│   │   └── ui/
│   │       └── scroll-expansion-hero.jsx (NEW)
│   └── App.jsx
└── package.json (updated with framer-motion)
```

## Troubleshooting

### Issue: Video not playing
- Check that `/video.mp4` exists in your public folder
- Browser autoplay policies require videos to be muted (already configured)

### Issue: Images not loading
- Verify image paths in the public folder
- Check browser console for 404 errors

### Issue: Scroll not working
- Make sure other scroll listeners aren't interfering
- Check browser console for JavaScript errors

### Issue: Want original hero back
- Follow instructions in "Switching Back to Original Hero" section above

## Additional Resources

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Component Demo**: See the original prompt for demo examples

## Support

If you need to modify the behavior:
1. Edit `src/components/ui/scroll-expansion-hero.jsx` for scroll mechanics
2. Edit `src/components/Hero/Hero.jsx` for content and configuration
3. Refer to your backup at `src/components/Hero/Hero.backup.jsx` for original code

---

**Created**: October 14, 2025
**Project**: COZ COMFORT - Industrial Solutions
**Component**: Scroll Expansion Hero Section
