# 3D Portfolio Website

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Environment Setup](#environment-setup)
6. [Customization](#customization)

## Introduction

This is a modern 3D portfolio website that showcases your skills, projects, and experience in an immersive and visually appealing way. The website features 3D models, animations, and interactive elements to create a unique user experience.

## Tech Stack

- **React.js** - Frontend framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Client-side email sending
- **Vite** - Build tool and development server

## Features

- **Interactive 3D Hero Section** - Featuring an animated computer model
- **Dynamic 3D Tech Stack** - Skills displayed as animated 3D spheres
- **Detailed Work Experience** - Timeline of professional experience
- **Project Showcase** - Portfolio section with project details
- **Testimonials** - Client testimonials section
- **Contact Form** - EmailJS powered contact form with 3D Earth model
- **Animated Background** - Starfield background animation
- **Responsive Design** - Works on all devices and screen sizes
- **Smooth Animations** - Page transitions and scroll animations

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en) (v14 or later)
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Environment Setup

For the contact form to work properly, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Create a `.env` file in the root directory with the following variables:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Customization

### Content

Edit the files in `src/constants/index.js` to update:
- Navigation links
- Services offered
- Technologies/skills
- Work experience
- Testimonials
- Projects

### Styling

- Colors and themes can be modified in `tailwind.config.cjs`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

### 3D Models

- Models are stored in the `public` directory
- You can replace them with your own GLTF models
- Adjust the positioning and scaling in the respective component files

### Profile Information

- Update personal information in `src/components/Hero.jsx`
- Modify navigation and about sections to reflect your details

---

Built with React, Three.js, and much more 💪
