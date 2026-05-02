const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixPaths(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            if (content.includes('src="/assets/')) {
                content = content.replace(/src="\/assets\//g, 'src="./assets/');
                fs.writeFileSync(fullPath, content);
                console.log(`Fixed paths in ${fullPath}`);
            }
        }
    }
}

fixPaths(path.join(__dirname, '../src/pages'));
