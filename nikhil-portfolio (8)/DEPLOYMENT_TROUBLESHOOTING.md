# 🚀 Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. "Page Not Found" Error

**Symptoms:**
- Netlify/Vercel shows "Page not found" 
- URL works locally but not in production

**Causes:**
- Missing static export configuration
- Incorrect routing setup
- Missing fallback files

**Solutions:**
\`\`\`bash
# Run the auto-fix script
python scripts/ai-deployment-fixer.py .

# Or use the quick fix
chmod +x scripts/quick-deploy-fix.sh
./scripts/quick-deploy-fix.sh
\`\`\`

### 2. Build Failures

**Symptoms:**
- "Build failed" messages
- TypeScript errors
- ESLint errors

**Solutions:**
- Update `next.config.js` to ignore build errors
- Ensure all dependencies are installed
- Check for syntax errors in code

### 3. Image Loading Issues

**Symptoms:**
- Images don't load in production
- "Image optimization" errors

**Solutions:**
- Add `unoptimized: true` to Next.js config
- Use relative paths for images
- Place images in `public` directory

### 4. Routing Problems

**Symptoms:**
- Direct URL access fails
- Refresh causes 404 errors

**Solutions:**
- Add proper redirects in `netlify.toml`
- Configure rewrites in `vercel.json`
- Create fallback HTML files

## Auto-Fix Tools

### AI Deployment Fixer (Python)
\`\`\`bash
python scripts/ai-deployment-fixer.py /path/to/project
\`\`\`

### Quick Deploy Fix (Bash)
\`\`\`bash
chmod +x scripts/quick-deploy-fix.sh
./scripts/quick-deploy-fix.sh
\`\`\`

## Manual Fixes

### Next.js Configuration
\`\`\`javascript
// next.config.js
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}
\`\`\`

### Netlify Configuration
\`\`\`toml
# netlify.toml
[build]
  publish = "out"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

### Vercel Configuration
\`\`\`json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "rewrites": [{"source": "/(.*)", "destination": "/index.html"}]
}
\`\`\`

## Testing Checklist

- [ ] `npm run build` succeeds
- [ ] `out` directory is created
- [ ] `out/index.html` exists
- [ ] Images load correctly
- [ ] All routes work
- [ ] Mobile responsive
- [ ] Performance optimized

## Support

If auto-fix doesn't work:
1. Check build logs for specific errors
2. Verify all files are present
3. Test locally with `npm run build && npx serve out`
4. Contact support with error details
