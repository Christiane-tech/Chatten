const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replaceInFile = (filePath) => {
  const ext = path.extname(filePath);
  if (ext !== '.jsx' && ext !== '.css' && ext !== '.js') return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Accents
  content = content.replace(/cyan-/g, 'purple-');
  content = content.replace(/pink-500/g, 'fuchsia-500');

  // Background and Text colors
  content = content.replace(/slate-900/g, 'indigo-950');
  content = content.replace(/slate-800/g, 'indigo-900');
  content = content.replace(/slate-700/g, 'indigo-800');
  content = content.replace(/slate-600/g, 'indigo-700');
  content = content.replace(/slate-500/g, 'indigo-600');
  content = content.replace(/slate-400/g, 'indigo-300');
  content = content.replace(/slate-300/g, 'indigo-200');
  content = content.replace(/slate-200/g, 'indigo-100');
  content = content.replace(/slate-100/g, 'indigo-50');

  // Hex colors in BorderAnimatedContainer
  content = content.replace(/#172033/g, '#1e1b4b'); // deep indigo

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath);
    } else {
      replaceInFile(filePath);
    }
  });
};

walkSync(directoryPath);
console.log("Done updating theme colors!");
