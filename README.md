# भारत शिक्षा पोर्टल (India Education Portal)

A Next.js-based educational platform for students and teachers, featuring AI chatbot assistance, interactive quizzes, video lectures, PDF books, and educational games.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download Git](https://git-scm.com/)

To check if you have these installed, run:
```bash
node --version
npm --version
git --version
```

## Getting Started

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd gyansarthi
```

Replace `<repository-url>` with the actual URL of this repository.

### Step 2: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This will install all the dependencies listed in `package.json`. This may take a few minutes depending on your internet connection.

**Alternative package managers:**
- Using **yarn**: `yarn install`
- Using **pnpm**: `pnpm install`

### Step 3: Run the Development Server

Start the development server:

```bash
npm run dev
```

**Alternative commands:**
- Using **yarn**: `yarn dev`
- Using **pnpm**: `pnpm dev`

You should see output similar to:
```
  ▲ Next.js 16.0.3
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should now see the भारत शिक्षा पोर्टल (India Education Portal) homepage.

## Available Scripts

- `npm run dev` - Starts the development server on http://localhost:3000
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server (run `npm run build` first)
- `npm run lint` - Runs ESLint to check for code issues

## Project Structure

```
gyansarthi/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── globals.css          # Global styles
├── components/             # React components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── LLMChatbot.tsx      # AI chatbot component
│   ├── QuizSection.tsx     # Quiz component
│   ├── VideoSection.tsx    # Video section
│   ├── PdfSection.tsx      # PDF books section
│   ├── GamesSection.tsx    # Educational games
│   └── ui/                 # UI components (shadcn/ui)
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## Features

- 🎓 **AI Education Assistant** - Interactive chatbot for learning support
- 📝 **Interactive Quizzes** - Test your knowledge with fun quizzes
- 🎥 **Video Lectures** - Educational videos on various subjects
- 📚 **Digital Books** - Download NCERT and educational PDFs
- 🎮 **Educational Games** - Learn through interactive games
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## Troubleshooting

### Port 3000 is already in use

If you see an error that port 3000 is already in use, you can run the dev server on a different port:

```bash
npm run dev -- -p 3001
```

Then access the app at `http://localhost:3001`

### Module not found errors

If you encounter module not found errors, try:

1. Delete `node_modules` folder and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

### Build errors

If you encounter build errors, ensure all dependencies are installed:

```bash
npm install
npm run build
```

## Technology Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js Learn](https://nextjs.org/learn) - Interactive Next.js tutorial

## License

This project is part of the Government Education Portal initiative.

---

**Note**: This is a development version. For production deployment, refer to the deployment documentation.
