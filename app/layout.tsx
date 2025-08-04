@@ .. @@
 import type React from "react"
 import type { Metadata } from "next"
+import { ThemeProvider } from "@/components/theme-provider"
 import "./globals.css"

 export const metadata: Metadata = {
   title: "Nikhil Chitrapu - Engineering & Digital Marketing Professional",
   description: "Transforming Technical Expertise into Digital Success with AI-Powered Efficiency",
-    generator: 'v0.dev'
+  keywords: "Engineering, Digital Marketing, AI, Project Management, PRINCE2, Scrum Master, Meta Ads, Berlin",
+  authors: [{ name: "Nikhil Chitrapu" }],
+  creator: "Nikhil Chitrapu",
+  openGraph: {
+    type: "website",
+    locale: "en_US",
+    url: "https://nikhilchitrapu.com",
+    title: "Nikhil Chitrapu - Engineering & Digital Marketing Professional",
+    description: "Transforming Technical Expertise into Digital Success with AI-Powered Efficiency",
+    siteName: "Nikhil Chitrapu Portfolio",
+  },
+  twitter: {
+    card: "summary_large_image",
+    title: "Nikhil Chitrapu - Engineering & Digital Marketing Professional",
+    description: "Transforming Technical Expertise into Digital Success with AI-Powered Efficiency",
+  },
+  robots: {
+    index: true,
+    follow: true,
+    googleBot: {
+      index: true,
+      follow: true,
+      "max-video-preview": -1,
+      "max-image-preview": "large",
+      "max-snippet": -1,
+    },
+  },
+  verification: {
+    google: "your-google-verification-code",
+  },
 }

 export default function RootLayout({
@@ -15,7 +43,13 @@ export default function RootLayout({
 }) {
   return (
     <html lang="en">
-      <body>{children}</body>
+      <head>
+        <link rel="icon" href="/favicon.ico" />
+        <link rel="canonical" href="https://nikhilchitrapu.com" />
+      </head>
+      <body className="antialiased">
+        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
+          {children}
+        </ThemeProvider>
+      </body>
     </html>
   )
 }