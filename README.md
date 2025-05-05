# Next.js Dashboard Project

This is a dashboard application built with Next.js, following the structure and concepts from the Next.js Learn course.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Key Technologies Used

* **Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Headless UI](https://headlessui.com/) (implied via `@heroicons/react`)
* **Database:** [Vercel Postgres](https://vercel.com/postgres)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/) (beta version)
* **Validation:** [Zod](https://zod.dev/)
* **Linting/Formatting:** ESLint, Prettier

### Prerequisites

* Node.js (Version >= 18 recommended)
* npm, yarn, or pnpm

## Environment Variables

This project requires environment variables for database connection and authentication secrets. Create a `.env` file in the root directory based on `.env.example` (if one exists) or the requirements outlined in the course/documentation.

```sh
# Example .env content
POSTGRES_URL=your_database_connection_string
AUTH_SECRET=your_strong_secret_for_nextauth
# ... other variables
```

*(Remember to add `.env` to your `.gitignore` file!)*

### Installation

1.Clone the repository:

```bash
git clone <your-repository-url>
cd incubator-nextjs-dashboard
```

2.Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

To start the development server (with Turbopack):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
