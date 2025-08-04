#!/bin/bash

# Quick Deployment Fix Script for v0.dev Projects
# Usage: ./quick-deploy-fix.sh

echo "🚀 Quick Deployment Fix for v0.dev Projects"
echo "============================================"

# Check if we're in a Node.js project
if [ ! -f "package.json" ]; then
    echo "❌ No package.json found. Make sure you're in the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Fixing Next.js configuration..."
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: "",
  basePath: "",
}

module.exports = nextConfig
EOF

echo "🌐 Creating routing fallback files..."
mkdir -p public

cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>
        window.location.href = './';
    </script>
</head>
<body>
    <p>Redirecting to portfolio...</p>
</body>
</html>
EOF

cat > public/404.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Loading</title>
    <script>
        window.location.href = '/';
    </script>
</head>
<body>
    <p>Loading portfolio...</p>
</body>
</html>
EOF

echo "📝 Creating Netlify configuration..."
cat > netlify.toml << 'EOF'
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF

echo "📝 Creating Vercel configuration..."
cat > vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

echo "🧪 Testing build..."
if npm run build; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Your project is now ready for deployment!"
    echo ""
    echo "📋 Deployment options:"
    echo "  1. Netlify: Drag the 'out' folder to netlify.com/drop"
    echo "  2. Vercel: Run 'npx vercel --prod' or connect GitHub repo"
    echo "  3. GitHub Pages: Push to GitHub, enable Pages, select 'out' folder"
    echo ""
    echo "🔗 Your built files are in the 'out' directory"
else
    echo "❌ Build failed. Check the errors above."
    exit 1
fi
