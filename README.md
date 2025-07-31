# Memory Lane - National GF Day Matching Game

A beautiful, interactive memory matching game perfect for National GF Day! Players match text descriptions to photos, creating a romantic journey through your shared memories.

## Features

- 🎮 **Interactive Matching Game**: Match text descriptions to photos
- ⏱️ **Timer & Statistics**: Track moves, time, and pairs found
- 💝 **Romantic Design**: Beautiful gradient backgrounds and elegant typography
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- 🎯 **Hint System**: Get help when stuck
- 🏆 **Win Celebration**: Special congratulations modal when completed

## How to Customize

### 1. Personalize the Memory Pairs

Edit the `memoryPairs` array in `script.js` to include your own memories:

```javascript
this.memoryPairs = [
    {
        text: "Our first date at the coffee shop",
        image: "https://your-image-url-here.com/image1.jpg"
    },
    {
        text: "That time we got lost hiking",
        image: "https://your-image-url-here.com/image2.jpg"
    },
    // Add more memories...
];
```

### 2. Add Your Own Photos

You can use:
- **Online image URLs**: Paste direct links to images
- **Local images**: Place images in an `images/` folder and reference them as `"images/photo1.jpg"`
- **Photo hosting services**: Upload to services like Imgur, Google Photos (with sharing enabled), or Dropbox

### 3. Customize the Text

Make the descriptions personal and meaningful:
- "Our first kiss under the stars"
- "The time we cooked together and made a mess"
- "Our road trip to [specific place]"
- "When you surprised me with [specific gift/event]"

### 4. Change the Title and Theme

Edit `index.html` to change the title and subtitle:
```html
<h1 class="title">Memory Lane</h1>
<p class="subtitle">A special matching game for National GF Day</p>
```

## How to Deploy

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose your main branch
5. Your game will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get a shareable link instantly

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

### Option 4: Local Sharing
1. Open `index.html` in a web browser
2. Use a local server (like Live Server in VS Code)
3. Share the localhost URL

## File Structure

```
memory-lane-game/
├── index.html          # Main HTML file
├── styles.css          # Beautiful CSS styling
├── script.js           # Game logic and memory pairs
└── README.md           # This file
```

## Tips for the Perfect Memory Lane

1. **Choose Meaningful Memories**: Pick moments that are special to both of you
2. **High-Quality Photos**: Use clear, well-lit images
3. **Descriptive Text**: Make the text specific and personal
4. **Mix of Memories**: Include different types of memories (dates, trips, everyday moments)
5. **Test the Game**: Make sure all images load properly before sharing

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **Responsive Design**: Works on all devices
- **Modern CSS**: Uses gradients, animations, and glassmorphism effects
- **Accessible**: Keyboard navigation and screen reader friendly

## Customization Examples

### Romantic Theme
```javascript
{
    text: "The night you said 'I love you' for the first time",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
}
```

### Adventure Theme
```javascript
{
    text: "Our spontaneous road trip to the mountains",
    image: "https://images.unsplash.com/photo-1551632811-561732d1b306"
}
```

### Everyday Moments
```javascript
{
    text: "Sunday morning coffee in bed",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
}
```

Happy National GF Day! 💕 