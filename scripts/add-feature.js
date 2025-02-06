const fs = require('fs');
const path = require('path');

// Get the feature name from command line arguments
const featureName = process.env.npm_config_name;

if (!featureName) {
  console.error('❌ Please provide a feature name using --name=<feature-name>');
  process.exit(1);
}

// Define the feature folder structure
const featureBasePath = path.join('src/feature', featureName);
const folders = ['types', 'components', 'hooks', 'ui', 'utils'];
const files = {
  'index.ts': folders
    .map((folder) => `export * from "./${folder}";`)
    .join('\n'), // Main index.ts exports all folders
};

// Add `index.ts` inside each folder to ensure they export everything within them
folders.forEach((folder) => {
  files[`${folder}/index.ts`] = `export * from "./${folder}";`;
});

// Function to create folders and files
function createFeature() {
  if (fs.existsSync(featureBasePath)) {
    console.error(`❌ Feature "${featureName}" already exists.`);
    process.exit(1);
  }

  // Create base folder
  fs.mkdirSync(featureBasePath, { recursive: true });

  // Create subfolders
  folders.forEach((folder) => fs.mkdirSync(path.join(featureBasePath, folder)));

  // Create files
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(featureBasePath, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf-8');
  });

  console.log(`✅ Feature "${featureName}" created successfully!`);
}

// Run the script
createFeature();
