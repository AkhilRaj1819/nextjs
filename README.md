# LMS Project

A full-stack Learning Management System built using Next.js, MongoDB, and Tailwind CSS.

## Features
- Authentication with NextAuth.js
- Student and Admin dashboards
- Course creation, enrollment, and progress tracking
- Responsive and modular UI

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database:** MongoDB via Mongoose
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Language:** JavaScript

## Setup Instructions

```bash
git clone https://github.com/yourusername/lms-project.git
cd lms-project
npm install
npm run dev
```

## Project Structure
```
lms-project/
├── app/
│   ├── login/
│   │   └── page.js
│   ├── dashboard/
│   │   └── page.js
│   ├── api/
│   │   └── auth/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── CourseCard.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── lib/
│   └── mongodb.js
├── models/
│   ├── User.js
│   └── Course.js
└── .env.local
```

## Environment Variables
Create a `.env.local` file in the root directory with:
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Getting Started
1. Install dependencies: `npm install`
2. Set up environment variables
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser