
<!-- PROJECT BANNER -->

<h1 align="center">🎙️ Prepbit — Your AI-Powered Mock Interview Platform</h1>

<p align="center">
  Created with ❤️ by <strong>Arshiya Nandy</strong> | Built using Next.js, Vapi AI & Google Gemini
</p>

<p align="center">
  🧠 Practice smart. 💬 Talk to AI. 🚀 Nail your next interview.
</p>

---

## 📖 Table of Contents

- [🌟 About Prepbit](#-about-prepbit)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚡ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [🧠 AI Prompts & Feedback](#-ai-prompts--feedback)
- [📸 UI Preview](#-ui-preview)
- [🔐 Environment Variables](#-environment-variables)
- [🌐 Deployment](#-deployment)
- [📁 Assets](#-assets)
- [🧩 Extras](#-extras)
- [📣 Credits & Acknowledgments](#-credits--acknowledgments)

---

## 🌟 About Prepbit

**Prepbit** is a modern AI-driven platform designed to simulate mock interviews with **realistic voice interactions**. Whether you're a job seeker, student, or just curious about AI, Prepbit helps you **practice confidently** with the power of Vapi voice agents and feedback from Google Gemini.

🧑‍💼 Talk to an AI interviewer  
📝 Get smart feedback instantly  
📊 Track your sessions and improve with each try

---

## 🛠️ Tech Stack

| Tech           | Description                           |
|----------------|---------------------------------------|
| ⚛️ Next.js     | Frontend + Backend                    |
| 🎨 Tailwind CSS| Beautiful, responsive UI styling      |
| 🔐 Firebase    | Authentication + Firestore database   |
| 🧠 Vapi AI     | Real-time voice interviewing          |
| ✨ Google Gemini | Question & feedback generation       |
| 🧩 shadcn/ui   | Reusable, accessible UI components    |
| ✅ Zod         | Form and data schema validation       |

---

## ⚡ Features

✅ **Voice-Based AI Interviews** – Powered by Vapi  
✅ **Smart Question Generation** – Role-based and randomized  
✅ **Instant Gemini Feedback** – Natural language critique and suggestions  
✅ **User Authentication** – Login/signup with Firebase  
✅ **Interview Dashboard** – View, manage, and retake interviews  
✅ **Mobile Responsive** – Clean design for all devices  
✅ **Transcript Logs** – View full transcripts of past sessions

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/prepbit.git
cd prepbit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
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
```

🔒 **Keep this file private!**

### 4. Run the Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 AI Prompts & Feedback

- ✨ **Prompt Creation**: `/app/api/vapi/generate/route.tsx`  
- 📋 **Feedback Logic**: `/lib/actions/general.action.ts`  
- 🧾 **Display Page**: `/app/(root)/interview/[id]/feedback/page.tsx`

---

## 📸 UI Preview

| Dashboard | Interview Page | Feedback |
|-----------|----------------|----------|
| ![](https://your-preview-link.com/dashboard.png) | ![](https://your-preview-link.com/interview.png) | ![](https://your-preview-link.com/feedback.png) |

---

## 🔐 Environment Variables

Keep your API keys and Firebase config secure with `.env.local`. Never push them to public repositories!

---

## 🌐 Deployment

Deploy to [**Vercel**](https://vercel.com) for a seamless experience with automatic CI/CD.

---

## 📁 Assets

All icons, illustrations, and banners used in Prepbit are stored in the `/public` directory.

---

## 🧩 Extras

Here’s how you can take Prepbit even further:

- 🎯 Add role-based question pools (Frontend, Data, PM, etc.)
- 📈 Integrate session analytics and performance charts
- 📄 Export feedback as downloadable PDF
- 🎥 Add webcam support for video interview simulation

---

## 📣 Credits & Acknowledgments

- Developed by **Arshiya Nandy** 💙  
- Voice agents powered by **[Vapi AI](https://www.vapi.ai)**  
- Feedback via **Google Gemini**

---


## 📧 Contact
- Have questions or feedback? Reach out at:
- 📩 Email: arshiyanandy1731@gmail.com

<p align="center">
  <strong>Ready to level up your interview prep? 🚀</strong> <br/>
  Star the repo ⭐ | Fork it 🍴 | Contribute 🔧 | Share ❤️
</p>
```
