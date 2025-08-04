@@ .. @@
 /** @type {import('next').NextConfig} */
 const nextConfig = {
   output: "export",
-  trailingSlash: false,
+  trailingSlash: true,
   distDir: "out",
+  skipTrailingSlashRedirect: true,
   eslint: {
     ignoreDuringBuilds: true,
   },
   typescript: {
     ignoreBuildErrors: true,
   },
   images: {
     unoptimized: true,
   },
-  // Remove these problematic settings
-  // assetPrefix: "",
-  // basePath: "",
+  assetPrefix: "",
+  basePath: "",
 }

 module.exports = nextConfig