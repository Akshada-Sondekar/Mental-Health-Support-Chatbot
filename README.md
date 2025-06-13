# 🌟MENTORA- A Gemini – Powered Mental Wellness Platform with Real-Time Emotion Tracking, Mood and PDF Reports.


**Mentora** is an AI-driven mental wellness platform designed to support users through intelligent chatbot conversations, mood tracking, emotion recognition, and personalized sentiment analysis reports.

This project combines the power of **AI/ML**, **NLP**, and **Computer Vision** to help users better understand and manage their mental health.

---

## 📂 Project Structure

Mentora/
├── backend/ # Flask-based backend server
├── mentora-frontend/ # React-based frontend interface
└── README.md 


---

## 🧠 Overview

Mentora is built to be your **AI mental health companion**. It offers:

- Natural and empathetic chatbot interactions powered by **Gemini API**.
- **Real-time facial emotion detection** using a pre-trained CNN model.
- **Weekly sentiment reports** generated via **BERT**-based analysis.
- Mood logging, journaling, and visualization tools.
- User authentication with secure **JWT tokens**.

---

## ⚙️ Backend – `/backend/`

> Built with: `Flask`, `SQLite`, `JWT`, `Gemini API`, `Transformers`, `OpenCV`, `TensorFlow/Keras`

### 🔑 Key Modules

- `auth.py` – User authentication (login, signup) with JWT
- `chatbot.py` – Handles user input and chatbot response using Gemini API
- `sentimental_analysis.py` – Weekly mood analysis using BERT model
- `real_time_emotion.py` – Detects and tracks facial emotions from webcam
- `database.py` – SQLite DB interaction for storing chats, moods, reports
- `app.py` – Main API routes (login, chat, sentiment analysis, etc.)

### 📊 Databases

- `mentora.db` – Stores user info, chat logs, sentiment reports
- `emotion_data.db` – Stores facial emotion tracking data

### 🔌 API Endpoints

| Endpoint               | Function                                 |
|------------------------|------------------------------------------|
| `/login`               | User login via JWT                       |
| `/signup`              | User registration                       |
| `/chat`                | Send message to AI chatbot              |
| `/analyze-sentiment`   | Generate sentiment report               |
| `/start-emotion`       | Start webcam-based emotion detection     |
| `/stop-emotion`        | Stop emotion tracking                   |

---

## 🎨 Frontend – `/mentora-frontend/`

> Built with: `React.js`, `CSS`, `Axios`, `React Router`, `Framer Motion`, `Chart.js`

### 🔧 Main Components

- `login.js` / `signup.js` – Auth pages
- `chatbot.js` – Chat UI with live responses
- `sentimentReport.js` – Mood trend visualizations
- `MoodLog.js` – Daily mood journaling
- `profile.js` / `settings.js` – User management
- `navbar.js` – Navigation bar
- `Home.js` – Welcome landing page

### 📁 Folder Breakdown

- `components/` – UI components (chatbot, login, report, etc.)
- `pages/` – Full views like Home, Chat, MoodLog
- `styles/` – CSS styling for each component
- `assets/` – Static images and logos
- `utils/` – API handling and helper functions

### 🎯 Features

- Real-time AI chat with facial emotion support
- Responsive and clean UI design
- Mood calendar with emoji-based indicators
- Weekly mood analysis and downloadable reports
- Toggle between light/dark mode

---

## 📊 Key Features Summary

| Feature                             | Description                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| 🤖 AI Chatbot                       | Gemini-powered chatbot for real-time interaction                           |
| 💬 Sentiment Analysis               | BERT-based text sentiment processing                                       |
| 🎥 Emotion Detection                | CNN model for facial expression tracking via webcam                        |
| 📆 Mood Tracking                    | Daily mood journal + calendar view                                         |
| 📈 Weekly Reports                   | Visual sentiment summaries (charts, trends, summaries via Gemini)         |
| 🔐 JWT Authentication               | Secure login/signup with token-based sessions                             |
| 🎨 Beautiful UI                     | React-based responsive frontend                                            |

---

## 🧪 How to Run Locally

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/Mentora.git
cd Mentora
```

###  2️⃣ Backend Setup
``` bash
cd backend

pip install -r requirements.txt

python app.py
Backend runs on http://localhost:5000
```

3️⃣ Frontend Setup
```bash
cd ../mentora-frontend

npm install

npm start

Frontend runs on http://localhost:3000```

