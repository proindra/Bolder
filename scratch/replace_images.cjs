const fs = require('fs');
const path = require('path');

const icons = [
  '/assets/icons/skeuomorphic_folder.png',
  '/assets/icons/anime_shonen.png',
  '/assets/icons/anime_cyber_moon.png',
  '/assets/icons/starry_night.png',
  '/assets/icons/flame_folder.png',
  '/assets/icons/zen_bamboo.png',
  '/assets/icons/anime_pink_kawaii.png'
];

const dir = 'c:\\Users\\prajw\\OneDrive\\Desktop\\gfvegvf\\my-app\\src\\pages';
let iconIndex = 0;

fs.readdirSync(dir).forEach(file => {
  if(file.endsWith('.tsx')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    
    content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com\/[^"]+"/g, () => {
      const selectedIcon = icons[iconIndex % icons.length];
      iconIndex++;
      return `src="${selectedIcon}"`;
    });

    // Also handle contribution.usercontent.google.com if any
    content = content.replace(/src="https:\/\/contribution\.usercontent\.google\.com\/[^"]+"/g, () => {
      const selectedIcon = icons[iconIndex % icons.length];
      iconIndex++;
      return `src="${selectedIcon}"`;
    });

    fs.writeFileSync(p, content);
    console.log(`Replaced images in ${file}`);
  }
});
