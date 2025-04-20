# 🎬 Netflix Clone

A full-featured Netflix clone built with **React**, **React Router DOM**, **Firebase Authentication**, and **The Movie Database (TMDB) API**. Includes sleek UI, smooth navigation, and user-friendly notifications using **React Toastify**.

## 🚀 Live Demo

[Click here to view the app](#) <!-- Replace with your deployed link if available -->

---

## 📦 Tech Stack

- ⚛️ **React** – Frontend UI
- 🌐 **React Router DOM** – Client-side routing
- 🔥 **Firebase** – Authentication & user session management
- 🎥 **TMDB API** – Fetching movies and TV show data
- 📢 **React Toastify** – Toast notifications for errors & success messages

---

## 📸 Features

- 🔐 User Authentication (Sign In / Sign Up via Firebase)
- 🧭 Protected Routes using React Router
- 🎬 Browse "Now Playing" and Popular Movies from TMDB
- 🔍 Smooth scrolling and animated UI cards
- ⚠️ Error handling with Toastify
- 📱 Responsive design for all devices

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/heyzameer/netflix-clone.git
cd netflix-clone
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Configure Firebase & TMDB

Create a file named `.env` in the root and add your API keys:
env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

REACT_APP_TMDB_API_KEY=your_tmdb_api_key

### 4. Start the App
bash
npm start
---

## 🙌 Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Firebase](https://firebase.google.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---