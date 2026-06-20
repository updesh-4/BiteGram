# BiteGram

> Real-time food-delivery platform connecting **customers, restaurants, and delivery personnel** — with live order tracking, dual payments, and cloud-based media handling.

Built with the **MERN stack + Socket.IO**, BiteGram streamlines the full delivery lifecycle: browse → order → pay → track in real time.

---

## Features

- **Browse & order** from restaurants with menu/category filtering
- **Live delivery tracking** with maps & geolocation
- **Dual payments** — Cash on Delivery & online (Razorpay)
- **Secure authentication** — JWT + Firebase Auth
- **Cloud media handling** — image uploads via Cloudinary
- **Real-time updates** — order status & notifications via Socket.IO
- **Multi-role** — customer, restaurant owner, delivery partner
- **Email notifications** — order confirmations via Nodemailer

---

## Tech Stack

**Frontend:** React, Vite, Redux Toolkit, Tailwind CSS, Firebase Auth, Razorpay, Geoapify
**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.IO, JWT, Cloudinary, Multer, Nodemailer

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (Atlas or local)
- Cloudinary, Razorpay, Firebase, and Geoapify accounts (free tiers work)

### Backend
```bash
cd backend
npm install
cp .env.example .env   # then fill in your values
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env   # then fill in your values
npm run dev
```

---

## Environment Variables

See `backend/.env.example` and `frontend/.env.example` for the full list.
**Never commit your real `.env` files** — they're gitignored.

---

## Project Structure

```
BiteGram/
├── backend/
│   ├── config/         # DB & service config
│   ├── controllers/    # Route handlers / business logic
│   ├── middlewares/    # Auth, error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── socket.js       # Socket.IO setup
│   └── index.js        # Entry point
└── frontend/
    └── src/
        ├── components/ # Reusable UI
        ├── pages/      # Route pages
        ├── redux/      # Redux store & slices
        ├── hooks/      # Custom hooks
        └── App.jsx
```

---

## Author

**Updesh Bajaj** — [Portfolio](https://updesh-4.github.io/Portfolio/) · [GitHub](https://github.com/updesh-4) · [LinkedIn](https://linkedin.com/in/updesh-bajaj)
