# Elias Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a sleek dark/light theme toggle and engaging animations. This portfolio showcases web development projects with a clean, developer-focused design inspired by code editors and terminal interfaces.

## ✨ Features

### 🎨 Design & UI
- **Dark/Light Mode Toggle**: Seamless theme switching with smooth transitions
- **Animated Typography**: Typewriter effect that repeats every 5 seconds
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Code-Inspired Aesthetics**: Terminal-like design with monospace fonts
- **Decorative Elements**: Geometric shapes and dot patterns for visual interest

### 🚀 Technical Features
- **Next.js 14**: Built with the latest App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom CSS variables
- **Theme Persistence**: User's theme preference saved to localStorage
- **Smooth Animations**: CSS transitions and custom animations
- **SEO Optimized**: Proper meta tags and semantic HTML

### 📱 Pages & Sections
- **Home**: Hero section with animated text and project previews
- **Works**: Complete portfolio of projects with live demos and source code
- **About Me**: Personal information, skills, and fun facts
- **Contacts**: Contact information and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Fira Code (monospace), Inter (sans-serif)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/elias-portfolio.git
   cd elias-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
elias-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about-me/          # About page
│   ├── contacts/          # Contact page
│   ├── works/             # Projects page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── animated-text.tsx  # Typewriter animation component
│   ├── decorative-elements.tsx # Geometric decorations
│   ├── dot-pattern.tsx    # Background dot patterns
│   ├── footer.tsx         # Site footer
│   ├── header.tsx         # Navigation header
│   ├── media-sidebar.tsx  # Social media sidebar
│   ├── project-card.tsx   # Project showcase cards
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light mode switch
├── public/                # Static assets
│   └── images/           # Project images and logos
└── README.md             # Project documentation
\`\`\`

## 🎨 Customization

### Theme Colors
Edit the CSS variables in \`app/globals.css\`:

\`\`\`css
:root {
  --background: #282c33;    /* Dark background */
  --foreground: #abb2bf;    /* Text color */
  --primary: #c778dd;       /* Accent color */
  --white: #ffffff;         /* Headings */
  --border-color: #abb2bf;  /* Borders */
}

[data-theme="light"] {
  --background: #f8f9fa;    /* Light background */
  --foreground: #5c6370;    /* Dark text */
  --primary: #c778dd;       /* Accent (same) */
  --white: #282c33;         /* Dark headings */
  --border-color: #5c6370;  /* Dark borders */
}
\`\`\`

### Animation Speed
Adjust the typewriter animation in \`components/animated-text.tsx\`:

\`\`\`tsx
<AnimatedText
  text="Your custom text"
  speed={50}              // Typing speed (ms per character)
  repeatInterval={5000}   // Repeat every 5 seconds
/>
\`\`\`

### Adding Projects
Add new projects in the project sections by updating the \`ProjectCard\` components:

\`\`\`tsx
<ProjectCard
  title="Your Project"
  description="Project description"
  tags={["React", "TypeScript", "Tailwind"]}
  imageSrc="/images/your-project.png"
  imageAlt="Your project screenshot"
  liveLink="https://your-project.com"
  githubLink="https://github.com/you/your-project"
/>
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Decorative elements are hidden on mobile for optimal performance and clean design.

## 🌟 Key Components

### AnimatedText
Typewriter effect component with customizable speed and repeat interval.

### ThemeProvider
Context-based theme management with localStorage persistence.

### DecorativeElements
Geometric shapes positioned strategically for visual appeal.

### ProjectCard
Reusable component for showcasing projects with images, tags, and links.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/elias-portfolio/issues).

## 📞 Contact

- **Email**: elias@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Portfolio**: [your-portfolio.com](https://your-portfolio.com)

---

⭐ If you found this project helpful, please give it a star on GitHub!
