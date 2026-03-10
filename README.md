# EduPrime School Website

A comprehensive, modern school website built with React, TypeScript, and Tailwind CSS. This project showcases EduPrime School's commitment to excellence in education through an interactive and user-friendly web platform.

# EduPrime School Website

A comprehensive, modern school website built with React, TypeScript, and Tailwind CSS. This project showcases EduPrime School's commitment to excellence in education through an interactive and user-friendly web platform.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing experience across all devices
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and intuitive navigation
- **Comprehensive Pages**: Complete school website including admissions, faculty, events, and resources
- **Admin Dashboard**: Administrative interface for managing school operations
- **Student & Faculty Portals**: Dedicated resource hubs for students and faculty members
- **Interactive Components**: Count-up animations, testimonials, and dynamic content sections
- **Type-Safe Development**: Full TypeScript implementation for robust code quality

## Tech Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 3.4.19 with PostCSS and Autoprefixer
- **Icons**: Lucide React 0.577.0
- **Code Quality**: ESLint with TypeScript support
- **Development**: Hot module replacement and fast refresh

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd school-website-development
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # About page component
│   ├── Contact.tsx        # Contact page component
│   ├── Courses.tsx        # Courses page component
│   ├── Footer.tsx         # Site footer with navigation
│   ├── Header.tsx         # Site header with navigation
│   ├── Home.tsx           # Homepage component
│   ├── Login.tsx          # Login page component
│   ├── PrivacyPolicy.tsx  # Privacy policy page
│   ├── Signup.tsx         # Signup page component
│   ├── Admissions.tsx     # Admissions page with requirements
│   ├── Faculty.tsx        # Faculty directory and information
│   ├── Events.tsx         # School events and calendar
│   ├── StudentPortal.tsx  # Student resources and tools
│   ├── FacultyPortal.tsx  # Faculty resources and tools
│   ├── Library.tsx        # Library services and resources
│   ├── CareerServices.tsx # Career counseling and services
│   └── admin/
│       ├── AdminDashboard.tsx  # Main admin dashboard
│       ├── AdminCourses.tsx    # Course management
│       ├── AdminSidebar.tsx    # Admin navigation sidebar
│       ├── AdminStaff.tsx      # Staff management
│       └── AdminStudents.tsx   # Student management
├── styles/
│   └── globals.css        # Global styles
├── assets/                # Static assets
├── App.tsx                # Main application component
└── main.tsx               # Application entry point
```

## Pages Overview

- **Home**: Welcome page with hero section and key highlights
- **About**: School mission, vision, and values
- **Courses**: Available academic programs and courses
- **Admissions**: Admission requirements, process, and deadlines
- **Faculty**: Faculty directory, leadership, and departments
- **Events**: Upcoming events, calendar, and past highlights
- **Student Portal**: Academic resources, announcements, and services
- **Faculty Portal**: Teaching tools, professional development, and resources
- **Library**: Library services, hours, and digital resources
- **Career Services**: Career counseling, workshops, and job placement
- **Contact**: Contact information and inquiry forms
- **Admin Dashboard**: Administrative management interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
