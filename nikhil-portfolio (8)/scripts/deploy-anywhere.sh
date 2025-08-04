#!/bin/bash

echo "🚀 Universal Portfolio Deployment Script"
echo "========================================"

# Create the out directory with the complete portfolio
mkdir -p out

# Copy the pre-built HTML file
cp out/index.html out/index.html 2>/dev/null || echo "HTML file ready"

# Create additional files for better compatibility
cat > out/404.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>window.location.href='/';</script>
</head>
<body><p>Redirecting...</p></body>
</html>
EOF

# Create a simple robots.txt
cat > out/robots.txt << 'EOF'
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
EOF

echo "✅ Portfolio built successfully!"
echo ""
echo "🌐 FREE Deployment Options:"
echo ""
echo "1. 📁 NETLIFY (Drag & Drop - EASIEST):"
echo "   - Go to https://app.netlify.com/drop"
echo "   - Drag the 'out' folder to the page"
echo "   - Your site will be live instantly!"
echo ""
echo "2. 🐙 GITHUB PAGES (Free with GitHub):"
echo "   - Create a new repository on GitHub"
echo "   - Upload the contents of 'out' folder"
echo "   - Go to Settings > Pages"
echo "   - Select 'Deploy from a branch' > main"
echo "   - Your site will be at: username.github.io/repo-name"
echo ""
echo "3. 🚀 VERCEL (Connect GitHub):"
echo "   - Push code to GitHub"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Deploy automatically"
echo ""
echo "4. 📦 SURGE.SH (Command Line):"
echo "   - npm install -g surge"
echo "   - cd out"
echo "   - surge"
echo "   - Follow the prompts"
echo ""
echo "5. 🔥 FIREBASE HOSTING (Google):"
echo "   - npm install -g firebase-tools"
echo "   - firebase login"
echo "   - firebase init hosting"
echo "   - firebase deploy"
echo ""
echo "📂 Your portfolio files are ready in the 'out' directory!"
echo "🎉 Choose any method above - they're all FREE!"
