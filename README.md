# Xavier's School for the Gifted - Course Management

This is a [Next.js](https://nextjs.org) project built as the final project for SDEV 255. It features a course registration and management dashboard for the world's premier school for mutants, utilizing **Prisma ORM** and **Supabase (PostgreSQL)**.

## 🚀 Deployment to Vercel

This project is optimized for Vercel using the Next.js App Router and TypeScript.

1. **Automatic Build Command**: The project is configured to run `npx prisma generate && next build`. This ensures that the Prisma Client is generated on the Vercel server before the application compiles.
2. **Root Routing**: Do **not** use `basePath` or `assetPrefix` in `next.config.mjs` when deploying to Vercel. Vercel serves the app from the root directory by default. Using these will cause **307 Redirect loops** and **404 errors**.
3. **TypeScript Strictness**: The build process runs a strict TypeScript check. Ensure all props (like `children` in `layout.tsx`) are properly typed with `React.ReactNode`.

## 🗄️ Database Configuration (Supabase + Prisma)

This project requires a connection to a Supabase PostgreSQL instance.

### 1. The Connection String & IPv4 Session Pooling

When deploying with an IPv4 connection, you **must use the Supabase Session Pooler**. This prevents "connection exhaustion," which occurs when multiple serverless functions attempt to open direct database connections simultaneously.

- **Mode**: Set the Supabase Connection Pooler to **Session Mode**.
- **Port**: Use port `5432` (or the specific pooler port provided in your Supabase dashboard).
- **Format**:
  `postgresql://postgres.[USERNAME]:[PASSWORD]@[POOLER-HOST]:5432/postgres`

> **⚠️ Note for IPv4 Users:** If you are not in an IPv6-capable environment, direct connections to the database may time out or fail. Always use the **Session Pooler** connection string found in your Supabase Project Settings.

### 2. Environment Variables

1. **Local**: Add the string to your `.env` file as `DATABASE_URL`.
2. **Vercel**: Add `DATABASE_URL` to your **Environment Variables** in the Vercel dashboard.

## 🛠️ Development Setup

First, install the dependencies:

```bash
npm install
```

Generate the Prisma client to the custom project path:

```bash
npx prisma generate
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

- `src/app/page.tsx`: The main dashboard UI and "Add Course" form.
- `src/app/layout.tsx`: The root layout, font configurations, and metadata.
- `src/lib/prisma.ts`: The singleton Prisma client instance to prevent multiple connections.
- `src/app/generated/prisma/client`: The custom output directory for the generated Prisma Client.
- `prisma/schema.prisma`: The database schema definition.

## 🎓 About the Project

Developed by the **Error 404: Team Not Found** crew as part of the Ivy Tech Full Stack Technical Certificate program.

- **Lead Developer**: William "Billy" Beck
- **Project Goal**: Full-stack integration of Next.js, TypeScript, and Prisma with automated deployment.
