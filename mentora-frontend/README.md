# 🌐 Mentora Frontend - Mental Health Chatbot UI

The **Mentora Frontend** is a responsive and intuitive user interface built with **React.js**. It serves as the entry point for users to interact with the Mentora AI Mental Health Chatbot, enabling secure login, real-time chatting, sentiment tracking, mood logging, and visualized reports.

---

## 🖥️ Technologies Used

- **React.js** – Frontend framework
- **CSS3** – Custom styling for components
- **React Router** – Client-side routing
- **Axios** – API requests to backend
- **Framer Motion** – Animations and transitions
- **Chart.js / Recharts** – Sentiment visualizations
- **Supertokens (optional)** – Authentication handling

---

## 📁 Project Structure Overview

```plaintext
mentora-frontend/
│
├── public/
├── src/
│   ├── assets/                # Images, icons, and static files
│   ├── components/            # Reusable UI components (chatbot, login, signup, etc.)
│   ├── pages/                 # Full page views (Home, Chat, Mood Log, Sentiment Report)
│   ├── styles/                # CSS files for different components/pages
│   ├── utils/                 # Helper functions (API calls, token handling)
│   ├── App.js                 # Main App component with routing
│   ├── index.js               # ReactDOM render entry
│   └── ...
├── package.json
├── README.md                 # This file


```

---

### 🧩 `components/` – Reusable React Components

This folder contains individual components used throughout the app:

- **`chatbot.js`** – Core chatbot interface
- **`signup.js`** – Signup form with validations
- **`login.js`** – User login component
- **`profile.js`** – View and edit user profile
- **`sentimentReport.js`** – Displays mood trend charts and weekly reports
- **`navbar.js`** – Top navigation menu
- **`dashboard.js`** – Quick overview and shortcuts

---

### 📄 `pages/` – Full Page Views

This folder holds top-level views rendered by React Router:

- **`Home.js`** – Landing page with motion elements and features
- **`Chat.js`** – Chatbot interaction page
- **`MoodLog.js`** – Daily mood tracking form
- **`SentimentPage.js`** – Sentiment analytics and report summary
- **`ContactUs.js`** – FAQs, help, and contact form
- **`About.js`** – Project vision and team

---

### 🎨 `styles/` – CSS Styling Files

Each component or page has its corresponding CSS file for styling:

- `home.css`  
- `navbar.css`  
- `chat.css`  
- `signup.css`  
- `login.css`  
- `profile.css`  
- `settings.css`  
- `sentiment_report.css`  
- `moodlog.css`  
- `calendar.css`

---

### 🖼️ `assets/` – Images and Media

This folder holds logos, avatars, backgrounds, and other static files used in the UI.

---

### ⚙️ `utils/` – Helper Functions

Reusable logic such as:

- `api.js` – Centralized Axios API calls
- `auth.js` – JWT token management
- `formatDate.js` – Date formatting helpers

## 🔑 Key Features

✅ User Login/Signup  
✅ AI Chatbot Interface using Gemini API  
✅ Real-Time Emotion Feedback Integration  
✅ Mood Logging with Calendar View  
✅ Weekly Sentiment Reports with BERT + Charts  
✅ Profile and Settings Page  
✅ Responsive and Accessible Design  
✅ Dark/Light Mode Toggle  



## 🧪 Running the Frontend Locally

### 1. 📦 Install Node Modules
Make sure you're inside the `mentora-frontend/` directory:

```bash
npm install
```

2. 🌐 Start the Development Server
```bash
npm start

The app will open at http://localhost:3000.

📌 Make sure the backend (app.py) is also running on http://localhost:5000 or update the API base URL in api.js.

```

WORKFLOW OVERVIEW

User logs in →
    Chatbot opens →
        User interacts with AI →
            Mood/emotion tracked →
                Reports generated →
                    Profile data accessible
