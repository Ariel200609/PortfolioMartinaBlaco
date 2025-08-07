#!/bin/bash

# Build the project
npm run build

# Create a new branch for deployment
git checkout -b gh-pages

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin gh-pages

# Switch back to main branch
git checkout main

# Delete the gh-pages branch locally
git branch -D gh-pages

echo "Deployment completed! Check your GitHub repository settings to enable GitHub Pages." 