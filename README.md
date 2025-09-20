# Juspay UI Developer Assignment

## Overview

This project implements a pixel-perfect SaaS dashboard design using React with modern JavaScript (ES6+), HTML5, and CSS3. The implementation focuses on enterprise-grade architecture, performance optimization, and enhanced user experience through meaningful microinteractions.

**Assignment Objective**: Develop a responsive dashboard application with advanced theme management, real-time analytics, and comprehensive order management functionality while maintaining cross-browser compatibility and following React best practices.

<img width="1470" height="956" alt="Screenshot 2025-09-20 at 11 41 28 AM" src="https://github.com/user-attachments/assets/47b442b8-7d1d-40c3-9bb8-179c4a104e29" />

<img width="1470" height="956" alt="Screenshot 2025-09-20 at 11 42 35 AM" src="https://github.com/user-attachments/assets/1c6cd3b3-41dc-477e-b67f-5c56fbcca863" />


## Technical Stack

- **React 18** with Hooks and Context API
- **Tailwind CSS** with custom dark mode implementation
- **React Router v6** for navigation
- **localStorage** for theme persistences

## Technical Implementation

### Performance Optimizations & Code Quality
- Code splitting with lazy loading
- ESLint with accessibility rules
- Cross-browser compatibility (Chrome 88+, Firefox 85+, Safari 14+)

## Design Decisions & Challenges

**Theme System Architecture**: Implemented a robust dark/light mode system using React Context API with localStorage persistence, ensuring theme preferences survive browser sessions and page refreshes.

**Centralized Asset Management**: Developed a scalable image management system that automatically loads theme-appropriate assets, reducing bundle size and improving maintainability.

**Responsive Design Strategy**: Applied mobile-first approach with CSS Grid and Flexbox, ensuring optimal user experience across all device sizes while maintaining pixel-perfect design accuracy.

## Setup & Installation

These instructions will help you set up and run the project on your local machine.

### Installation

**Clone the repository**
```bash
git clone https://github.com/bhartik021/juspay-assignment
```

**Navigate to the project directory**
```bash
cd juspay-assignment
```

**Install dependencies**
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000 (or another port if 3000 is occupied).

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production  
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (one-way operation)

## Live Demo

The application is deployed and available at: [Live Demo Link](https://your-deployed-app-url.vercel.app)

**Note**: Replace with actual deployment URL after deploying to Vercel, Netlify, or GitHub Pages.
