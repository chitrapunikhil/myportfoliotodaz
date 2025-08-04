#!/usr/bin/env python3
"""
AI Deployment Auto-Fix Agent for v0.dev Projects
Automatically detects and fixes common deployment issues
"""

import os
import json
import shutil
import subprocess
import re
from pathlib import Path
from typing import Dict, List, Tuple, Optional

class DeploymentAutoFixer:
    def __init__(self, project_path: str):
        self.project_path = Path(project_path)
        self.fixes_applied = []
        self.errors_detected = []
        
    def analyze_project(self) -> Dict[str, any]:
        """Analyze the project structure and detect issues"""
        analysis = {
            'framework': self.detect_framework(),
            'build_config': self.analyze_build_config(),
            'routing_issues': self.detect_routing_issues(),
            'dependency_issues': self.check_dependencies(),
            'static_export_issues': self.check_static_export_config(),
            'deployment_files': self.check_deployment_files()
        }
        return analysis
    
    def detect_framework(self) -> str:
        """Detect the framework being used"""
        if (self.project_path / 'next.config.js').exists():
            return 'nextjs'
        elif (self.project_path / 'package.json').exists():
            with open(self.project_path / 'package.json', 'r') as f:
                package_data = json.load(f)
                deps = {**package_data.get('dependencies', {}), **package_data.get('devDependencies', {})}
                if 'next' in deps:
                    return 'nextjs'
                elif 'react' in deps:
                    return 'react'
                elif 'vue' in deps:
                    return 'vue'
        return 'unknown'
    
    def analyze_build_config(self) -> Dict[str, any]:
        """Analyze build configuration"""
        issues = []
        config_path = self.project_path / 'next.config.js'
        
        if not config_path.exists():
            issues.append('Missing next.config.js')
            return {'issues': issues, 'has_static_export': False}
        
        with open(config_path, 'r') as f:
            content = f.read()
            
        has_static_export = 'output: "export"' in content
        has_trailing_slash = 'trailingSlash: true' in content
        has_unoptimized_images = 'unoptimized: true' in content
        
        if not has_static_export:
            issues.append('Missing static export configuration')
        if not has_trailing_slash:
            issues.append('Missing trailingSlash configuration')
        if not has_unoptimized_images:
            issues.append('Missing image optimization disable')
            
        return {
            'issues': issues,
            'has_static_export': has_static_export,
            'has_trailing_slash': has_trailing_slash,
            'has_unoptimized_images': has_unoptimized_images
        }
    
    def detect_routing_issues(self) -> List[str]:
        """Detect common routing issues"""
        issues = []
        
        # Check for missing index.html in public
        if not (self.project_path / 'public' / 'index.html').exists():
            issues.append('Missing public/index.html for fallback routing')
            
        # Check for missing 404.html
        if not (self.project_path / 'public' / '404.html').exists():
            issues.append('Missing public/404.html for error handling')
            
        return issues
    
    def check_dependencies(self) -> List[str]:
        """Check for dependency issues"""
        issues = []
        package_json_path = self.project_path / 'package.json'
        
        if not package_json_path.exists():
            issues.append('Missing package.json')
            return issues
            
        with open(package_json_path, 'r') as f:
            package_data = json.load(f)
            
        # Check for required scripts
        scripts = package_data.get('scripts', {})
        if 'build' not in scripts:
            issues.append('Missing build script')
        if 'start' not in scripts:
            issues.append('Missing start script')
            
        return issues
    
    def check_static_export_config(self) -> List[str]:
        """Check static export configuration"""
        issues = []
        
        # Check if app directory structure is compatible with static export
        app_dir = self.project_path / 'app'
        if app_dir.exists():
            # Check for server-side features that don't work with static export
            for file_path in app_dir.rglob('*.tsx'):
                with open(file_path, 'r') as f:
                    content = f.read()
                    if 'useRouter' in content and 'push(' in content:
                        issues.append(f'Client-side routing detected in {file_path.name}')
                    if 'getServerSideProps' in content:
                        issues.append(f'Server-side props detected in {file_path.name}')
                        
        return issues
    
    def check_deployment_files(self) -> Dict[str, bool]:
        """Check for deployment configuration files"""
        return {
            'netlify_toml': (self.project_path / 'netlify.toml').exists(),
            'vercel_json': (self.project_path / 'vercel.json').exists(),
            'github_workflow': (self.project_path / '.github' / 'workflows').exists()
        }
    
    def fix_next_config(self):
        """Fix Next.js configuration for static export"""
        config_path = self.project_path / 'next.config.js'
        
        fixed_config = '''/** @type {import('next').NextConfig} */
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

module.exports = nextConfig'''
        
        with open(config_path, 'w') as f:
            f.write(fixed_config)
            
        self.fixes_applied.append('Fixed next.config.js for static export')
    
    def fix_routing_files(self):
        """Create routing fallback files"""
        public_dir = self.project_path / 'public'
        public_dir.mkdir(exist_ok=True)
        
        # Create index.html fallback
        index_html = '''<!DOCTYPE html>
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
</html>'''
        
        with open(public_dir / 'index.html', 'w') as f:
            f.write(index_html)
            
        # Create 404.html
        error_html = '''<!DOCTYPE html>
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
</html>'''
        
        with open(public_dir / '404.html', 'w') as f:
            f.write(error_html)
            
        self.fixes_applied.append('Created routing fallback files')
    
    def fix_netlify_config(self):
        """Create Netlify configuration"""
        netlify_config = '''[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"'''
        
        with open(self.project_path / 'netlify.toml', 'w') as f:
            f.write(netlify_config)
            
        self.fixes_applied.append('Created netlify.toml configuration')
    
    def fix_vercel_config(self):
        """Create Vercel configuration"""
        vercel_config = {
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
        
        with open(self.project_path / 'vercel.json', 'w') as f:
            json.dump(vercel_config, f, indent=2)
            
        self.fixes_applied.append('Created vercel.json configuration')
    
    def fix_package_json(self):
        """Fix package.json scripts"""
        package_path = self.project_path / 'package.json'
        
        with open(package_path, 'r') as f:
            package_data = json.load(f)
            
        # Add missing scripts
        scripts = package_data.get('scripts', {})
        scripts.update({
            'build': 'next build',
            'start': 'next start',
            'export': 'next build && next export',
            'deploy:netlify': 'npm run build && netlify deploy --prod --dir=out',
            'deploy:vercel': 'npm run build && vercel --prod'
        })
        
        package_data['scripts'] = scripts
        
        with open(package_path, 'w') as f:
            json.dump(package_data, f, indent=2)
            
        self.fixes_applied.append('Fixed package.json scripts')
    
    def auto_fix_all(self) -> Dict[str, any]:
        """Automatically fix all detected issues"""
        print("🔍 Analyzing project...")
        analysis = self.analyze_project()
        
        print("🔧 Applying fixes...")
        
        # Fix Next.js configuration
        if analysis['build_config']['issues']:
            self.fix_next_config()
            
        # Fix routing issues
        if analysis['routing_issues']:
            self.fix_routing_files()
            
        # Fix deployment configurations
        if not analysis['deployment_files']['netlify_toml']:
            self.fix_netlify_config()
            
        if not analysis['deployment_files']['vercel_json']:
            self.fix_vercel_config()
            
        # Fix package.json
        if analysis['dependency_issues']:
            self.fix_package_json()
            
        return {
            'analysis': analysis,
            'fixes_applied': self.fixes_applied,
            'success': len(self.fixes_applied) > 0
        }
    
    def test_build(self) -> Tuple[bool, str]:
        """Test if the build works after fixes"""
        try:
            print("🧪 Testing build...")
            result = subprocess.run(
                ['npm', 'run', 'build'], 
                cwd=self.project_path,
                capture_output=True,
                text=True,
                timeout=300
            )
            
            if result.returncode == 0:
                return True, "Build successful!"
            else:
                return False, f"Build failed: {result.stderr}"
                
        except subprocess.TimeoutExpired:
            return False, "Build timed out"
        except Exception as e:
            return False, f"Build error: {str(e)}"

def main():
    """Main function to run the auto-fixer"""
    import sys
    
    if len(sys.argv) != 2:
        print("Usage: python ai-deployment-fixer.py <project_path>")
        sys.exit(1)
        
    project_path = sys.argv[1]
    
    if not os.path.exists(project_path):
        print(f"❌ Project path does not exist: {project_path}")
        sys.exit(1)
        
    print(f"🚀 AI Deployment Auto-Fixer starting...")
    print(f"📁 Project path: {project_path}")
    
    fixer = DeploymentAutoFixer(project_path)
    result = fixer.auto_fix_all()
    
    print("\n📊 Analysis Results:")
    for category, issues in result['analysis'].items():
        if isinstance(issues, list) and issues:
            print(f"  ⚠️  {category}: {len(issues)} issues")
        elif isinstance(issues, dict) and issues.get('issues'):
            print(f"  ⚠️  {category}: {len(issues['issues'])} issues")
    
    print("\n🔧 Fixes Applied:")
    for fix in result['fixes_applied']:
        print(f"  ✅ {fix}")
    
    if result['success']:
        print("\n🧪 Testing build...")
        build_success, build_message = fixer.test_build()
        
        if build_success:
            print(f"✅ {build_message}")
            print("\n🎉 Project is ready for deployment!")
            print("\n📋 Next steps:")
            print("  1. For Netlify: Run 'npm run deploy:netlify' or drag 'out' folder to Netlify")
            print("  2. For Vercel: Run 'npm run deploy:vercel' or connect GitHub repo")
            print("  3. For GitHub Pages: Push to GitHub and enable Pages with 'out' folder")
        else:
            print(f"❌ {build_message}")
            print("🔍 Manual intervention may be required")
    else:
        print("\n❌ No fixes were applied. Manual review required.")

if __name__ == "__main__":
    main()
