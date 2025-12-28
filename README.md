# Workflow Automation 🚀

A powerful, visual workflow automation platform built with modern web technologies. This application allows users to design, manage, and execute automated tasks through a drag-and-drop interface.

## 🌟 Project Overview

This project is a sophisticated web application designed to simplify complex automation tasks. It features a responsive dashboard, a robust workflow editor, and a comprehensive task management system. The core philosophy is to provide a premium, user-friendly experience for building automation logic without writing code.

## 🛠️ Tech Stack & Key Packages

The project is built on a cutting-edge stack ensuring performance, scalability, and a great developer experience:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) - For server-side rendering and static generation.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer tooling.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For rapid, utility-first styling.
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) (Radix UI) - For accessible, reusable, and customizable components.
- **Workflow Engine**: [React Flow (@xyflow/react)](https://reactflow.dev/) - The core library powering the node-based visual workflow editor.
- **Authentication**: [Clerk](https://clerk.com/) - For secure and easy-to-integrate user management.
- **Database**: [SQLite](https://www.sqlite.org/index.html) with [Prisma ORM](https://www.prisma.io/) - For efficient local data management and schema definition.
- **Charts**: [Recharts](https://recharts.org/) - For beautiful data visualization on the dashboard.
- **Icons**: [Lucide React](https://lucide.dev/) - For consistent and clean iconography.

## 🎨 Frontend Implementation Details

The frontend has been meticulously crafted to offer a "premium" feel with a focus on usability and aesthetics.

### 1. Visual Workflow Builder (React Flow)
The heart of the application is the **Editor**, powered by React Flow.
- **Drag-and-Drop**: Users can drag task nodes (like "Launch Browser", "Fill Input", "Click Element") from the sidebar palette onto the canvas.
- **Custom Nodes**: We've implemented custom node types for different actions, complete with input/output handles and validation.
- **Dynamic Connections**: Nodes can be connected to pass data (strings, credentials, etc.) between steps.
- **State Management**: The editor state interacts seamlessly with the global application state to track changes and configuration.

### 2. Modern Dashboard & UI
- **Responsive Sidebar**: A fully responsive navigation sidebar that is collapsible on desktop (mini-view) and uses a slide-in Sheet component on mobile.
- **Data Visualization**: The home dashboard features interactive charts (`AreaChart`, `BarChart`) tracking workflow executions and credit usage, styled with a distinct green theme.
- **Task Palette**: A categorized accordion menu for easily finding and adding automation tasks.
- **Themes**: Full support for light and dark modes.

## 🔮 Future Roadmap: Local AI with Ollama

A major focus of the current development is shifting away from expensive, paid AI APIs.

- **Ollama Integration**: I am actively working on integrating **[Ollama](https://ollama.com/)** to leverage powerful local LLMs (Large Language Models).
- **Cost-Efficiency**: By running models locally, we can perform tasks like "Extract Data with AI" or "Analyze Document" without incurring per-request costs from providers like OpenAI.
- **Privacy & Speed**: Local processing ensures sensitive data stays on the machine and can offer faster response times for certain workloads.

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    Create a `.env` file with your Clerk keys and Database URL.

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser.

---

*Built with ❤️ by [Your Name]*

de63300209005360757776