# Forms to Conversations Landing Page

A narrative-driven landing page that tells the story of why conversational interfaces are better than traditional forms for data collection.

## Features

- 🎭 **Narrative Storytelling**: Takes users on a journey from problem to solution
- ✨ **Engaging Animations**: Uses Framer Motion for smooth, interactive animations
- 📱 **Fully Responsive**: Looks great on all devices
- 🚀 **Performance Optimized**: Fast loading and smooth scrolling

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety
- **Framer Motion**: For animations
- **Tailwind CSS**: For styling
- **Lenis**: For smooth scrolling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/`: Next.js app directory
  - `components/`: React components
    - `animations/`: Animation components
    - `sections/`: Page section components
    - `ui/`: Reusable UI components
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component
  - `globals.css`: Global styles

## Animation Concepts

The landing page features several key animations:

1. **Hero Section**: A form that grows and eventually errors out
2. **Pain Points**: Cards that animate in as you scroll
3. **Pivot Animation**: A form morphing into a conversation interface
4. **Solution Demo**: An interactive conversation that plays out automatically
5. **Call to Action**: Interactive buttons with hover effects

## License

MIT 