# Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects, skills, and contact information.

## Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Display your projects with descriptions and technologies used
- **Skills Section**: Highlight your technical skills and expertise
- **Contact Form**: Easy way for visitors to get in touch
- **Dark Mode**: Built-in dark theme for better readability

## Technologies Used

- React.js
- Styled Components
- Framer Motion (for animations)
- React Icons
- React Scroll (for smooth scrolling)
- EmailJS (for contact form)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RahulAIML/Enhanced-Portfolio.git
   cd Enhanced-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

1. **Personal Information**: Update your personal details in the respective components.
2. **Projects**: Add/remove projects in `src/components/Projects/Projects.js`.
3. **Skills**: Update your skills in `src/components/Skills/Skills.js`.
4. **Styling**: Customize colors and styles in `src/styles/theme.js`.

## Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with the production-ready files.

### Deploying to Netlify


2. Update `package.json` with your repository URL:
   ```json
   "homepage": "https://RahulAIML.github.io/Enhanced-Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Buddhadeb Bhattacharya
- Email: bhattacharyabuddhadeb147@gmail.com
- GitHub: [@RahulAIML](https://github.com/RahulAIML)
- LinkedIn: [Buddhadeb Bhattacharya](https://www.linkedin.com/in/buddhadeb-bhattacharya-005768299/)
