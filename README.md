# Tisha Jain Portfolio

A modern, responsive portfolio website showcasing my work as a Frontend Developer, AI Developer, and AWS Certified Solutions Architect.

🌐 **Live Demo**: 
- **Production**: [https://tishajain.dev/](https://tishajain.dev/)
- **Development**: [https://tisha-jain-portfolio-hub-main-git-main-tishas-projects-379709c3.vercel.app/](https://tisha-jain-portfolio-hub-main-git-main-tishas-projects-379709c3.vercel.app/)

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean design with smooth animations using Framer Motion
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Animated components and hover effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Featured projects with detailed descriptions and tech stacks
- **Skills Section**: Comprehensive overview of technical skills and achievements

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React for beautiful icons
- **Email Service**: EmailJS for contact form functionality
- **Deployment**: Ready for deployment on Vercel, Netlify, or any static hosting

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to project directory**
   ```bash
   cd tisha-jain-portfolio-hub-main
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your EmailJS credentials in the `.env` file.

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Experience.tsx  # Experience timeline
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── Projects.tsx    # Projects showcase
│   ├── Services.tsx    # Services offered
│   └── Skills.tsx      # Skills and achievements
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── styles/             # Global styles
```

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `src/components/Projects.tsx` to add or modify project information.

### Updating Skills
Modify the skill categories in `src/components/Skills.tsx` to reflect your expertise.

### Changing Colors
Update the Tailwind CSS theme in `tailwind.config.ts` to customize the color scheme.

## 📧 Contact Form Setup

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up a service and email template
3. Add your credentials to the `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

**Production URL**: [https://tishajain.dev/](https://tishajain.dev/)  
**Development URL**: [https://tisha-jain-portfolio-hub-main-git-main-tishas-projects-379709c3.vercel.app/](https://tisha-jain-portfolio-hub-main-git-main-tishas-projects-379709c3.vercel.app/)

### Deploy to Netlify
1. Build the project locally
2. Drag and drop the `dist` folder to Netlify
3. Or connect your repository for automatic deployments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a private portfolio repository. If you'd like to suggest improvements or report issues, please reach out directly.

## 📞 Contact

Tisha Jain - [Email](mailto:your.email@example.com)

Portfolio Repository: Private

---

⭐ Don't forget to star this repository if you found it helpful!
