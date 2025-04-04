# ai-interviewer-by-Arshiya
Your Mock AI Interview Platform by Jobs

Project Banner
next.js vapi tailwindcss firebase
Prepwise: A job interview preparation platform powered by Vapi AI Voice agents
Build this project step by step with our detailed tutorial on JavaScript Mastery YouTube. Join the JSM family!
📋 Table of Contents
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
🕸️ Snippets (Code to Copy)
🔗 Assets
🚀 More
🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, JavaScript Mastery.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!



🤖 Introduction
Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, Prepwise is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 50k+ members. It's a place where people help each other out.



⚙️ Tech Stack
Next.js
Firebase
Tailwind CSS
Vapi AI
shadcn/ui
Google Gemeni
Zod
🔋 Features
👉 Authentication: Sign Up and Sign In using password/email authentication handled by Firebase.

👉 Create Interviews: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

👉 Get feedback from AI: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

👉 Modern UI/UX: A sleek and user-friendly interface designed for a great experience.

👉 Interview Page: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 Dashboard: Manage and track all your interviews with easy navigation.

👉 Responsiveness: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Replace the placeholder values with your actual Firebase, Vapi credentials.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.

🕸️ Snippets
globals.css
lib/utils.ts
Generate questions prompt (/app/api/vapi/generate/route.tsx):
Generate feedback prompt (lib/actions/general.action.ts):
Display feedback (app/(root)/interview/[id]/feedback/page.tsx):
Dummy Interviews:
🔗 Assets
Public assets used in the project can be found here

🚀 More
Advance your skills with Next.js Pro Course

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

