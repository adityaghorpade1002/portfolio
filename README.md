# Aditya Ghorpade — Full Stack Developer Portfolio

Enterprise-grade, performance-optimized Full Stack Developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed specifically for multinational corporations (MNCs), tech product companies, and engineering recruitment standards.

---

## 🚀 Verified GitHub Profile & Repositories
* **GitHub Profile:** [https://github.com/adityaghorpade1002](https://github.com/adityaghorpade1002)
* **LinkedIn:** [https://linkedin.com/in/aditya-ghorpade1002](https://linkedin.com/in/aditya-ghorpade1002)
* **Developer:** Aditya Ghorpade (Full Stack Developer & MCA Candidate)

### Verified Public Repositories (Source of Truth):
1. **[OrderHub (multi-store-order-management)](https://github.com/adityaghorpade1002/multi-store-order-management)** — Next.js 16, React 19, TypeScript, Node.js, Express, Socket.IO, PostgreSQL 15, Prisma ORM, Docker Compose, Swagger OpenAPI.
2. **[Store Rating Platform](https://github.com/adityaghorpade1002/store-rating-platform)** — Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma ORM, MySQL, TanStack React Query, Vitest (176 tests).
3. **[CollegeFunda](https://github.com/adityaghorpade1002/CollegeFunda)** — React.js, Node.js, Supabase, REST APIs, Tailwind CSS.
4. **[AquaFlow (AQUA_FLOW)](https://github.com/adityaghorpade1002/AQUA_FLOW)** — Vite, React.js, Node.js, Express, PostgreSQL, Tailwind CSS.
5. **[Vitta Vidhi Advisors](https://github.com/adityaghorpade1002/vitta-vidhi-advisors)** — TypeScript, React, Tailwind CSS.

---

## 🛠️ Technology Stack
* **Framework:** React 18 (Component-driven architecture)
* **Build Tool:** Vite 6 (Lightning-fast HMR and optimized production bundling)
* **Styling:** Tailwind CSS 3 (Custom Enterprise Dark theme tokens)
* **Icons:** Lucide React
* **Typography:** Inter & JetBrains Mono (Google Fonts)
* **Responsive Design:** 100% fluid layouts across Mobile (375px), Tablet (768px), Laptop (1366px), and Desktop (1920px)

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── images/
│   │   └── portfolio.jpg        # Profile image asset
│   ├── resume/
│   │   └── Aditya-Ghorpade-Full-Stack-Developer-Resume.pdf  # Downloadable resume
│   └── portfolio.jpg
├── src/
│   ├── assets/
│   │   └── portfolio.jpg
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glass header with mobile drawer & verified GitHub link
│   │   ├── Footer.jsx           # Dynamic copyright, social links, back-to-top
│   │   ├── SectionHeading.jsx   # Consistent enterprise section titles
│   │   ├── ProjectCard.jsx      # Highlighting architecture & deliverables with GitHub repo links
│   │   ├── SkillGroup.jsx       # Category chips with proficiency tags
│   │   └── ExperienceItem.jsx   # Industrial timeline component
│   ├── sections/
│   │   ├── Hero.jsx             # Recruiter value proposition, primary CTAs & GitHub link
│   │   ├── About.jsx            # Academic and technical background
│   │   ├── Skills.jsx           # Verified technical competencies (TypeScript, Next.js, React, Node, Java, SQL)
│   │   ├── Projects.jsx         # OrderHub, Store Rating Platform, CollegeFunda, AquaFlow, Javax Compiler, Campus Nexus
│   │   ├── Experience.jsx       # QLOAX LLP IT internship timeline
│   │   ├── Education.jsx        # MCA (8.27 CGPA), BCS (7.65 CGPA), HSC, SSC
│   │   ├── Certifications.jsx   # NPTEL, Microsoft, MBTB credentials & awards
│   │   └── Contact.jsx          # Accessible form with mailto fallback & validation
│   ├── data/
│   │   └── portfolio.js         # Single source of truth for all verified data
│   ├── App.jsx                  # Main application structure
│   ├── index.css                # Global styles, glassmorphism, scrollbars
│   └── main.jsx                 # React root mount
├── index.html                   # SEO tags, Open Graph meta, Favicon
├── package.json
├── tailwind.config.js           # Custom enterprise dark color palette
├── vite.config.js
└── README.md
```

---

## 💻 Local Setup & Running

1. **Clone or navigate to the project directory:**
   ```bash
   cd E:\Port\Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be created in the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📄 How to Replace Your Resume PDF

1. Prepare your finalized resume as a PDF file.
2. Rename it to:
   ```
   Aditya-Ghorpade-Full-Stack-Developer-Resume.pdf
   ```
3. Place or overwrite the file in:
   ```
   public/resume/Aditya-Ghorpade-Full-Stack-Developer-Resume.pdf
   ```
4. If you wish to change the filename, update the path in `src/data/portfolio.js`:
   ```javascript
   resume: {
     fileName: "Your-New-Name.pdf",
     filePath: "/resume/Your-New-Name.pdf",
   }
   ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push your project to a GitHub repository (see steps below).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New...** -> **Project**.
4. Select your `Portfolio` repository and click **Import**.
5. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your site will be live on a fast global CDN with HTTPS within 1 minute!

### Option 2: Publish to GitHub
```bash
git init
git add .
git commit -m "feat: complete enterprise full stack portfolio redesign"
git branch -M main
git remote add origin https://github.com/adityaghorpade1002/portfolio.git
git push -u origin main
```

---

## 📑 Verified Content Summary
* **Current Education:** MCA at Dr. D. Y. Patil IMR (CGPA 8.27) | BCS at TC College (CGPA 7.65)
* **Industry Internship:** IT Intern at QLOAX LLP, Pune (Dec 2025 – April 2026) on Acadmyx ERP
* **Core Projects:**
  1. **OrderHub** — Next.js 16, TypeScript, Socket.IO, PostgreSQL, Prisma ORM, Docker Compose
  2. **Store Rating Platform** — Next.js 16, TypeScript, MySQL, Prisma, Vitest (176 tests)
  3. **CollegeFunda** — React.js, Node.js, Supabase, REST API
  4. **AquaFlow** — Vite, React.js, Node.js, Express.js, PostgreSQL
  5. **Javax Compiler** — Java, Servlets, JSP, MySQL, Proctoring
  6. **Campus Nexus** — PHP, PostgreSQL, Multi-Role ERP
  7. **Vitta Vidhi Advisors** — TypeScript, React, Tailwind CSS
* **Certifications:** NPTEL Cloud Computing, Microsoft / LinkedIn Software Development, Infotech Technologies Python Web Dev, MBTB Java Programming
