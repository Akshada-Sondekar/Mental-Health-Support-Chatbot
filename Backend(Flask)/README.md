# 🧠 Mentora Backend - AI Mental Health Support System

The **Mentora Backend** is the core of the AI-powered mental health chatbot system. It handles user authentication, AI-powered chatbot responses, sentiment analysis, and real-time emotion detection. Built with Flask, it securely stores data using SQLite databases and integrates advanced AI models and APIs.

---

## 🔧 Technologies Used

- **Flask** - Lightweight Python web framework
- **SQLite** - Local database for user and chat data
- **JWT** - Authentication using JSON Web Tokens
- **Gemini 1.5 Pro API** - Chatbot response generation and summaries
- **BERT** - Sentiment analysis (`nlptown/bert-base-multilingual-uncased-sentiment`)
- **CNN** - Real-time facial emotion detection via webcam

---

## 📁 Project Structure

```plaintext```

mentora-backend/
│
├── app.py                     # Main Flask app with API routes
├── auth.py                   # Handles user registration and JWT login
├── chatbot.py                # Chat logic using Gemini API
├── database.py               # Interacts with mentora.db
├── sentimental_analysis.py   # Weekly sentiment analysis using BERT
├── real_time_emotion.py      # CNN-based webcam emotion detection
├── mentora.db                # Main SQLite database for user and chat data
├── emotion_data.db           # Separate DB for real-time emotion data
├── requirements.txt          # Backend Python dependencies
└── README.md                 # This file

## 🔐 Key Components

### 1️⃣ Authentication - `auth.py`
- JWT-based secure authentication system.
- Handles user **registration**, **login**, and **token verification**.

### 2️⃣ Chatbot Logic - `chatbot.py`
- Sends user messages to **Gemini 1.5 Pro** for AI responses.
- Stores chat history in the `chat_history` table.
- Records real-time **emotional context** during conversations.

### 3️⃣ Database Management - `database.py`
- Interfaces with `mentora.db` to store:
  - ✅ User accounts  
  - 💬 Chat logs  
  - 📊 Sentiment scores  
  - 📁 Weekly reports  

### 4️⃣ Sentiment Analysis - `sentimental_analysis.py`
- Analyzes **7-day user messages** using **BERT** (`nlptown/bert-base-multilingual-uncased-sentiment`).
- Calculates sentiment trends.
- Uses **Gemini API** to summarize and enhance reports.

### 5️⃣ Real-Time Emotion Detection - `real_time_emotion.py`
- Runs in the background using webcam feed.
- Detects **live facial emotions** using a CNN model.
- Stores session emotion scores in `emotion_data.db`.

### 6️⃣ Flask Routes - `app.py`

| Endpoint             | Description                          |
|----------------------|--------------------------------------|
| `/login`             | User login via JWT                   |
| `/chat`              | Send/receive messages with chatbot   |
| `/analyze-sentiment` | Weekly mood report generation        |
| `/start-emotion`     | Start webcam-based emotion tracking  |
| `/stop-emotion`      | Stop real-time emotion tracking      |

---

## ⚙️ How to Run the Backend

### 1. 📦 Install Dependencies

Make sure you're inside the `mentora-backend/` directory:

```bash
pip install -r requirements.txt
```

### 2.  🚀 Run the Server

```bash

python app.py
```
The backend will start at: http://localhost:5000


### WORKFLOW OVERVIEW

User logs in →
    Auth verified by JWT →
        Chatbot responds via Gemini →
            Emotion tracking runs in background →
                Chat + emotion data stored →
                    Sentiment reports generated weekly
