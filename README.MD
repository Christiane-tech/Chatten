<h1 align="center">✨ Chatten - Full-Stack Chat App </h1>


Features:


- 💬 **Live Chat:** Lightning-fast messaging powered by Socket.io.
- 🎙️ **Voice Notes:** Record & play native audio messages in a snap.
- 📡 **Live Presence:** Instantly see who's online right now.
- 🔊 **Interactive UX:** Typing indicators & toggleable sound alerts.
- 💌 **Automated Onboarding:** Beautiful welcome emails sent via Resend.
- 🖼️ **Media Magic:** Flawless image uploads hosted on Cloudinary.
- 🏗️ **Bulletproof Backend:** Fast, reliable REST API with Node.js & Express.
- 💾 **NoSQL Power:** Persistent, scalable data storage with MongoDB.
- 🛡️ **Ironclad Security:** Powerful API rate-limiting armed by Arcjet.
- 💅 **Premium Aesthetics:** Stunning responsive UI with Tailwind CSS & React.
- 🔋 **Global State:** Lightweight, frictionless state management using Zustand.
- 🌿 **Pro Workflows:** Clean branching, PRs, & modern Git version control.
- 🌐 **Instant Deploy:** Frictionless, free-tier ready deployment via Sevalla.
- 🎟️ **Zero-Dependency Auth:** Secure, built-in custom JWT logins.

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
