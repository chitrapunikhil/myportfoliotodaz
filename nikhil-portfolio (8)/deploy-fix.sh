#!/bin/bash

echo "🔧 Creating bulletproof deployment structure..."

# Remove any existing out directory
rm -rf out

# Create fresh out directory
mkdir -p out

# Create the main index.html file directly in out directory
cat > out/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nikhil Chitrapu - Engineering & Digital Marketing Professional</title>
    <meta name="description" content="Transforming Technical Expertise into Digital Success with AI-Powered Efficiency">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: system-ui, -apple-system, sans-serif; 
            line-height: 1.6; 
            color: #333;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .hero { padding: 4rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: #1e293b; }
        .hero p { font-size: 1.25rem; color: #64748b; margin-bottom: 2rem; }
        .btn { 
            display: inline-block; 
            padding: 0.75rem 2rem; 
            background: #3b82f6; 
            color: white; 
            text-decoration: none; 
            border-radius: 0.5rem; 
            margin: 0.5rem;
            transition: all 0.3s;
        }
        .btn:hover { background: #2563eb; transform: translateY(-2px); }
        .skills { padding: 4rem 0; background: white; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .skill-card { padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .experience { padding: 4rem 0; }
        .exp-card { background: white; padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .contact { padding: 4rem 0; background: #1e293b; color: white; text-align: center; }
        .contact-info { display: flex; justify-content: center; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
        .contact-item { display: flex; align-items: center; gap: 0.5rem; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .contact-info { flex-direction: column; align-items: center; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Nikhil Chitrapu</h1>
            <p>Engineering & Digital Marketing Professional | AI Generalist</p>
            <p>Transforming Technical Expertise into Digital Success with AI-Powered Efficiency</p>
            <a href="#contact" class="btn">Contact Me</a>
            <a href="#" class="btn" style="background: #6b7280;">Download Resume</a>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 1rem;">Core Competencies</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3 style="color: #3b82f6; margin-bottom: 1rem;">Technical Skills</h3>
                    <ul style="list-style: none;">
                        <li style="margin-bottom: 0.5rem;">✅ Project Management (PRINCE2®) - 95%</li>
                        <li style="margin-bottom: 0.5rem;">✅ Scrum Master (PeopleCert®) - 95%</li>
                        <li style="margin-bottom: 0.5rem;">✅ Meta Ads & Social Media Marketing - 88%</li>
                        <li style="margin-bottom: 0.5rem;">✅ AutoCAD & SolidWorks - 85%</li>
                        <li style="margin-bottom: 0.5rem;">✅ Python & SQL - 75%</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <h3 style="color: #8b5cf6; margin-bottom: 1rem;">AI Generalist Skills</h3>
                    <ul style="list-style: none;">
                        <li style="margin-bottom: 0.5rem;">🤖 AI-Powered Process Optimization - 85%</li>
                        <li style="margin-bottom: 0.5rem;">🤖 Machine Learning Applications - 80%</li>
                        <li style="margin-bottom: 0.5rem;">🤖 AI Tools Integration - 90%</li>
                        <li style="margin-bottom: 0.5rem;">🤖 Data Analysis & Insights - 82%</li>
                        <li style="margin-bottom: 0.5rem;">🤖 Automated Workflow Design - 88%</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <h3 style="color: #10b981; margin-bottom: 1rem;">Certifications</h3>
                    <ul style="list-style: none;">
                        <li style="margin-bottom: 0.5rem;">🏆 PRINCE2® Specialist (2025)</li>
                        <li style="margin-bottom: 0.5rem;">🏆 PeopleCert® Scrum Master I (2025)</li>
                        <li style="margin-bottom: 0.5rem;">🏆 Mechanical Engineering (2015)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section class="experience">
        <div class="container">
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 2rem;">Professional Experience</h2>
            
            <div class="exp-card">
                <h3 style="color: #3b82f6; font-size: 1.5rem;">Social Media Marketing Professional</h3>
                <p style="color: #6b7280; margin-bottom: 1rem;">Concentrix-Meta | Nov 2023 - Oct 2024 | Berlin, Germany</p>
                <ul>
                    <li>Transitioned from SBG to GBG clients in 6 months, demonstrating rapid adaptability</li>
                    <li>Improved campaign performance by 25% through strategic optimization</li>
                    <li>Maintained 95%+ client satisfaction rates across 50+ accounts</li>
                    <li>Trained team members on best practices, improving overall efficiency</li>
                </ul>
            </div>

            <div class="exp-card">
                <h3 style="color: #3b82f6; font-size: 1.5rem;">Junior Engineer</h3>
                <p style="color: #6b7280; margin-bottom: 1rem;">MS Agarwal Foundries Pvt Ltd | Mar 2019 - Sep 2022 | Hyderabad, India</p>
                <ul>
                    <li>Implemented Thermex Quenching System technology in steel manufacturing</li>
                    <li>Improved production efficiency by 15% through process optimization</li>
                    <li>Maintained ISO 9001:2015 and OHSAS 18001:2007 compliance</li>
                    <li>Reduced project risks by 20% through effective communication</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Let's Connect</h2>
            <p style="font-size: 1.25rem; margin-bottom: 2rem;">Ready to bring engineering precision, digital marketing expertise, and AI-powered efficiency to your team</p>
            
            <div class="contact-info">
                <div class="contact-item">
                    <span>📧</span>
                    <a href="mailto:nikhilchitrapu193@gmail.com" style="color: #60a5fa;">nikhilchitrapu193@gmail.com</a>
                </div>
                <div class="contact-item">
                    <span>📱</span>
                    <a href="tel:+4915510877211" style="color: #60a5fa;">+49 15510877211</a>
                </div>
                <div class="contact-item">
                    <span>📍</span>
                    <span>Berlin, Germany</span>
                </div>
                <div class="contact-item">
                    <span>💼</span>
                    <a href="https://linkedin.com/in/nikhilchitrapu" target="_blank" style="color: #60a5fa;">LinkedIn</a>
                </div>
            </div>
            
            <div style="margin-top: 2rem;">
                <a href="mailto:nikhilchitrapu193@gmail.com" class="btn">Schedule Interview</a>
                <a href="#" class="btn" style="background: #6b7280;">Download Resume</a>
            </div>
        </div>
    </section>

    <footer style="background: #0f172a; color: #94a3b8; text-align: center; padding: 2rem;">
        <div class="container">
            <p>&copy; 2025 Nikhil Chitrapu. Designed for maximum recruiter impact.</p>
        </div>
    </footer>
</body>
</html>
EOF

# Create 404.html for fallback
cat > out/404.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting...</title>
    <script>
        // Redirect to home page
        window.location.href = '/';
    </script>
</head>
<body>
    <p>Redirecting to portfolio...</p>
</body>
</html>
EOF

# Create _redirects file for Netlify
cat > out/_redirects << 'EOF'
/*    /index.html   200
EOF

echo "✅ Portfolio created successfully!"
echo "📁 Files in 'out' directory:"
ls -la out/
echo ""
echo "🚀 DEPLOY NOW:"
echo "1. Go to: https://app.netlify.com/drop"
echo "2. Drag the 'out' folder to the page"
echo "3. Your portfolio will be live instantly!"
echo ""
echo "🧪 Test locally first:"
echo "   Open 'out/index.html' in your browser"
EOF

chmod +x deploy-fix.sh

echo "✅ Portfolio structure fixed!"
echo ""
echo "🚀 NEXT STEPS:"
echo "1. Run: ./deploy-fix.sh"
echo "2. This will create a proper 'out' folder"
echo "3. Go to https://app.netlify.com/drop"
echo "4. Drag the 'out' folder to deploy"
echo ""
echo "🧪 OR test locally:"
echo "   ./deploy-fix.sh && open out/index.html"
