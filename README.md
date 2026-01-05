 <h1 align="center">🐝 BadFly</h1>

**BadFly** is a sleek, modern tribute to the original [Adf.ly](https://adf.ly), built as a side project to explore and learn advanced features of the Next.js framework. It allows users to shorten URLs, track visits, and manage links—all backed by MongoDB.

![BadFly Snapshot](/public/badfly-snapshot.png)

---

## ✨ Features

- 🔗 URL shortening with unique codes
- 📈 Visit tracking for each shortened link
- 🧹 URL management (delete & copy)
- ⚡ Optimistic UI with real-time updates
- 🧠 Built using server actions (Next.js 14+)
- 🎯 Pagination-ready structure
- 🔒 Clipboard copy with visual feedback

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide](https://lucide.dev/)

---

## 📂 Folder Structure

```
.
├── app/
│   ├── page.tsx   # Main homepage
│   └── [shortCode]  # Dynamic redirect route
├── components/
│   ├── URLShorteningContainer.tsx
│   ├── ShorteningForm.tsx
│   └── URLList.tsx
├── server/
│   └── urls.ts  # DB operations
└── lib/
    └── db.ts  # MongoDB connection
```

---

## 🛠️ Get Started

```bash
git clone https://github.com/yourusername/badfly.git
cd badfly
npm install
```

## Set up environment variables in .env

```ini
DATABASE_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Run the app
```bash
npm run dev
```

---
<p align="center" style="margin-top: 20px;">Made with ❤</p>
